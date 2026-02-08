"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-end pb-10 md:pb-16 px-6 md:px-10 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/IMG_6289.JPG"
          alt="Background"
          className="w-full h-full object-cover object-[30%_center] md:object-center"
        />
        {/* Full overlay for contrast */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, 
              rgba(0,0,0,0.7) 0%, 
              rgba(0,0,0,0.5) 20%,
              rgba(0,0,0,0.2) 45%,
              rgba(0,0,0,0.1) 60%,
              rgba(0,0,0,0.25) 100%
            )`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col gap-6"
        >
          {/* Small label */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-white/60" />
            <span className="text-xs tracking-[0.3em] uppercase text-white/90">
              Portfolio
            </span>
          </div>

          {/* Main title */}
          <h1 className="text-[12vw] md:text-[7rem] lg:text-[9rem] font-extralight leading-[0.85] tracking-tight text-white">
            Design -
            <br />
            <span className="italic font-normal text-white">Événementiel</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg font-normal tracking-wide text-white/90 max-w-md mt-4">
            Espace, scénographie &amp; conception d&apos;objets.
            <br />
            Du dessin à la réalisation.
          </p>

          {/* CTA Button */}
          <Link
            href="/projets/au-fil-des-objets"
            className="mt-6 inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-white/50 text-white font-normal hover:bg-white hover:border-white hover:text-[#2B2119] transition-all duration-300 text-sm tracking-wide w-fit backdrop-blur-sm bg-white/10"
          >
            Voir mes projets
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
