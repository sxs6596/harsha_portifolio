import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import LeftPanel from "./LeftPanel";
import Education from './Education';
import Projects from './Projects';
import ProfessionalExperience from './ProfessionalExperience';
import AcademicExperience from "./AcademicExperience";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div>
      {/* Fixed Navbar at the top */}
      <Navbar />

      {/* Main content with grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-16">
        <div className="col-span-1">
          <LeftPanel />
        </div>
        
        <div className="col-span-1 lg:col-span-3">
          {/* Section Header */}
          <section id="header">
            <Header />
          </section>
          {/* Section Hero */}
          <section id="hero">
            <Hero />
          </section>
          {/* Section Education */}
          <section id="education">
            <Education />
          </section>
          {/* Section Professional Experience */}
          <section id="professionalexp">
            <ProfessionalExperience />
          </section>
          {/* Section Academic Experience */}
          <section id="academicexp">
            <AcademicExperience />
          </section>
          {/* Section Projects */}
          <section id="projects">
            <Projects />
          </section>
          {/* Achievements */}
          {/* Footer */}
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Layout;
