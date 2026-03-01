"use client";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col" id="contact">
      {/* Full width image — larger */}
      <div className="w-full overflow-hidden">
        <img
          src="/img/bae278e8-0b4f-467d-9209-b08daea32321.jpeg"
          alt="Atelier scénographie"
          className="w-full h-[75vh] md:h-[90vh] object-cover object-[center_35%]"
        />
      </div>

      {/* Caption */}
      <div className="w-full px-6 md:px-10 py-4">
        <span className="text-xs tracking-[0.2em] uppercase text-[var(--foreground)]/30">
          [ 2024 ] — Conception de scénographie à l&apos;atelier Lamain
        </span>
      </div>

      {/* Main footer */}
      <div className="w-full px-6 md:px-10 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          {/* Big name */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[14vw] md:text-[10vw] font-extralight leading-none tracking-tight mb-12"
          >
            Angèle<span className="text-[var(--accent)]">.</span>
          </motion.h2>

          {/* Separator */}
          <div className="w-full h-px bg-[var(--foreground)]/10 mb-10" />

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            {/* Contact button */}
            <a
              href="mailto:angeledlm.pro@gmail.com"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[var(--foreground)]/15 hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-[#E6DCD1] transition-all duration-300 text-sm font-light tracking-wide"
            >
              Contactez-moi
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Social + credits */}
            <div className="flex flex-col gap-6 md:items-end">
              <div className="flex gap-6">
                <a
                  href="https://www.instagram.com/adlmdesign/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-[var(--foreground)]/40 hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
                >
                  Instagram <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ang%C3%A8le-delorme-199379303/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-[var(--foreground)]/40 hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
                >
                  LinkedIn <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--foreground)]/15">
                &copy; 2026 Angèle Delorme
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
