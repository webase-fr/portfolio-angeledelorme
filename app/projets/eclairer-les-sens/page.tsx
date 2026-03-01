"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const BG = "#E6DCD1";
const TXT = "#2B2119";
const AMBER = "#D4A574";

const images = [
  {
    src: "/img/eclairer-les-sens/dsc-4202.jpeg",
    alt: "Lampe Éclairer les Sens — vue de face",
  },
  {
    src: "/img/eclairer-les-sens/dsc-4207.jpeg",
    alt: "Lampe — vue de profil, échantillons de parfum",
  },
  {
    src: "/img/eclairer-les-sens/dsc-4202-alt.jpg",
    alt: "Lampe — vue alternative",
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

export default function EclairerLesSens() {
  return (
    <main
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: BG, color: TXT }}
    >
      {/* Header */}
      <header
        className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 backdrop-blur-md"
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
        <span className="text-xs tracking-[0.3em] uppercase opacity-25">
          Angèle Delorme
        </span>
      </header>

      <div className="h-24" />

      {/* Hero */}
      <section className="w-full px-6 md:px-12 pt-16 md:pt-24 pb-12 md:pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: AMBER }}
              />
              <span className="text-xs tracking-[0.3em] uppercase opacity-40">
                Objet &middot; Upcycling &middot; 2023
              </span>
            </div>

            <h1 className="text-5xl md:text-[7rem] lg:text-[9rem] font-extralight tracking-tight leading-[0.85]">
              <span style={{ color: AMBER }}>Éclairer</span>
              <br />
              les Sens
            </h1>

            <p className="mt-10 md:mt-14 text-sm md:text-base max-w-lg leading-relaxed font-light opacity-50">
              Upcycling lumineux — échantillons de parfum &amp; bois récupéré
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image hero */}
      <section className="w-full px-6 md:px-0 py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto flex justify-center"
        >
          <Lightbox
            src={images[0].src}
            alt={images[0].alt}
            className="w-full h-auto max-h-[80vh] object-contain"
            wrapperClassName="rounded-lg"
          />
        </motion.div>
      </section>

      {/* Texte */}
      <section className="w-full px-6 md:px-12 py-20 md:py-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <span className="text-xs tracking-[0.3em] uppercase opacity-35">
              À propos
            </span>
            <div
              className="w-10 h-[2px] rounded-full"
              style={{ backgroundColor: `${AMBER}80` }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-xl md:text-3xl font-light leading-relaxed opacity-80">
              <span style={{ color: AMBER }} className="italic">
                Éclairer les Sens
              </span>{" "}
              est un projet d&apos;upcycling réalisé en groupe. Cette lampe,
              fabriquée à partir d&apos;échantillons de parfums et de bois
              récupéré, transforme des matériaux oubliés en expérience lumineuse
              et sensorielle.
            </p>
            <p className="text-base md:text-lg font-light leading-relaxed mt-8 opacity-55">
              Adaptable à différents espaces, elle crée une atmosphère unique
              pour chaque moment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Deux images */}
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
              wrapperClassName="rounded-lg aspect-[4/3]"
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
              wrapperClassName="rounded-lg aspect-[4/3]"
            />
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <section className="w-full py-20 md:py-28 flex items-center justify-center">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-32 md:w-48 h-[1px]"
          style={{
            background: `linear-gradient(90deg, transparent, ${AMBER}, transparent)`,
          }}
        />
      </section>

      {/* Section approche créative */}
      <section className="w-full px-6 md:px-12 pb-20 md:pb-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: AMBER }}
              />
              <span className="text-xs tracking-[0.3em] uppercase opacity-40">
                Approche créative
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extralight tracking-tight leading-tight mb-10">
              Lumière
              <br />
              <span className="italic" style={{ color: AMBER }}>
                &amp; matière
              </span>
            </h2>

            <p className="text-lg md:text-2xl font-light leading-relaxed opacity-70">
              Adaptable à différents espaces, cette lampe crée une atmosphère
              unique pour chaque moment — une invitation à redécouvrir la
              lumière à travers des matériaux détournés et sublimés.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image finale */}
      <section className="w-full py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full px-4 md:px-0 max-w-5xl mx-auto"
        >
          <Lightbox
            src={images[0].src}
            alt="Lampe Éclairer les Sens — lumière"
            className="w-full h-auto max-h-[75vh] object-contain"
            wrapperClassName="rounded-lg"
          />
        </motion.div>
      </section>

      {/* Navigation */}
      <section className="w-full px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="pt-12" style={{ borderTop: `1px solid ${TXT}15` }}>
            <div className="flex justify-between items-center">
              <Link
                href="/projets/seme-t-elle"
                className="group flex items-center gap-4 opacity-40 hover:opacity-100 transition-opacity"
              >
                <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 group-hover:-translate-x-2 transition-transform" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.2em] opacity-50">
                    Précédent
                  </span>
                  <span className="text-base md:text-xl font-light">
                    Sème-t-elle
                  </span>
                </div>
              </Link>

              <Link
                href="/projets/intime-au-commun"
                className="group flex items-center gap-4 opacity-40 hover:opacity-100 transition-opacity text-right"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.2em] opacity-50">
                    Suivant
                  </span>
                  <span className="text-base md:text-xl font-light">
                    De l&apos;intime au commun
                  </span>
                </div>
                <ChevronRight className="w-8 h-8 md:w-10 md:h-10 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="w-full px-6 md:px-12 py-8"
        style={{ borderTop: `1px solid ${TXT}08` }}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="text-xs tracking-[0.2em] uppercase opacity-20">
            Angèle Delorme
          </span>
          <div className="flex items-center gap-3">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: AMBER }}
            />
            <span className="text-xs opacity-20">2023</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
