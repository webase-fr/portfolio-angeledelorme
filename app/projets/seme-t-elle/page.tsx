"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";

const BG = "#E6DCD1";
const TXT = "#2B2119";
const GREEN = "#2D8C5A";
const TERRA = "#D4734E";

const dessins = Array.from({ length: 8 }, (_, i) => ({
  src: `/img/seme-t-elle/dessin/page-${String(i + 2).padStart(2, "0")}.jpg`,
  alt: `Illustration mise en situation ${i + 1}`,
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
        <img
          src={src}
          alt={alt}
          className={`${className || ""} transition-transform duration-700 group-hover/img:scale-[1.03]`}
        />
        <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/5 transition-colors duration-500" />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setOpen(false)}
          >
            <button onClick={() => setOpen(false)} className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10">
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
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

export default function SemeTElle() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
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
    if (maxScroll > 0) setScrollProgress(el.scrollLeft / maxScroll);
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
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: GREEN }} />
              <span className="text-xs tracking-[0.25em] uppercase opacity-40">Objet &middot; Design &middot; 2024</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
              <span style={{ color: GREEN }}>Sème</span>
              <span className="opacity-30">-</span>
              t
              <span className="opacity-30">-</span>
              elle
            </h1>

            <div className="flex items-center gap-4 mt-8">
              <div className="w-10 h-[2px]" style={{ backgroundColor: TERRA }} />
              <p className="text-sm md:text-base opacity-50 max-w-sm leading-relaxed">
                Semer en marchant, reforester ensemble
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center"
          >
            <Lightbox
              src="/img/seme-t-elle/semelle/page-01.jpg"
              alt="Chaussure et semelle — modélisation 3D"
              className="w-full h-auto max-h-[60vh] object-contain"
              wrapperClassName="rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Section grise — showcase 3D */}
      <section
        className="w-full py-16 md:py-24 mt-12 rounded-lg mx-4 md:mx-8"
        style={{ backgroundColor: "#6E6E6E" }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-white/40">Modélisation 3D</span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Lightbox
                src="/img/seme-t-elle/profil/page-01.jpg"
                alt="Chaussure — vue profil"
                className="w-full h-auto rounded-lg"
                wrapperClassName="rounded-lg"
              />
              <p className="text-white/40 text-xs tracking-widest uppercase mt-4">Vue profil</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <Lightbox
                src="/img/seme-t-elle/face/page-01.jpg"
                alt="Chaussure — vue face"
                className="w-full h-auto rounded-lg"
                wrapperClassName="rounded-lg"
              />
              <p className="text-white/40 text-xs tracking-widest uppercase mt-4">Vue face</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Texte descriptif */}
      <section className="w-full px-6 md:px-12 py-20 md:py-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <span className="text-xs tracking-[0.3em] uppercase opacity-35">Le projet</span>
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: GREEN }} />
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: TERRA }} />
              <div className="w-2 h-2 rounded-full opacity-30" style={{ backgroundColor: TXT }} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-xl md:text-3xl font-light leading-relaxed" style={{ color: `${TXT}cc` }}>
              <span className="font-medium" style={{ color: GREEN }}>Sème-t-elle</span>{" "}
              est un projet qui associe design d&apos;objet et action collective.
              En permettant de semer tout en marchant, elle invite à la reforestation à travers des temps partagés
              et collaboratifs.
            </p>
            <p className="text-base md:text-lg font-light leading-relaxed mt-8" style={{ color: `${TXT}70` }}>
              Pensée comme une expérience à vivre à plusieurs ou seule, elle transforme une action écologique en
              événement social et participatif.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Citation visuelle */}
      <section className="w-full px-6 md:px-12 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-3xl md:text-5xl font-extralight leading-snug tracking-tight">
              Chaque pas{" "}
              <span className="font-medium" style={{ color: GREEN }}>sème</span>
              ,
              <br />
              chaque marche{" "}
              <span className="font-medium" style={{ color: TERRA }}>reforeste</span>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* Carousel — Dessins */}
      <section className="w-full py-16 md:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-12 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-end"
          >
            <div>
              <span className="text-xs tracking-[0.3em] uppercase opacity-35 block mb-3">Illustrations</span>
              <h3 className="text-2xl md:text-4xl font-light tracking-tight">Mise en situation</h3>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => scrollByAmount("left")}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center hover:text-white transition-all"
                style={{ borderColor: `${TXT}20` }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = GREEN; e.currentTarget.style.borderColor = GREEN; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.borderColor = `${TXT}20`; }}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollByAmount("right")}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center hover:text-white transition-all"
                style={{ borderColor: `${TXT}20` }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = GREEN; e.currentTarget.style.borderColor = GREEN; }}
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
            className="flex gap-4 overflow-x-auto pb-4 pl-6 md:pl-12 pr-6 md:pr-12 cursor-grab select-none active:cursor-grabbing"
            style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
          >
            {dessins.map((img, index) => (
              <div key={index} className="shrink-0 w-[75vw] md:w-[40vw] lg:w-[30vw]">
                <Lightbox
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto rounded-md"
                  wrapperClassName="rounded-md bg-white shadow-sm"
                />
              </div>
            ))}
          </div>

          <div className="max-w-6xl mx-auto px-6 md:px-12 mt-8">
            <div className="w-full h-[2px] rounded-full" style={{ backgroundColor: `${TXT}10` }}>
              <div
                className="h-full rounded-full transition-all duration-150"
                style={{ width: `${Math.max(5, scrollProgress * 100)}%`, backgroundColor: GREEN }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Navigation */}
      <section className="w-full px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="pt-12" style={{ borderTop: `1px solid ${TXT}12` }}>
            <div className="flex justify-between items-center">
              <Link
                href="/projets/au-fil-des-objets"
                className="group flex items-center gap-4 opacity-40 hover:opacity-100 transition-opacity"
              >
                <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 group-hover:-translate-x-2 transition-transform" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.2em] opacity-50">Précédent</span>
                  <span className="text-base md:text-xl font-light">Au fil des objets</span>
                </div>
              </Link>

              <Link
                href="/projets/eclairer-les-sens"
                className="group flex items-center gap-4 opacity-40 hover:opacity-100 transition-opacity text-right"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.2em] opacity-50">Suivant</span>
                  <span className="text-base md:text-xl font-light">Éclairer les Sens</span>
                </div>
                <ChevronRight className="w-8 h-8 md:w-10 md:h-10 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-6 md:px-12 py-8" style={{ borderTop: `1px solid ${TXT}08` }}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="text-xs tracking-[0.2em] uppercase opacity-20">Angèle Delorme</span>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GREEN }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: TERRA }} />
            <span className="text-xs opacity-20 ml-1">2024</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
