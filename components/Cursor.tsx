"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // মাউস পজিশন আপডেট করার জন্য QuickSetter ব্যবহার (এটি ল্যাগ কমায়)
    const xSetter = gsap.quickSetter(cursor, "x", "px");
    const ySetter = gsap.quickSetter(cursor, "y", "px");

    const handleMouseMove = (e: MouseEvent) => {
      // মাউস মুভমেন্ট স্মুথ করার জন্য GSAP
      gsap.to({}, {
        duration: 0.35,
        onUpdate: () => {
          xSetter(e.clientX);
          ySetter(e.clientY);
        },
      });

      // ইভেন্ট ডেলিগেশন ব্যবহার করে স্মার্টলি চেক করা
      const target = e.target as HTMLElement;

      // ১. ইমেজ বা ভিডিওর ওপর গেলে কার্সার গায়েব হবে
      if (
        target.tagName === "IMG" ||
        target.closest("img") ||
        target.tagName === "VIDEO" ||
        target.closest("video")
      ) {
        gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.2 });
        return;
      }

      // ২. Data-cursor চেক করা
      const cursorData = target.closest("[data-cursor]") as HTMLElement;
      if (cursorData) {
        const type = cursorData.dataset.cursor;
        const rect = cursorData.getBoundingClientRect();

        if (type === "icons") {
          gsap.to(cursor, {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
            width: rect.width + 10,
            height: rect.height + 10,
            borderRadius: "8px",
            backgroundColor: "white",
            duration: 0.3,
            ease: "back.out(1.7)",
            overwrite: true
          });
          return;
        }
      }

      // ৩. নরমাল অবস্থায় ফেরত আনা
      gsap.to(cursor, {
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        scale: 1,
        opacity: 1,
        backgroundColor: "#e6c3ff",
        duration: 0.3,
        overwrite: "auto"
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor-main hidden md:block" />
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
      `}</style>
    </>
  );
};

export default Cursor;