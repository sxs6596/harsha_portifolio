import React from "react";
import ReactImg from "../assets/react.svg";
import TFLogo from "../assets/Tensorflow_logo.svg";
const Hero = () => {
  return (
    <div className="container mx-auto mb-15">
      <h2 className="text-3xl font-semibold text-slate-700 text-center p-3 m-3">
        My Expertise
      </h2>
      {/* outer container */}
      <div className="flex flex-col items-center justify-center md:flex-row md:items-start m-3">
        {/* Upper Software Engineering */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row items-center">
            <img src={ReactImg} alt="" className="w-16 h-16" />
            <h3 className="text-2xl font-semibold text-[#7dd3fc] p-3 ml-1 border-gray-500 border-b-4 border-t-4 border-r-4">
              Software Engineering
            </h3>
          </div>
          <p className="text-md text-slate-700 max-w-sm p-3 m-2">
            Proficient in Java, JavaScript, React.js, Next.js, Angular, Node.js,
            and SpringBoot with extensive experience in cloud computing (AWS),
            database management (PostgreSQL, MySQL, MongoDB), and deployment
            (Heroku, Docker). Passionate about mathematics and algorithms,
            consistently delivering high-quality, scalable, and efficient
            solutions.
          </p>
        </div>

        {/* Bottom Machine Learning  */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row items-center">
            <img src={TFLogo} alt="" className="w-16 h-16 rounded-es-lg" />
            <h3 className="text-2xl font-semibold text-[#f87171] p-3 ml-1 border-gray-500 border-b-4 border-t-4 border-r-4">
              Machine Learning
            </h3>
          </div>
          <p className="text-md text-slate-700 max-w-sm p-3 m-2">
            Skilled in machine learning and deep learning, I continually explore
            generative AI and integrate it into full stack applications. I
            specialize in fine-tuning generative models and leveraging front-end
            frameworks like Angular and React, combined with robust back-end
            technologies, to create intelligent and user-friendly solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
