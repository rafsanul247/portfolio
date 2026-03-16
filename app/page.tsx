"use client";
import React, { Suspense, lazy, useState, useEffect } from 'react'
import Landing from '@/components/Landing'
import About from '@/components/About'
import Career from '@/components/Career'
import Contact from '@/components/Contact'
import WhatIDo from '@/components/WhatIDo'  
import Work from '@/components/Work'
import Loading from '@/components/Loading'

const TechStack = lazy(() => import('@/components/TechStack'));

const Page = () => {
  const [percent, setPercent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // লোডিং ফাস্ট করার জন্য ইন্টারভ্যাল কমিয়ে ১০-১৫ করে দিন
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // ১০০ হওয়ার সাথে সাথেই যেন চলে যায় (খুব কম ডিলে)
          setTimeout(() => setIsLoading(false), 300); 
          return 100;
        }
        return prev + 2; // ১ এর বদলে ২ করে বাড়ালে স্পিড দ্বিগুণ হবে
      });
    }, 15); // স্পিড আরও ফাস্ট করা হলো

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading percent={percent} />
      ) : (
        <main className="bg-black min-h-screen text-white animate-in fade-in zoom-in-95 duration-1000">
          <Landing />
          <About />
          <WhatIDo />
          <Career />
          <Work />
          
          <div className="hidden md:block">
            <Suspense fallback={<div className="text-center py-10">Loading Tech Stack...</div>}>
              <TechStack />
            </Suspense>
          </div>
          
          <Contact />
        </main>
      )}
    </>
  )
}

export default Page