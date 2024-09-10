'use client'

import { LoginValidate } from '@/lib/formActions'
import Link from 'next/link'
import React from 'react'
import { useFormState } from 'react-dom'

const LoginPage = () => {

  const [state, formAction] = useFormState(LoginValidate, {})


  return (
    <div className='formContainer'>
      <form action={formAction} className='validateForm'>
          <div className='inputContainer'>
            <label htmlFor="username" className=' mx-1 my-2'>Username:</label>
            <input type="text" name='username' placeholder='Enter Your username...' className='basicForm' />
            {state?.errors?.username && <p className='text-red-600'>{state.errors.username}</p>}
          </div>
          <div className='inputContainer'>
            <label htmlFor="password" className=' mx-1 my-2'>Password:</label>
            <input type="password" name='password' placeholder='Enter Yout Pass...' className='basicForm' />
            {state?.errors?.password && <p className=' text-red-600'>{state.errors.password}</p>}
          </div>
          <div className='inputContainer border-t-2 mt-2 py-2'>
            <button className='blueBtn'>SignUp</button>
          </div>
          <div className='inputContainer'>
            <Link className='text-blue-500' href={'/signup'}>
              Dont Have an account?
            </Link>
          </div>
          {state?.error && <p className=' text-red-600'>{state.error}</p>}
      </form>
    </div>
  )
}

export default LoginPage