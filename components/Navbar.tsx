"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // স্ক্রল করলে নেভবারকে একটু শ্যাডো বা ব্যাকগ্রাউন্ড দেওয়ার জন্য
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`sticky lg:fixed top-0 left-0 w-full z-[9999] transition-all duration-300 border-b-2 border-zinc-800 lg:border-none py-6 overflow-hidden md:py-8 ${scrolled ? "py-6 bg-[#050505]" : "py-6 md:py-8"}`}>
        <nav className="max-w-[90vw] md:max-w-[85vw] mx-auto flex items-center justify-between relative">

          {/* ১. লোগো (Navbar Title) */}
          <Link
            href="/" // বা "#home"
            onClick={(e) => {
              e.preventDefault(); // ডিফল্ট জাম্প বন্ধ করবে
              window.scrollTo({
                top: 0,
                behavior: "smooth", // ধীরে ধীরে ওপরে যাবে
              });
            }}
            className="text-white font-bold text-base md:text-lg tracking-wider hover:text-[#14b8a6] transition-all inline-block hover:scale-110 active:scale-95 duration-300 font-space-grotesk cursor-pointer"
          >
            RR
          </Link>

          {/* ২. সেন্টার ইমেইল (Navbar Connect) - ৯০০ পিক্সেলের নিচে হাইড হবে */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <a
              href="mailto:rafsan.cse.47@gmail.com"
              className="text-zinc-400 hover:text-white text-sm md:text-base tracking-[1px] transition-all duration-300 border-b border-transparent hover:border-white hover:scale-110 active:scale-95 inline-block font-space-grotesk"
            >
              rafsan.cse.47@gmail.com
            </a>
          </div>

          {/* ৩. মেনু আইটেমস (Header UL) */}
          <ul className="flex items-center gap-6 md:gap-10 lg:gap-20">
            {['ABOUT', 'WORK', 'CONTACT'].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-[#ccc] hover:text-[#14b8a6] text-[12px] md:text-sm lg:text-base font-semibold tracking-[1px] transition-all inline-block hover:scale-110 active:scale-95 font-space-grotesk"
                >
                  {/* এখানে তোমার HoverLinks কম্পোনেন্ট ব্যবহার করতে পারো */}
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* ৪. ব্যাকগ্রাউন্ড ফেড (Nav-fade) */}
      <div className="fixed top-0 left-0 w-full h-[130px] bg-gradient-to-b from-[#050505] via-[#050505]/70 to-transparent pointer-events-none z-[12]" />
    </>
  );
};

export default Navbar;