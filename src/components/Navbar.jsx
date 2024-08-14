import { useTheme } from '../context/ThemeContext';
import { useState, useEffect } from 'react';

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <nav
      className={`sticky top-0 ${
        theme === 'dark' ? 'bg-[#1E293B]' : 'bg-gray-100'
      } z-50 flex justify-between items-start sm:justify-center`}
    >
      <Menu />
      <ThemeToggle />
    </nav>
  );
};

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const { theme } = useTheme();

  return (
    <div>
      <div className="block sm:hidden px-4 py-3">
        <label>
          <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
            <input
              className="hidden peer"
              type="checkbox"
              onClick={toggleMenu}
            />
            <div
              className={`w-[50%] h-[2px] rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] ${
                theme === 'dark' ? 'bg-white' : 'bg-black'
              } peer-checked:rotate-[-45deg]`}
            ></div>
            <div
              className={`w-[50%] h-[2px] rounded-md transition-all duration-300 origin-center ${
                theme === 'dark' ? 'bg-white' : 'bg-black'
              } peer-checked:hidden`}
            ></div>
            <div
              className={`w-[50%] h-[2px] rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] ${
                theme === 'dark' ? 'bg-white' : 'bg-black'
              } peer-checked:rotate-[45deg]`}
            ></div>
          </div>
        </label>
      </div>

      <ul
        className={`flex-col sm:flex-row sm:flex sm:items-center sm:justify-center text-[14.4px] sm:py-4 ${
          theme === 'dark' ? 'text-[#E2E8F0]' : 'text-gray-700'
        } space-y-2 sm:space-y-0 font-medium ${
          isOpen
            ? 'pb-4 transition-max-height duration-500 ease-in-out max-h-[500px] opacity-100 visible sm:max-h-none sm:opacity-100 sm:visible'
            : 'transition-max-height duration-500 md:duration-0 ease-in-out max-h-0 opacity-0 invisible sm:max-h-none sm:opacity-100 sm:visible'
        } overflow-hidden sm:overflow-visible`}
      >
        <NavItem label="OVERVIEW" href="#overview" />
        <NavItem label="AUTHENTICATION" href="#authentication" />
        <NavItem label="ENDPOINTS" href="#endpoints" />
        <NavItem label="TUTORIAL" href="#tutorial" />
        <NavItem label="CODE EXAMPLES" href="#code-examples" />
        <NavItem label="PRICING" href="#pricing" />
      </ul>
    </div>
  );
};

const NavItem = ({ label, href }) => {
  const { theme } = useTheme();
  return (
    <li
      className={`my-2 mx-4 cursor-pointer ${
        theme === 'dark' ? 'hover:text-[#22d3ee]' : 'hover:text-blue-500'
      } transition-colors duration-300`}
    >
      <a href={href} className="block">
        {label}
      </a>
    </li>
  );
};

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="themeToggle st-sunMoonThemeToggleBtn" type="checkbox">
      <input
        type="checkbox"
        id="themeToggle"
        className="themeToggleInput"
        checked={theme === 'light'}
        onChange={toggleTheme}
      />
      <svg
        viewBox="0 0 20 20"
        fill={theme === 'dark' ? 'currentColor' : 'currentColor'}
        stroke="none"
        className={`relative -ml-3 lg:ml-12 md:top-1.5 ${
          /Macintosh|iPhone|iPad|iPod/i.test(navigator.userAgent)
            ? 'top-5'
            : 'top-1'
        } ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
      >
        <mask id="moon-mask">
          <rect x="0" y="0" width="20" height="20" fill="white"></rect>
          <circle cx="11" cy="3" r="8" fill="black"></circle>
        </mask>
        <circle
          className="sunMoon"
          cx="10"
          cy="10"
          r="6"
          mask="url(#moon-mask)"
        ></circle>
        <g>
          <circle className="sunRay sunRay1" cx="18" cy="10" r="1.5"></circle>
          <circle
            className="sunRay sunRay2"
            cx="14"
            cy="16.928"
            r="1.5"
          ></circle>
          <circle
            className="sunRay sunRay3"
            cx="6"
            cy="16.928"
            r="1.5"
          ></circle>
          <circle className="sunRay sunRay4" cx="2" cy="10" r="1.5"></circle>
          <circle
            className="sunRay sunRay5"
            cx="6"
            cy="3.1718"
            r="1.5"
          ></circle>
          <circle
            className="sunRay sunRay6"
            cx="14"
            cy="3.1718"
            r="1.5"
          ></circle>
        </g>
      </svg>
    </label>
  );
};
