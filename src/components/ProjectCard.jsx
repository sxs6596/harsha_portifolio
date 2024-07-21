import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import BadgeList from "./BadgeList";

const ProjectCard = ({ title, link, skills, image, content }) => {
  return (
    <div className="max-w-3xl rounded-lg shadow-sm hover:bg-leftpanel-bg py-4 px-3 m-3 mx-auto">
      <div className="flex flex-col space-y-4 my-4 items-center justify-center md:flex-row md:justify-between flex-wrap">
        <img 
          src={image} 
          alt="" 
          className="w-70 h-40 rounded-lg transition transform hover:scale-110 mx-auto"
        />
        <div className="flex flex-col space-y-2 w-full">
          <h4 className="text-xl text-slate-700 font-semibold text-center">
            {title}
            <a href={link} className="mx-2 inline-block">
              <FaExternalLinkAlt />
            </a>
          </h4>
          <p className="text-slate-700 text-center text-sm font-semibold">{content}</p>
          <div className="flex justify-end">
            <BadgeList items={skills} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
