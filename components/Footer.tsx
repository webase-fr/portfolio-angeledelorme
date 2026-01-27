import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col">
      {/* Full width image */}
      <div className="w-full h-[40vh] md:h-screen overflow-hidden">
        <img
          src="/img/bae278e8-0b4f-467d-9209-b08daea32321.jpeg"
          alt="Gallery"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Image caption */}
      <div className="w-full px-4 md:px-8 py-4 bg-[#052902]">
        <p className="text-sm md:text-base font-medium text-white">
          [ 2024 ] - CONCEPTION DE SCÉNOGRAPHIE À L&apos;ATELIER LAMAIN.
        </p>
      </div>

      {/* Main footer content */}
      <div className="w-full py-16 md:py-24 px-4 md:px-8 bg-[#052902] flex flex-col items-center">
        {/* ANGELE. */}
        <h1 className="text-[15vw] md:text-[12vw] font-black leading-none tracking-tighter uppercase mb-8">
          ANGELE<span className="text-accent">.</span>
        </h1>

        {/* Separator line */}
        <div className="w-full max-w-4xl border-t border-white/20 mb-8"></div>

        {/* Bottom bar: Contact button left, Social links right */}
        <div className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Contact button */}
          <a
            href="mailto:contact@angeleprops.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium text-sm hover:bg-white/90 transition-colors"
          >
            Contact
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Social links */}
          <div className="flex flex-col gap-2">
            <a
              href="#"
              className="flex items-center justify-between gap-8 text-white hover:text-white/70 transition-colors group"
            >
              <span className="text-base">Instagram</span>
              <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100" />
            </a>
            <a
              href="#"
              className="flex items-center justify-between gap-8 text-white hover:text-white/70 transition-colors group"
            >
              <span className="text-base">LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
