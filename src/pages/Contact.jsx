import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import ContactSection from '../components/ContactSection';
import { Helmet } from 'react-helmet-async';
function Contact() {
document.title = "Alibros Learning Institute | Contact"
 const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const [msg, setmsg] = useState("");
  const [ph, setph] = useState('');
  const [Data, setData] = useState({});

   const onSubmitHandler = (e) => {
    e.preventDefault();
    if (name.trim() !== "" && email.trim() !== "" && msg.trim() !== "") {
      const data = {
        name: name,
        email: email,
        phoneNo : ph,
        subject: subject,
        message: msg,
      };
      setData({ ...data });
      console.log(Data);
      setemail('')
      setname('')
      setph('')
      setmsg('')
      setsubject('')
    }
  };

  return (
      <motion.div transition={{delay:0.2,opacity:0}} className="mt-[9vh] sm:mt-[12vh] md:mt-[14vh] lg:mt-[15vh] ">
       <Helmet>
        {/* Title */}
        <title>Contact Us | Alibros Learning Institute</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Get in touch with Alibros Learning Institute for course inquiries, enrollment, and support. Call, email, or visit us at our Ormanjhi office."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="Alibros Learning Institute contact, programming course support, course inquiries, enrollment help, Ormanjhi institute address, call Alibros"
        />

        {/* Author */}
        <meta name="author" content="Alibros Learning Institute" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Alibros Learning Institute" />
        <meta
          property="og:description"
          content="Have questions about our courses? Reach out via phone, email, or visit our office. Our team is here to help."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alilearning.org/contact" />
        <meta property="og:site_name" content="Alibros Learning Institute" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Alibros Learning Institute" />
        <meta
          name="twitter:description"
          content="Connect with Alibros Learning Institute for support, admissions, and course inquiries."
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
          className="text-4xl md:text-6xl  font-bold mb-4"
        >
         Contact Alibros Learning
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl max-w-2xl mx-auto"
        >
          Have questions about our courses? Our team is here to help you with enrollment, course selection, and any other inquiries.
        </motion.p>
      </motion.section>
    <ContactSection />
 {/* Conatct Form */}
 <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-10 bg-zinc-50 flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between items-center p-6 sm:p-10"
    >
      {/* Left Form */}
      <motion.div
        
        className="w-full lg:w-1/2 bg-white px-6 py-6 shadow-lg sm:px-10 rounded-md"
      >
        <h1 className="mb-4 text-2xl font-semibold text-blue-900 text-center">
          Send Us a Message
        </h1>
        <form   onSubmit={onSubmitHandler} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-zinc-700 ml-1">
              Name
            </label>
            <input
              onChange={(e) => setname(e.target.value)}
              value={name}
              type="text"
              className="w-full bg-white px-4 py-2 rounded-md outline-none border border-zinc-700"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-zinc-700 ml-1">
              Email
            </label>
            <input
              onChange={(e) => setemail(e.target.value)}
              value={email}
              type="email"
              className="w-full bg-white px-4 py-2 rounded-md outline-none border border-zinc-700"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="ph" className="text-zinc-700 ml-1">
              Phone No
            </label>
            <input
              onChange={(e) => setph(e.target.value)}
              value={ph}
              type="text"
              className="w-full bg-white px-4 py-2 rounded-md outline-none border border-zinc-700"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-zinc-700 ml-1">
              Message
            </label>
            <textarea
              onChange={(e) => setmsg(e.target.value)}
              value={msg}
              rows={5}
              className="bg-white py-2 px-4 rounded-md w-full outline-none border border-zinc-700"
            ></textarea>
          </div>

          <button className="bg-blue-900 px-5 py-2 rounded-md text-white hover:bg-blue-950 duration-300 cursor-pointer">
            Send Message
          </button>
        </form>
      </motion.div>

      {/* Right Map */}
      <motion.div
        
        className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px] shadow-lg rounded-md overflow-hidden"
      >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d726.1799057079279!2d85.46769276277459!3d23.471246813149737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4fb0072937b57%3A0xb54354dd2dfbc4be!2sAlibros%20Infotech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1758185224923!5m2!1sen!2sin"  className='w-full h-full' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </motion.div>
    </motion.div>
  
     <motion.div
             className="text-center bg-blue-700 text-white p-10 md:p-16 rounded-xl mt-16 shadow-2xl mb-15 mx-4"
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.5 }}
             transition={{ duration: 0.5 }}
           >
             <h2 className="text-4xl font-extrabold mb-4">Still Have Questions?</h2>
             <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
               Our team is ready to help you start your programming journey
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <motion.button
                 whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                 className="bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-[#ffffffda]  duration-200"
               >
                 Call Us Now
               </motion.button>
               <motion.button
                 whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                 className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-black duration-200"
               >
                 Email Us
               </motion.button>
             </div>
           </motion.div>
 

    </motion.div>
  )
}

export default Contact