"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-end pb-16 md:pb-24 px-6 md:px-10 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/IMG_6289.JPG"
          alt="Background"
          className="w-full h-full object-cover object-[30%_center] md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-[#111111]/30" />
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
            <div className="w-8 h-px bg-[var(--accent)]" />
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--foreground)]/50">
              Portfolio 2024
            </span>
          </div>

          {/* Main title */}
          <h1 className="text-[12vw] md:text-[7rem] lg:text-[9rem] font-extralight leading-[0.85] tracking-tight">
            Design
            <br />
            <span className="italic font-normal text-[var(--accent)]">Evenementiel</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm md:text-base font-light tracking-wide text-[var(--foreground)]/50 max-w-md mt-4">
            Espace, scenographie &amp; conception d&apos;objets.
            <br />
            Du dessin a la realisation.
          </p>

          {/* CTA Button */}
          <Link
            href="/projets/au-fil-des-objets"
            className="mt-6 inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-[var(--foreground)]/20 hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-[#111] transition-all duration-300 text-sm font-light tracking-wide w-fit"
          >
            Voir mes projets
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
