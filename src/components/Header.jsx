import React, { useState, useEffect } from 'react';
import logoLeft from '@/assets/ist_logo.png'; 
import logoCenter from '@/assets/i++24Logo.png';

export default function Header() {
  const [isLg, setIsLg] = useState(window.innerWidth >= 1024); // Adjust the breakpoint as needed
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLg(window.innerWidth >= 1024);
      if (window.innerWidth >= 1024) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <header className=" mx-2 lg:mx-10 sticky top-0 z-10 rounded-lg bg-gradient-to-r from-blue-950 via-fuchsia-500 to-blue-950 flex justify-between items-center">
      
      <div className="basis-1/3">
        <img src={logoLeft} alt="Left Image" className="mx-4 w-12 h-12 md:w-16 md:h-16" />
      </div>

      <div className="basis-1/3">
        <img src={logoCenter} alt="Center Image" className=" w-28 h-24 md:w-48 md:h-28 mx-auto" />
      </div>

      <nav className="basis-1/3 relative flex justify-end">
        {/* Regular Navigation for Large Screens */}
        {isLg ? (
          <ul className="sm:visible my-3 flex text-white text-2xl gap-6 px-4 flex-row">
            <li className="p-2"><a href="#">Home</a></li>
            <li className="p-2"><a href="#">About</a></li>
            <li className="p-2"><a href="#">Events</a></li>
            <li className="p-2"><a href="#">Contact</a></li>
          </ul>
        ) : (
          <>
            {/* Hamburger Icon */}
            <button onClick={toggleDropdown} className="text-4xl px-3 mt-2">
              ☰
            </button>
            {/* Dropdown Menu for Small Screens */}
            {isDropdownOpen && (
              <ul className="absolute right-0 mt-20 bg-white text-black shadow-lg rounded-lg z-10">
                <li className="p-2 hover:bg-gray-200"><a href="#">Home</a></li>
                <li className="p-2 hover:bg-gray-200"><a href="#">About</a></li>
                <li className="p-2 hover:bg-gray-200"><a href="#">Events</a></li>
                <li className="p-2 hover:bg-gray-200"><a href="#">Contact</a></li>
              </ul>
            )}
          </>
        )}
      </nav>
    </header>
  );
}
