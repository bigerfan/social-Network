import { validateAuthSession } from "@/lib/lucia"
import { Links } from "./links"
import { navbarLinks } from "@/assets/navbarLinks"
import { IoPersonCircle } from "react-icons/io5"
import { IoMdLogIn } from "react-icons/io"

export const SlideBar = async () => {

  const validate = await validateAuthSession()
  return (
    <div className='flex-1 md:block hidden z-50 overflow-scroll shadow-2xl'>
      <div className='fixed min-h-[100vh] bg-[var(--bgsoft)] w-1/4 flex-1'>
        <div className='px-12 py-8 flex flex-col gap-12'>
          <div>
            <h1 className='text-pretty text-center font-mono text-3xl font-bold'>Social Network</h1>
          </div>
          <div>
          <div className='flex flex-col gap-2'>
            {navbarLinks.map(link => (
              <Links link={link} />
            ))}
            {validate ?
              <Links link={{
                pathName: '/user',
                navName: 'You',
                icon: <IoPersonCircle />
              }} /> :
              <Links
                link={
                  {
                    pathName: '/login',
                    navName: 'Login',
                    icon: <IoMdLogIn />
                  }
                } />}
                </div>
          </div>
        </div>
      </div>
    </div>
  )
}
