import { AvatarForm } from '@/components/forms/avatarForm'
import { EditForm } from '@/components/forms/editForm'
import { validateAuthSession } from '@/lib/lucia'
import { redirect } from 'next/navigation'

const EditAccount = async () => {

    const user = await validateAuthSession()

    if (!user) {
        redirect('signup')
    }

    console.log(user);
    

    return (
        <div className='container bg-slate-200 m-auto md:p-10 p-2 min-h-[100vh]'>
            <AvatarForm url={user.avatar}/>
            <EditForm username={user.username} bio={user.bio}/>
        </div>
    )
}

export default EditAccount