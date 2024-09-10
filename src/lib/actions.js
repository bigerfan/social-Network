'use server'

import { connectToDB } from "./utils";
import { Post, User } from "./models";
import { lucia, validateAuthSession } from "./lucia";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function addUser({ username, email, password }) {
    try {
        connectToDB()
        const newUser = new User({
            username,
            email,
            password
        })
        await newUser.save()
        return ('success')
    } catch (error) {
        throw new Error(error)
    }
}



export async function getUsersWithPosts(posts) {
    const users = Promise.all(
        posts.map(singlepost=> User.findById(singlepost.creator))
    ) 
    return users

}

export async function getUserPosts(activity) {
    const posts = await Promise.all(
        activity.map(async (singleId) =>
            await Post.findById(singleId)
        )
    )
    return posts
}

export async function logout() {
	const session = await validateAuthSession();
	if (!session) {
		return {
			error: "Unauthorized"
		};
	}

	await lucia.invalidateSession(session.id);

	const sessionCookie = lucia.createBlankSessionCookie();
	cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    console.log('success');
	return redirect("/");
}