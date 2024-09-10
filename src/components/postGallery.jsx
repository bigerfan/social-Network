import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const PostGallery = ({ posts }) => {
    return (
        <div className=' grid  grid-cols-3 '>
            {posts.map(post =>
                <div className=' m-1 bg-black h-fit rounded-md'>
                    <Link  href={`/posts/${post._id}`} className=' hover:opacity-55 rounded-md transition-all'>
                        <div className='relative w-[100%] h-0 pb-[80%]'>
                            <Image src={post.postImg} fill className=' object-cover rounded-md' />
                        </div>
                    </Link>
                </div>
            )}
        </div>
    )
}
