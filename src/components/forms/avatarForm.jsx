import { ChangeAvatar } from '@/lib/formActions'
import Image from 'next/image'

export const AvatarForm = ({ url }) => {
    return (
        <div className='flex flex-row align-baseline justify-center border-b border-stone-400 border-dotted'>
            <div className=''>
                <div>
                    <div className=' md:w-52 md:h-52 w-32 h-32 rounded-full relative'>
                        <Image src={url ? url : '/blankUser.jpg'} alt={'avatar'} fill className='rounded-full object-cover' />
                    </div>
                </div>
                <form action={ChangeAvatar}>
                    <div className='flex flex-col inputContainer'>
                        <label htmlFor="avatar">Change Avatar</label>
                        <input type="file" name='avatar' />
                    </div>
                    <div className='inputContainer'>
                        <button className='blueBtn'>Change</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
