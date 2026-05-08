"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Download, ExternalLink, FileText } from "lucide-react";
import Link from "next/link";

const BG = "#E6DCD1";
const TXT = "#2B2119";
const ACCENT = "#C03A2B";

const PDF_PATH = "/pdf/Angele_Delorme_PORTFOLIO.pdf";

export default function PortfolioPdfPage() {
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
        <span className="text-xs tracking-[0.3em] uppercase opacity-30">
          Angèle Delorme
        </span>
      </header>

      <div className="h-24" />

      {/* Hero */}
      <section className="flex-1 w-full px-6 md:px-12 flex flex-col items-center justify-center py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl w-full mx-auto text-center flex flex-col items-center gap-10"
        >
          {/* Icône décorative */}
          <div
            className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center"
            style={{
              backgroundColor: `${ACCENT}12`,
              border: `1px solid ${ACCENT}25`,
            }}
          >
            <FileText
              className="w-9 h-9 md:w-11 md:h-11"
              style={{ color: ACCENT }}
            />
          </div>

          {/* Titre */}
          <div className="flex flex-col gap-4">
            <span className="text-xs tracking-[0.35em] uppercase opacity-40">
              Document
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tight leading-[0.9]">
              Portfolio
              <br />
              <span className="italic" style={{ color: ACCENT }}>
                complet
              </span>
            </h1>
            <p className="text-sm md:text-base font-light leading-relaxed opacity-55 max-w-sm mx-auto">
              Design d&apos;espace, scénographie &amp; conception d&apos;objets.
              <br />
              PDF · 15 pages
            </p>
          </div>

          {/* Séparateur */}
          <div className="w-16 h-px" style={{ backgroundColor: `${TXT}20` }} />

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:justify-center">
            <a
              href={PDF_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-light tracking-wide transition-all duration-300"
              style={{
                backgroundColor: ACCENT,
                color: BG,
              }}
            >
              <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Ouvrir le portfolio
            </a>

            <a
              href={PDF_PATH}
              download="Angele_Delorme_PORTFOLIO.pdf"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-light tracking-wide border transition-all duration-300 hover:opacity-70"
              style={{ borderColor: `${TXT}25`, color: TXT }}
            >
              <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              Télécharger
            </a>
          </div>

          {/* Note */}
          <p className="text-[11px] tracking-[0.2em] uppercase opacity-30">
            S&apos;ouvre dans un nouvel onglet · Compatible tous appareils
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer
        className="w-full px-6 md:px-12 py-8"
        style={{ borderTop: `1px solid ${TXT}10` }}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="text-xs tracking-[0.2em] uppercase opacity-20">
            Angèle Delorme
          </span>
          <div className="flex items-center gap-3">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: ACCENT }}
            />
            <span className="text-xs opacity-20">Portfolio PDF</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
