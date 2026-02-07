"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";

const BG = "#E6DCD1";
const TXT = "#2B2119";
const ACCENT = "#C03A2B";

const carouselImages = Array.from({ length: 7 }, (_, i) => ({
  src: `/img/posture-quotidienne/carousel/page-${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `Posture ${i + 1}`,
}));

function LightboxImage({ src, alt, className, wrapperClassName }: { src: string; alt: string; className?: string; wrapperClassName?: string }) {
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
        <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/5 transition-colors duration-300" />
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

export default function PostureQuotidienne() {
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
        <span className="text-xs tracking-[0.3em] uppercase opacity-30">Angèle Delorme</span>
      </header>

      <div className="h-24" />

      {/* Hero */}
      <section className="w-full px-6 md:px-12 pt-16 md:pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs tracking-[0.2em] uppercase opacity-40">Design d&apos;espace</span>
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: ACCENT }} />
              <span className="text-xs tracking-[0.2em] uppercase opacity-40">2024</span>
            </div>
            <h1 className="text-5xl md:text-[7rem] lg:text-[8.5rem] font-extralight tracking-tight leading-[0.9]">
              Posture
              <br />
              <span className="italic" style={{ color: ACCENT }}>Quotidienne</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Image principale */}
      <section className="w-full px-6 md:px-12 py-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <LightboxImage
            src="/img/posture-quotidienne/photo-1.jpg"
            alt="Maquette Posture Quotidienne"
            className="w-full h-auto"
            wrapperClassName="rounded-md"
          />
        </motion.div>
      </section>

      {/* Deuxieme image */}
      <section className="w-full py-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full px-6 md:px-12"
        >
          <div className="max-w-6xl mx-auto">
            <LightboxImage
              src="/img/posture-quotidienne/photo-2.jpg"
              alt="Detail maquette"
              className="w-full h-auto md:h-[70vh] object-cover"
              wrapperClassName="rounded-md"
            />
          </div>
        </motion.div>
      </section>

      {/* Texte */}
      <section className="w-full px-6 md:px-12 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20"
          >
            <div>
              <span className="text-xs tracking-[0.3em] uppercase opacity-40 block mb-4">À propos du projet</span>
              <div className="w-12 h-[2px]" style={{ backgroundColor: `${ACCENT}60` }} />
            </div>
            <p className="text-xl md:text-3xl font-light leading-relaxed opacity-80">
              Ce projet interroge les postures du quotidien dans l&apos;espace public. À travers des maquettes et des silhouettes, il capture les gestes inconscients que nous adoptons dans les lieux de passage — attente, mouvement, immobilité. Une observation sensible du corps dans son environnement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3eme photo */}
      <section className="w-full px-6 md:px-12 py-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <LightboxImage
            src="/img/posture-quotidienne/photo-3.jpg"
            alt="Vue ensemble maquette"
            className="w-full h-auto"
            wrapperClassName="rounded-md"
          />
        </motion.div>
      </section>

      {/* Carousel */}
      <section className="w-full py-20 md:py-32 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-12 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-end"
          >
            <div>
              <span className="text-xs tracking-[0.3em] uppercase opacity-40 block mb-3">Photographies</span>
              <h3 className="text-3xl md:text-4xl font-extralight tracking-tight">
                Dans l&apos;espace <span className="italic" style={{ color: ACCENT }}>public</span>
              </h3>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => scrollByAmount("left")}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center hover:text-white transition-all"
                style={{ borderColor: `${TXT}20` }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = ACCENT; e.currentTarget.style.borderColor = ACCENT; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.borderColor = `${TXT}20`; }}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollByAmount("right")}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center hover:text-white transition-all"
                style={{ borderColor: `${TXT}20` }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = ACCENT; e.currentTarget.style.borderColor = ACCENT; }}
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
            {carouselImages.map((img, index) => (
              <div key={index} className="shrink-0 w-[80vw] md:w-[40vw] lg:w-[30vw]">
                <LightboxImage
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto"
                  wrapperClassName="rounded-md"
                />
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="max-w-6xl mx-auto px-6 md:px-12 mt-8">
            <div className="w-full h-[2px] rounded-full" style={{ backgroundColor: `${TXT}10` }}>
              <div
                className="h-full rounded-full transition-all duration-150"
                style={{ width: `${Math.max(5, scrollProgress * 100)}%`, backgroundColor: ACCENT }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Navigation */}
      <section className="w-full px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="pt-12" style={{ borderTop: `1px solid ${TXT}15` }}>
            <div className="flex justify-between items-center">
              <Link
                href="/projets/intime-au-commun"
                className="group flex items-center gap-4 opacity-40 hover:opacity-100 transition-opacity"
              >
                <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 group-hover:-translate-x-2 transition-transform" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.2em] opacity-50">Précédent</span>
                  <span className="text-base md:text-xl font-light">De l&apos;intime au commun</span>
                </div>
              </Link>

              <Link
                href="/projets/chaises-de-chair"
                className="group flex items-center gap-4 opacity-40 hover:opacity-100 transition-opacity text-right"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.2em] opacity-50">Suivant</span>
                  <span className="text-base md:text-xl font-light">Chaise de Chair</span>
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
          <span className="text-xs tracking-[0.2em] uppercase opacity-25">Angèle Delorme</span>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
            <span className="text-xs opacity-25">2024</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
