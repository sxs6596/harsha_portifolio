import React from "react";
import BadgeList from "./BadgeList";
const SkillsComponent = () => {
  const SWESkills = [
    "Java",
    "Redux",
    "C++",
    "JavaScript",
    "Angular",
    "GraphQL",
    "Networking",
    'SAP HANA',
    "React.js",
    "Node.js",
    "SQL",
    "Kubernetes",
    "Webpack",
    "Express",
    "SaaS",
    "CI/CD",
    "Database and BigData DBMS",
    "DevOps/Deployment Linux",
    "Git",
    "React Query",
    "PaaS",
    "Next.js",
    "Docker",
    "PostgreSQL",
    "NoSQL",
    "MySQL",
    "IaaS",
    "MongoDB",
    "Jenkins",
    "TypeScript",
    "Python",
    "API development",
    "Postman",
    "Distributed Databases",
    "Logging",
  ];
  const MLSkills = [
    "Keras",
    "Numpy",
    "Deep Learning",
    "Pandas",
    "Scikit-Learn",
    "Hadoop",
    "OpenCV",
    "Matplotlib",
    "TensorFlow"
]
  return (
    <div className="container mx-auto">
      {/* outer flex container */}
      <div className="flex flex-col mb-20">
        <h3 className="text-2xl text-slate-700 text-center p-3">Skills</h3>

        <h4 className="text-md text-slate-700 text-center border-b p-3 underline">
          Software Engineering
        </h4>

        <BadgeList items={SWESkills} />
        
        <h4 className="text-md text-slate-700 text-center border-b p-3 underline">
          Machine Learning
        </h4>
        <BadgeList items={MLSkills} />

      </div>
      {/* Footer  */}
      <div className="flex flex-col space-y-4">
            
      </div>
    </div>
  );
};

export default SkillsComponent;
