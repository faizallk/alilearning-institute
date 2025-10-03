import React, { useContext, useEffect, useState } from 'react'
import { CoursesContext } from '../Context/CourseContext';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
function CourseDetails() {
  document.title = "Alibros Learning Institute | details"
  const { Courses } = useContext(CoursesContext);
  const { id } = useParams();
  const [filteredCourse, setfilteredCourse] = useState();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 80 },
    },
  };

  const getFilterCourse = () => {
    const filtered = Courses.find((c) => c.id === Number(id));
    setfilteredCourse(filtered);
  };

  useEffect(() => {
    getFilterCourse();
  }, [id]);

  return (
   
    <motion.div
      className="w-full min-h-screen px-5 mt-[9vh] sm:mt-[13vh] md:mt-[10vh] lg:mt-[15vh] "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
       <Helmet>
        {/* Basic Meta Tags */}
        <title> Course Details | Alibros Learning Institute</title>
        <meta
          name="description"
          content={filteredCourse?.description?.slice(0, 150) || "Explore high-quality courses at Alibros Learning Institute and boost your career."}
        />
        <meta
          name="keywords"
          content={`${filteredCourse?.title}, ${filteredCourse?.category}, ${filteredCourse?.level}, online courses, learning, Alibros Institute`}
        />
        <meta name="author" content="Alibros Learning Institute" />

        {/* Open Graph for Social Sharing */}
        <meta property="og:title" content={`${filteredCourse?.title} | Alibros Learning Institute`} />
        <meta property="og:description" content={filteredCourse?.description?.slice(0, 150)} />
        <meta property="og:image" content={filteredCourse?.image} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://alilearning.org/course/${filteredCourse?.id}/details`} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${filteredCourse?.title} | Alibros Learning Institute`} />
        <meta name="twitter:description" content={filteredCourse?.description?.slice(0, 150)} />
        <meta name="twitter:image" content={filteredCourse?.image} />

        {/* Responsive Tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      {/* Top Section */}
      <motion.div
        className="w-full flex flex-col lg:flex-row gap-5  items-center lg:items-start"
        variants={itemVariants}
      >
        {/* Image */}
        <motion.div
          className="w-full lg:w-[60%] h-[40vw] lg:h-[30vw] mt-6 rounded-2xl  overflow-hidden"
          variants={itemVariants}
        >
          <img
            src={filteredCourse?.image}
            className="w-full h-full object-cover"
            alt=""
          />
        </motion.div>

        {/* Course Info */}
        <motion.div
          className="w-full lg:w-[40%] bg-white px-5 py-10 rounded-lg"
          variants={itemVariants}
        >
          <span className="text-sm px-4 py-2 text-blue-900 bg-blue-200 font-semibold rounded-full">
            {filteredCourse?.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mt-5 mb-2 leading-snug">
            {filteredCourse?.title}
          </h1>
          <p className="w-full md:w-[80%] mb-5 text-zinc-600 text-sm md:text-base">
            {filteredCourse?.description}
          </p>
          <div className="flex gap-5 items-center mb-4 flex-wrap">
            <h5 className="font-semibold text-zinc-500">
              {filteredCourse?.level}
            </h5>
            <h5 className="font-semibold text-zinc-500">
              {filteredCourse?.rating}{' '}
              <i className="ri-star-fill text-amber-400"></i>
            </h5>
          </div>
          <Link className="inline-block font-semibold py-2 px-6 text-lg bg-blue-600 text-white rounded-md hover:bg-blue-700 duration-200 hover:shadow-sm hover:shadow-blue-300">
            Enroll Now
          </Link>
        </motion.div>
      </motion.div>

      {/* Content Section */}
 <motion.div
  className="w-full grid grid-cols-1 gap-6 p-6"
  variants={containerVariants}
>
  {/* Row 1 → About + What you learn */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    {/* About This Course */}
    <motion.div
      className="p-6 border h-fit border-zinc-200 rounded-lg shadow-lg"
      variants={itemVariants}
    >
      <h1 className="text-2xl md:text-4xl font-bold border-l-4 border-blue-600 px-4">
        About This Course
      </h1>
      <p className="w-full text-base md:text-base text-justify text-zinc-600 my-4">
        {filteredCourse?.about}
      </p>
    </motion.div>

    {/* What you learn */}
    <motion.div
      className="p-6 border h-fit border-zinc-200 rounded-lg shadow-lg"
      variants={itemVariants}
    >
      <h1 className="text-2xl md:text-4xl font-bold border-l-4 border-blue-600 px-4">
        What will you learn
      </h1>
      <ul className="mt-4">
        {filteredCourse?.whatYouWillLearn.map((e, i) => (
          <li
            key={i}
            className="text-base md:text-base ml-3 mt-3 text-zinc-600"
          >
            <i className="ri-checkbox-circle-fill text-blue-500 mr-2"></i>
            {e}
          </li>
        ))}
      </ul>
    </motion.div>
  </div>

  {/* Row 2 → Syllabus + Requirements */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    {/* Syllabus */}
    <motion.div
      className="rounded-lg shadow-lg p-6 flex flex-col items-start h-fit border border-zinc-200"
      variants={itemVariants}
    >
      <h1 className="text-2xl md:text-4xl font-bold tracking-wide border-l-4 border-blue-600 px-4">
        Course Syllabus
      </h1>
      <ul className="mt-4">
        {filteredCourse?.syllabus.map((e, i) => (
          <li
            key={i}
            className="text-base md:text-lg ml-3 mt-3 text-zinc-600"
          >
            <i className="ri-checkbox-circle-fill text-blue-500 mr-2"></i>
            {e}
          </li>
        ))}
      </ul>
    </motion.div>

    {/* Requirements */}
    <motion.div
      className="rounded-lg shadow-lg p-6 flex flex-col items-start h-fit border border-zinc-200"
      variants={itemVariants}
    >
      <h1 className="text-2xl md:text-4xl font-bold tracking-wide border-l-4 border-blue-600 px-4">
        Requirements
      </h1>
      <ul className="mt-4">
        {filteredCourse?.requirements.map((e, i) => (
          <li
            key={i}
            className="text-base md:text-lg ml-3 mt-3 text-zinc-600"
          >
            <i className="ri-checkbox-circle-fill text-blue-500 mr-2"></i>
            {e}
          </li>
        ))}
      </ul>
    </motion.div>
  </div>
</motion.div>


    </motion.div>
   
  );
}

export default CourseDetails;
