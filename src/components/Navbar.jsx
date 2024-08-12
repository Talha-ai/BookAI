import React from 'react';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-[#1E293B] z-50">
      <ul className="flex justify-center gap-1 font-light py-4 text-[14.4px] text-[#E2E8F0]">
        <li className="my-2 mx-4 cursor-pointer hover:text-[#22d3ee] transition-colors duration-300">
          <a href="#overview" className="block">
            OVERVIEW
          </a>
        </li>
        <li className="my-2 mx-4 cursor-pointer hover:text-[#22d3ee] transition-colors duration-300">
          <a href="#authentication" className="block">
            AUTHENTICATION
          </a>
        </li>
        <li className="my-2 mx-4 cursor-pointer hover:text-[#22d3ee] transition-colors duration-300">
          <a href="#endpoints" className="block">
            ENDPOINTS
          </a>
        </li>
        <li className="my-2 mx-4 cursor-pointer hover:text-[#22d3ee] transition-colors duration-300">
          <a href="#tutorial" className="block">
            TUTORIAL
          </a>
        </li>
        <li className="my-2 mx-4 cursor-pointer hover:text-[#22d3ee] transition-colors duration-300">
          <a href="#code-examples" className="block">
            CODE EXAMPLES
          </a>
        </li>
        <li className="my-2 mx-4 cursor-pointer hover:text-[#22d3ee] transition-colors duration-300">
          <a href="#pricing" className="block">
            PRICING
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
