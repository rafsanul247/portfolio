import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import SocialIcons from "@/components/SocialIcons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ২. ফন্ট কনফিগার করুন
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // আপনার প্রয়োজনীয় সব ওয়েট
  variable: "--font-space-grotesk", // Tailwind-এ ব্যবহারের জন্য ভেরিয়েবল
});

export const metadata: Metadata = {
  title: "Rafsan Portfolio",
  description: "A website About Rafsanul Rifat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Cursor />
        <Navbar />
        <SocialIcons />
        {children}
      </body>
    </html>
  );
}
