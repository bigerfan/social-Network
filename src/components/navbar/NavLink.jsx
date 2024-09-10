import React from 'react'
import Link from 'next/link'

export const NavLink = ({navbarLinks}) => {
  return (
    <>
    {navbarLinks.map(item=><div className=''><Link className='flex flex-row text-center text-2xl' href={item.pathName}>{item.icon}</Link></div>)}
    </>
  )
}
