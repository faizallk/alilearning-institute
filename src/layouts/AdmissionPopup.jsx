import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
// Lucide React Icons
import { BookOpen, Award, Zap, X } from "lucide-react"; 

export default function AdmissionPopup() {
  const [open, setOpen] = useState(false);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    // Show popup after 1 second (1000ms)
    const showPopup = setTimeout(() => {
      setOpen(true);
    }, 1000);

    // Cleanup function
    return () => clearTimeout(showPopup);
  }, []);

  // Base motion props for the main modal content
  const modalSpring = { type: "spring", damping: 15, stiffness: 300 };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[4000] flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleClose}
        >
          <motion.div
            className="bg-white rounded-xl shadow-2xl p-0 max-w-3xl w-11/12 relative text-center mx-auto" 
            initial={{ y: -50, opacity: 0, scale: 0.8 }} 
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.8 }}
            transition={modalSpring}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-indigo-50 opacity-90 -z-10 rounded-xl"></div>

            {/* Lucide Close Button */}
            <button
              onClick={handleClose}
              className="absolute z-[5000] top-2 right-2 text-gray-200 hover:text-gray-400  duration-200 p-2"
              aria-label="Close popup"
            >
              <X className="w-6 h-6" /> 
            </button>

            {/* Main Title Area */}
            <div className="py-4 px-6 bg-indigo-700 text-white rounded-t-xl shadow-md">
              <h2 className="text-lg sm:text-2xl font-extrabold leading-tight">
                Admissions Open at Alibros Institute
              </h2>
              <p className="text-xs mt-1 opacity-90">Career-Focused Training & Guaranteed Placement</p>
            </div>

            {/* --- Content Sections --- */}
            <div 
              className="p-4 sm:p-5 flex flex-col sm:flex-row gap-3 sm:gap-4 text-left"
            >
              
              {/* 1. Courses Section */}
              <motion.div
                className="flex-1 bg-white p-3 rounded-lg shadow-md border-t-2 border-blue-500 hover:shadow-lg transition-shadow duration-300"
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center mb-1">
                  <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="text-sm font-bold text-blue-700">
                    Courses Offered
                  </h3>
                </div>
                <p className="text-gray-700 text-xs mb-2">
                  Master <strong>Full Stack Development</strong> & <strong>C, C++ Programming</strong>.
                Job-focused curriculum designed and led by industry experts. 
                <br /> Secure your future with 100% placement support!
                </p>
                <Link
                  to="/courses"
                  onClick={handleClose}
                  className="text-blue-600 text-xs font-semibold hover:text-blue-800 transition-colors inline-flex items-center"
                >
                  Explore Programs &rarr;
                </Link>
              </motion.div>

              {/* 2. Training Section */}
              <motion.div
                className="flex-1 bg-white p-3 rounded-lg shadow-md border-t-2 border-green-500 hover:shadow-lg transition-shadow duration-300"
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center mb-1">
                  <Zap className="w-5 h-5 text-green-600 mr-2" />
                  <h3 className="text-sm font-bold text-green-700">
                    Hands-On Training
                  </h3>
                </div>
                <p className="text-gray-700 text-xs mb-2">
                  Focus on live projects and portfolio development. Personalized mentorship guaranteed.
                </p>
                <p className="text-[10px] mt-2 text-gray-500 italic">
                    Training for instant employability.
                </p>
              </motion.div>

              {/* 3. Placement Section - Amber/Gold for value */}
              <motion.div
                className="flex-1 bg-amber-50 p-3 rounded-lg shadow-lg border-2 border-amber-500 hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center mb-1 justify-start">
                  <Award className="w-5 h-5 text-amber-600 mr-2" />
                  <h3 className="text-sm font-extrabold text-amber-700">
                    100% Placement Guarantee
                  </h3>
                </div>
                <p className="text-gray-800 font-semibold text-xs mb-2">
                  Guaranteed job placement or your money back. Access top hiring partners.
                </p>
                <div className="text-center">
                    {/* Stars/Emojis are now fully removed */}
                    <span className="inline-block px-2 py-0.5 bg-amber-600 text-white text-[10px] font-bold rounded-full">
                        Highest Success Rate!
                    </span>
                </div>
              </motion.div>

            </div>
            
            {/* Final CTA/Footer - Contact Us (All stars/emojis removed) */}
            <div className="bg-gray-100 py-3 text-sm font-bold text-indigo-700 uppercase tracking-wider border-t border-gray-200 transition-colors hover:bg-gray-200 cursor-pointer sticky bottom-0 z-40 rounded-b-xl">
              <Link to="/contact" onClick={handleClose} className="block w-full">
                Contact Us for Fee & Admission Details
              </Link>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}