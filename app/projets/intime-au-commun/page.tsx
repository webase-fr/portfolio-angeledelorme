"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const BG = "#E6DCD1";
const TXT = "#2B2119";
const AMBER = "#D4943C";

const photos = [
  { src: "/img/intime-au-commun/_DSC0010_1.jpg", alt: "Scène dans la laverie — ambiance nocturne" },
  { src: "/img/intime-au-commun/_DSC0025.JPG", alt: "Portrait dans la laverie" },
  { src: "/img/intime-au-commun/_DSC0035.jpg", alt: "Moment capturé sur le vif" },
  { src: "/img/intime-au-commun/_DSC0086.jpg", alt: "Silhouette entre les machines" },
  { src: "/img/intime-au-commun/_DSC1295.JPG", alt: "Détail — lumière et matière" },
  { src: "/img/intime-au-commun/_DSC1307.JPEG", alt: "Scène du quotidien" },
  { src: "/img/intime-au-commun/_DSC1334.JPEG", alt: "Instant suspendu" },
  { src: "/img/intime-au-commun/_DSC1356_1.jpg", alt: "Rencontre dans l'espace commun" },
  { src: "/img/intime-au-commun/_DSC1357.JPG", alt: "Atmosphère intime" },
  { src: "/img/intime-au-commun/_DSC1375_1.JPG", alt: "Regard et lumière" },
  { src: "/img/intime-au-commun/_DSC1384.jpg", alt: "Composition visuelle" },
  { src: "/img/intime-au-commun/_DSC1389.JPG", alt: "Narration photographique" },
  { src: "/img/intime-au-commun/IMG_6354.JPG", alt: "Fanzine — couvertures LAVERIE" },
];

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

export default function IntimeAuCommun() {
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

      {/* Hero — image pleine largeur */}
      <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
        <img
          src={photos[0].src}
          alt={photos[0].alt}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to top, ${BG}, ${BG}80 40%, transparent)` }}
        />

        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-12 md:pb-16">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px" style={{ backgroundColor: AMBER }} />
                <span className="text-xs tracking-[0.3em] uppercase opacity-50">
                  Visuel &middot; Fanzine &middot; 2024
                </span>
              </div>
              <h1 className="text-4xl md:text-[6rem] lg:text-[7.5rem] font-extralight leading-[0.85] tracking-tight">
                De l&apos;intime
                <br />
                <span className="italic font-normal" style={{ color: AMBER }}>au commun</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Texte descriptif */}
      <section className="w-full px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <span className="text-xs tracking-[0.3em] uppercase opacity-35">À propos</span>
            <div className="w-10 h-[2px] rounded-full" style={{ backgroundColor: `${AMBER}80` }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-xl md:text-3xl font-light leading-relaxed opacity-80">
              <span className="italic" style={{ color: AMBER }}>De l&apos;intime au commun</span>{" "}
              est un fanzine essentiellement photographique, capturant des moments
              saisis sur le vif.
            </p>
            <p className="text-base md:text-lg font-light leading-relaxed mt-8 opacity-55">
              Le projet s&apos;inspire des décors déjà présents sur le lieu et se construit à travers
              une mise en forme graphique, reliant images et espace pour créer une narration visuelle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grille de photos — duo */}
      <section className="w-full px-6 md:px-12 py-4">
        <div className="max-w-5xl mx-auto">
          {/* Duo 1 */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <Lightbox src={photos[1].src} alt={photos[1].alt} className="w-full h-full object-cover" wrapperClassName="rounded-md aspect-[3/4]" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
              <Lightbox src={photos[2].src} alt={photos[2].alt} className="w-full h-full object-cover" wrapperClassName="rounded-md aspect-[3/4]" />
            </motion.div>
          </div>

          {/* Duo 2 */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <Lightbox src={photos[3].src} alt={photos[3].alt} className="w-full h-full object-cover" wrapperClassName="rounded-md aspect-[3/4]" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
              <Lightbox src={photos[4].src} alt={photos[4].alt} className="w-full h-full object-cover" wrapperClassName="rounded-md aspect-[3/4]" />
            </motion.div>
          </div>

          {/* Duo 3 */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <Lightbox src={photos[5].src} alt={photos[5].alt} className="w-full h-full object-cover" wrapperClassName="rounded-md aspect-[3/4]" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
              <Lightbox src={photos[6].src} alt={photos[6].alt} className="w-full h-full object-cover" wrapperClassName="rounded-md aspect-[3/4]" />
            </motion.div>
          </div>

          {/* Duo 4 */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <Lightbox src={photos[7].src} alt={photos[7].alt} className="w-full h-full object-cover" wrapperClassName="rounded-md aspect-[3/4]" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
              <Lightbox src={photos[8].src} alt={photos[8].alt} className="w-full h-full object-cover" wrapperClassName="rounded-md aspect-[3/4]" />
            </motion.div>
          </div>

          {/* Trio */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <Lightbox src={photos[9].src} alt={photos[9].alt} className="w-full h-full object-cover" wrapperClassName="rounded-md aspect-[3/4]" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.08 }}>
              <Lightbox src={photos[10].src} alt={photos[10].alt} className="w-full h-full object-cover" wrapperClassName="rounded-md aspect-[3/4]" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.16 }}>
              <Lightbox src={photos[11].src} alt={photos[11].alt} className="w-full h-full object-cover" wrapperClassName="rounded-md aspect-[3/4]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fanzine */}
      <section className="w-full px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-8">
            <span className="text-xs tracking-[0.3em] uppercase opacity-35">Le fanzine</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <Lightbox src={photos[12].src} alt={photos[12].alt} className="w-full h-auto" wrapperClassName="rounded-md" />
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="w-full px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="pt-12" style={{ borderTop: `1px solid ${TXT}15` }}>
            <div className="flex justify-between items-center">
              <Link
                href="/projets/eclairer-les-sens"
                className="group flex items-center gap-4 opacity-40 hover:opacity-100 transition-opacity"
              >
                <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 group-hover:-translate-x-2 transition-transform" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.2em] opacity-50">Précédent</span>
                  <span className="text-base md:text-xl font-light">Éclairer les Sens</span>
                </div>
              </Link>

              <Link
                href="/projets/posture-quotidienne"
                className="group flex items-center gap-4 opacity-40 hover:opacity-100 transition-opacity text-right"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.2em] opacity-50">Suivant</span>
                  <span className="text-base md:text-xl font-light">Posture Quotidienne</span>
                </div>
                <ChevronRight className="w-8 h-8 md:w-10 md:h-10 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-6 md:px-12 py-8" style={{ borderTop: `1px solid ${TXT}08` }}>
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <span className="text-xs tracking-[0.2em] uppercase opacity-20">Angèle Delorme</span>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: AMBER }} />
            <span className="text-xs opacity-20">2024</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
