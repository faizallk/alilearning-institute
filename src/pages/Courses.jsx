import { motion } from "framer-motion";
import Course from "../components/templates/Course";
import LearnigPath from "../components/templates/LearnigPath";
import { Helmet } from 'react-helmet-async';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  }),
};

export default function Courses() {
  
const title = "Courses | Alibros Learning Institute";
  const description =
    "Browse Alibros Learning Institute’s programming courses in C, C++, PHP, Laravel, CodeIgniter, and MySQL. Learn with structured paths, projects, and expert guidance.";
  const url = "https://alilearning.org/courses"; 

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
 const learning = [
    {
      id:7,
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
    <motion.div transition={{delay:0.2,opacity:0}} className="mt-[9vh] sm:mt-[12vh] md:mt-[14vh] lg:mt-[15vh] ">
      {/* ✅ Meta tags */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="programming courses, C course, C++ course, PHP course, Laravel course, CodeIgniter course, MySQL course, coding institute"
        />
        <meta name="author" content="Alibros Learning Institute" />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta
          property="og:image"
          content="https://alilearning.org/assets/favicon-logo.jpeg"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://alilearning.org/assets/favicon-logo.jpeg"
        />
      </Helmet>
     
      {/* ✅ Hero Section */}
      <motion.section initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }} className="bg-gradient-to-b from-blue-600 via-blue-600/95 to-white text-white text-center py-24 px-6">
        <motion.h1
           initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Explore Our Courses
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl max-w-2xl mx-auto"
        >
          Learn from industry experts and advance your skills
        </motion.p>
      </motion.section>

    

      <div className="py-16 px-6 lg:px-20">
        <div className="text-center mb-12">
          <motion.h1
           initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }} className="text-3xl md:text-5xl font-semibold">Featured Courses</motion.h1>
          <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }} className="text-zinc-600 mt-3">Start your programming journey today</motion.p>
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
          
        </motion.div>
      </div>
   {/* Learning Paths */}
      <section className="py-16 px-6 lg:px-20 bg-zinc-100">
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
           <LearnigPath path={path}  key={i} />
          ))}
        </div>
      </section>
    </motion.div>
  );
}
