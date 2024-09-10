'use client'

import Image from "next/image"
import Link from "next/link"
import { PostCreator } from "./PostCreator"
import { SinglePost } from "./SinglePost"

export const FeedPosts = ({ posts, users, textForTop,loading,next }) => {

    return (
        <div className=" flex flex-col items-center m-auto gap-5 md:w-[60%] py-8">
            <h1 className=" text-pretty text-3xl px-5 w-[100%]">{textForTop}</h1>
            {users && posts?.map((singlePost, index) => {

                const user = users[index]

                return (
                    <div className="flex flex-col gap-3 border-b-2 px-2 py-2 pb-6 w-[80%] rounded-sm border-[var(--bgsoft)]">
                        <PostCreator user={user}/>
                        <SinglePost post={singlePost}/>
                    </div>
                )
            }
            )}
            {loading && next && <div className='insideLoader'></div>}
        </div>
    )
}
