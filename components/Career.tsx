"use client";
import { motion } from "framer-motion";

const Career = () => {
  const experiences = [
    {
      year: "NOW",
      role: "Full Stack Developer",
      company: "Freelancer",
      desc: "Building Solid, a proprietary low-code platform using Angular, Next.js & NestJS. Delivering production-ready CMS-based projects including e-commerce, CRM, and import-export automation systems.",
    },
    {
      year: "2025",
      role: "Teaching Python",
      company: "Self",
      desc: "Teaching Python to students and helping them with their projects.",
    },
    {
      year: "2023",
      role: "HTML, C++, Humadity Projects",
      company: "Self, College Projects",
      desc: "HTML projects, C++ projects, Humadity projects and many more.",
    },
    {
      year: "2022",
      role: "Nasa App Challenge",
      company: "Nasa",
      desc: "Nasa App Challenge visitor, idea maker, team leader.",
    },
    
  ];

  return (
    <section id="career" className="font-space-grotesk pl-0 lg:pl-20 relative w-full py-20 lg:py-32 bg-[#050505] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        
        {/* হেডলাইন - গ্রাডিয়েন্ট টেক্সট */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[45px] md:text-[60px] lg:text-[70px] leading-tight font-normal text-center mb-20 bg-gradient-to-t from-[#0d9488] to-white bg-clip-text text-transparent"
        >
          My career <span className="font-light">&</span> <br /> experience
        </motion.h2>

        <div className="relative w-full flex flex-col space-y-20 lg:space-y-32">
          
          {/* টাইমলাইন লাইন (ডেক্সটপে মাঝখানে, মোবাইলে বামে) */}
          <div className="absolute left-0 lg:left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-[#14b8a6] to-[#14b8a6] lg:-translate-x-1/2 pointer-events-none">
            {/* গ্লোয়িং ডট */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[10px] h-[10px] bg-[#14b8a6] rounded-full shadow-[0px_0px_15px_8px_#5eead4] animate-timelineGlow" />
          </div>

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex flex-col lg:flex-row items-start justify-between w-full pl-8 lg:pl-0"
            >
              {/* বাম বা ডান পাশের বক্স: রোল এবং বছর */}
              <div className="w-full lg:w-[42%] flex justify-between items-start gap-4 mb-4 lg:mb-0 text-left">
                <div className="space-y-1">
                  <h4 className="text-white text-2xl md:text-3xl font-medium leading-tight">{exp.role}</h4>
                  <h5 className="text-[#14b8a6] text-lg md:text-xl font-normal tracking-wide">{exp.company}</h5>
                </div>
                <h3 className="text-white text-4xl md:text-5xl font-bold leading-none">{exp.year}</h3>
              </div>

              {/* ডান বা বাম পাশের বক্স: ডেসক্রিপশন */}
              <div className="w-full lg:w-[42%]">
                <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes timelineGlow {
          0%, 100% { box-shadow: 0px 0px 5px 2px #67e8f9, 0px 0px 15px 5px #5eead4, 0px 0px 80px 15px #a5f3fc; }
          50% { box-shadow: 0px 0px 5px 2px #67e8f9; }
        }
        .animate-timelineGlow {
          animation: timelineGlow 1.5s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Career;