'use client'

import React from 'react'
import { GoBookmark, GoBookmarkFill } from "react-icons/go";
import { IoMdHeart, IoIosHeartEmpty } from "react-icons/io";
import { CiShare2 } from 'react-icons/ci';
import { useState } from 'react';


export const Reactions = () => {
    const [isLiked, setLike] = useState(false)
    const [isMark, setMark] = useState(false)

    return (
        <div className='flex justify-start w-[90%]'>
            <div className='flex justify-between gap-2 text-3xl md:text-4xl'>
                <button onClick={() => setLike(like => !like)} className='iconButton'>
                    {isLiked ? <IoMdHeart className=' like' /> : <IoIosHeartEmpty className='like text-[white!important]' />}
                </button>
                <button className='iconButton'>
                    <CiShare2 className='text-white'/>
                </button>
                <button className='iconButton' onClick={() => setMark(mark => !mark)}>
                    {isMark ? <GoBookmarkFill className='bookMark text-[white!important]' /> : <GoBookmark className='bookMark text-[white!important]' />}
                </button>
            </div>
        </div>
    )
}
