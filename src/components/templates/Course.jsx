import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';

function Course({course,fadeUp}) {
  return (
   <div to={`/course/${course.id}/details`}>
  <motion.div
    key={course.id}
    className="bg-white rounded-xl shadow hover:shadow-2xl overflow-hidden transition-all flex flex-col h-full"
    initial="hidden"
    whileInView="visible"
    transition={{ delay: 0.1 }}
    viewport={{ once: true }}
    variants={fadeUp}
    custom={course.id}
  >
    {/* Equal height image */}
    <div className="w-full h-40 sm:h-44 md:h-40 lg:h-40 overflow-hidden">
      <img 
        src={course.image} 
        alt={course.title} 
        className="w-full h-full object-cover" 
      />
    </div>

    {/* Content area */}
    <div className="p-5 flex flex-col flex-grow">
      <h3 className="text-lg md:text-xl font-semibold mb-2">{course.title}</h3>
      <p className="text-sm text-zinc-600 text-justify flex-grow">{course.description}</p>

      <div className="flex justify-between text-xs text-zinc-500 mt-3">
        <span>Level: {course.level}</span>
        <span>Duration: {course.duration}</span>
      </div>

      {/* Button aligned bottom */}
      <Link
        to={`/course/${course.id}/details`}
        className="mt-4 block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all"
      >
        View Details
      </Link>
    </div>
  </motion.div>
</div>

  )
}

export default Course