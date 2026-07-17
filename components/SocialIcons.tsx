"use client";
import { useEffect, useRef } from "react";
import { FaGithub, FaFacebook, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { TbNotes } from "react-icons/tb";
import gsap from "gsap";

const SocialIcons = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const icons = containerRef.current.querySelectorAll(".magnetic-icon");

    icons.forEach((icon) => {
      const iconLink = icon.querySelector("a");
      if (!iconLink) return;

      const xTo = gsap.quickTo(iconLink, "x", { duration: 0.3, ease: "power3.out" });
      const yTo = gsap.quickTo(iconLink, "y", { duration: 0.3, ease: "power3.out" });

      const onMouseMove = (e: MouseEvent) => {
        const rect = icon.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        if (Math.abs(distanceX) < 40 && Math.abs(distanceY) < 40) {
          xTo(distanceX * 0.5);
          yTo(distanceY * 0.5);
        } else {
          xTo(0);
          yTo(0);
        }
      };

      window.addEventListener("mousemove", onMouseMove);
      return () => window.removeEventListener("mousemove", onMouseMove);
    });
  }, []);

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[90vw] md:max-w-[85vw] z-[90] pointer-events-none">
      <div ref={containerRef} className="relative w-full h-full">
        
        {/* ১. সোশ্যাল আইকন বক্স - ফিক্সড পজিশন ও রেসপন্সিভ গ্যাপিং */}
        <div 
          className="absolute left-[-20px] md:left-[-70px] lg:left-[-75px] bottom-5 hidden md:flex flex-col gap-5 p-2 pointer-events-auto"
        >
          {[
            { Icon: FaGithub, url: "https://github.com/rafsanul247" },
            { Icon: FaLinkedinIn, url: "https://www.linkedin.com/in/rafsanulrifat47" },
            { Icon: FaXTwitter, url: "https://x.com/rafsanulrifat" },
            { Icon: FaFacebook, url: "https://www.facebook.com/rafsanul.rifat.47" },
          ].map((item, i) => (
            <span key={i} className="magnetic-icon w-12 h-12 flex items-center justify-center">
              <a 
                href={item.url} 
                target="_blank" 
                className="text-2xl text-white hover:text-[#14b8a6] transition-colors duration-300"
              >
                <item.Icon />
              </a>
            </span>
          ))}
        </div>

        {/* ২. রেজুমে বাটন - পজিশনিং ঠিক করা হয়েছে */}
        <a 
          href="/RESUME OF RAFSANUL RIFAT.pdf" 
          target="_blank"
          className="resume-button absolute bottom-10 right-0 flex items-center gap-2 pointer-events-auto group"
        >
          <span className="text-zinc-500 group-hover:text-white text-sm md:text-xl font-semibold tracking-[4px] transition-all duration-300">
            RESUME
          </span>
          <span className="text-white text-xl md:text-2xl">
            <TbNotes />
          </span>
        </a>

      </div>

      <style jsx>{`
        .resume-button {
          transform-origin: bottom right;
        }
        @media (max-width: 767px) {
          .resume-button {
            transform: translateX(40%) rotate(-90deg);
          }
        }
      `}</style>
    </div>
  );
};

export default SocialIcons;