import React from "react";
import UTALogo from "../assets/uta_logo.png";
import GameNexus from "../assets/game_nexus.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import BadgeList from "./BadgeList";
const ProjectCard = ({title,link,skills,image}) => {
//   const skills = ['Java', 'Python', 'Javascript', 'React.js' ]; 
  return (
    <div className="max-w-3xl rounded-lg shadow-sm hover:bg-leftpanel-bg py-4 px-3 m-3 mx-auto">
        <div className="flex flex-col space-y-4 my-4 items-center justify-center md:flex-row md:justify-between">
          <img src={image} alt="" className="w-1/2 rounded-lg transition transform hover:scale-105" />
          <div className="flex flex-col space-y-2">
                    <h4 className="text-xl text-slate-700 font-semibold">
                      {title} <a href={link}className="mx-2 inline-block"><FaExternalLinkAlt /></a>
                    </h4>
                <p><BadgeList items={skills}/></p>      
              
            
          </div>
        </div>
      </div>
  );
};

export default ProjectCard;
