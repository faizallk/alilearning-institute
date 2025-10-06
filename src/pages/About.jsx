import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

function About() {
document.title = "About | Alibros Learning Institute"

  const team = [
    {
      name: "MD Sikandar Ali",
      role: "CEO",
          },
    {
      name: "MD Akbar Ali",
      role: "Director",
        },
    {
      name: "Jawed Ansari",
      role: "MD",
        },
    {
      name: "Faizal Khan",
      role: "IT Trainer",
         },
    // {
    //   name: "Daniel Wong",
    //   role: "DevOps Engineer",
    //   img: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    // },
    // {
    //   name: "Chris Lee",
    //   role: "Mobile Developer",
    //   img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    // },
    // {
    //   name: "Alex Choi",
    //   role: "Data Scientist",
    //   img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    // },
    // {
    //   name: "Emma Lee",
    //   role: "QA Engineer",
    //   img: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    // },
  ];
const mission = [
            
            {
              title: "Education First",
              desc: "We believe in the transformative power of education. Our primary goal is to make quality programming education accessible to everyone, regardless of background.",
              icon: "ri-graduation-cap-line",
            },
            {
              title: "Practical Skills",
              desc: "Our curriculum focuses on real-world applications. Students learn by building actual projects, not just solving theoretical problems.",
              icon: "ri-code-s-slash-fill",
            },{
              title: "Community Focus",
              desc: "We foster a supportive learning community where students and alumni help each other grow through mentorship and collaboration.",
              icon: "ri-group-line",
            },{
              title: "Excellence",
              desc: "We maintain high standards for both our instructors and students, ensuring our graduates are among the most competent developers.",
              icon: "ri-award-line",
            },{
              title: "Innovation",
              desc: "We continuously update our curriculum to reflect the latest industry trends and technological advancements.",
              icon: "ri-lightbulb-line",
            },
            {
              title: "Career Success",
              desc: "Our ultimate measure of success is our students' ability to launch and grow rewarding careers in technology.",
              icon: "ri-briefcase-line",
            },
          ]
  return (
    <div className="w-full mt-[9vh] sm:mt-[12vh] md:mt-[8vh] lg:mt-[15vh] overflow-hidden">
       {/* ✅ SEO Helmet */}
      <Helmet>
        <title>About Us | Alibros Learning Institute</title>
        <meta
          name="description"
          content="Learn about Alibros Learning Institute – our story, mission, vision, and team. We provide high-quality programming education with real-world projects."
        />
        <meta
          name="keywords"
          content="Alibros Learning, About Alibros, coding institute Ranchi, programming courses, IT training, software development education"
        />
        <meta property="og:title" content="About Us | Alibros Learning Institute" />
        <meta
          property="og:description"
          content="Alibros Learning Institute is dedicated to transforming education for a digital future through practical programming courses and mentorship."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alilearning.org/about" />
        <meta property="og:image" content="/assets/no-person.png" />
        <link rel="canonical" href="https://alilearning.org/about" />
      </Helmet>
     
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-b from-blue-600 via-blue-600/95 to-white text-white py-20 px-6 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold">About Alibros Learning Institute</h1>
        <p className="mt-4 text-lg md:text-2xl font-light">
          Transforming Education for a Digital Future
        </p>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <Link
            to="/courses"
            className="px-6 py-2 bg-white text-blue-600 rounded-md font-semibold hover:bg-blue-100 transition"
          >
            Explore Courses
          </Link>
          <Link
            to="/contact"
            className="px-6 py-2 bg-blue-800 text-white rounded-md font-semibold hover:bg-blue-900 transition"
          >
            Get in Touch
          </Link>
        </div>
      </motion.section>

      {/* Our Story */}
      <section className="px-6 md:px-20 py-16 flex flex-col md:flex-row gap-10 items-center">
        <motion.img
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          src="/assets/aboutclass.png"
          alt="Our Story"
          className="rounded-lg shadow-lg  w-full md:w-1/2 object-cover"
        />
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex flex-col justify-between"
        >
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600   leading-relaxed text-justify">
           Founded in 2025 by a group of passionate software engineers, Alibros Learning began as a small coding bootcamp in Banke Bihari Market, Near Block Chowk, Ormanjhi Ranchi, Jharkhand - 835219
          </p>
          <p className=" my-2 text-justify leading-relaxed text-zinc-600">What started as weekend workshops teaching C programming has grown into a premier technical education institute offering comprehensive courses in multiple programming languages and frameworks.</p>
          <p className="my-2 text-justify leading-relaxed  text-zinc-600">Our founders recognized a gap between academic computer science and the practical skills needed in the tech industry. They set out to create a learning environment that combines rigorous technical training with real-world project experience.</p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-blue-50 px-6 md:px-20 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10"
        >
          Our Mission & Vision
        </motion.h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mission.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition"
            >
              <div className="text-4xl mb-3 "><i className={`${item.icon} text-blue-600 text-5xl font-light `}></i></div>
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-justify text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="px-6 md:px-20 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-10"
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center bg-white rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <img
                src='/assets/no-person.png'
                alt={member.name}
                className="w-28 h-28 rounded-full object-cover mb-4"
              />
              <h4 className="font-semibold">{member.name}</h4>
              <p className="text-sm text-gray-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
