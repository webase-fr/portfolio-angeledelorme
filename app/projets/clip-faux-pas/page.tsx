"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const BG = "#E6DCD1";
const TXT = "#2B2119";
const RED = "#8B1A1A";
const GOLD = "#C4973B";

const photos = [
  { src: "/img/clip-faux-pas/732a9d7f-1fc4-46db-93e3-fb563e393b0c.jpg", alt: "Tournage — behind the scenes", aspect: "portrait" },
  { src: "/img/clip-faux-pas/IMG_8317_jpg.jpg", alt: "Scénographie du bar — ambiance rouge", aspect: "landscape" },
  { src: "/img/clip-faux-pas/IMG_8322_jpg.jpg", alt: "Actrice au comptoir", aspect: "landscape" },
  { src: "/img/clip-faux-pas/IMG_8323_jpg.jpg", alt: "Décor — cadres et affiches vintage", aspect: "landscape" },
  { src: "/img/clip-faux-pas/IMG_8325_jpg.jpg", alt: "Décor — mur principal", aspect: "landscape" },
  { src: "/img/clip-faux-pas/IMG_8338_jpg.jpg", alt: "Perspective — tableau d'affichage", aspect: "landscape" },
  { src: "/img/clip-faux-pas/IMG_8345_jpg.jpg", alt: "Table de jeu — cartes et jetons", aspect: "portrait" },
  { src: "/img/clip-faux-pas/IMG_8355_jpg.jpg", alt: "Lampe vintage — coin lounge", aspect: "portrait" },
  { src: "/img/clip-faux-pas/IMG_6418.JPG", alt: "Croquis — vue d'ensemble du bar", aspect: "landscape" },
  { src: "/img/clip-faux-pas/IMG_6419.JPG", alt: "Croquis — plan de la scène", aspect: "portrait" },
  { src: "/img/clip-faux-pas/IMG_6420.JPG", alt: "Croquis — disposition des accessoires", aspect: "portrait" },
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

export default function ClipFauxPas() {
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

      {/* Hero — image pleine largeur cinématique */}
      <section className="relative w-full h-[65vh] md:h-[80vh] overflow-hidden">
        <img
          src="/img/clip-faux-pas/IMG_8325_jpg.jpg"
          alt="Décor du bar — Clip Faux Pas"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, ${BG} 0%, ${BG}80 25%, transparent 55%)`,
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-12 md:pb-16">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px" style={{ backgroundColor: RED }} />
                <span className="text-xs tracking-[0.3em] uppercase opacity-50">
                  Direction décor : Scénographie &middot; 2026
                </span>
              </div>
              <h1 className="text-5xl md:text-[7rem] lg:text-[8.5rem] font-extralight tracking-tight leading-[0.9]">
                Clip{" "}
                <span className="italic font-normal" style={{ color: RED }}>
                  Faux
                </span>
                <br />
                Pas
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
            <div className="w-10 h-[2px] rounded-full" style={{ backgroundColor: `${GOLD}80` }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-xl md:text-3xl font-light leading-relaxed opacity-80">
              Dans le cadre du tournage d&apos;un clip musical, j&apos;ai pu imaginer la scénographie avec une thématique centrée sur les années 30.
            </p>
            <p className="text-base md:text-lg font-light leading-relaxed mt-8 opacity-55">
              Mon travail a débuté par une phase de recherche iconographique et
              esthétique afin de construire un univers visuel fidèle à l&apos;époque tout en servant l&apos;identité de
              l&apos;artiste. J&apos;ai sélectionné et sourcé les éléments de décor, matières et accessoires, puis collaboré
              étroitement avec l&apos;équipe de tournage pour assurer la cohérence entre scénographie, cadrage et
              lumière.
            </p>
            <p className="text-base md:text-lg font-light leading-relaxed mt-6 opacity-55">
              J&apos;ai également conçu et proposé une installation scénographique complète, pensée pour
              renforcer la narration visuelle du clip. Ce projet m&apos;a permis d&apos;explorer une esthétique d&apos;époque,
              d&apos;affiner mon regard scénographique et de développer mon expérience en direction artistique
              appliquée à l&apos;image musicale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photos du projet */}
      <section className="w-full px-6 md:px-12 py-4">
        <div className="max-w-5xl mx-auto">
          {/* Duo paysage — ambiance bar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <Lightbox src={photos[1].src} alt={photos[1].alt} className="w-full h-full object-cover" wrapperClassName="rounded-md aspect-[16/10]" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
              <Lightbox src={photos[2].src} alt={photos[2].alt} className="w-full h-full object-cover" wrapperClassName="rounded-md aspect-[16/10]" />
            </motion.div>
          </div>

          {/* Duo paysage — décor mural */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <Lightbox src={photos[3].src} alt={photos[3].alt} className="w-full h-full object-cover" wrapperClassName="rounded-md aspect-[16/10]" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
              <Lightbox src={photos[5].src} alt={photos[5].alt} className="w-full h-full object-cover" wrapperClassName="rounded-md aspect-[16/10]" />
            </motion.div>
          </div>

          {/* Trio portrait — making of, table, lampe */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <Lightbox src={photos[0].src} alt={photos[0].alt} className="w-full h-full object-cover" wrapperClassName="rounded-md aspect-[3/4]" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.08 }}>
              <Lightbox src={photos[6].src} alt={photos[6].alt} className="w-full h-full object-cover" wrapperClassName="rounded-md aspect-[3/4]" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.16 }}>
              <Lightbox src={photos[7].src} alt={photos[7].alt} className="w-full h-full object-cover" wrapperClassName="rounded-md aspect-[3/4]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Citation */}
      <section className="w-full px-6 md:px-12 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="w-12 h-px mx-auto mb-6" style={{ backgroundColor: `${RED}40` }} />
            <p className="text-lg md:text-xl font-light italic leading-relaxed opacity-50">
              &laquo;&nbsp;Chaque détail du décor raconte une histoire.&nbsp;&raquo;
            </p>
            <div className="w-12 h-px mx-auto mt-6" style={{ backgroundColor: `${RED}40` }} />
          </motion.div>
        </div>
      </section>

      {/* Section Croquis */}
      <section className="w-full px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="text-xs tracking-[0.3em] uppercase opacity-35">Croquis &amp; conception</span>
          </motion.div>

          {/* Croquis paysage en haut */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-4">
            <Lightbox
              src={photos[8].src}
              alt={photos[8].alt}
              className="w-full h-full object-contain"
              wrapperClassName="rounded-md aspect-[16/10] bg-white/50 p-4"
            />
          </motion.div>

          {/* Duo croquis portrait */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <Lightbox
                src={photos[9].src}
                alt={photos[9].alt}
                className="w-full h-full object-contain"
                wrapperClassName="rounded-md aspect-[3/4] bg-white/50 p-4"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <Lightbox
                src={photos[10].src}
                alt={photos[10].alt}
                className="w-full h-full object-contain"
                wrapperClassName="rounded-md aspect-[3/4] bg-white/50 p-4"
              />
            </motion.div>
          </div>
        </div>
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
                href="/projets/au-fil-des-objets"
                className="group flex items-center gap-4 opacity-40 hover:opacity-100 transition-opacity text-right"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.2em] opacity-50">Suivant</span>
                  <span className="text-base md:text-xl font-light">Au fil des objets</span>
                </div>
                <ChevronRight className="w-8 h-8 md:w-10 md:h-10 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sortie clip */}
      <section className="w-full px-6 md:px-12 py-8" style={{ borderTop: `1px solid ${TXT}08` }}>
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm md:text-base font-light opacity-50">
            Sortie en mars prochain du clip vidéo / lien à venir
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-6 md:px-12 py-8" style={{ borderTop: `1px solid ${TXT}08` }}>
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <span className="text-xs tracking-[0.2em] uppercase opacity-20">Angèle Delorme</span>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: RED }} />
            <span className="text-xs opacity-20">2026</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
