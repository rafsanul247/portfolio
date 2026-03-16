"use client";
import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string | StaticImageData;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = ({ image, alt = "Project Image", video, link }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // স্ক্রিন সাইজ চেক করার জন্য (Hydration safe)
  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth > 1024);
    checkScreen(); // শুরুতে একবার চেক করবে
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div className="relative group w-full flex justify-center">
      <a
        href={link || "#"}
        className="relative block w-full max-w-[600px] aspect-[16/10] overflow-hidden rounded-xl bg-zinc-900 border border-white/10 transition-all duration-500 hover:border-[#14b8a6]/50"
        onMouseEnter={() => isDesktop && setIsHovered(true)} // শুধু ডেস্কটপে হোভার কাজ করবে
        onMouseLeave={() => setIsHovered(false)}
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* লিঙ্ক আইকন */}
        {link && (
          <div className="absolute top-4 right-4 z-20 bg-black/80 text-white p-3 rounded-full border border-white/20 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
            <MdArrowOutward className="text-xl" />
          </div>
        )}

        {/* মেইন ইমেজ */}
        <Image
          src={image}
          alt={alt}
          fill
          className={`object-cover transition-opacity duration-700 ${
            isHovered && video && isDesktop ? "opacity-0" : "opacity-100"
          }`}
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* ভিডিও লেয়ার - শুধুমাত্র ডেস্কটপে এবং হোভার করলে দেখা যাবে */}
        {video && isHovered && isDesktop && (
          <video
            src={video}
            autoPlay
            muted
            playsInline
            loop
            className="absolute inset-0 w-full h-full object-cover animate-in fade-in duration-500"
          />
        )}

        {/* ওভারলে */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </a>
    </div>
  );
};

export default WorkImage;