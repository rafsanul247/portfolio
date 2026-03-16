"use client";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <section className="relative w-full h-auto lg:h-screen overflow-hidden bg-[#050505] flex items-center justify-center">
      
      {/* ব্যাকগ্রাউন্ড সেইম থাকবে - জাস্ট অপাসিটি কমিয়ে ক্লিন রাখা */}
      <div className="fixed top-[-10%] left-[-10%] w-[35vw] h-[35vw] bg-[#22d3ee]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] bg-[#22d3ee]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* মেইন কন্টেইনার - এখানে আমরা উইডথ কন্ট্রোল করব যাতে বাইরে না যায় */}
      <div className="relative w-full max-w-[90vw] md:max-w-[85vw] h-full flex flex-col lg:flex-row items-center justify-between z-20 gap-0 lg:gap-10 mt-10 md:mt-0">
        
        {/* বাম পাশের অংশ: নাম - এখানে টেক্সট সাইজ 'clamp' করা হয়েছে */}
        <div className="flex flex-col items-start lg:items-end w-full lg:w-1/2 mt-5 md:mt-0">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[#14b8a6] text-[clamp(1rem,3vw,2rem)] font-light tracking-[4px] mb-2 uppercase font-space-grotesk"
          >
            Hello! I'm
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white text-[clamp(2.5rem,8vw,6rem)] font-bold tracking-tighter leading-[0.85] text-left lg:text-right uppercase"
          >
            RAFSANUL <br />
            <span className="text-zinc-800">RIFAT</span>
          </motion.h1>
        </div>

        {/* ডান পাশের অংশ: টাইটেল - এটি কখনো স্ক্রিনের বাইরে যাবে না */}
        <div className="flex flex-col items-start w-auto lg:w-1/2 ml-32 md:ml-0 mb-10 lg:mb-0">
          <motion.h3 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="text-zinc-500 text-[clamp(1rem,2.5vw,1.8rem)] font-light tracking-[4px] mb-1"
          >
            A Full Stack
          </motion.h3>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="relative"
          >
            <h2 className="text-[#14b8a6] text-[clamp(2.5rem,7vw,5.5rem)] font-black uppercase tracking-tighter leading-none">
              Developer
            </h2>
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-70" />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Landing;