import React from 'react';
import aboutbackground from '../assets/aboutbackground.mp4'
import { Link } from 'react-router-dom';
import Image from '../assets/Image.jpg'
const About = () => {
  return (
   
      <div className=''>
         <video src={aboutbackground} autoPlay loop muted className='bg-video'/>
        <div className="w-full flex justify-around">

            <div className='w-1/3 justify-center py-10 px-5 block'>
            <p className='text-white text-lg  text-left'>
              Welcome to my portfolio! I'm Chandni, a passionate data scientist with a love for creating forecasting and interacting AI tools, with a background in software engineering and Front End Developement. I recently completed{' '}
              <b>
                  AWS forage virtual experience programme
              </b>
              . I have built over many projects in the past few months related to data science and front-end development. I have a strong foundation of concepts of machine learning, deep learning, operating system, data structure, and algorithms.
              <br />
              <br />
              My vision is to bring life to innovative and creative ideas. I have diverse interests; I write poems{' '}
              <Link href="https://www.amazon.in/Rekhanjali-Chandni-Jha/dp/B0B8264DNW/ref=sr_1_14?keywords=chandni+jha+poetry&qid=1688485326&sr=8-14">Rekhanjali </Link> is my solo book with 30 poems and mandala arts based on 30 different themes. You can view my creative contents on my YouTube channels
              namely Quanta Bytes (Infotainment based) and Rhythm Of Thoughts (Poetry based). Cooking, handcraft, and sketching are my other hobbies.
    
            </p>
            <button className="button-67 mx-5 my-16">
                View Resume
              </button>
              </div>
              <div className='w-1/3 h-1/4 mt-5 justify-center  bg-slate-300 rotate-12'>
              <img src={Image} alt="My Image" className='py-10  px-2'/>
              </div>
              </div>
          </div> 
  );
};

export default About;
