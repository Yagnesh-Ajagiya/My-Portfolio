import React from 'react';
import { Link } from 'react-router-dom';

function ResponsiveNavbar({ isOpen, toggleNavbar }) {
  return (
    <div
      className={`transition-all duration-700 ease-in-out overflow-hidden md:hidden sticky top-16 z-10 bg-zinc-950 ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <Link
        to="/"
        onClick={toggleNavbar}
        className="text-slate-100 hover:bg-slate-700 bg-zinc-800 transition-bg duration-500 mt-4 cursor-pointer font-semibold px-4 py-2 text-2xl rounded-md flex justify-center items-center"
      >
        Home
      </Link>
      <Link
        to="/projects"
        onClick={toggleNavbar}
        className="text-slate-100 hover:bg-slate-700 bg-zinc-800 transition-bg duration-500 mt-4 cursor-pointer font-semibold px-4 py-2 text-2xl rounded-md flex justify-center items-center"
      >
        Projects
      </Link>
      <Link
        to="/technologies"
        onClick={toggleNavbar}
        className="text-slate-100 hover:bg-slate-700 bg-zinc-800 transition-bg duration-500 mt-4 cursor-pointer font-semibold px-4 py-2 text-2xl rounded-md flex justify-center items-center"
      >
        Technologies
      </Link>
      <Link
        to="/contact"
        onClick={toggleNavbar}
        className="text-slate-100 hover:bg-slate-700 bg-zinc-800 transition-bg duration-500 mt-4 cursor-pointer font-semibold px-4 py-2 text-2xl rounded-md flex justify-center items-center"
      >
        Contact Me
      </Link>
    </div>
  );
}

export default ResponsiveNavbar;
