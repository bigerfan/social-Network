'use client'

import { signUpValidate } from '@/lib/formActions'
import Link from 'next/link'
import React from 'react'
import { useFormState } from 'react-dom'

const SignUp = () => {

    const [state, formAction] = useFormState(signUpValidate, {})

    return (
        <div className='formContainer'>
            <form action={formAction} className='validateForm'>
                <div className='inputContainer'>
                    <label htmlFor="email" className=' mx-1 my-2'>Email:</label>
                    <input type="email" name='email' placeholder='Enter your Email...' className='basicForm' />
                </div>
                <div className='inputContainer'>
                    <label htmlFor="username" className=' mx-1 my-2'>Username:</label>
                    <input type="text" name='username' placeholder='Enter Your username...' className='basicForm' />
                </div>
                <div className='inputContainer'>
                    <label htmlFor="password" className=' mx-1 my-2'>Password:</label>
                    <input type="password" name='password' placeholder='Enter strong pass...' className='basicForm' />
                </div>
                <div className='inputContainer'>
                    <button className='blueBtn mt-2 border-t-0 py-2'>SignUp</button>
                </div>
                <div className='inputContainer'>
                    <Link href={'/login'} className='text-blue-500'>Have An Account ?</Link>
                </div>
                {state?.errors && <ul className=' m-auto'>{state.errors.map(error => <li key={error} className=' text-red-600 text-pretty block'>{error}</li>)}</ul>}
            </form>
        </div>
    )
}

export default SignUp