import React from 'react';
import aboutbackground from '../assets/aboutbackground.mp4'
import { Link } from 'react-router-dom';
import DP from '../assets/dp.jpg'
const About = () => {
  return (
      <>
         <video src={aboutbackground} autoPlay loop muted className='bg-video'/>
        <div className="w-full flex justify-around lg:block lg:mt-16">

            <div className='w-1/2 justify-center py-10 px-5 block lg:w-full lg:absolute lg:top-0 lg:mt-24' >
            <p className='text-white text-md  text-left md:text-sm'>
              Chandni Jha is a native Indian who introduces herself as just an Amateur Dreamer. <br /><br />She has honed a diveresed set of skills in Technology field from Machine 
              Learning to web developement with getting qualification as  Software engineer. She has worked as the face of many companies
              (Student Ambassador) at Unstop, Hacker Earth and Microsoft Learn. This shows well her effective communication and leadership
              qualities. She has been team leader of various projects and female representative during her graduation period. The beautiful website 
              you are surfing right now even her brain child, show casing her UI-UX skills. <br /><br />
              Just Like her Technical Intrest she own a wide range of intrest in personal life as well. She is expert of poetic expression with intrest in 
              sketching, photography, cooking, handicrafts, designing, editing, creativity indeed. She has been compiler of 12 books and you must not miss out her solo poetry book 
              <Link to="https://www.amazon.in/Rekhanjali-Chandni-Jha/dp/B0B8264DNW/ref=sr_1_14?keywords=chandni+jha+poetry&qid=1688485326&sr=8-14">Rekhanjali
               </Link>  You can view her creative contents on YouTube channels Quanta Bytes (Infotainment based) and Rhythm Of Thoughts (Poetry based). She has achieved world record for a 
               book based on "Saino Poetry" - 100 Sainos. 
    
            </p>
            <Link to='https://www.overleaf.com/project/65c490cd5ae83f8a929b1547'>
              <button className="button-67 mx-5 my-10 ">
                View Resume
              </button></Link>
              </div>
              <div className='w-1/3 h-1/4 mt-5 justify-center bg-slate-300 rotate-12 lg:invisible'>
              <img src={DP} alt="My Image" className='py-10  px-2 hover:animate-pulse lg:py-2 lg:px-2'/>
              </div>
              </div>
              <div className="flex bottom-10">
                
              </div>
          </> 
  );
};

export default About;
