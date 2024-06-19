import React from 'react';
import HarshaImg from '../assets/harsha_1.png';
import SkillsComponent from './SkillsComponent';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const LeftPanel = () => {
  return (
    <div className="hidden xl:flex flex-col fixed top-0 left-10 h-full w-1/4 bg-leftpanel-bg p-6 shadow-md rounded-md overflow-y-auto">
      {/* upper container */}
      <div className="flex flex-col items-center justify-center space-y-2 mt-10">
        <img src={HarshaImg} alt="Harsha" className="rounded-full w-20" />
        <h2 className="text-2xl text-slate-700 text-center font-semibold pt-3">
          Siva Sri Harsha Suthapalli
        </h2>
      </div>
      {/* Skills Container */}
      <SkillsComponent />
      {/* Footer container */}
      <div className="flex flex-col items-center justify-center space-y-2">
      <h3 className="text-2xl text-slate-700 text-center">Contact</h3>
      <h2 className="text-md text-slate-700 text-center font-semibold pt-3">
          sivasriharsha.sde@gmail.com
        </h2>
        <div className="flex items-center justify-center space-x-3">
          <a href="https://www.linkedin.com/in/sivasriharsha">
            <FaLinkedin size={25} />
          </a>
          <a href="https://www.github.com/sxs6596">
            <FaGithub size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
