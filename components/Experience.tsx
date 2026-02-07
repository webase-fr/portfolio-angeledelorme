"use client";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      year: "2026",
      title: "Cheffe décoratrice",
      role: "Direction artistique & scénographie",
      desc: "J'ai pris part à la réalisation d'un clip musical pour un artiste en début de parcours, en assurant la scénographie et la direction artistique du projet.",
    },
    {
      year: "2025",
      title: "Exposition — Planning Familial",
      role: "Demande de projet",
      desc: "Dans le cadre d'une collaboration entre le Planning Familial et l'ESAD d'Orléans, j'ai conçu un projet destiné à une exposition ouverte au public, mettant en lumière la réalité de l'excision à travers des témoignages de femmes.",
    },
    {
      year: "2024",
      title: "LAMAIN",
      role: "Stage de conception scénographique",
      desc: "Lors d'un stage de deux mois au sein d'un atelier, j'ai participé à la création de la scénographie d'un festival, de la phase de conception à la mise en œuvre sur le terrain.",
    },
  ];

  return (
    <section className="w-full py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16"
        >
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] block mb-4">Parcours</span>
            <h2 className="text-4xl md:text-6xl font-extralight tracking-tight">
              Expériences <span className="italic text-[var(--accent)]">pro</span>
            </h2>
          </div>
          <span className="text-xs tracking-[0.2em] uppercase text-[var(--foreground)]/30">
            Professionnel / Créative
          </span>
        </motion.div>

        {/* Timeline */}
        <div className="flex flex-col">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-10 py-8 md:py-10 border-b border-[var(--foreground)]/8 hover:border-[var(--accent)]/30 transition-colors"
            >
              {/* Year */}
              <div className="flex items-start">
                <span className="text-xs font-mono tracking-wider text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors">
                  {exp.year}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-4">
                  <h3 className="text-xl md:text-2xl font-light tracking-tight group-hover:text-[var(--accent)] transition-colors">
                    {exp.title}
                  </h3>
                  <span className="text-xs tracking-[0.2em] uppercase text-[var(--foreground)]/30 shrink-0">
                    {exp.role}
                  </span>
                </div>
                <p className="text-sm font-light leading-relaxed text-[var(--foreground)]/50 max-w-2xl mt-2">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
