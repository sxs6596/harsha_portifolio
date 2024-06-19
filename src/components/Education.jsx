import React from 'react'
import UTALogo from '../assets/uta_logo.png'; 
import ExperienceCard from './ExperienceCard';
import AULogo from '../assets/AU.jpeg';
const Education = () => {
  return (
    <div className="container mx-auto mb-15">
     <h2 className="text-3xl font-semibold text-slate-700 text-center p-3 m-3">
        Education
      </h2>
      <div className="flex items-center justify-between max-w-3xl mx-auto p-3 m-4 shadow-sm rounded-lg py-3 hover:bg-leftpanel-bg">
          {/* col-1 */}
               <div className="flex">
                   <img src={UTALogo } alt="" className="w-11 mr-2 rounded-md" />
                   <div className="flex-col">
                       <h4 className="text-xl text-slate-700 font-semibold">University of Texas at Arlington</h4>
                       <p className="text-sm text-slate-700 ">Masters in Computer Science</p>
                   </div>
               </div>
               <div className="flex">
                  <h4>GPA : 3.70</h4>
               </div>
             
      </div>
      <div className="flex items-center justify-between max-w-3xl mx-auto p-3 m-4 shadow-sm rounded-lg py-3 hover:bg-leftpanel-bg">
          {/* col-1 */}
               <div className="flex">
                   <img src={AULogo} alt="" className="w-11 mr-2 rounded-md" />
                   <div className="flex-col">
                       <h4 className="text-xl text-slate-700 font-semibold">Andhra University</h4>
                       <p className="text-sm text-slate-700 ">Bachelors in Computer Science</p>
                   </div>
               </div>
               <div className="flex">
                  <h4>GPA : 8.10</h4>
               </div>
             
      </div>
    </div>
  )
}

export default Education