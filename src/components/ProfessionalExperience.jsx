import React, { useState } from "react";
import TCSLogo from "../assets/tcs.png";
import SkillsComponent from "./SkillsComponent";
import BadgeList from "./BadgeList";
import MagnaLogo from "../assets/magna_logo.png";
import radical_img from "../assets/radical.png";
import { FaChevronDown } from "react-icons/fa";
const ProfessionalExperience = () => {
  const [tcsOpen, setTcsOpen] = useState(false);
  const [magnaOpen, setMagnaOpen] = useState(false);
  const [radicalOpen, setRadicalOpen] = useState(false);
  const tcs = [
    "Java",
    "SpringBoot",
    "MongoDB",
    "Angular",
    "React.js",
    "Vitest",
    "SQL",
    "Python",
  ];
  const magna = [
    "React.js",
    "Node.js",
    "HANA",
    "ERP",
    "Azure",
    "HTML",
    "CSS",
    "Jest",
  ];
  const radical = [
    "React.js",
    "Generative AI",
    "Open AI",
    "LangChain",
    "FineTuning",
    "Node.js",
    "CSS",
  ];
  return (
    <div className="container mx-auto mb-15">
      <h2 className="text-3xl font-semibold text-slate-700 text-center p-3 m-3">
        Professional Experience
      </h2>
      {/* Radical AI Intern Experience */}
      <div
        className="flex items-center justify-between max-w-3xl mx-auto p-3 m-4 shadow-sm rounded-lg py-3 hover:bg-leftpanel-bg"
        onClick={() => setRadicalOpen(!radicalOpen)}
      >
        {/* col-1 */}
        <div className="flex">
          <img src={radical_img} alt="" className="w-13 h-10 mr-2 rounded-md" />
          <div className="flex-col">
            <h4 className="text-xl text-slate-700 font-semibold">Radical AI</h4>
            <p className="text-md text-slate-700 ">Software Engineer Intern</p>
            <p className="text-sm text-slate-700 ">Remote, USA</p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <FaChevronDown />
          <p className="text-sm text-slate-700 mt-6 p-3">
            Open Source Contribution - Jun 2023 - Present
          </p>
        </div>
      </div>
      {radicalOpen && (
        <div className="flex flex-col max-w-3xl mx-auto justify-center p-4 m-4 hover:bg-leftpanel-bg rounded-lg">
          <ul className="list-disc">
            <li className="m-1 text-slate-700 text-sm">
              Working on the development of Kai Project
            </li>
          </ul>
        </div>
      )}
      <div className="flex flex-col items-end justify-end p-3 mb-5">
        <BadgeList items={radical} />
      </div>
      {/* Magna International Experience */}
      <div
        className="flex items-center justify-between max-w-3xl mx-auto p-3 m-4 shadow-sm rounded-lg py-3 hover:bg-leftpanel-bg"
        onClick={() => setMagnaOpen(!magnaOpen)}
      >
        {/* col-1 */}
        <div className="flex">
          <img src={MagnaLogo} alt="" className="w-13 h-10 mr-2 rounded-md" />
          <div className="flex-col">
            <h4 className="text-xl text-slate-700 font-semibold">
              Magna International
            </h4>
            <p className="text-md text-slate-700 ">Software Engineer Intern</p>
            <p className="text-sm text-slate-700 ">Remote, USA</p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <FaChevronDown />
          <p className="text-sm text-slate-700 mt-6 p-3">
            3 mos - Jun 2023 - Aug 2023
          </p>
        </div>
      </div>
      {magnaOpen && (
        <div className="flex flex-col max-w-3xl mx-auto justify-center p-4 m-4 hover:bg-leftpanel-bg rounded-lg">
          <ul className="list-disc">
            <li className="m-1 text-slate-700 text-sm">
              Led development of disaster recovery web application using
              React.js, Node.js, HANADB, SQL enabling $330K per day savings
              during ERP outages for each plant by providing real time shipment
              tracking, filtering and shipment creation capabilities.
            </li>
            <li className="m-1 text-slate-700 text-sm">
              Optimized shipment label generation and ASN generation processes
              by integrating Bartender and JCOM APIs, automating manual efforts
              that took over 110 hours/month and enabled handling of 5K
              shipments per day.
            </li>
            <li className="m-1 text-slate-700 text-sm">
              Spearheaded the end-to-end development of an automated system for
              Bill of Lading, ensuring continuous supply chain operations during
              ERP outages;enhanced efficiency saving 15+ hours per week and
              reducing shipping errors by 60%.
            </li>
            <li className="m-1 text-slate-700 text-sm">
              Orchestrated a successful collaborative project with engineering,
              business teams to develop and deploy a web app on Azure, resulting
              in enhanced resilience, seamless integration, and increased
              efficiency across the organization.
            </li>
          </ul>
        </div>
      )}
      <div className="flex flex-col items-end justify-end p-3 mb-5">
        <BadgeList items={magna} />
      </div>

      {/* TCS Experience */}
      <div
        className="flex items-center justify-between max-w-3xl mx-auto p-3 m-4 shadow-sm rounded-lg py-3 hover:bg-leftpanel-bg"
        onClick={() => setTcsOpen(!tcsOpen)}
      >
        {/* col-1 */}
        <div className="flex">
          <img src={TCSLogo} alt="" className="w-13 h-10 mr-2 rounded-md" />
          <div className="flex-col">
            <h4 className="text-xl text-slate-700 font-semibold">
              Tata Consultancy Services
            </h4>
            <p className="text-md text-slate-700 ">Software Engineer</p>
            <p className="text-sm text-slate-700 ">Hyderabad,India</p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <FaChevronDown />
          <p className="text-sm text-slate-700 mt-6 p-3">
            2.8 yr - Jan 2020 - August 2022
          </p>
        </div>
      </div>
      {tcsOpen && (
        <div className="flex flex-col max-w-3xl mx-auto justify-center p-4 m-4 hover:bg-leftpanel-bg rounded-lg">
          <ul className="list-disc">
            <li className="m-1 text-slate-700 text-sm">
              Involved in the development of OrderHub internal tool to
              streamline CSP’s using Angular, Node.js, MongoDB achieving a 7%
              increase in user engagement. Applied SASS for CSS enhancements
              improving UI/UX design and leading to a 3% increase in the user
              satisfaction.
            </li>
            <li className="m-1 text-slate-700 text-sm">
              Enhanced user login process by implementing a secure SSO system
              with OAuth and JWT, resulting in an 8% improvement in login
              efficiency
            </li>
            <li className="m-1 text-slate-700 text-sm">
              {" "}
              Boosted server performance with Redis caching, reducing response
              time by 15% and handling peak traffic more efficiently, leading to
              smoother user experience.
            </li>
            <li className="m-1 text-slate-700 text-sm">
              Applied Test-Driven Development (TDD) practices using Jest and
              Mocha leading to 10% decrease in post deployment bugs and leading
              to most stable release cycle.
            </li>
            <li className="m-1 text-slate-700 text-sm">
              Optimized deployment process with a CI/CD pipeline using Jenkins
              and Docker which led to 10% improvement in deployment efficiency
              and 15% widely reduction in integration errors. Implemented
              Webpack and Babel for asset optimization, cutting down page load
              times by 8%.
            </li>
          </ul>
        </div>
      )}
      <div className="flex flex-col items-end justify-end p-3 mb-5">
        <BadgeList items={tcs} />
      </div>
    </div>
  );
};

export default ProfessionalExperience;
