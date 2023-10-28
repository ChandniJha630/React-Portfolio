import React from 'react'
import ContactBG from'../assets/Project.mp4';

function Contact() {
  return (
    <div>
         <video src={ContactBG} autoPlay loop muted className='bg-video' />
         
         <div className='text-xl text-white w-1/3 mt-32 absolute'>
         <form>
      <div className='opacity-75 py-5 px-5'>
        <label htmlFor="name" >Name:</label>
        <input type="text" id="name" className=' bg-shadow rounded-lg mx-5 w-3/4 opacity-25 bg-white'required />
      </div>
      <div className='opacity-75 py-5 px-5'>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required className=' bg-shadow rounded-lg w-3/4  mx-5 opacity-25 bg-white' />
      </div>
      <div className='opacity-75 py-5 px-5'>
        <label htmlFor="message">Pen:</label>
        <textarea id="message" required className=' bg-shadow rounded-lg mr-5 ml-10 w-3/4 opacity-25 bg-white' />
      </div>
      <button type="submit" className=' bg-shadow rounded-lg py-2 px-2 my-5 mx-5 text-lg border-double border border-white hover:bg-white hover:text-blue-800'>Submit</button>
    </form>

            </div>

    </div>
  )
}

export default Contact
