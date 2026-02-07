"use client";
import { motion } from "framer-motion";

export default function About() {
  const diplomas = [
    { name: "Diplôme National d'Art — ESAD Orléans", year: "2025", sub: false },
    { name: "Mention Design d'Espace", year: "2025", sub: true },
    { name: "Baccalauréat Général", year: "2022", sub: false },
    { name: "Spécialité Histoire de l'Art", year: "2022", sub: true },
  ];

  return (
    <section className="w-full py-24 md:py-32 px-6 md:px-10" id="about">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] block mb-4">À propos</span>
          <h2 className="text-4xl md:text-6xl font-extralight tracking-tight">
            Qui <span className="italic text-[var(--accent)]">suis-je</span>
          </h2>
        </motion.div>

        {/* Grid: Portrait + Content */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[3/4] rounded-lg overflow-hidden"
          >
            <img
              src="/img/IMG_2277.jpeg"
              alt="Portrait Angèle Delorme"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col gap-10 md:pt-8"
          >
            {/* Bio text */}
            <div className="flex flex-col gap-6">
              <p className="text-lg md:text-xl font-light leading-relaxed text-[var(--foreground)]/80">
                Issue d&apos;une licence en design d&apos;espace, complétée par une approche du design d&apos;objet, j&apos;ai développé des compétences solides en conception, création et mise en forme de projets.
              </p>
              <p className="text-base font-light leading-relaxed text-[var(--foreground)]/55">
                Mon travail s&apos;articule autour du design d&apos;espace, de la scénographie et de la conception d&apos;objets, avec une attention particulière portée aux usages, aux volumes et aux matières.
              </p>
              <p className="text-base font-light leading-relaxed text-[var(--foreground)]/55">
                Au fil de mes projets, j&apos;ai exploré différents types de matériaux et de techniques, me permettant d&apos;adapter mes propositions à des contextes variés. J&apos;utilise également les suites de création graphique et 3D pour concevoir des visuels, développer des intentions et donner forme aux projets.
              </p>
            </div>

            {/* Diplomas */}
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] block mb-4">Diplômes</span>
              <div className="flex flex-col">
                {diplomas.map((dip, idx) => (
                  <div
                    key={idx}
                    className={`flex justify-between items-center py-3 border-b border-[var(--foreground)]/8 hover:border-[var(--accent)]/30 transition-colors group ${dip.sub ? "pl-5" : ""}`}
                  >
                    <span className={`text-sm tracking-wide group-hover:text-[var(--accent)] transition-colors ${dip.sub ? "font-light italic text-[var(--muted)]" : "font-light"}`}>{dip.sub ? "↳ " : ""}{dip.name}</span>
                    <span className="text-xs font-mono text-[var(--muted)]">{dip.sub ? "" : dip.year}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Objective */}
            <div className="p-6 rounded-lg border border-[var(--foreground)]/10 bg-[var(--surface)]">
              <span className="text-xs tracking-[0.3em] uppercase text-[var(--accent)] block mb-3">Mon objectif</span>
              <p className="text-sm font-light leading-relaxed text-[var(--foreground)]/60">
                Aujourd&apos;hui, je souhaite orienter mon parcours vers le domaine de l&apos;événementiel et l&apos;ensemble de ses branches créatives, en mettant le design au service de l&apos;expérience, de l&apos;espace et de la narration.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
