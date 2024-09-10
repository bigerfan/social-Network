'use client'

import { CreatePost } from '@/lib/formActions'
import { useFormState } from 'react-dom'

export const CreateForm = () => {
    const [state, formAction] = useFormState(CreatePost, {})

    return (
        <form action={formAction} className='validateForm w-[100%]'>
            <div className='inputContainer w-9/12'>
                <label htmlFor="title" className='text-[var(--text)]'>Title:</label>
                <textarea name="title" className='basicForm' placeholder="title" />
            </div>
            <div className='inputContainer w-9/12'>
                <label htmlFor="image" className='text-[var(--text)]'>Add Your img</label>
                <input type="file" name="image" className='basicForm text-[var(--text)]' accept="image/*" />
            </div>
            <div className='inputContainer w-9/12'>
                <button className="blueBtn">Create</button>
            </div>
            <div className='inputContainer w-9/12'>
                {state?.errors && state.errors.map(error=><p className='text-red-600'>{error}</p>)}
            </div>

        </form>
    )
}