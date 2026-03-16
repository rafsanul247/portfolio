"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Marquee from "react-fast-marquee";

const Loading = ({ percent }: { percent: number }) => {
    const [isDone, setIsDone] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (percent >= 100) {
            setTimeout(() => setIsDone(true), 800);
        }
    }, [percent]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        containerRef.current.style.setProperty("--mouse-x", `${x}px`);
        containerRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <AnimatePresence>
            {!isDone && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                    className="fixed inset-0 w-screen h-screen bg-[#050505] z-[999999] flex items-center justify-center overflow-hidden"
                >
                    {/* ব্যাকগ্রাউন্ড মারকিউ - হালকা অপাসিটি */}
                    <div className="absolute w-full opacity-[0.03] pointer-events-none">
                        <Marquee speed={80} gradient={false}>
                            <span className="text-[120px] md:text-[180px] font-bold uppercase px-10 text-white">
                                Rafsanul Rifat — Full Stack Developer —
                            </span>
                        </Marquee>
                    </div>

                    {/* মেইন লোডিং কন্টেইনার */}
                    <div
                        ref={containerRef}
                        onMouseMove={handleMouseMove}
                        className="relative group p-[2px] rounded-full bg-zinc-800/50 transition-all duration-500"
                    >
                        {/* হোভার গ্লো ইফেক্ট (সবুজ) */}
                        <div className="absolute pointer-events-none bg-[#14b8a6] w-[200px] h-[100px] rounded-full blur-[40px] opacity-0 group-hover:opacity-40 transition-opacity duration-500 top-[var(--mouse-x)] left-[var(--mouse-y)] -translate-x-1/2 -translate-y-1/2" />

                        <div className="relative px-12 py-6 md:px-16 md:py-8 bg-black z-10 border border-white/20 flex flex-col items-center">

                            {/* পারসেন্টেজ টেক্সট */}
                            <div className="flex flex-col items-center gap-2">
                                <motion.span
                                    className="text-white text-3xl md:text-5xl font-bold font-space"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    {percent}%
                                </motion.span>

                                <div className="w-full h-[2px] mt-2 overflow-hidden">
                                    <motion.div
                                        className="h-full bg-[#14b8a6]"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${percent}%` }}
                                        transition={{ ease: "easeOut" }}
                                    />
                                </div>
                            </div>

                            {/* স্ট্যাটাস টেক্সট */}
                            <p className="text-zinc-500 text-[10px] uppercase tracking-[4px] mt-6 animate-pulse">
                                {percent < 100 ? "Loading..." : "Welcome"}
                            </p>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loading;