import React, { useState } from 'react';
import ProjectBG from '../assets/Project.mp4';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

function Project() {
  // const intro1='Leveraging the power of Deep Neural Network Model was trained to give....'
  // const intro2='Well Routed multi component social networking website was built...'
  // const intro3='Portfolio Website along with UI/UX designing was built using React .... '

  const project1 = 'Leveraging the power of Deep Neural Network, Model was trained to give 100% accurate result. We used Force Plate sensor data recorded in Gait Gutenberg and Gait Rec Dataset to train our Model. Model was tested with Machine Learning Models as well but we found 100% accuracy with DNN. This was a DRDO project which was done as group project during graduation at IIIT KALYANI. Technology Used: Machine Learning, Deep Learning, Feature Engineering';
  const project2 = 'Developed a modern blog application with rich text editing, user authentication, and CRUD functionalities for post management. Technologies Used: React, React Router DOM, Redux with @reduxjs/toolkit, @tinymce/tinymce-react, react-hook-form, appwrite'
  const project3 = 'This website itself is my Portfolio Website along with UI/UX designing. It is an responsive and one of most iteractive eyecatching website you ever landed on. With fully function contact and Blog Features. Tech Stack- React, Tailwind, Node, Emailjs, AppWrite';
  const project4 ='Explore social media with this user-friendly platform that has a nice look and lots of features. Easily create and explore posts, and enjoy a strong authentication system and quick data fetching using React Query for a smooth user experience. Tech Stack Used- React.js, Appwrite, React Query (Tanstack Query) , TypeScript, Shadcn, and Tailwind CSS '
  const project5 = 'Paddy Leaf Disease Classification using Deep Learning Technique was part of my research internship at IGDTUW. 98% Accuracy was achieved using Resnet architecture, LeakyReLu Activation function and Adam Optimizer.'
  const [text1, setText1] = useState(project1);
  const [text2, setText2] = useState(project2);
  const [text3, setText3] = useState(project3);
  const [text4, setText4] = useState(project4);
  const [text5, setText5] = useState(project5)
  // const handleMouseEnter1 = () => {
  //   setText1(project1);
  // };

  // const handleMouseLeave1 = () => {
  //   setText1(intro1);
  // };

  // const handleMouseEnter2 = () => {
  //   setText2(project2);
  // };

  // const handleMouseLeave2 = () => {
  //   setText2(intro2);
  // };

  // const handleMouseEnter3 = () => {
  //   setText3(project3);
  // };

  // const handleMouseLeave3 = () => {
  //   setText3(intro3);
  // };

  return (
    <div>
      <video src={ProjectBG} autoPlay loop muted className="bg-video" />
     {/* <div className="flex justify-around absolute bottom-10 md:bottom-0 md:absolute content-end md:block md:px-10 md:w-full">
        <div
          className="w-1/4 py-10 px-10 bg-card md:w-full md:py-2 md:px-2 md:my-10 md:justify-center "
        >
          <h1 className="text-lg font-semibold">Early Detection Of Gait Abnormality</h1>
          <p className="text-md">{text1}</p>
          <Link to='https://github.com/ChandniJha630/Early-Detection-Of-Gait-Abnormality'>
            <button className="w-full">
              <GitHubIcon />
            </button>
          </Link>
        </div>
        <div
          className="w-1/4 py-10 px-10 bg-card md:w-full md:py-2 md:px-2 md:my-10 md:justify-center"
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        >
          <h1 className="text-lg font-semibold">Blogging Social Media</h1>
          <p className="text-md">{text2}</p>
          <Link to='https://blogging-website-psi.vercel.app/'>
            <button className="w-full">
              <GitHubIcon />
            </button>
          </Link>
        </div>
        <div
          className="w-1/4 py-10 px-10 bg-card md:w-full md:py-2 md:px-2 md:my-10 md:justify-center"
          onMouseEnter={handleMouseEnter3}
          onMouseLeave={handleMouseLeave3}
        >
          <h1 className="text-lg font-semibold">Portfolio Project In React</h1>
          <p className="text-md">{text3}</p>
          <Link to='https://github.com/ChandniJha630/React-Portfolio'>
            <button className="w-full mt-2">
              <GitHubIcon />
            </button>
          </Link>
        </div>
      </div> */}
      <div className="carousel w-full absolute bottom-5">
  <div id="slide1" className="carousel-item relative w-full">
  <div className='py-20'>
      <a href="#slide5" className="btn btn-circle">❮</a>   
    </div>
  <div className='py-10 px-10 bg-card md:w-full md:py-2 md:px-2 md:my-10 md:justify-center  text-neutral-950'>
          <h1 className="text-lg font-semibold">Early Detection Of Gait Abnormality</h1>
          <p className="text-md">{text1}</p>
          <Link to='https://github.com/ChandniJha630/Early-Detection-Of-Gait-Abnormality'>
            <button className="w-full">
              <GitHubIcon />
            </button>
          </Link>
        </div>
    <div className='py-20'>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div > 
  <div id="slide2" className="carousel-item relative w-full">
  <div className='py-20'>
      <a href="#slide1" className="btn btn-circle">❮</a> 
    </div>
  <div
     className='py-10 px-10 bg-card md:w-full md:py-2 md:px-2 md:my-10 md:justify-center  text-neutral-950'   >
          <h1 className="text-lg font-semibold">Blogging Social Media</h1>
          <p className="text-md">{text2}</p>
          <Link to='https://blogging-website-psi.vercel.app/'>
            <button className="w-full">
              <GitHubIcon />
            </button>
          </Link>
        </div>
    <div className='py-20'>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <div className='py-20'>
      <a href="#slide2" className="btn btn-circle">❮</a> 
    </div>
  <div
      className='py-10 px-10 bg-card md:w-full md:py-2 md:px-2 md:my-10 md:justify-center text-neutral-950'  >
          <h1 className="text-lg font-semibold">Portfolio</h1>
          <p className="text-md">{text3}</p>
          <Link to='https://github.com/ChandniJha630/React-Portfolio'>
            <button className="w-full mt-2">
              <GitHubIcon />
            </button>
          </Link>
        </div>
    <div className='py-20'>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <div className='py-20'>
      <a href="#slide3" className="btn btn-circle">❮</a> 
    </div>
  <div
      className='py-10 px-10 bg-card md:w-full md:py-2 md:px-2 md:my-10 md:justify-center text-neutral-950'  >
          <h1 className="text-lg font-semibold">Social Media Application</h1>
          <p className="text-md">{text4}</p>
          <Link to=''>
            <button className="w-full mt-2">
              <GitHubIcon />
            </button>
          </Link>
        </div>
    <div className='py-20'>
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
  <div className='py-20'>
      <a href="#slide4" className="btn btn-circle">❮</a> 
    </div>
  <div
      className='py-10 px-10 bg-card md:w-full md:py-2 md:px-2 md:my-10 md:justify-center text-neutral-950'  >
          <h1 className="text-lg font-semibold">Plant Disease Classification</h1>
          <p className="text-md">{text5}</p>
          <Link to=''>
            <button className="w-full mt-2">
              <GitHubIcon />
            </button>
          </Link>
        </div>
    <div className='py-20'>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div> 
    </div>
  );
}

export default Project;
