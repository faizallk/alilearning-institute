import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";



export default function AdmissionPopup() {
  const [open, setOpen] = useState(false);

 
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    
    const showPopup = setTimeout(() => {
      setOpen(true); 
    }, 1000); 

    
    return () => clearTimeout(showPopup);
  }, []); 

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[4000] flex items-center justify-center bg-black/60 backdrop-blur-sm" // Darker overlay with blur
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleClose} 
        >
          <motion.div
        
            className="bg-white rounded-2xl shadow-2xl p-5 sm:p-8 max-w-xs sm:max-w-sm w-11/12 relative text-center overflow-hidden mx-auto" // Added mx-auto for centering on very small screens if max-w applies
            initial={{ y: -50, opacity: 0, scale: 0.7 }} 
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.7 }} 
            transition={{ type: "spring", damping: 15, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()} 
          >
           
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 opacity-70"></div>
           
            <button
              onClick={handleClose} 
              className="absolute z-[5000] top-2 right-2 sm:top-3 sm:right-3 text-gray-500 hover:text-gray-900 text-xl sm:text-2xl font-semibold transition-transform duration-200 hover:rotate-90" // Larger, rotating close button
              aria-label="Close popup"
            >
              &times;
            </button>
            <div className="relative z-20"> 
              <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-800 mt-4 mb-2 sm:mb-3 leading-tight">
                Admissions Open at <br /> Alibros Learning Institute!
                <span className="ml-1 sm:ml-2 text-amber-500">🎉</span>

              </h2>
              <p className="text-sm sm:text-md text-gray-700 mb-5 sm:mb-6">
                Unlock your potential with our expert-led courses. Limited seats
                available for the new batch – secure your future today!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Link
                 to="/courses"
                  onClick={handleClose} 
                  className="px-5 py-2 sm:px-6 bg-amber-600 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 transition-all duration-300 transform "
                  whileHover={{
                    boxShadow: "0px 8px 20px rgba(245, 158, 11, 0.4)",
                  }}
                >
                  Apply Now
                </Link>
                <Link
                 to="/contact"
                  onClick={handleClose}
                  className="px-5 py-2 sm:px-6 border-2 border-blue-600 text-blue-700 font-semibold rounded-lg shadow-md hover:bg-blue-50 transition-all duration-300 transform "
                  whileHover={{
                    boxShadow: "0px 8px 20px rgba(59, 130, 246, 0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Call Us
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}