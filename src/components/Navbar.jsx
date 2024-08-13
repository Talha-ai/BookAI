import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`sticky top-0 bg-[#1E293B] z-50 flex justify-between items-start sm:justify-center`}
    >
      <div>
        {/* Hamburger Icon */}
        <div className="block sm:hidden px-4 py-3">
          <button
            onClick={toggleMenu}
            className="text-[#E2E8F0] focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Menu */}
        <ul
          className={`flex-col sm:flex-row sm:flex sm:items-center sm:justify-center ${
            isOpen ? 'flex' : 'hidden'
          } py-4 text-[14.4px] text-[#E2E8F0] space-y-2 sm:space-y-0 font-medium`}
        >
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
      </div>
      <label
        for="themeToggle"
        class="themeToggle st-sunMoonThemeToggleBtn"
        type="checkbox"
      >
        <input type="checkbox" id="themeToggle" class="themeToggleInput" />
        <svg
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="currentColor"
          stroke="none"
          className="relative top-0 -ml-3 md:ml-12 lg:top-1.5"
        >
          <mask id="moon-mask">
            <rect x="0" y="0" width="20" height="20" fill="white"></rect>
            <circle cx="11" cy="3" r="8" fill="black"></circle>
          </mask>
          <circle
            class="sunMoon"
            cx="10"
            cy="10"
            r="8"
            mask="url(#moon-mask)"
          ></circle>
          <g>
            <circle class="sunRay sunRay1" cx="18" cy="10" r="1.5"></circle>
            <circle class="sunRay sunRay2" cx="14" cy="16.928" r="1.5"></circle>
            <circle class="sunRay sunRay3" cx="6" cy="16.928" r="1.5"></circle>
            <circle class="sunRay sunRay4" cx="2" cy="10" r="1.5"></circle>
            <circle class="sunRay sunRay5" cx="6" cy="3.1718" r="1.5"></circle>
            <circle class="sunRay sunRay6" cx="14" cy="3.1718" r="1.5"></circle>
          </g>
        </svg>
      </label>
    </nav>
  );
};
