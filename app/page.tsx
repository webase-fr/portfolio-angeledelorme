"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Discover from "@/components/Discover";
import About from "@/components/About";
import FullWidthImage from "@/components/FullWidthImage";
import Motivation from "@/components/Motivation";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  // Simple loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-accent selection:text-white flex flex-col">
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100] bg-[#051308] flex items-center justify-center pointer-events-none"
            initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
            exit={{
              clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }}
          />
        )}
      </AnimatePresence>

      <Header />

      <div className="flex flex-col w-full">
        <Hero />
        <Discover />
        <About />
        <FullWidthImage />
        <Motivation />
        <Skills />
        <Experience />
      </div>

      <Footer />
    </main>
  );
}
