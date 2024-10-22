import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logoLeft from '@/assets/ist_logo.png'; 
import logoCenter from '@/assets/ipp-white.png';

export default function Header() {
  const [isLg, setIsLg] = useState(window.innerWidth >= 768); 
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsLg(window.innerWidth >= 768);
      if (window.innerWidth >= 768) {
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

  const handleEventsClick = () => {
    if (location.pathname === "/events") {
      navigate('/');
      setTimeout(() => {
        document.getElementById("about")?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      navigate("/events");
    }
  };

  const handleAboutClick = () => {
    if (location.pathname === "/") {
      document.getElementById("about")?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById("about")?.scrollIntoView({ behavior: 'smooth' });
      }, 100); 
    }
  };

  return (
    <>
    
      {isLg ? (
      <header className="sticky top-0 z-50 bg-gradient-to-r from-[#151b23] via-blue-950 to-[#151b23] flex justify-between items-center">
      <div className="basis-1/3">
        <img src={logoLeft} alt="Left Image" className="mx-4 w-12 h-12 md:w-13 md:h-13 cursor-help"  onClick={() => window.open('https://istaceg.in', '_blank')}  />
      </div>

      <div className="basis-1/3">
        <img src={logoCenter} alt="Center Image" className="w-28 h-24 md:w-23 md:h-26 mx-auto" onClick={() => navigate('/')} />
      </div>

      <nav className="basis-1/3 relative flex justify-end">
        
          <ul className="flex text-white text-1xl gap-8 px-4 flex-row font-semibold">
            <li className="p-2 hover:text-slate-200 cursor-pointer" onClick={() => navigate('/')}>Home</li>
            <li className="p-2 hover:text-slate-200 cursor-pointer" onClick={handleAboutClick}>About</li>
            <li className="p-2 hover:text-slate-200 cursor-pointer" onClick={handleEventsClick}>Events</li>
            <li className="p-2 hover:text-slate-200 cursor-pointer"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
        ) : (
          <header className="sticky top-0 z-50 bg-gradient-to-r from-[#151b23] via-blue-950 to-[#151b23] flex justify-between items-center">

            <div className="basis-1/3">
            <img src={logoLeft} alt="Left Image" className="mx-4 w-12 h-12 md:w-13 md:h-13" />
            </div>

            <div className="basis-1/3">
              <img src={logoCenter} alt="Center Image" className="w-28 h-24 md:w-23 md:h-26 mx-auto" />
            </div>

            <nav className="basis-1/3 relative flex justify-end">
              <button onClick={toggleDropdown} className="text-4xl px-3 mt-2 text-white">
                ☰
              </button>
            </nav>
            {isDropdownOpen && (
              <ul className="absolute right-0 top-full  bg text-center flex flex-col  justify-center bg-gradient-to-r from-[#151b23] via-blue-950 to-[#151b23] w-full items-center">
                <li className="p-2 hover:text-slate-200 cursor-pointer" onClick={() => { setDropdownOpen(false); navigate('/'); }}>Home</li>
                <li className="p-2  hover:text-slate-200 cursor-pointer" onClick={() => { setDropdownOpen(false); handleAboutClick(); }}>About</li>
                <li className="p-2  hover:text-slate-200 cursor-pointer" onClick={() => { setDropdownOpen(false); handleEventsClick(); }}>Events</li>
                <li className="p-2  hover:text-slate-200 cursor-pointer"><a href="#contact" onClick={() => setDropdownOpen(false)}>Contact</a></li>
              </ul>
            )}
          
            
          </header>
        )}
      </>
  );
}
