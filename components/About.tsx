"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import profile from "@/public/images/rafsan.png";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center max-w-[1920px] mx-auto px-6 md:px-10 lg:px-20 overflow-hidden py-20 lg:py-0"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 w-full">
        
        {/* বাম পাশের ছবি (মোবাইলে উপরে থাকবে) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] shrink-0 lg:ml-20 lg:-mt-4"
        >
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#14b8a6]/30 p-2">
            <div className="w-full h-full rounded-full overflow-hidden relative bg-zinc-900">
              <Image
                src={profile}
                alt="Rafsanul Rifat"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          {/* ছবির পেছনে একটা গ্লো ইফেক্ট (ঐচ্ছিক, দেখতে সুন্দর লাগে) */}
          <div className="absolute inset-0 bg-[#14b8a6]/10 blur-[80px] rounded-full -z-10" />
        </motion.div>

        {/* ডান পাশের টেক্সট (মোবাইলে নিচে থাকবে) */}
        <div className="w-full max-w-[600px] lg:max-w-[50%] -mt-4 lg:mt-0">
          {/* টাইটেল: About Me */}
          <motion.h3
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#14b8a6] text-[20px] md:text-[25px] uppercase tracking-[7px] mb-6 font-space font-bold text-center md:text-left font-space-grotesk"
          >
            About Me
          </motion.h3>

          {/* প্যারাগ্রাফ */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-[24px] sm:text-[30px] lg:text-[1.8vw] min-[1950px]:text-[2.5rem] font-normal leading-[1.2] sm:leading-[38px] lg:leading-[2.4vw] min-[1950px]:leading-[3rem] tracking-[0.5px] font-space-grotesk pl-2 md:pl-0"
          >
            I am a Computer Science student at Dhaka International University. 
            I have expertise in frontend development with React, Next.js, and Tailwind CSS. 
            Passionate about building efficient, production-ready solutions and looking 
            to grow my professional career.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;