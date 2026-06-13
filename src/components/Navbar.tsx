import React, { useState } from 'react';

const menuItems = [
  'About Us',
  'Our Projects',
  'Team',
  'Services',
  'Insights',
  'Careers',
  'Reach Us'
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 1. Added 'h-20' to lock the navbar height exactly to 80px */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-13 h-20 bg-transparent backdrop-blur-md transition-all duration-300">
        {/* Left side: menu and Logo */}
        <div className="flex items-center gap-6 text-white">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-center w-6 h-6 focus:outline-none group cursor-pointer"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6 text-white group-hover:text-gray-200 transition-colors">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <div className="flex flex-col justify-between w-6 h-4 w-full">
                <span className="w-full h-0.5 bg-white rounded-full group-hover:bg-gray-200 transition-colors"></span>
                <span className="w-full h-0.5 bg-white rounded-full group-hover:bg-gray-200 transition-colors"></span>
                <span className="w-full h-0.5 bg-white rounded-full group-hover:bg-gray-200 transition-colors"></span>
              </div>
            )}
          </button>
          
          <a href="/" className="flex items-center">
            <svg 
              viewBox="0 0 320 45" 
              className="h-8 md:h-10 w-auto" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <text 
                x="0" 
                y="75%" 
                fontSize="30" 
                fontWeight="bold" 
                fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
                letterSpacing="1"
              >
                <tspan fill="#FFFFFF">NOVELTY</tspan>
                <tspan fill="#00D54B" dx="1">WORKS LTD</tspan>
              </text>
            </svg>
          </a>
        </div>
      </nav>

      {/* Backdrop overlay below the nav */}
      {isOpen && (
        <div 
          className="fixed top-20 inset-x-0 bottom-0 bg-black/30 backdrop-blur-sm z-30 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* 2. Drawer perfectly starts at top-20 (80px), connecting seamlessly to the h-20 nav */}
      <div 
        className={`fixed top-20 left-0 bottom-0 w-full max-w-sm bg-white z-40 shadow-2xl transition-transform duration-300 ease-in-out overflow-y-auto px-13 py-10 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="flex flex-col space-y-6 text-[#112240] text-xl font-bold tracking-tight">
          {menuItems.map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                onClick={() => setIsOpen(false)} 
                className="hover:text-[#00D54B] transition-colors block py-1 w-fit"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};