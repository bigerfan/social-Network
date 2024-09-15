import Image from 'next/image'
import React from 'react'
import { Reactions } from './Reactions'

export const SinglePost = ({post}) => {
    return (
        <>
            <p className="text-pretty font-sans md:text-2xl text-[var(--textsoft)]">{post.title}</p>
            <div className="w-[100%] bg-black">
                <div className=" relative w-[100%] pb-[90%] md:pb-[70%]">
                    <Image className=" object-contain" src={post.media} fill />
                </div>
            </div>
            <Reactions/>
        </>)
}
