import React from 'react';

const About = () => {
  return (
   
      <div className="relative">
        <div className="flex my-5 px-10 lg:block">
          <div className="py-10 w-2/3 pr-10 font-notoSans text-lg text-justify lg:text-xs lg:pr-0 lg:py-5 lg:w-full">
            <p>
              Welcome to my portfolio! I'm Chandni, a passionate data scientist with a love for creating forecasting and interacting AI tools, with a background in software engineering. I recently completed{' '}
              <b>
                <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/AWS/kkE9HyeNcw6rwCRGw_AWS%20APAC_jpuRaCyRgW6qv6F2A_1687879381499_completion_certificate.pdf">
                  AWS forage virtual experience programme
                </a>
              </b>
              . I have built over many projects in the past few months related to data science and front-end development. I have a strong foundation of concepts of machine learning, deep learning, operating system, data structure, and algorithms.
              <br />
              <br />
              My vision is to bring life to innovative and creative ideas. I have diverse interests; I write poems{' '}
              <a href="https://www.amazon.in/Rekhanjali-Chandni-Jha/dp/B0B8264DNW/ref=sr_1_14?keywords=chandni+jha+poetry&qid=1688485326&sr=8-14">Rekhanjali </a> is my solo book with 30 poems and mandala arts based on 30 different themes. You can view my creative contents on my YouTube channels
              namely Quanta Bytes (Infotainment based) and Rhythm Of Thoughts (Poetry based). Cooking, handcraft, and sketching are my other hobbies.
            </p>
            <a href="https://docs.google.com/document/d/1c5TzF4NvEhcUvxpQpYrgbBounWAnz7Kr/edit?usp=sharing&ouid=101045511593766091252&rtpof=true&sd=true">
              <button className="text-slate-500 border border-slate-600 text-xl font-thin my-5 px-5 py-3 lg:text-sm lg:px-2 lg:py-2 hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:border-blue-500 hover:text-bold hover:text-white hover:animate-bounce w-40 h-15">
                View Resume
              </button>
            </a>
          </div>
      
        </div>
      </div>
   
  );
};

export default About;
