import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full py-5 px-6 flex justify-between items-center bg-white fixed top-0 left-0 z-[2000] shadow">
      {/* Logo */}
  <div className="flex items-center gap-4"> <img 
  src="/assets/favicon-logo.png" 
  alt="Logo" 
  className="h-8 w-auto max-h-12 object-contain sm:h-8 md:h-10 lg:h-12" 
/>
<h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#1E3A8A]">
  Alibros Learning Institute
</h2>

</div>


      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-10">
       <div className="flex items-center">
  {["Home", "About", "Courses", "Fees" , "Contact"].map((e, i) => (
    <NavLink style={(e)=>{
      return {
        fontWeight: e.isActive ? 600 : '',
         color: e.isActive ? 'black' : ''
      }
    }}
      to={e.toLowerCase() === "home" ? "/" : e.toLowerCase()}
      key={i}
      className="text-sm sm:text-base md:text-md lg:text-lg font-medium text-zinc-700 px-3 py-1 rounded hover:bg-blue-100 duration-200 hover:-translate-y-0.5"
    >
      {e}
    </NavLink>
  ))}
  <Link to={'/courses'} className="px-4 py-2 ml-6 hidden  sm:hidden lg:block text-white bg-blue-600 text-lg md:text-base  rounded-md hover:bg-blue-700 duration-200">
            Start Learning
          </Link>
</div>

        
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <HiX className="w-8 h-8 text-black" />
          ) : (
            <HiMenu className="w-8 h-8 text-black" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-[8vh] left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        {["Home", "About", "Courses", "Fees", "Contact"].map((e, i) => (
          <NavLink style={(e)=>{
      return {
        fontWeight: e.isActive ? 600 : '',
        color: e.isActive ? 'black' : ''
      }
    }}
            to={e.toLowerCase() === "home" ? "/" : e.toLowerCase()}
            key={i}
            onClick={() => setIsOpen(false)}
            className="text-lg font-semibold text-zinc-700 px-3 py-2 rounded hover:bg-blue-100 duration-200"
          >
            {e}
          </NavLink>
        ))}
        <Link to='/courses'
          onClick={() => setIsOpen(false)}
          className="px-4 py-2 text-white bg-blue-600 text-lg  rounded-md hover:bg-blue-700 duration-200"
        >
          Start Learning
        </Link>
      </div>
    </div>
  );
}

export default Nav;
