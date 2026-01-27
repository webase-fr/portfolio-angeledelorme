export default function Footer() {
  return (
    <footer className="w-full py-24 px-8 bg-black/20 flex flex-col items-center justify-center text-center">
      {/* Gallery footer placeholder */}
      <div className="w-full max-w-4xl h-64 bg-neutral-800 mb-12 flex items-center justify-center relative overflow-hidden rounded-xl">
        <span className="opacity-30 uppercase">[ Footer Gallery Image ]</span>
      </div>

      <h1 className="text-[12vw] font-black leading-none tracking-tighter uppercase mb-4">
        Angele<span className="text-accent">.</span>
      </h1>

      <div className="flex flex-col md:flex-row gap-8 text-sm uppercase tracking-widest opacity-60">
        <a href="#" className="hover:text-white transition-colors">Instagram</a>
        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-white transition-colors">Behance</a>
        <a href="mailto:contact@angeleprops.com" className="hover:text-white transition-colors">Contact</a>
      </div>

      <div className="mt-12 text-xs opacity-30">
        © 2024 Angèle Delorme. Tous droits réservés.
      </div>
    </footer>
  );
}
