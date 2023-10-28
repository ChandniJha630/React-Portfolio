import React from 'react';
import ProjectBG from '../assets/Project.mp4';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

function Project() {
  return (
    <div>
      <video src={ProjectBG} autoPlay loop muted className='bg-video' />
     <div className="flex justify-around  absolute bottom-5 content-end">
        <div className="w-1/4 py-10 px-10 bg-card ">
            <h1 className='text-lg font-semibold'>Early Detection Of Gait Abnormality</h1>
            <p className='text-md'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem perferendis assumenda magni delectus dignissimos fuga illum numquam corporis aliquid unde? </p>
        <Link><button className='w-full'><GitHubIcon/></button></Link>
        </div>
        <div className="w-1/4 py-10 px-10 bg-card ">
            <h1 className='text-lg font-semibold'>CloudBurst Prediction System</h1>
            <p className='text-md'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem perferendis assumenda magni delectus dignissimos fuga illum numquam corporis aliquid unde? </p>
            <Link><button className='w-full'><GitHubIcon/></button></Link>
        </div>
        <div className="w-1/4 py-10 px-10 bg-card ">
            <h1 className='text-lg font-semibold'>Portfolio Project In React</h1>
            <p className='text-md'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem perferendis assumenda magni delectus dignissimos fuga illum numquam corporis aliquid unde? </p>
            <Link><button className='w-full'><GitHubIcon/></button></Link>
        </div>
     </div>
    </div>
  );
}

export default Project;
