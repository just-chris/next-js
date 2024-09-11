
import React from 'react'
import { handleSubmit } from './components/Submit'



const HomePage =  () => {


  return (
    <div className="flex items-center justify-center h-screen">
      <form action={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" name="title" id="title" placeholder="Title" className='placeholder:text-slate-500' />
        <input type="email" name="email" id="email" placeholder="Email" className='placeholder:text-slate-500' />
        <textarea name="content" id="content" placeholder='Write your message here... '  className='placeholder:text-slate-500' ></textarea>

        <button className='bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition duration-200 ease-in-out'>Send Email</button>
      </form>
    </div>

  )
}

export default HomePage