import React from "react";
import ReactImg from "../assets/react.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="container mx-auto  rounded-t-2xl bg-header-bg max-w-xl py-6 lg:hidden">
      <div className="flex flex-col space-y-4 my-4 items-center justify-center">
        <h3 className="text-xl text-center font-serif">
          sivasriharsha.sde@gmail.com
        </h3>
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

export default Footer;
