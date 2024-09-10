import { Lucia } from "lucia";
import { MongodbAdapter } from "@lucia-auth/adapter-mongodb";
import { Session, User } from "./models";
import { cookies } from "next/headers";
import { connectToDB } from "./utils";
import mongoose from "mongoose";


connectToDB()

const adapter = new MongodbAdapter(mongoose.connection.collection('sessions'), mongoose.connection.collection('users'))


export const lucia = new Lucia(adapter, {
    sessionCookie: {
        attributes: {
            secure: process.env.NODE_ENV === "production"
        }
    },
    getUserAttributes: (attributes) => {
        return {
            id: attributes._id,
            username: attributes.username,
            email: attributes.email,
            password: attributes.password,
            activity: attributes.activity,
            avatar: attributes.avatar,
            bio: attributes.bio
        };
    }
});

export async function createAuthSession(sessionId) {
    const session = await lucia.createSession(sessionId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
}

export async function deleteAuthSession(sessionId) {
    const test = lucia.getUserSessions(sessionId)
    console.log(test);
    
}


export async function validateAuthSession() {
    const sessionCookie = cookies().get(lucia.sessionCookieName)



    if (!sessionCookie)
        return false

    const sessionId = sessionCookie.value

    if (!sessionId)
        return false

    const resault = await lucia.validateSession(sessionId)


    try {
        if (resault.session) {
            const sessionCookie = lucia.createSessionCookie(resault.session.id)
            cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
        }
        if (!resault.session) {
            const sessionCookie = lucia.createBlankSessionCookie()
            cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
        }
    } catch { }

    return resault.user

}