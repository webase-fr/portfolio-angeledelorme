"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center bg-[#052902]">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#052902] to-[#021001] opacity-80" />
      </div>

      {/* Main Content Container - Higher and slightly more left */}
      <div className="relative z-10 flex flex-col items-start min-w-[300px] md:min-w-[600px] -mt-40 md:-mt-48 ml-4 md:-ml-12">
        {/* The Text Block */}
        <div className="relative">
          {/* Orange Circle - Solid orange color */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="absolute top-[25%] right-[-10%] md:right-[-20px] w-12 h-12 md:w-24 md:h-24 bg-[#E63900] rounded-full z-0 transform -translate-y-1/2"
          />

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[12vw] md:text-[8rem] font-bold text-white tracking-tight leading-none relative z-10 font-sans"
          >
            PORTFOLIO
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="font-serif italic text-2xl md:text-5xl text-white font-light tracking-wide mt-2 md:mt-0 relative z-10"
        >
          DESIGN-EVENEMENTIEL
        </motion.p>
      </div>

      {/* Silver Plate Image - Bottom Left - Large and overflowing (hidden on mobile) */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        className="hidden md:block absolute bottom-[-35%] left-[-10%] w-[95vh] h-[95vh] z-20"
      >
        <img
          src="/img/IMG_6362.PNG"
          alt="Silver plate"
          className="w-full h-full object-contain"
        />
      </motion.div>
    </section>
  );
}
