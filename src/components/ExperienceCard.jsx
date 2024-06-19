import React from 'react'

const ExperienceCard = () => {
  return (
    <div className="flex items-center justify-between max-w-3xl mx-auto p-3 m-4 shadow-md rounded-lg py-3">
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
  )
}

export default ExperienceCard