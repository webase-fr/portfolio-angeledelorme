"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

/* ─── palette ─────────────────────────────────────────────
   Inspired by the raw pine wood & the red thread of the chairs.
   Background  : warm linen / raw canvas   #E6DCD1
   Text        : deep walnut               #2B2119
   Accent      : the red stitching thread   #C03A2B
   ───────────────────────────────────────────────────────── */

const BG = "#E6DCD1";
const TXT = "#2B2119";
const RED = "#C03A2B";

const images = [
  {
    src: "/img/chaises-de-chair/img-0581.jpg",
    alt: "Vue d'ensemble — trois chaises dans l'espace d'exposition",
  },
  {
    src: "/img/chaises-de-chair/dsc-4235.jpg",
    alt: "Détail — fil rouge cousu dans l'assise",
  },
  {
    src: "/img/chaises-de-chair/dsc-4234.jpg",
    alt: "Détail — bonbons, confettis et pièce métallique",
  },
  {
    src: "/img/chaises-de-chair/dsc-4230.jpg",
    alt: "Détail — pièce métallique sur l'assise",
  },
  {
    src: "/img/chaises-de-chair/img-0589.jpg",
    alt: "Vue de profil — les trois chaises alignées",
  },
];

function Lightbox({
  src,
  alt,
  className,
  wrapperClassName,
}: {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
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

export default function ChaisesDeChair() {
  return (
    <main
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: BG, color: TXT }}
    >
      {/* ─ Header */}
      <header
        className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6"
        style={{ backgroundColor: `${BG}cc` }}
      >
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-60 transition-opacity"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium tracking-wider uppercase">
            Retour
          </span>
        </Link>
        <span className="text-xs tracking-[0.3em] uppercase opacity-30">
          Angèle Delorme
        </span>
      </header>

      <div className="h-24" />

      {/* ─ Hero title */}
      <section className="w-full px-6 md:px-12 pt-12 md:pt-20 pb-8 md:pb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Metadata */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs tracking-[0.2em] uppercase opacity-40">
                Objet
              </span>
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: RED }}
              />
              <span className="text-xs tracking-[0.2em] uppercase opacity-40">
                Exposition
              </span>
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: RED }}
              />
              <span className="text-xs tracking-[0.2em] uppercase opacity-40">
                2025
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-[7rem] lg:text-[8.5rem] font-extralight tracking-tight leading-[0.9]">
              Chaise{" "}
              <span className="italic" style={{ color: RED }}>
                de
              </span>
              <br />
              Chair
            </h1>

            {/* Subtitle line */}
            <div className="flex items-center gap-4 mt-8 md:mt-12">
              <div
                className="w-12 md:w-20 h-[2px]"
                style={{ backgroundColor: RED }}
              />
              <p className="text-sm md:text-base tracking-wide opacity-50 max-w-md">
                Une installation pour le Planning Familial d&apos;Orléans
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─ Image hero — vue d'ensemble expo (pleine largeur) */}
      <section className="w-full px-4 md:px-8 py-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <Lightbox
            src={images[0].src}
            alt={images[0].alt}
            className="w-full h-auto md:h-[75vh] object-cover object-[center_65%]"
            wrapperClassName="rounded-md"
          />
        </motion.div>
      </section>

      {/* ─ Texte descriptif */}
      <section className="w-full px-6 md:px-12 py-20 md:py-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start gap-3"
          >
            <span className="text-xs tracking-[0.3em] uppercase opacity-40">
              Propos
            </span>
            <div
              className="w-[2px] h-12 hidden md:block"
              style={{ backgroundColor: `${RED}40` }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-xl md:text-3xl font-light leading-relaxed opacity-80">
              <span className="italic" style={{ color: RED }}>
                Chaise de Chair
              </span>{" "}
              est un projet conçu pour une exposition à la demande du Planning
              Familial d&apos;Orléans. Né d&apos;échanges avec des femmes
              excisées, il vise à mettre en lumière leur vécu et sensibiliser
              sur ce sujet.
            </p>
            <p className="text-base md:text-lg font-light leading-relaxed opacity-50 mt-8">
              Nous avons participé à l&apos;organisation de l&apos;exposition et
              présenté notre travail à un public ouvert à tous, offrant ainsi
              une expérience accessible et engagée.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─ Grille d'images : fil rouge + confettis côte à côte */}
      <section className="w-full px-6 md:px-12 py-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Lightbox
              src={images[1].src}
              alt={images[1].alt}
              className="w-full h-full object-cover"
              wrapperClassName="rounded-md aspect-[4/3]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <Lightbox
              src={images[2].src}
              alt={images[2].alt}
              className="w-full h-full object-cover"
              wrapperClassName="rounded-md aspect-[4/3]"
            />
          </motion.div>
        </div>
      </section>

      {/* ─ Citation / mise en avant */}
      <section className="w-full px-6 md:px-12 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="w-8 h-8 mx-auto mb-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${RED}15` }}
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: RED }}
              />
            </div>
            <blockquote className="text-2xl md:text-4xl font-extralight leading-snug italic opacity-70">
              &laquo;&nbsp;Trois chaises, trois vécus, trois témoignages.
              <br />
              <span className="not-italic font-normal" style={{ color: RED }}>
                Le bois brut
              </span>{" "}
              porte la marque de ce qui ne se voit pas toujours.&nbsp;&raquo;
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ─ Image detail métal */}
      <section className="w-full px-6 md:px-12 py-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Lightbox
              src={images[3].src}
              alt={images[3].alt}
              className="w-full h-auto"
              wrapperClassName="rounded-md"
            />
          </motion.div>
        </div>
      </section>

      {/* ─ Image profil expo — pleine largeur saignante */}
      <section className="w-full py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Lightbox
            src={images[4].src}
            alt={images[4].alt}
            className="w-full h-auto md:h-[80vh] object-cover"
          />
        </motion.div>
      </section>

      {/* ─ Navigation entre projets */}
      <section className="w-full px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="pt-12" style={{ borderTop: `1px solid ${TXT}15` }}>
            <div className="flex justify-between items-center">
              <Link
                href="/projets/posture-quotidienne"
                className="group flex items-center gap-4 opacity-40 hover:opacity-100 transition-opacity"
              >
                <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 group-hover:-translate-x-2 transition-transform" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.2em] opacity-50">
                    Précédent
                  </span>
                  <span className="text-base md:text-xl font-light">
                    Posture Quotidienne
                  </span>
                </div>
              </Link>

              <Link
                href="/projets/rapport-de-stage"
                className="group flex items-center gap-4 opacity-40 hover:opacity-100 transition-opacity text-right"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.2em] opacity-50">
                    Suivant
                  </span>
                  <span className="text-base md:text-xl font-light">
                    Rapport de stage
                  </span>
                </div>
                <ChevronRight className="w-8 h-8 md:w-10 md:h-10 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─ Footer minimal */}
      <footer
        className="w-full px-6 md:px-12 py-8"
        style={{ borderTop: `1px solid ${TXT}10` }}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="text-xs tracking-[0.2em] uppercase opacity-25">
            Angèle Delorme
          </span>
          <div className="flex items-center gap-3">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: RED }}
            />
            <span className="text-xs opacity-25">2025</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
