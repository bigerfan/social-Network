'use client'

import { EditAccount } from '@/lib/formActions'
import { useFormState } from 'react-dom'

export const EditForm = ({ username, bio }) => {

    const [state, formAction] = useFormState(EditAccount, {})
    return (
        <div className='flex flex-row align-baseline justify-center'>
            <form action={formAction} className='flex flex-col justify-between align-baseline w-[95%]  p-8 gap-8'>
                <div className='inputContainer w-[90%] md:w-[60%]'>
                    <label htmlFor="username">UserName</label>
                    <input type="text" name='username' placeholder='Username' className='basicForm bg-slate-50' defaultValue={username} />
                </div>
                <div className='inputContainer w-[90%] md:w-[60%]'>
                    <label htmlFor="bio">BioGrafy</label>
                    <textarea type="text" name='bio' placeholder='Bio' className='basicForm bg-slate-50' defaultValue={bio} />
                </div>
                <div className='inputContainer w-[90%] md:w-[60%]'>
                    <button className='blueBtn'>Edit</button>
                </div>
                <div className='inputContainer w-[90%] md:w-[60%]'>
                    {state?.errors && state.errors.map(error => <p className=' text-red-600'>{error}</p>)}
                </div>
            </form>
        </div>)
}
