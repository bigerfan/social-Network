import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const PostCreator = ({user}) => {
    return (
        <Link href={`/user/${user.username}`}>
            <div className=" flex flex-row gap-3 md:gap-5 align-middle content-center items-center">
                <div className="relative h-10 w-10 rounded-full md:h-16 md:w-16">
                    <Image src={user.avatar || '/blankUser.jpg'} fill className=" rounded-full object-cover" />
                </div>
                <h1 className="text-pretty font-sans md:text-2xl text-white">{user.username}</h1>
            </div>
        </Link>)
}
