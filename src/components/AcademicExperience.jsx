import React, { useState } from "react";
import TCSLogo from "../assets/tcs.png";
import SkillsComponent from "./SkillsComponent";
import BadgeList from "./BadgeList";
import MagnaLogo from "../assets/magna_logo.png";
import UTAImage from "../assets/uta_logo.png";
import { FaChevronDown } from "react-icons/fa";
const AcademicExperience = () => {
  const [isutaOpen, setIsUTAOpen] = useState(false);
  const volunteer = ["Gen AI", "PySpark", "MultiModals", "DataPipelining", "Databricks", "SparkStreaming"];
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-semibold text-slate-700 text-center p-3 m-3">
        Academic Experience
      </h2>
      <div
        className="flex items-center justify-between max-w-3xl mx-auto p-3 m-4 shadow-sm rounded-lg py-3 hover:bg-leftpanel-bg"
        onClick={() => setIsUTAOpen(!isutaOpen)}
      >
        {/* col-1 */}
        <div className="flex">
          <img src={UTAImage} alt="" className="w-13 h-10 mr-2 rounded-md" />
          <div className="flex-col">
            <h4 className="text-xl text-slate-700 font-semibold">
              Volunteer Research Assistant
            </h4>
            <p className="text-sm text-slate-700 ">Remote, USA</p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <FaChevronDown />
          <p className="text-sm text-slate-700 mt-6 p-3">May 2024 - Present</p>
        </div>
      </div>
      {isutaOpen && (
        <div className="flex flex-col max-w-3xl mx-auto justify-center p-4 m-4 hover:bg-leftpanel-bg rounded-lg">
          <ul className="list-disc">
            <li className="m-1 text-slate-700 text-sm">
              Engaging in extensive audio and video processing using PySpark,
              leveraging Multimodal Generative AI for enhanced data analysis and
              insights.
            </li>
            <li className="m-1 text-slate-700 text-sm">
              Implementing data pipelining and ingestion processes on
              Databricks, ensuring smooth and efficient data flow for
              large-scale data processing and analytics tasks.
            </li>
            <li className="m-1 text-slate-700 text-sm">
              Contributing to collaborative research projects, working on the
              development of innovative solutions for data processing and
              analysis using cutting-edge technologies and tools. Magna
              International
            </li>
          </ul>
        </div>
      )}
      <div className="flex flex-col items-end justify-end p-3 mb-5">
        <BadgeList items={volunteer} />
      </div>
    </div>
  );
};

export default AcademicExperience;
