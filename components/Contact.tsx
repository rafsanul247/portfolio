"use client";
import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <footer id="contact" className="font-space-grotesk pl-0 lg:pl-20 relative w-full bg-[#050505] pt-20 pb-10 overflow-hidden">
      <div className="max-w-[90vw] md:max-w-[85vw] mx-auto">
        
        {/* মেইন টাইটেল */}
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white text-[40px] md:text-[50px] lg:text-[60px] font-normal uppercase mb-12"
        >
          Contact
        </motion.h3>

        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-0">
          
          {/* ১. ইমেইল ও এডুকেশন */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="text-white/60 font-medium uppercase text-sm md:text-base mb-2">Email</h4>
              <p className="text-xl md:text-2xl">
                <a 
                  href="mailto:rafsan.cse.47@gmail.com" 
                  data-cursor="disable"
                  className="hover:text-[#14b8a6] transition-colors"
                >
                  rafsan.cse.47@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h4 className="text-white/60 font-medium uppercase text-sm md:text-base mb-2">Education</h4>
              <p className="text-xl md:text-2xl text-white">BSc in Computer Science</p>
            </div>
          </div>

          {/* ২. সোশ্যাল লিঙ্কস */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white/60 font-medium uppercase text-sm md:text-base mb-2">Social</h4>
            <div className="flex flex-col gap-2">
              {[
                { name: "Github", url: "https://github.com/rafsanul247" },
                { name: "Linkedin", url: "https://www.linkedin.com/in/rafsanulrifat47" },
                { name: "Twitter", url: "https://x.com/rafsan_official" },
                { name: "Instagram", url: "https://instagram.com/rafsan" }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  data-cursor="disable"
                  className="text-xl md:text-[25px] text-white flex items-center gap-2 border-b border-zinc-800 hover:border-[#14b8a6] hover:text-[#14b8a6] transition-all py-1 w-fit"
                >
                  {link.name} <MdArrowOutward className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* ৩. ক্রেডিট ও কপিরাইট */}
          <div className="flex flex-col justify-between items-start lg:items-end text-left lg:text-right gap-6">
            <h2 className="text-xl md:text-2xl font-normal leading-tight">
              Designed and Developed <br /> by <span className="text-[#14b8a6]">Rafsanul Rifat</span>
            </h2>
            <div className="mb-0 lg:mb-10">
            <h5 className="flex items-center gap-2 text-white/50 text-lg md:text-xl">
              <MdCopyright /> 2026
            </h5>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Contact;