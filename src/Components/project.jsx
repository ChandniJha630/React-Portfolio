import React, { useState } from 'react';
import ProjectBG from '../assets/Project.mp4';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

function Project() {
  const projects = [
    {
      title: 'Social Media Application',
      subtitle:'Front-End React Project',
      description: 'Functionalities: Sign Up , Login , CRUD (Create, Read, Update, Delete) posts, View Your Profile , explore everyones posts and Logout functionalities.\n TechStack: React, Redux, Tailwind, TinyMCE, Appwrite for Backend',
      githubLink: 'https://github.com/ChandniJha630/Insights', // Add your GitHub link here
      deployedLink: 'https://insights-d9jkwf6sn-chandnijha630.vercel.app/'
    },
    {
      title: 'OTT Platform ',
      subtitle:'Front-End React Project',
      description: 'Movies database application made with top notch frontend technologies such as React, Redux & SCSS. In this project core concepts of react js such as jsx, components, props, state,  lifecycle of components, conditional rendering, lists, keys & Redux were used.',
      githubLink: 'https://github.com/ChandniJha630/Moviex', // Add your GitHub link here
      deployedLink:'moviex-nine.vercel.app'
    },
    {
      title: 'Early Detection Of Gait Abnormality',
      subtitle:'Machine Learning Project',
      description: 'Leveraging the power of Deep Neural Network, Model was trained to give 100% accurate result. We used Force Plate sensor data recorded in Gait Gutenberg and Gait Rec Dataset to train our Model. Model was tested with Machine Learning Models as well but we found 100% accuracy with DNN. This was a DRDO project which was done as group project during graduation at IIIT KALYANI. Technology Used: Machine Learning, Deep Learning, Feature Engineering',
      githubLink: 'https://github.com/ChandniJha630/Early-Detection-Of-Gait-Abnormality',
      deployedLink:''
    },
   
    {
      title: 'Plant Disease Classification',
      subtitle:'Machine Learning Project',
      description: 'Paddy Leaf Disease Classification using Deep Learning Technique was part of my research internship at IGDTUW. 98% Accuracy was achieved using Resnet architecture, LeakyReLu Activation function and Adam Optimizer.',
      githubLink: '', // Add your GitHub link here
      deployedLink:''
    },
    {
      title: 'Portfolio',
      subtitle:'UI-UX React Project',
      description: 'This website itself is my Portfolio Website along with UI/UX designing. It is an responsive and one of most iteractive eyecatching website you ever landed on. With fully function contact and Blog Features. Tech Stack- React, Tailwind, Node, Emailjs, AppWrite',
      githubLink: 'https://github.com/ChandniJha630/React-Portfolio',
      deployedLink:'react-portfolio-nu-pearl.vercel.app'
      
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <div>
      <video src={ProjectBG} autoPlay loop muted className="bg-video" />
      <div className="carousel w-full absolute  bottom-5">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`carousel-item relative flex w-full ${index === currentSlide ? 'block' : 'hidden'}`}
          >
            <div className='py-20'>
              <button onClick={handlePrevSlide} className="btn btn-circle">❮</button>
            </div>
            <div className='py-10 px-10 bg-card md:w-full md:py-2 md:px-2 md:my-10 md:justify-center text-neutral-950'>
              <h1 className="text-lg font-semibold">{project.title}</h1>
              <h1 className="text-md font-semibold">{project.subtitle}</h1>
              <p className="text-md">{project.description}</p>
              <div className='flex mx-auto py-10 w-20 justify-around'>
              <Link to={project.githubLink}>
                <button className="w-full mt-2">
                  <GitHubIcon />
                </button>
              </Link>
              <Link to={project.deployedLink}>
                <button className="w-full mt-2">
                  <OpenInBrowserIcon/>
                </button>
              </Link>
              </div>
            </div>
            <div className='py-20'>
              <button onClick={handleNextSlide} className="btn btn-circle">❯</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
