import { FaFacebookF, FaInstagram,FaLinkedin,FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function SocialBar() {
  const links = [
    { name: "Facebook", icon: <FaFacebookF />, url: "https://facebook.com" },
    { name: "Instagram", icon: <FaInstagram />, url: "https://instagram.com" },
    { name: "Whatsapp", icon: <FaWhatsapp />, url: "https://whatsapp.web" },
    { name: "Youtube", icon: <FaYoutube />, url: "https://youtube.com" },
    { name: "Linkedin", icon: <FaLinkedin />, url: "https://linkedin.com" },


  ];

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-50">
        <div className="bg-blue-500  w-10 hover:w-36 ease duration-300 rounded-l-lg overflow-hidden">

        
      {links.map((link, i) => (
        <a
          key={i}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center  text-white 
                     transition-all duration-300 
                     overflow-hidden hover:bg-blue-600"
        >
          <span className="p-3 text-lg">{link.icon}</span>
          <span className="whitespace-nowrap   duration-300">
            {link.name}
          </span>
        </a>
      ))}
      </div>
    </div>
  );
}
