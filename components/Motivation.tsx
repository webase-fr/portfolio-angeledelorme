"use client";

export default function Motivation() {
  return (
    <section className="w-full min-h-screen py-24 px-4 md:px-8">
      <div className="w-full max-w-[95%] mx-auto flex flex-col gap-12">

        {/* Sticky Full-Width Header */}
        <div className="sticky top-[76px] z-40 bg-[#052902] self-start w-full flex justify-between items-start border-b border-white/20 pb-8 pt-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tighter">MOTIVATION</h2>
            <span className="text-white/60 text-sm font-medium uppercase tracking-wider">INSPIRATION ET CRÉATIVITÉ</span>
          </div>
          {/* Star logo */}
          <svg className="w-16 h-16 md:w-20 md:h-20 text-white" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M50 5 L53 40 L90 35 L58 52 L75 85 L50 60 L25 85 L42 52 L10 35 L47 40 Z" />
            <line x1="50" y1="5" x2="50" y2="95" />
          </svg>
        </div>

        {/* Content Area - Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 pt-8">
          
          {/* Left: Mantra */}
          <div className="flex flex-col items-center md:items-start gap-8 pt-16">
            <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center">
              {/* Empty circle */}
            </div>
            <span className="font-bold uppercase tracking-widest text-white/80">[ MON MANTRA ]</span>
          </div>

          {/* Right: Text content */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6 text-lg md:text-xl font-medium leading-relaxed text-neutral-200">
              <p>
                Creativity is the heartbeat of design. every pixel you place, and concept you bring to life is a testament to your unique vision. "Remember, each challenge is an opportunity to innovate setback is a step toward your breakthrough."
              </p>
              <p>
                Embrace the process, trust your instincts and let your passion drive you forward. Your designs have the power to inspire and leave a "Lasting impact on the World" Keep pushing boundaries and stay true to your Artistic journey—you have the ability to create something extraordinary.
              </p>
            </div>

            {/* Quote */}
            <div className="flex flex-col gap-2">
              <p className="font-black uppercase text-xl md:text-2xl leading-tight">
                "LE DESIGN NE SE LIMITE PAS À L'APPARENCE ET À LA SENSATION. LE DESIGN, C'EST AUSSI LE FONCTIONNEMENT."
              </p>
              <span className="font-bold uppercase tracking-wider text-white/80">— STEVE JOBS.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
