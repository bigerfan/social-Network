'use server'

import { redirect } from "next/navigation"
import { createAuthSession, validateAuthSession } from "./lucia"
import { Post, User } from "./models"
import { connectToDB } from "./utils"
import bcrypt from 'bcrypt'
import { DeleteImage, uploadImage } from "./cloudinary"
import { revalidatePath } from "next/cache"

export const signUpValidate = async (prevState, formdata) => {

    let errors = []

    const username = formdata.get('username')
    const email = formdata.get('email')
    const password = formdata.get('password')

    if (!username || username.length < 5) {
        errors.push('username must bigger than 5 char...')
    }
    if (!email || !email.includes('@') || email.length < 5) {
        errors.push('email is undefined')
    }
    if (!password || password.length < 6) {
        errors.push('password must bigger than 6 char...')
    }

    if (errors.length > 0) {
        return { errors }
    }

    await connectToDB()

    const isExistsByUsername = await searchForUser({ username: username })
    const isExistsByEmail = await searchForUser({ email: email })

    if (isExistsByUsername) {
        errors.push('this username already Exists please enter somthing else')
        return { errors }
    }

    if (isExistsByEmail) {
        errors.push('User by this email already Exists')
        return { errors }
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = new User({ username, email, password: hashedPassword })
    await newUser.save()
    console.log(newUser);
    await createAuthSession(newUser._id)
    redirect('/feed')

}

export async function LoginValidate(prevState, formdata) {

    const errors = {}
    const username = formdata.get('username')
    const password = formdata.get('password')

    if (!username || username.length < 5) {
        errors.username = 'please enter valid username'
    }

    if (!password || password.length < 6) {
        errors.password = 'please enter valid password'
    }

    if (Object.keys(errors).length > 0) {
        return { errors }
    }

    await connectToDB()

    const user = await User.findOne({ username })

    console.log(user);


    if (!user) {
        errors.username = 'user not Found'
        return { errors }
    }

    const passIsCurrect = await bcrypt.compare(password, user.password)
    if (!passIsCurrect) {
        errors.password = 'password not currect'
        return { errors }
    }

    const valid = await createAuthSession(user._id)
    if (!valid) {
        return { error: 'somthing went wrong please try again later' }
    }
    else {
        redirect('/feed')
    }
}

export async function CreatePost(prevState, formdata) {
    const errors = []
    const media = formdata.get('media')
    const title = formdata.get('title')

    const userInfo = await validateAuthSession()


    if (!userInfo || !userInfo?.username) {
        errors.push('somthing wrong with your account')
    }

    if (!title || title.length < 3) {
        errors.push('the title must bigger than 3 char')
    }

    if (!media || !media.type.startsWith('image/') && !media.type.startsWith('video/')) {
        errors.push('media is required(video or picture)')
    }

    if (errors.length > 0) {
        return { errors }
    }

    console.log(media);
    

    try {
        let mediaUrl = ''
        let mediaType = ''

        if (media.type.startsWith('image/')) {
            mediaUrl = await uploadImage(media)
            mediaType = 'image'
        }
        else if(media.type.startsWith('video/')){
            mediaUrl = await uploadVideo(media)
            mediaType = 'video'
        }
        
        const userId = userInfo.id

        await connectToDB()

        const newPost = new Post({
            title: title,
            media: mediaUrl,
            mediaType,
            creator: userId
        })

        const post = await newPost.save()

        await User.updateOne({ _id: userId }, { $push: { activity: post._id } })


    } catch (error) {
        throw new Error(error)
        errors.push('somthing went wrong please try again later')
        return { errors }
    }

    redirect('/feed')
}

export async function EditAccount(prevState, formdata) {

    let errors = [];

    const prevInfo = await validateAuthSession()

    const username = formdata.get('username')
    const bio = formdata.get('bio')

    if (!username || username.length < 5) {
        errors.push('username must bigger than 5 char...')
    }

    await connectToDB()
    const isExistsByUsername = await searchForUser({ username })

    if (isExistsByUsername && isExistsByUsername.username !== prevInfo.username) {
        errors.push('this username already exists')
    }

    if (errors.length > 0) {
        return { errors }
    }

    try {

        await User.updateOne({ username: prevInfo.username }, { username: username, bio: bio })

        revalidatePath('/user')
    } catch (error) {
        throw new Error(error.message)
    }
}

export async function ChangeAvatar(formdata) {

    const previnfo = await validateAuthSession()

    const avatar = formdata.get('avatar')

    try {
        await connectToDB()

        const imageUrl = await uploadImage(avatar)

        if(previnfo.avatar){
            const res = await DeleteImage(previnfo.avatar)
            console.log(res);
        }        

        await User.updateOne({ username: previnfo.username }, { avatar: imageUrl })

    } catch (error) {
        throw new Error(error.message)
    }
}


async function searchForUser(userInfo) {
    try {
        const user = await User.findOne(userInfo)
        return user
    } catch (error) {
        console.log(error);
    }
}