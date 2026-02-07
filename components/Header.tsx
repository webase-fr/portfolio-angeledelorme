"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[60] flex justify-between items-center px-6 md:px-10 py-5 transition-all duration-500 ${
        scrolled ? "bg-[#E6DCD1]/90 backdrop-blur-md" : ""
      }`}
    >
      <Link href="/" className="flex items-center gap-3">
        <span
          className={`text-lg md:text-xl font-light tracking-[0.15em] uppercase transition-colors duration-500 ${
            scrolled ? "text-[var(--foreground)]" : "text-white"
          }`}
        >
          Angèle
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
        <span
          className={`text-lg md:text-xl font-light tracking-[0.15em] uppercase transition-colors duration-500 ${
            scrolled ? "text-[var(--foreground)]" : "text-white"
          }`}
        >
          Delorme
        </span>
      </Link>

      <nav
        className={`hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-500 ${
          scrolled ? "text-[var(--foreground)]/60" : "text-white/80"
        }`}
      >
        <Link
          href="#projets"
          className="hover:text-[var(--accent)] transition-colors duration-300"
        >
          Projets
        </Link>
        <Link
          href="#about"
          className="hover:text-[var(--accent)] transition-colors duration-300"
        >
          A propos
        </Link>
        <a
          href="mailto:contact@angeleprops.com"
          className={`ml-4 px-5 py-2 rounded-full hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-[#E6DCD1] transition-all duration-300 border ${
            scrolled ? "border-[var(--foreground)]/20" : "border-white/40"
          }`}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
