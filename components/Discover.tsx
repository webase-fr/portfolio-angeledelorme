"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const categories = [
  {
    label: "Objets",
    subtitle: "Design & Fabrication",
    image: "/img/IMG_6313.PNG",
    projects: [
      { name: "Au fil des objets", href: "/projets/au-fil-des-objets" },
      { name: "Sème-t-elle", href: "/projets/seme-t-elle" },
      { name: "Éclairer les Sens", href: "/projets/eclairer-les-sens" },
    ],
  },
  {
    label: "Visuels",
    subtitle: "Graphisme & Image",
    image: "/img/IMG_6314.PNG",
    projects: [
      { name: "De l'intime au commun", href: "/projets/intime-au-commun" },
      { name: "Rapport de stage", href: "/projets/rapport-de-stage" },
    ],
  },
  {
    label: "Espaces",
    subtitle: "Scénographie & Lieu",
    image: "/img/IMG_6312.PNG",
    projects: [
      { name: "Posture Quotidienne", href: "/projets/posture-quotidienne" },
      { name: "Chaise de Chair", href: "/projets/chaises-de-chair" },
    ],
  },
];

export default function Discover() {
  return (
    <section id="projets" className="w-full py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20"
        >
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] block mb-4">Découvrir</span>
            <h2 className="text-4xl md:text-6xl font-extralight tracking-tight leading-tight">
              Mes <span className="italic text-[var(--accent)]">projets</span>
            </h2>
          </div>
          <p className="text-sm text-[var(--foreground)]/40 max-w-xs font-light leading-relaxed">
            Formes, matières, espaces. Du dessin à la scénographie, chaque projet prend corps.
          </p>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link
            href="/projets/au-fil-des-objets"
            className="group flex items-center justify-between p-5 md:p-6 rounded-lg border border-[var(--accent)]/20 bg-[var(--accent)]/5 hover:bg-[var(--accent)]/10 transition-all duration-300"
          >
            <div className="flex flex-col gap-1">
              <span className="text-base md:text-lg font-light tracking-tight">Explorez mes réalisations</span>
              <span className="text-xs text-[var(--foreground)]/40">Cliquez pour découvrir le premier projet</span>
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--accent)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <ArrowRight className="w-5 h-5 text-[#E6DCD1]" />
            </div>
          </Link>
        </motion.div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group flex flex-col"
            >
              {/* Image — full visible, smaller inside card */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-5 bg-[var(--surface)] flex items-center justify-center p-6">
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Label + subtitle — below image */}
              <div className="mb-4">
                <h3 className="text-xl md:text-2xl font-light tracking-tight">{cat.label}</h3>
                <span className="text-xs tracking-[0.15em] uppercase text-[var(--muted)]">{cat.subtitle}</span>
              </div>

              {/* Project list */}
              <div className="flex flex-col">
                {cat.projects.map((proj) => (
                  <Link
                    key={proj.name}
                    href={proj.href}
                    className="flex items-center justify-between py-3 border-b border-[var(--foreground)]/8 group/link hover:border-[var(--accent)]/40 transition-colors"
                  >
                    <span className="text-sm font-light tracking-wide group-hover/link:text-[var(--accent)] transition-colors">
                      {proj.name}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 text-[var(--accent)] transition-all duration-300 -translate-x-2 group-hover/link:translate-x-0" />
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
