'use client'

import { navbarLinks } from "@/assets/navbarLinks"
import Link from "next/link"
import { usePathname } from "next/navigation";

export const Links = ({link}) => {

    const pathName = usePathname()
    
    return (
        <Link href={link.pathName} className={`hover:bg-[var(--bg)] rounded-md transition-all ${pathName == link.pathName && 'bg-[var(--bg)]' }`}>
            <div className=' flex flex-row gap-2 px-8 py-6 text-slate-200'>
                <div className=' text-2xl'>
                    {link.navName}
                </div>
                <div className='text-xl'>
                    {link.icon}
                </div>
            </div>
        </Link>
    )
}
