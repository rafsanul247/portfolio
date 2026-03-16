"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const services = [
    {
      title: "FRONTEND",
      sub: "Building Interactive UIs",
      desc: "Crafting performant, responsive interfaces with modern frameworks. From SPAs to micro-frontends, I deliver pixel-perfect experiences.",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Three.js"]
    },
    {
      title: "BACKEND",
      sub: "Scalable Server Architecture",
      desc: "Designing robust APIs and microservices. From database management to complex business logic, I build backends that scale.",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "Python"]
    }
  ];

  return (
    <section id="what-i-do" className="font-space-grotesk pl-0 lg:pl-20 relative min-h-screen flex items-center justify-center py-20 bg-black text-white overflow-hidden">
      <div className="flex flex-col md:flex-row w-full max-w-[1400px] px-6 md:px-12 gap-10 md:gap-0">
        
        {/* টাইটেল সেকশন */}
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start">
          <h2 className="text-6xl md:text-8xl font-bold leading-none tracking-tighter select-none">
            W<span className="italic font-extralight opacity-70">HAT</span> <br />
            I <span className="text-[#14b8a6]">DO</span>
          </h2>
        </div>

        {/* সার্ভিস বক্স সেকশন */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <div className="relative flex flex-col w-full max-w-[500px] border-y border-white/10 overflow-hidden">
            
            {services.map((service, index) => {
              const isActive = activeIndex === index;
              const isSibling = activeIndex !== null && activeIndex !== index;

              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className={`relative cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border-b border-white/10 p-8
                    ${isActive ? "h-[350px] bg-white/5" : "h-[120px]"}
                    ${isSibling ? "opacity-40" : "opacity-100"}
                  `}
                >
                  {/* কোণার ডিজাইন (Corners) */}
                  <div className={`absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
                  <div className={`absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
                  <div className={`absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
                  <div className={`absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>

                  <div className="relative h-full flex flex-col justify-start">
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-1 transition-transform duration-500">
                      {service.title}
                    </h3>
                    <h4 className="text-xs uppercase tracking-[0.2em] text-white/30 mb-6 transition-opacity duration-500">
                      {service.sub}
                    </h4>
                    
                    {/* ডিটেইলস কন্টেন্ট - শুধুমাত্র একটিভ হলে দেখা যাবে */}
                    <div className={`transition-all duration-500 delay-100 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}>
                      <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
                        {service.desc}
                      </p>
                      <h5 className="text-[10px] uppercase tracking-[3px] text-white/40 mb-3 font-medium">Skillset & Tools</h5>
                      <div className="flex flex-wrap gap-2">
                        {service.skills.map((skill) => (
                          <span key={skill} className="text-[10px] md:text-xs py-1 px-3 border border-white/20 rounded-full bg-white/5 whitespace-nowrap">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* অ্যারো আইকন */}
                    <div className="absolute bottom-2 right-0 w-8 h-8 flex items-center justify-center transition-all duration-500">
                      <div className={`w-2 h-2 border-b-2 border-l-2 border-white transition-transform duration-500 ${isActive ? 'rotate-[135deg]' : '-rotate-45'}`}></div>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
};

export default WhatIDo;