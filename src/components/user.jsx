'use server'

import React from 'react'
import { PostGallery } from './postGallery'
import Image from 'next/image'
import Link from 'next/link'
import { logout } from '@/lib/actions'

export const UserPageC = ({ user, posts, role }) => {

    return (
        <>
            <div className="  md:w-[80%] m-auto w-[98%] overflow-hidden break-words">
                <div className="flex flex-col gap-5 justify-center align-middle  border-b-2 border-b-slate-300 py-8">
                    <div className="flex flex-col md:flex-row justify-center gap-12 items-center">
                        <div className='flex-1 flex justify-end'>
                            <div className=" relative md:h-60 md:w-60 w-52 h-52 ">
                                <Image src={user.avatar || '/blankUser.jpg'} fill className="object-cover rounded-full" />
                            </div>
                        </div>
                        <div className=" flex flex-col gap-5 flex-1 overflow-hidden break-words px-4">
                            <div>
                                <h1 className="text-pretty font-sans text-2xl">{user.username}</h1>
                            </div>
                            <div className='break-words overflow-hidden'>
                                <p className='text-pretty text-[var(--textsoft)] break-words'>{user.bio}</p>
                            </div>
                            {role == 'client' ?
                                <div className="flex flex-row gap-5 m-auto md:m-0">
                                    <Link href={'/user/editAccount'} className='py-0 px-0'>
                                        <button className="blueBtn">Edit Account</button>
                                    </Link>
                                    <form action={logout} className='m-0 p-0'>
                                        <button className='borderBtn' value={'LogOut'} >LogOut</button>
                                    </form>
                                </div>
                                :
                                <div className="flex flex-row gap-5 m-auto md:m-0">
                                    <button className="blueBtn">Follow</button>
                                    <button className="borderBtn">Message</button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl text-pretty m-5">Activity :</h1>
                    {posts[0] ?
                        <div>
                            <PostGallery posts={posts} />
                        </div> :
                        <h1 className=" text-pretty text-center text-[var(--textsoft)]">there is no Activity yet :(</h1>
                    }
                </div>
            </div>
        </>)
}
