'use client'

import { getVideoThumbnail } from '@/lib/videoUtil';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react';

export const PostGallery = ({ posts }) => {

    const [loading, setLoading] = useState(true)
    const [thumbnails, setThumbnails] = useState({});

    useEffect(() => {
        const fetchThumbnails = async () => {
            const newThumbnails = {};
            for (const post of posts) {
                if (post.media && post.mediaType == 'video') {
                    try {
                        const thumbnail = await getVideoThumbnail(post.media);
                        newThumbnails[post._id] = thumbnail;
                    } catch (error) {
                        console.error('Error fetching video thumbnail:', error);
                        newThumbnails[post._id] = '/default-thumbnail.jpg'; // Fallback image if error
                    }
                } else {
                    newThumbnails[post._id] = post.media; // Handle images directly
                }
            }
            setThumbnails(newThumbnails);
            setLoading(false)
        };

        fetchThumbnails();
    }, [posts]);

    if (loading) {
        return (
            <div className=' flex justify-center'>
                <div className='insideLoader'></div>
            </div>
        );
    }

    return (
        <div className=' grid  grid-cols-3 '>
            {posts.map(post =>
                <div className=' m-1 bg-black h-fit'>
                    <Link href={`/posts/${post._id}`} className=' hover:opacity-55 rounded-md transition-all'>
                        <div className='relative w-[100%] h-0 pb-[80%]'>
                            <Image src={thumbnails[post._id]} fill className=' object-cover rounded-md' />
                        </div>
                    </Link>
                </div>
            )}
        </div>
    )
}
