'use server'

import Link from 'next/link'
import React from 'react'
import { NavLink } from './NavLink'
import { validateAuthSession } from '@/lib/lucia'
import { navbarLinks } from '@/assets/navbarLinks'
import { IoPersonCircle } from 'react-icons/io5'
import { IoMdLogIn } from "react-icons/io";


export const Navbar = async () => {
  const validate = await validateAuthSession()


  return (
      <nav className=' px-4 py-4 bg-slate-500 text-white sticky bottom-0 z-50 md:hidden'>
        <div className=' flex flex-row justify-between items-center'>
          <Link href={'/'} className=' hidden md:inline flex-1'>
            <h1 className=' text-4xl'>Social Network</h1>
          </Link>
          <div className=' flex flex-row justify-evenly gap-5 flex-1'>
            <NavLink navbarLinks={navbarLinks} />
            {validate ?
              <NavLink navbarLinks={[{
                pathName: '/user',
                navName: 'You',
                icon: <IoPersonCircle />
              }]} /> :
              <NavLink
                navbarLinks={[
                  {
                    pathName: '/login',
                    navName: 'Login',
                    icon: <IoMdLogIn />
                  }
                ]} />}
          </div>
        </div>
      </nav>
  )
}
