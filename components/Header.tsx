import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[60] flex justify-between items-center px-8 py-6 text-white transition-all duration-300 ${scrolled ? "bg-[#051308]/90 backdrop-blur-sm shadow-md" : "mix-blend-difference"
        }`}
    >
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold tracking-tighter">ANGELE DELORME</h1>
      </div>
      <nav className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-wide">
        <Link href="#about" className="hover:text-accent transition-colors">A PROPOS</Link>
        <Link href="#contact" className="hover:text-accent transition-colors">CONTACT</Link>
        <Link href="#projects" className="hover:text-accent transition-colors">VOIR TOUT LES PROJETS</Link>
      </nav>
    </header>
  );
}
