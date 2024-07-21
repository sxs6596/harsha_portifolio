import React from 'react'
import UTALogo from '../assets/uta_logo.png'; 
import ProjectCard from './ProjectCard';
import GameNexus from '../assets/game_nexus.png';
import CampusFlow from '../assets/campus_flow.png';
import storymatic from '../assets/storymatic.png';
import IMDB from '../assets/IMDB.png';
import EchoMeet from '../assets/EchoMeet.png';
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
      
        <ProjectCard title={'StoryMatic AI'} skills={['Next.js', 'PostgreSQL', 'Stripe', 'Drizzle ORM']} link={'https://storymatic.vercel.app/'} image={storymatic} content={'FullStack application built for AI content generation using Gemini flash.'} />
        <ProjectCard title={'Echo Meet'} skills={['React.js', 'Node.js', 'WebRTC', 'Socket.io']} link={'https://echo-meet-sigma.vercel.app/'} image={EchoMeet}  content={'peer to peer AI video calling application.'}/>
        <ProjectCard title={title} skills={skills} link={link} image={GameNexus} content={'Full Stack video gaming platform built for discovering video games'} />
        <ProjectCard title={'Bug Breeze'} skills={['Next.js', 'MySQL', 'Tailwind', 'Prisma']} link={'https://github.com/sxs6596/IssueTracker'} image={IssueTracker} content={'SEO, SSR enabled Issue Tracker built for secure workflow.'} />
        <ProjectCard title={'IMDB Sentiment Analyzer'} skills={['Next.js', 'ML', 'Hybrid', 'DeepLearning']} link={'https://github.com/sxs6596/IMDB-Sentiment-Analysis'} image={IMDB} content={'Realtime Sentiment Analysis Dashboard built using Hybrid model of CNN & RNN models.'}/>
        <ProjectCard title={'Campus Flow'} skills={['React.js', 'PHP', 'Radix UI', 'Open AI']} link={'https://github.com/sxs6596/campusFlow'} image={CampusFlow} content={'FullStack application built for schools with OPEN AI integration for student, faculty & admin dashboards'}/>
        
    </div>
  )
}

export default Projects