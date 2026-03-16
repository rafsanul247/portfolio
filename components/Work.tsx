"use client";
import { useState, useCallback } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import WorkImage from "./WorkImage"; // ১. ইমপোর্ট করা হলো
import project1 from "@/public/images/project1.png";
import project2 from "@/public/images/project2.png";
import project3 from "@/public/images/project3.png";
import project4 from "@/public/images/project4.png";
import project5 from "@/public/images/project5.png";
import Image from "next/image";

const projects = [
  {
    title: "E-commerce",
    category: "E-commerce Platform",
    tools: "Tailwind CSS, Next.js, TypeScript, JavaScript, HTML, CSS",
    image: project1,
    video: "/videos/solid-demo.mp4", // ভিডিও থাকলে পাথ দাও, না থাকলে লাইনটি কেটে দাও
    link: "https://google.com" // প্রজেক্ট লিঙ্ক
  },
  {
    title: "Art",
    category: "Art Website",
    tools: "Tailwind CSS, Next.js, TypeScript, JavaScript, HTML, CSS",
    image: project2,
    video: "/videos/project2.mp4", 
    link: "#"
  },
  {
    title: "Facebook",
    category: "Social Media Platform",
    tools: "Tailwind CSS, Next.js, TypeScript, JavaScript, HTML, CSS",
    image: project3,
    video: undefined,
    link: "#"
  },
  {
    title: "Facebook Post",
    category: "Poster Design",
    tools: "Tailwind CSS, Next.js, TypeScript, JavaScript, HTML, CSS",
    image: project4,
    video: undefined,
    link: "#"
  },
  {
    title: "Portfolio",
    category: "Portfolio Website",
    tools: "Tailwind CSS, Next.js, TypeScript, JavaScript, HTML, CSS",
    image: project5,
    video: undefined,
    link: "#"
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = () => {
    const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  return (
    <section className="font-space-grotesk pl-0 lg:pl-20 relative bg-black py-20 overflow-hidden" id="work">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <h2 className="text-5xl md:text-7xl font-medium mb-12 text-white">
          My <span className="text-[#14b8a6]">Work</span>
        </h2>

        <div className="relative group">
          {/* ক্যারোজেল কন্ট্রোল */}
          <button
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-2xl text-white hover:border-[#14b8a6] hover:text-[#14b8a6] transition-all"
            onClick={goToPrev}
          >
            <MdArrowBack />
          </button>
          <button
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-2xl text-white hover:border-[#14b8a6] hover:text-[#14b8a6] transition-all"
            onClick={goToNext}
          >
            <MdArrowForward />
          </button>

          {/* ক্যারোজেল কন্টেইনার */}
          <div className="overflow-hidden border-y border-white/10 py-10">
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
                    
                    {/* বাম পাশের টেক্সট */}
                    <div className="flex-1 flex gap-6 items-start">
                      <h3 className="text-5xl md:text-6xl font-bold opacity-20 leading-none text-white">
                        0{index + 1}
                      </h3>
                      <div className="flex flex-col gap-2">
                        <h4 className="text-2xl md:text-3xl font-medium text-white">{project.title}</h4>
                        <p className="text-white/50 font-light">{project.category}</p>
                        <div className="mt-6">
                          <span className="text-xs uppercase tracking-widest text-white/30 block mb-2">Tools & Features</span>
                          <p className="text-sm md:text-base text-white/60 font-light leading-relaxed">
                            {project.tools}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* ডান পাশের ইমেজ/ভিডিও সেকশন */}
                    <div className="flex-1 w-full">
                      {/* ২. এখানে WorkImage কম্পোনেন্ট ব্যবহার করা হলো */}
                      <WorkImage 
                        image={project.image} 
                        alt={project.title} 
                        video={project.video}
                        link={project.link}
                      />
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ডট ইন্ডিকেটর */}
          <div className="flex justify-center gap-3 mt-10">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 bg-[#14b8a6]" : "w-2 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;