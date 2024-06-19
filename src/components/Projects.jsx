import React from 'react'
import UTALogo from '../assets/uta_logo.png'; 
import ProjectCard from './ProjectCard';
import GameNexus from '../assets/game_nexus.png';
import CampusFlow from '../assets/campus_flow.png';
import IMDB from '../assets/IMDB.png';
import IssueTracker from '../assets/IssueTracker.png';
const Projects = () => {
  const link = 'https://game-nexus-pearl.vercel.app/';
  const skills = ['React.js', 'Node.js', 'RAWG API', 'Vitest' ];
  const title ='Game Nexus'
  return (
    <div className="container mx-auto mb-15">
         <h2 className="text-3xl font-semibold text-slate-700 text-center p-3 m-3">
        Projects
       </h2>
        <ProjectCard title={title} skills={skills} link={link} image={GameNexus} />
        <ProjectCard title={'IssueTracker'} skills={['Next.js', 'MySQL', 'Tailwind', 'Prisma']} link={'https://github.com/sxs6596/IssueTracker'} image={IssueTracker} />
        <ProjectCard title={'IMDB Sentiment Analyzer'} skills={['Next.js', 'ML', 'Hybrid', 'DeepLearning']} link={'https://github.com/sxs6596/IMDB-Sentiment-Analysis'} image={IMDB} />
        <ProjectCard title={'Campus Flow'} skills={['React.js', 'PHP', 'Radix UI', 'Open AI']} link={'https://github.com/sxs6596/campusFlow'} image={CampusFlow}/>
    </div>
  )
}

export default Projects