import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left side  */}
        <div className="flex-1">
        <Link to="/" className='text-4xl font-bold dark:text-white'>
          <span className='px-2 py-1 bg-gradient-to-r from-cyan-600 via-purple-500 to-pink-400 rounded-lg text-white'>Abhishek's</span>
          Blog
        </Link>
        <p className='mt-5 text-sm'>Welcome, This is a Project which have massive Featuers to explore the features you can login using Google.</p>
        </div>

        {/* right side */}
        <div className="flex-1">
          <form className='flex flex-col gap-4'>
            <div className='mt-2'>
              <Label value='Your Username'/>
              <TextInput type='text' placeholder='username' id='username'/>
            </div>
            <div className='mt-2'>
              <Label value='Your Email'/>
              <TextInput type='email' placeholder='email' id='email'/>
            </div>
            <div className='mt-2'>
              <Label value='Your Password'/>
              <TextInput type='password' placeholder='password' id='password'/>
            </div>
            <Button gradientDuoTone='purpleToBlue' type='submit'>Sign Up</Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an Account?</span>
            <Link to='/sign-in' className='text-blue-500'>
            Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
};
