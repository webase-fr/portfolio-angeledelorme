"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";

const BG = "#E6DCD1";
const TXT = "#2B2119";
const BLUE = "#3B5FE6";
const PINK = "#D44B8A";

const pages = Array.from({ length: 14 }, (_, i) => ({
  src: `/img/rapport-stage-web/IMG_${6498 - i}.jpg`,
  alt: `Rapport de stage — page ${i + 1}`,
}));

function Lightbox({ src, alt, className, wrapperClassName }: { src: string; alt: string; className?: string; wrapperClassName?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <div
        className={`cursor-zoom-in group/img relative overflow-hidden ${wrapperClassName || ""}`}
        onClick={() => setOpen(true)}
      >
        <img src={src} alt={alt} className={`${className || ""} transition-transform duration-700 group-hover/img:scale-[1.02]`} />
        <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/5 transition-colors duration-500" />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
            onClick={() => setOpen(false)}
          >
            <button onClick={() => setOpen(false)} className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10">
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              src={src} alt={alt} className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function RapportDeStage() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragStartX.current = e.pageX - (carouselRef.current?.offsetLeft || 0);
    dragScrollLeft.current = carouselRef.current?.scrollLeft || 0;
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current.offsetLeft || 0);
    carouselRef.current.scrollLeft = dragScrollLeft.current - (x - dragStartX.current) * 1.5;
  };
  const handleMouseUp = () => { isDragging.current = false; };

  const updateProgress = useCallback(() => {
    if (!carouselRef.current) return;
    const el = carouselRef.current;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll > 0) {
      setScrollProgress(el.scrollLeft / maxScroll);
      const childWidth = el.scrollWidth / pages.length;
      setCurrentPage(Math.min(Math.round(el.scrollLeft / childWidth), pages.length - 1));
    }
  }, []);

  const scrollByAmount = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const amount = carouselRef.current.clientWidth * 0.7;
    carouselRef.current.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen flex flex-col" style={{ backgroundColor: BG, color: TXT }}>

      {/* Header */}
      <header
        className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 backdrop-blur-md"
        style={{ backgroundColor: `${BG}cc` }}
      >
        <Link href="/" className="flex items-center gap-3 hover:opacity-60 transition-opacity">
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium tracking-wider uppercase">Retour</span>
        </Link>
        <span className="text-xs tracking-[0.3em] uppercase opacity-25">Angèle Delorme</span>
      </header>

      <div className="h-24" />

      {/* Hero */}
      <section className="w-full px-6 md:px-12 pt-12 md:pt-20 pb-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: BLUE }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: PINK }} />
              <span className="text-xs tracking-[0.25em] uppercase opacity-35 ml-1">Stage &middot; Lamain &middot; 2024</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
              Rapport
              <br />
              <span style={{ color: BLUE }}>de</span>{" "}
              <span style={{ color: PINK }}>Stage</span>
            </h1>

            <div className="flex items-center gap-4 mt-8">
              <div className="w-10 h-[2px]" style={{ backgroundColor: BLUE }} />
              <p className="text-sm opacity-45 max-w-sm leading-relaxed">
                Juin — Juillet 2024, Atelier Lamain
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Lightbox
              src="/img/rapport-stage-web/IMG_6498.jpg"
              alt="Couverture du rapport de stage"
              className="w-full h-auto"
              wrapperClassName="rounded-md shadow-2xl shadow-black/10"
            />
          </motion.div>
        </div>
      </section>

      {/* Texte descriptif */}
      <section className="w-full px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <span className="text-xs tracking-[0.3em] uppercase opacity-35">Propos</span>
            <div className="w-[2px] h-12 hidden md:block" style={{ backgroundColor: `${BLUE}40` }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-xl md:text-3xl font-light leading-relaxed" style={{ color: `${TXT}cc` }}>
              Ce rapport de stage présente deux mois d&apos;immersion dans un{" "}
              <span className="font-medium" style={{ color: BLUE }}>atelier de conception scénographique</span>,
              avec une participation à divers projets et la réalisation graphique des pages de ce rapport.
            </p>
            <p className="text-base md:text-lg font-light leading-relaxed mt-8" style={{ color: `${TXT}60` }}>
              De l&apos;upcycling de chaises à la scénographie de festivals, en passant par la fabrication de décors sur mesure pour des marques — chaque projet a été une occasion d&apos;apprendre et de créer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Carousel */}
      <section className="w-full py-16 md:py-24 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 md:px-12 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-end"
          >
            <div>
              <span className="text-xs tracking-[0.3em] uppercase opacity-35 block mb-3">Feuilleter</span>
              <h3 className="text-2xl md:text-4xl font-light tracking-tight">
                Pages <span className="font-medium" style={{ color: PINK }}>du rapport</span>
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-mono opacity-30 hidden md:block">
                {String(currentPage + 1).padStart(2, "0")} / {pages.length}
              </span>
              <button
                onClick={() => scrollByAmount("left")}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center hover:text-white transition-all"
                style={{ borderColor: `${TXT}20` }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = BLUE; e.currentTarget.style.borderColor = BLUE; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.borderColor = `${TXT}20`; }}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollByAmount("right")}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center hover:text-white transition-all"
                style={{ borderColor: `${TXT}20` }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = BLUE; e.currentTarget.style.borderColor = BLUE; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.borderColor = `${TXT}20`; }}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div
            ref={carouselRef}
            onScroll={updateProgress}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="flex gap-5 overflow-x-auto pb-4 pl-6 md:pl-12 pr-6 md:pr-12 cursor-grab select-none active:cursor-grabbing"
            style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
          >
            {pages.map((page, index) => (
              <div key={index} className="shrink-0 w-[70vw] md:w-[35vw] lg:w-[28vw]">
                <Lightbox
                  src={page.src}
                  alt={page.alt}
                  className="w-full h-auto rounded-sm"
                  wrapperClassName="rounded-sm shadow-lg shadow-black/8"
                />
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto px-6 md:px-12 mt-8">
            <div className="w-full h-[2px] rounded-full" style={{ backgroundColor: `${TXT}08` }}>
              <div
                className="h-full rounded-full transition-all duration-150"
                style={{
                  width: `${Math.max(5, scrollProgress * 100)}%`,
                  background: `linear-gradient(90deg, ${BLUE}, ${PINK})`,
                }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Navigation */}
      <section className="w-full px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="pt-12" style={{ borderTop: `1px solid ${TXT}15` }}>
            <div className="flex justify-between items-center">
              <Link
                href="/projets/chaises-de-chair"
                className="group flex items-center gap-4 opacity-40 hover:opacity-100 transition-opacity"
              >
                <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 group-hover:-translate-x-2 transition-transform" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.2em] opacity-50">Précédent</span>
                  <span className="text-base md:text-xl font-light">Chaise de Chair</span>
                </div>
              </Link>

              <Link
                href="/"
                className="group flex items-center gap-4 opacity-40 hover:opacity-100 transition-opacity text-right"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.2em] opacity-50">Retour</span>
                  <span className="text-base md:text-xl font-light">Accueil</span>
                </div>
                <ChevronRight className="w-8 h-8 md:w-10 md:h-10 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-6 md:px-12 py-8" style={{ borderTop: `1px solid ${TXT}06` }}>
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <span className="text-xs tracking-[0.2em] uppercase opacity-20">Angèle Delorme</span>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: BLUE }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: PINK }} />
            <span className="text-xs opacity-20 ml-1">2024</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
