import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ContactSection() {
  return (
    <motion.section
      className="w-full p-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {[
        {
          icon: "ri-map-pin-line",
          title: "Our Location",
          desc: "Banke Bihari Market , Near Block Chowk Ormanjhi , Ranchi , Jharkhand - 835219",
          link: "#",
        },
        {
          icon: "ri-phone-line",
          title: "Contact Us",
          desc: "+91 8240265398, +91 8210243226 ",
          link: "#",
        },
        {
          icon: "ri-mail-line",
          title: "Email Us",
          desc: "support@alilearning.org",
          link: "#",
        },
         
      ].map((item, i) => (
        <motion.div
          key={i}
          className="flex flex-col justify-center items-center shadow px-5 py-6 rounded-lg bg-white hover:shadow-lg duration-200"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <i className={`${item.icon} text-4xl text-blue-600`}></i>
          <h1 className="text-xl font-semibold mt-3">{item.title}</h1>
          <p className="text-center my-2 text-zinc-600">{item.desc}</p>
         
        </motion.div>
      ))}
    </motion.section>
  );
}
