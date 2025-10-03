import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Course from "../components/templates/Course";
import LearnigPath from "../components/templates/LearnigPath";
import CourseHeroSlider from "../components/templates/CourseHeroSlider";
import { Helmet } from "react-helmet-async";


const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

function Home() {
document.title = "Alibros Learning Institute"

 const title = "Alibros Learning Institute | Learn C, C++, PHP, Laravel & More";
  const description =
    "Join Alibros Learning Institute to master C, C++, PHP, Laravel, CodeIgniter, and MySQL with structured learning paths, expert instructors, and real-world projects.";
  const url = "https://www.alilearning.org/"; 

  const cardDetails = [
    {
      id: 1,
      title: "Expert Instructors",
      description:
        "Learn directly from industry experts with years of hands-on experience.",
      icon: "ri-graduation-cap-line",
    },
    {
      id: 2,
      title: "Flexible Learning",
      description:
        "Learn anytime, anywhere with self-paced structured modules.",
      icon: "ri-file-list-2-line",
    },
    {
      id: 3,
      title: "Industry Certificates",
      description:
        "Earn recognized certificates to boost your professional profile.",
      icon: "ri-shield-check-line",
    },
  ];

 const courses = [
  {
    id: 1,
    title: "C Programming Masterclass",
    category: "C",
    level: "Beginner",
    description:
      "Learn C from scratch with hands-on exercises and projects. Perfect for absolute beginners.",
    image: "assets/c-program.jpg",  
    duration: "8 weeks",
    rating: 4.7,
    projects: 5,
  },
  {
    id: 2,
    title: "C++ Object-Oriented Programming",
    category: "C++",
    level: "Intermediate",
    description:
      "Master OOP concepts, STL, and modern C++ features with real-world projects.",
    image: "assets/cpp-pro.jpg",  
    duration: "10 weeks",
    rating: 4.8,
    projects: 6,
  },
  {
    id: 3,
    title: "PHP for Web Development",
    category: "PHP",
    level: "Beginner",
    description:
      "Build dynamic websites with PHP. Learn forms, sessions, databases and more.",
    image: "assets/php-pro.jpg",  
    duration: "7 weeks",
    rating: 4.6,
    projects: 4,
  },
  {
    id: 4,
    title: "Laravel Framework Deep Dive",
    category: "Laravel",
    level: "Advanced",
    description:
      "Master Laravel framework with advanced topics like APIs, authentication, and deployment.",
    image: "assets/laravel-p.jpg",  
    duration: "12 weeks",
    rating: 4.9,
    projects: 8,
  },
  {
    id: 5,
    title: "CodeIgniter Rapid Development",
    category: "CodeIgniter",
    level: "Intermediate",
    description:
      "Learn to develop fast and scalable web apps using CodeIgniter framework.",
    image: "assets/codel.jpg",  
    duration: "9 weeks",
    rating: 4.5,
    projects: 5,
  },
  {
    id: 6,
    title: "MySQL Database Design",
    category: "MySQL",
    level: "Beginner",
    description:
      "Learn relational database design, normalization, and queries with MySQL.",
    image: "assets/mysq.jpg",  
    duration: "6 weeks",
    rating: 4.7,
    projects: 4,
  },
];

  const languages = [
    { title: "C Programming", description: "Master the basics of programming", icon: "assets/c.png" },
    { title: "C++", description: "Object-oriented programming concepts", icon: "assets/c++.png" },
    { title: "PHP", description: "Server-side scripting language", icon: "assets/php.png" },
    { title: "Laravel", description: "PHP framework for web artisans", icon: "assets/laravel.png" },
    { title: "CodeIgniter", description: "Lightweight PHP framework", icon: "assets/ci.png" },
    { title: "MySQL", description: "Relational database management", icon: "assets/mysql.png" },
  ];

  const learning = [
    { id:7,
      role: "Backend Developer",
      skills: [
        "C Fundamentals",
        "Advanced C++ Concepts",
        "PHP & MySQL Integration",
        "Laravel Framework Mastery",
        "RESTful API Development",
      ],
    },
    {
      id:8,
      role: "Full Stack Developer",
      skills: [
        "HTML5 & CSS3",
        "JavaScript Essentials",
        "PHP Backend Development",
        "Laravel/CodeIgniter Frameworks",
        "MySQL Database Design",
      ],
    },
    {
      id:9,
      role: "System Programmer",
      skills: [
        "C Deep Dive",
        "C++ Data Structures",
        "Algorithm Design",
        "Memory Management",
        "System Architecture",
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden mt-[9vh] sm:mt-[12vh] md:mt-[14vh] lg:mt-[15vh] ">
   {/* ✅ Meta tags */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content="Alibros Learning Institute" />
        <meta name="keywords" content="C programming, C++, PHP, Laravel, CodeIgniter, MySQL, programming courses, coding institute, developer training" />

        {/* Open Graph (for social sharing) */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="https://www.alilearning.org/assets/favicon-logo.jpg" /> {/* Replace with real image */}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://www.alilearning.org/assets/favicon-logo.jpg" />
      </Helmet>
   
      {/* Hero Section */}
  <CourseHeroSlider />

      {/* Why Choose Us */}
      <div className="py-16 px-6 lg:px-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-semibold">Why Choose Us?</h1>
          <p className="text-zinc-600 mt-3 max-w-2xl mx-auto">
            We are dedicated to providing an unparalleled learning experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardDetails.map((detail, i) => (
            <motion.div
              key={detail.id}
              className="p-8 shadow rounded-xl text-center bg-white hover:shadow-xl transition-all"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              <i className={`${detail.icon} text-5xl text-blue-500 mb-4`}></i>
              <h2 className="text-xl font-semibold mb-2">{detail.title}</h2>
              <p className="text-zinc-600 text-sm">{detail.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="py-16 px-6 lg:px-20 bg-zinc-100">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Our Programming Languages
          </h1>
          <p className="text-zinc-600 mt-3 max-w-2xl mx-auto">
            Learn the most in-demand technologies in the industry
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {languages.map((e, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg text-center transition-all"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              <img src={e.icon} className="h-20 w-20 mx-auto mb-3" alt={e.title} />
              <h2 className="text-lg font-semibold">{e.title}</h2>
              <p className="text-sm text-zinc-600 mt-1">{e.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Courses */}
      <div className="py-16 px-6 lg:px-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-semibold">Featured Courses</h1>
          <p className="text-zinc-600 mt-3">Start your programming journey today</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, i) => (
           <Course course={course} fadeUp={fadeUp} key={i} />
          ))}
        </div>
        <motion.div
              
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
             variants={fadeUp}
              custom={1} className="text-center mt-10">
          <Link
            to="/courses"
            className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
          >
            View All Courses
          </Link>
        </motion.div>
      </div>

      {/* Learning Paths */}
      <div className="py-16 px-6 lg:px-20 bg-zinc-100">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Structured Learning Paths
          </h1>
          <p className="text-zinc-600 mt-3 max-w-2xl mx-auto">
            Follow our guided paths to become a professional developer
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {learning.map((path, i) => (
           <LearnigPath path={path} fadeUp={fadeUp} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
