import { CreateForm } from '@/components/forms/createPostForm';
import { validateAuthSession } from '@/lib/lucia'
import { redirect } from 'next/navigation'

const Create = async () => {

    const valid = await validateAuthSession()
    if (!valid) {
        redirect('/signup')
    }

    console.log(valid);




    return (
        <div className='bg-slate-200 container flex justify-center max-w-[100%] overflow-hidden'>
            <div className='md:w-[85%] py-2 md:px-4 px-2 min-h-[100vh] md:min-h-[100vh] flex items-center justify-center'>
                <div className='flex flex-col gap-4 md:w-[80%] w-[95%]'>
                    <h1 className='text-pretty font-serif text-slate-700 text-2xl'>Create New Post</h1>
                        <CreateForm />
                </div>
            </div>
        </div>
    )

}

export default Create