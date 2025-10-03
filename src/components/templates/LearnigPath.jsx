import React from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {  duration: 0.6, ease: "easeOut" },
  }),
};

function LearnigPath({path}) {
  return ( <div>
     <motion.div
              key={path.id}
              className="bg-white rounded-xl p-8 shadow hover:shadow-xl flex flex-col justify-between transition-all"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={path.id}
            >
              <h2 className="text-xl font-semibold mb-4">{path.role}</h2>
              <ul className="text-sm text-zinc-700 flex-grow">
                {path.skills.map((skill, j) => (
                  <li key={j} className="flex items-center gap-2 mb-2">
                    <i className="ri-checkbox-circle-fill text-green-500"></i>
                    {skill}
                  </li>
                ))}
              </ul>
              <Link to={`/course/${path.id}/details`} className="px-6 text-center py-2 mt-4 border border-green-500 text-green-600 rounded hover:bg-green-500 hover:text-white transition-all">
                View Path
              </Link>
            </motion.div></div>
  )
}

export default LearnigPath