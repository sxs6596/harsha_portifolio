import React from 'react';

const Navbar = () => {
  return (
    <nav className="hidden lg:flex fixed top-0 left-0 right-0 p-3 items-center justify-center bg-slate-800 text-white shadow-md z-50 bg-opacity-80">
      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
       <a href="#" className="hover:text-gray-400">Home</a>
       <a href="#hero" className="hover:text-gray-400">Expertise</a>
        <a href="#education" className="hover:text-gray-400">Education</a>

        <a href="#professionalexp" className="hover:text-gray-400">Professional Experience</a>
        <a href="#academicexp" className="hover:text-gray-400">Academic Experience</a>
        <a href="#projects" className="hover:text-gray-400">Projects</a>
      </div>
    </nav>
  );
}

export default Navbar;


