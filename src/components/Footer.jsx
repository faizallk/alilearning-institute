import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { CoursesContext } from './../Context/CourseContext';
import Courses from "../pages/Courses";
const fadeUp = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};
function Footer() {
  const {Courses} =useContext(CoursesContext);
 
  return (
  <motion.div  
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ delay: .2 }}
  variants={fadeUp} 
  className="w-full bg-blue-950 px-6 sm:px-10 py-8 md:py-12 flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-12"
>
  {/* Left - Logo & About */}
  <div className="md:w-[28%] w-full">
    <h1 className="text-2xl sm:text-3xl text-white font-semibold">
      Alibros Learning Institute
    </h1>
    <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
      Empowering the next generation of developers with practical,
      project-based learning since 2025.
    </p>
    <div className="mt-5 flex gap-3 flex-wrap">
      {[
        "ri-instagram-line",
        "ri-twitter-line",
        "ri-linkedin-fill",
        "ri-youtube-fill",
        "ri-stack-overflow-line",
      ].map((icon, i) => (
        <div 
          key={i} 
          className="bg-zinc-500 h-8 w-8 rounded-full flex items-center justify-center hover:bg-blue-500 duration-300 transform hover:-translate-y-1 cursor-pointer"
        >
          <i className={`text-zinc-100 text-lg ${icon}`}></i>
        </div>
      ))}
    </div>
  </div>

  {/* Quick Links */}
  <div className="md:w-[18%] w-full">
    <h1 className="text-white text-lg font-semibold mb-4 uppercase">
      Quick Links
    </h1>
    <div className="flex flex-col gap-2 text-sm">
      {["Home", "About", "Courses", "Fees", "Contact"].map((e, i) => (
        <Link
          key={i}
          to={e.toLowerCase() === "home" ? "/" : `/${e.toLowerCase()}`}
          className="text-white hover:underline hover:text-zinc-200 duration-200"
        >
          {e}
        </Link>
      ))}
    </div>
  </div>

  {/* Courses */}
  <div className="md:w-[20%] w-full">
    <h1 className="text-white text-lg font-semibold mb-4 uppercase">
      Courses
    </h1>
    <div className="flex flex-col gap-2 text-sm">
      {Courses.map((e, i) => (
        <Link 
          to={`/course/${e.id}/details`}
          key={i}
          className="text-white hover:text-zinc-200 hover:underline duration-200"
        >
          {e.title}
        </Link>
      ))}
    </div>
  </div>

  {/* Contact */}
  <div className="md:w-[28%] w-full flex flex-col gap-2">
    <h1 className="text-white text-lg font-semibold mb-2 uppercase">
      Contact
    </h1>
    <p className="text-white text-sm leading-relaxed">
      <i className="ri-map-pin-line"></i> Banke Bihari Market, Near Block Chowk, Ormanjhi Ranchi, Jharkhand - 835219
    </p>
    <p className="text-white text-sm mt-2">
      <i className="ri-phone-line"></i> +91-8340265398 , 8210243226
    </p>
    <p className="text-white text-sm mt-2">
      <i className="ri-mail-line"></i> support@alilearning.org
    </p>
    <p className="text-white text-sm mt-2">
      <i className="ri-time-line"></i> Mon-Sat: 10:00 AM - 6:00 PM
    </p>
  </div>
</motion.div>

  );
}

export default Footer;
