"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // মাউস পজিশন ট্র্যাক করা
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      // যদি কোনো স্পেশাল এলিমেন্টের ওপর না থাকে, তবে কার্সার মাউসকে ফলো করবে
      if (!isHovering.current) {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.5,
          ease: "power3.out",
        });
      }
    };

    // হোভার ইফেক্টস (Data-cursor attributes অনুযায়ী)
    const items = document.querySelectorAll("[data-cursor]");
    
    items.forEach((item) => {
      const element = item as HTMLElement;

      element.addEventListener("mouseenter", (e) => {
        const target = e.currentTarget as HTMLElement;
        const rect = target.getBoundingClientRect();
        const type = element.dataset.cursor;

        if (type === "icons") {
          isHovering.current = true;
          cursor.classList.add("cursor-icons-active");
          // আইকনের ওপর গেলে কার্সার আইকনের সাইজ নিয়ে সেখানে আটকে যাবে
          gsap.to(cursor, {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
            width: rect.width + 10,
            height: rect.height + 10,
            borderRadius: "8px", // আইকনের শেপ অনুযায়ী
            duration: 0.3,
            ease: "back.out(1.7)",
          });
        }

        if (type === "disable") {
          gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.2 });
        }
      });

      element.addEventListener("mouseleave", () => {
        isHovering.current = false;
        cursor.classList.remove("cursor-icons-active");
        // মাউস সরিয়ে নিলে কার্সার আবার আগের অবস্থায় ফিরবে
        gsap.to(cursor, {
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          scale: 1,
          opacity: 1,
          duration: 0.3,
        });
      });
    });

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div 
        ref={cursorRef}
        className="cursor-main hidden md:block" 
      />
      <style jsx global>{`
        .cursor-main {
          position: fixed;
          top: 0;
          left: 0;
          width: 50px;
          height: 50px;
          background-color: #e6c3ff;
          box-shadow: 0px 0px 30px 0px rgb(175, 131, 255);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
          transform: translate(-50%, -50%);
          will-change: transform;
        }
        /* আইকনের ওপর গেলে স্পেশাল স্টাইল */
        .cursor-icons-active {
          background-color: white;
          box-shadow: 0px 0px 20px 0px rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </>
  );
};

export default Cursor;