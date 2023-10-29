import React, { useState, useRef } from 'react';
import ContactBG from'../assets/contactBG.mp4';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TerminalIcon from '@mui/icons-material/Terminal';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import BookIcon from '@mui/icons-material/Book';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef(); 
  const [submit, setSubmitStatus]=useState('Submit')
  const sendEmail=(e)=>{
    setSubmitStatus('Submitted')
    e.preventDefault();
    emailjs.sendForm('service_r2u66xk','template_uiec3cc',form.current, 'yGYJvPL77Lln5JEG9')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });


  }
  return (
    <>
         <video src={ContactBG} autoPlay loop muted className='bg-video' />
         <div className='flex w-full mt-32 lg:block md:mt-16'>
         <div className='text-xl text-white w-2/3  left-10 absolute button-red md:left-0 md:w-2/3 md:mx-10 md:text-sm'>
         <form ref={form} onSubmit={sendEmail}>
      <div className='opacity-75 py-5 px-5 md:px-2 md:py-2 '>
        <label htmlFor="name" className='text-lg font-sans' >Name:</label>
        <input type="text" name="name" id="name" className=' rounded-lg mx-5 w-3/4 opacity-50 bg-black'required />
      </div>
      <div className='opacity-75 py-5 px-5 md:px-2 md:py-2'>
        <label htmlFor="email" className='text-lg font-sans'>Email:</label>
        <input type="email" name="email" id="email" required className=' rounded-lg w-3/4  mx-5 opacity-50 bg-black' />
      </div>
      <div className='opacity-75 py-5 px-5 md:px-2 md:py-2'>
        <label htmlFor="message" className='text-lg font-sans'>Pen:</label>
        <textarea id="message" name="message" required className=' rounded-lg mr-5 ml-10 w-3/4 opacity-50 bg-black' />
      </div>
      <button type="submit" value="Send" className='font-sans rounded-lg py-2 px-2 my-5 mx-5 text-lg border-double border border-black hover:bg-white hover:text-red-800'>{submit}</button>
    </form>
</div>
<div className='block w-1/3 absolute right-10 md:left-0 md:w-2/3 md:mx-10'>
  <div className="flex justify-around py-5">
  <Link to='https://www.linkedin.com/in/chandni-jha-831987211/'><button className="button-red"><LinkedInIcon/></button></Link>
  <Link to='https://github.com/ChandniJha630'><button className="button-red"><GitHubIcon/></button></Link>
  <Link to='https://leetcode.com/ChandniJha/'><button className="button-red"><TerminalIcon/></button></Link>
  </div>
  <div className="flex justify-around py-5">
  <Link to='https://medium.com/@chandnijha630'><button className="button-red"><NewspaperIcon/></button></Link>
  <Link to='https://www.youtube.com/@QuantaBytes'><button className="button-red"><YouTubeIcon/></button></Link>
  <Link to='https://www.youtube.com/@RhythmofThoughts'><button className="button-red"><SubscriptionsIcon/></button></Link>
  </div>
  <div className="flex justify-around py-5">
  <Link to='https://www.amazon.in/s?k=chandni+jha+poetry&ref=nb_sb_noss'><button className="button-red"><BookIcon/></button></Link>
  <Link to='https://www.instagram.com/chandnijha630/'><button className="button-red"><InstagramIcon/></button></Link>
  <Link to='"https://twitter.com/i/flow/login?redirect_after_login=%2FChandni95600362'><button className="button-red"><TwitterIcon/></button></Link>
  </div>
</div>

    </div>
    </>
  )
}

export default Contact
