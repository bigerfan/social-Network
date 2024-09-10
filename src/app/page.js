import { validateAuthSession } from "@/lib/lucia";
import Link from "next/link";
import { redirect } from "next/navigation";
import { AiFillHome, AiOutlineRollback } from 'react-icons/ai'
import { FaUserFriends, FaPenFancy, FaUsers } from 'react-icons/fa';
import { BiMessageDetail } from 'react-icons/bi';
import { MdExplore } from 'react-icons/md';
import { IoMdPeople } from 'react-icons/io';

export default async function Home() {

  const validate = await validateAuthSession()

  if (validate)
    redirect('/feed')


  return (
    <div className="flex justify-center md:p-8 py-4 md:px-2 starsbg max-w-[100%] overflow-hidden">
      <div className="w-[86%] flex flex-col gap-4">
        <div className="welcomCard md:mr-[40%] nucturnalPlum " data-aos="fade-up-right">
          <h1 className="text-pretty font-bold text-2xl my-3 flex items-center gradient-title-nucturnalPlum "><AiFillHome className='mr-3 text-[var(--bgsoft)] text-pretty font-bold text-2xl ' />WELCOME TO SOCIAL NETWORK!</h1>
          <p className="text-pretty text-[var(--textsoft)] text-lg my-5">
            In Social Network, you can share your images and videos with your friends, and explore their latest moments.
          </p>
        </div>

        <div className="welcomCard mocha md:ml-[40%]" data-aos="fade-up-left">
          <h1 className="text-pretty font-bold text-2xl my-3 flex items-center gradient-title-mocha"><FaUserFriends className=' mr-2 text-[var(--bgsoft)]' />Make New Friends</h1>
          <p className="text-pretty text-[var(--textsoft)] text-lg my-5">
            Discover people from around the world, connect with like-minded individuals, and build lasting friendships.
          </p>
        </div>

        <div className="welcomCard sea md:mr-[40%]" data-aos="fade-up-right">
          <h1 className="text-pretty font-bold text-2xl my-3 flex items-center gradient-title-sea"><FaPenFancy className=' mr-2 text-[var(--bgsoft)]' />Express Yourself</h1>
          <p className="text-pretty text-[var(--textsoft)] text-lg my-5">
            Share your thoughts, experiences, and ideas with the world. Social Network provides the platform for you to shine.
          </p>
        </div>

        <div className="welcomCard forest md:ml-[40%]" data-aos="fade-up-left">
          <h1 className="text-pretty font-bold text-2xl my-3 flex items-center gradient-title-forest"><BiMessageDetail className=' mr-2 text-[var(--bgsoft)]' />Join the Conversation</h1>
          <p className="text-pretty text-[var(--textsoft)] text-lg my-5">
            Stay updated with what's trending. Comment, like, and share posts from your friends and favorite creators.
          </p>
        </div>

        <div className="welcomCard mocha md:mr-[40%]" data-aos="fade-up-right">
          <h1 className="text-pretty font-bold text-2xl my-3 flex items-center gradient-title-mocha"><MdExplore className=' mr-2 text-[var(--bgsoft)]' />Discover New Interests</h1>
          <p className="text-pretty text-[var(--textsoft)] text-lg my-5">
            Explore content. From photography, fashion, and music to travel, fitness, and everything in between.
          </p>
        </div>

        <div className="welcomCard nucturnalPlum md:ml-[40%]" data-aos="fade-up-left">
          <h1 className="text-pretty font-bold text-2xl my-3 flex items-center gradient-title-nucturnalPlum "><IoMdPeople className=' mr-2 text-[var(--bgsoft)]' />Your Community, Your Space</h1>
          <p className="text-pretty text-[var(--textsoft)] text-lg my-5">
            Build a community that reflects your values and interests. Whether it's creating a group or joining one.
          </p>
        </div>

        <div className="welcomCard mocha md:mr-[40%] mr-[20%]" data-aos="fade-up-right">
          <h1 className="text-pretty font-bold text-2xl my-3 flex items-center gradient-title-mocha"><FaUsers className=' mr-2 text-[var(--bgsoft)]' />Start Right Now !</h1>
          <div className="text-pretty text-[var(--textsoft)] text-lg my-5">
            create An Account and start Activity
            <div>
              <Link href={'/signup'}>
                <button className='blueBtn'>SignUp</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="welcomCard sea md:ml-[40%] ml-[10%] " data-aos="fade-up-left">
          <h1 className="text-pretty font-bold text-2xl my-3 flex items-center gradient-title-sea"><AiOutlineRollback className=' mr-2 text-[var(--bgsoft)]' />have you been here before ?</h1>
          <div className="text-pretty text-[var(--textsoft)] text-lg my-5">
            Login to your Account and continue activity
            <div>
              <Link href={'/login'}>
                <button className='blueBtn'>Login</button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );


}
