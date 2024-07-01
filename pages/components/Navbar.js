"use client"
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('HOME');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div className='first-section'>
              <div className="px-4 mx-auto max-w-7xl sm:px-6">
      <div className="relative pt-6 pb-16 sm:pb-24">
        <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="#">
                <img className="w-auto h-8 sm:h-14" src="/Grade.png" loading="lazy" width="202" height="40" />
              </a>
              <div className="flex items-center -mr-2 md:hidden">
                <button
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-50 rounded-md hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50"
                  type="button" aria-expanded={isOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className={`md:flex md:space-x-10 list-none ${isOpen ? 'block' : 'hidden'} absolute left-0 top-16  w-full md:static md:w-auto`}>
            <li className="relative">
              <a href="#" className={`text-base font-normal text-black list-none hover:text-gray-900 ${active === 'HOME' ? 'active' : ''}`} onClick={() => setActive('HOME')}>
                HOME
              </a>
              {active === 'HOME' && <img src="/Vector.png" alt="Vector" className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 md:block hidden" />}
            </li>
            <li className="relative">
              <a href="#" className={`text-base font-normal text-black list-none hover:text-gray-900 ${active === 'MARKETPLACE' ? 'active' : ''}`} onClick={() => setActive('MARKETPLACE')}>
                MARKETPLACE
              </a>
              {active === 'MARKETPLACE' && <img src="/Vector.png" alt="Vector" className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 md:block hidden" />}
            </li>
            <li className="relative">
              <a href="#" className={`text-base font-normal text-black list-none hover:text-gray-900 ${active === 'DASHBOARD' ? 'active' : ''}`} onClick={() => setActive('DASHBOARD')}>
                DASHBOARD
              </a>
              {active === 'DASHBOARD' && <img src="/Vector.png" alt="Vector" className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 md:block hidden" />}
            </li>
            <li className="relative">
              <a href="#" className={`text-base font-normal text-black list-none hover:text-gray-900 ${active === 'ABOUT' ? 'active' : ''}`} onClick={() => setActive('ABOUT')}>
                ABOUT
              </a>
              {active === 'ABOUT' && <img src="/Vector.png" alt="Vector" className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 md:block hidden" />}
            </li>
          </div>
          <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
            <div className="inline-flex rounded-full shadow">
              <div href="#" className="inline-flex items-center">
              <a class="relative" href="#">
        <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
        <span class="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-5 py-1 text-base font-bold text-black transition duration-100 ">Log in</span>
    </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
</div>
  );
};

export default Navbar;
