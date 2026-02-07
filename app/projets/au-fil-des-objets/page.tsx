"use client";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";

const BG = "#E6DCD1";
const TXT = "#2B2119";
const ACCENT = "#C03A2B";

const tramPages = Array.from({ length: 20 }, (_, i) => ({
  src: `/img/au-fils-des-objets/tram/IMG_${6455 + i}.PNG`,
  alt: `Page ${i + 1}`,
}));

function ClickableImage({ src, alt, className, wrapperClassName }: { src: string; alt: string; className?: string; wrapperClassName?: string }) {
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
        <img
          src={src}
          alt={alt}
          className={`${className || ""} transition-transform duration-500 group-hover/img:scale-105`}
        />
        <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 text-white text-sm font-medium tracking-wider uppercase bg-black/50 px-4 py-2 rounded-full">
            Agrandir
          </span>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setOpen(false)}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={src}
              alt={alt}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function AuFilDesObjets() {
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
    if (carouselRef.current) carouselRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current.offsetLeft || 0);
    const walk = (x - dragStartX.current) * 1.5;
    carouselRef.current.scrollLeft = dragScrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (carouselRef.current) carouselRef.current.style.cursor = "grab";
  };

  const updateProgress = useCallback(() => {
    if (!carouselRef.current) return;
    const el = carouselRef.current;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll > 0) {
      const progress = el.scrollLeft / maxScroll;
      setScrollProgress(progress);
      const childWidth = el.scrollWidth / tramPages.length;
      setCurrentPage(Math.min(Math.round(el.scrollLeft / childWidth), tramPages.length - 1));
    }
  }, []);

  const scrollByAmount = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const amount = carouselRef.current.clientWidth * 0.6;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
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
        <span className="text-xs tracking-[0.3em] uppercase opacity-30">Angele Delorme</span>
      </header>

      <div className="h-24" />

      {/* Hero: Title */}
      <section className="w-full px-4 md:px-8 pt-12 md:pt-20 pb-8">
        <div className="max-w-[95%] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs tracking-[0.2em] uppercase opacity-40">Scenographie</span>
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: ACCENT }} />
              <span className="text-xs tracking-[0.2em] uppercase opacity-40">2024</span>
            </div>
            <h1 className="text-5xl md:text-[7rem] lg:text-[8.5rem] font-extralight tracking-tight leading-[0.9]">
              Au fil{" "}
              <span className="italic" style={{ color: ACCENT }}>des</span>
              <br />
              objets
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Image principale */}
      <section className="w-full px-4 md:px-8 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[95%] mx-auto rounded-lg overflow-hidden"
        >
          <ClickableImage
            src="/img/au-fils-des-objets/principale.jpg"
            alt="Maquette Au fil des objets"
            className="w-full h-auto md:h-[70vh] object-cover"
          />
        </motion.div>
      </section>

      {/* Texte + 2 images portrait */}
      <section className="w-full px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <p className="text-lg md:text-2xl font-light leading-relaxed opacity-80">
              Pensee comme une exposition itinerante, cette scenographie prend place aux arrets de tramway d&apos;Orleans. A travers des objets d&apos;enfance accompagnes de textes, elle reactive la memoire intime des passagers et fait de l&apos;attente un instant suspendu, sensible et evocateur.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="aspect-[3/4] rounded-lg overflow-hidden">
              <ClickableImage
                src="/img/au-fils-des-objets/portrait-1.jpg"
                alt="Scenographie diplome 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] rounded-lg overflow-hidden">
              <ClickableImage
                src="/img/au-fils-des-objets/portrait-2.jpg"
                alt="Scenographie diplome 2"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Carousel - TRAM */}
      <section className="w-full py-16 md:py-24 overflow-hidden">
        <div className="max-w-[95%] mx-auto px-4 md:px-8 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-end"
          >
            <div>
              <h3 className="text-3xl md:text-5xl font-extralight tracking-tight">
                TRAM <span className="italic" style={{ color: ACCENT }}>22</span>
              </h3>
              <p className="opacity-40 text-sm mt-2">
                {tramPages.length} pages — Glissez pour explorer
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="opacity-30 text-sm font-mono hidden md:block">
                {String(currentPage + 1).padStart(2, "0")} / {tramPages.length}
              </span>
              <button
                onClick={() => scrollByAmount("left")}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center hover:text-white transition-all"
                style={{ borderColor: `${TXT}30` }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = ACCENT; e.currentTarget.style.borderColor = ACCENT; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.borderColor = `${TXT}30`; }}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollByAmount("right")}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center hover:text-white transition-all"
                style={{ borderColor: `${TXT}30` }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = ACCENT; e.currentTarget.style.borderColor = ACCENT; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.borderColor = `${TXT}30`; }}
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
            className="flex gap-3 overflow-x-auto pb-4 pl-4 md:pl-8 pr-4 md:pr-8 cursor-grab select-none"
            style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
          >
            {tramPages.map((page, index) => (
              <div key={index} className="shrink-0 w-[85vw] md:w-[45vw] lg:w-[35vw]">
                <ClickableImage
                  src={page.src}
                  alt={page.alt}
                  className="w-full h-auto rounded-md"
                  wrapperClassName="rounded-md"
                />
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="max-w-[95%] mx-auto px-4 md:px-8 mt-6">
            <div className="w-full h-[2px] rounded-full" style={{ backgroundColor: `${TXT}15` }}>
              <div
                className="h-full rounded-full transition-all duration-150"
                style={{ width: `${Math.max(5, scrollProgress * 100)}%`, backgroundColor: ACCENT }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Navigation entre projets */}
      <section className="w-full px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-[95%] mx-auto">
          <div className="pt-12" style={{ borderTop: `1px solid ${TXT}15` }}>
            <div className="flex justify-between items-center">
              <Link
                href="/"
                className="group flex items-center gap-4 opacity-40 hover:opacity-100 transition-opacity"
              >
                <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 group-hover:-translate-x-2 transition-transform" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.2em] opacity-50">Precedent</span>
                  <span className="text-base md:text-xl font-light">Accueil</span>
                </div>
              </Link>

              <Link
                href="/projets/seme-t-elle"
                className="group flex items-center gap-4 opacity-40 hover:opacity-100 transition-opacity text-right"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.2em] opacity-50">Suivant</span>
                  <span className="text-base md:text-xl font-light">Seme-t-elle</span>
                </div>
                <ChevronRight className="w-8 h-8 md:w-10 md:h-10 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-6 md:px-12 py-8" style={{ borderTop: `1px solid ${TXT}10` }}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="text-xs tracking-[0.2em] uppercase opacity-25">Angele Delorme</span>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
            <span className="text-xs opacity-25">2024</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
