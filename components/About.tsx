"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  const diplomas = [
    { name: "DIPLÔME NATIONAL D'ART - ESAD ORLÉANS", year: "2025", type: "primary" },
    { name: "MENTION DESIGN D'ESPACE", year: "2025", type: "secondary" },
    { name: "BACCALAUREAT GENERAL", year: "2022", type: "primary" },
    { name: "SPECIALITÉ HISTOIRE DE L'ART", year: "2022", type: "secondary" },
  ];

  return (
    <section className="w-full py-24 px-4 md:px-8" id="about">

      <div className="w-full max-w-[95%] mx-auto flex flex-col gap-16">

        {/* Header - Sticky under navbar */}
        <div className="sticky top-[76px] z-40 bg-[#052902] self-start w-full flex justify-between items-start border-b border-white/20 pb-8 pt-8 text-left">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tighter">A PROPOS</h2>
            <span className="text-white/60 text-sm font-medium uppercase tracking-wider">QUI SUIS-JE ?</span>
          </div>
        </div>

        {/* Grid Layout: Portrait Left / Content Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start justify-items-center md:items-start text-center md:text-left">

          {/* Left: Large Portrait Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[3/4] md:h-[85vh] bg-red-600 rounded-sm overflow-hidden"
          >
            {/* Placeholder for red portrait */}
            <div className="absolute inset-0 bg-[#E63900] z-0" />
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <span className="text-white/20 font-bold text-4xl uppercase p-8 text-center">[ Portrait ]</span>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="flex flex-col gap-12 pt-8 w-full items-center md:items-start">
            {/* Intro */}
            <div className="flex flex-col gap-6 w-full">

              <div className="space-y-6 text-lg md:text-xl font-medium leading-relaxed text-neutral-200">
                <p>
                  Issu d'une licence en design d'espace, complétée par une approche du design d'objet, j'ai développé des compétences solides en conception, création et mise en forme de projets.
                </p>
                <p>
                  Mon travail s'articule autour du design d'espace, de la scénographie et de la conception d'objets, avec une attention particulière portée aux usages, aux volumes et aux matières.
                </p>
                <p>
                  Au fil de mes projets, j'ai exploré différents types de matériaux et de techniques, me permettant d'adapter mes propositions à des contextes variés. J'utilise également les suites de création graphique et 3D pour concevoir des visuels, développer des intentions et donner forme aux projets.
                </p>
              </div>
            </div>

            {/* Diplomas */}
            <div className="flex flex-col gap-4 w-full">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-2 self-center md:self-start">DIPLÔMES</h4>
              <div className="flex flex-col border-t border-white/20 w-full">
                {diplomas.map((dip, idx) => (
                  <div
                    key={idx}
                    className={`flex justify-between items-center py-4 px-2 border-b border-white/20 transition-colors group cursor-default text-left
                                  ${dip.type === 'primary' ? 'hover:bg-white hover:text-black' : 'hover:bg-white/10 text-white'}
                              `}
                  >
                    <span className="font-bold text-xs md:text-sm uppercase tracking-wider">{dip.name}</span>
                    <div className="flex items-center gap-4">
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className={`font-mono text-xs font-bold ${dip.type === 'primary' ? 'group-hover:text-black' : ''}`}>{dip.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Objective */}
            <div className="flex flex-col gap-4 mt-8 w-full text-center md:text-left">
              <h3 className="text-lg font-bold uppercase tracking-widest text-white mb-2">[ MON OBJECTIF ]</h3>
              <p className="text-sm md:text-base leading-relaxed text-neutral-200">
                Aujourd'hui, je souhaite orienter mon parcours vers le domaine de l'événementiel et l'ensemble de ses branches créatives, en mettant le design au service de l'expérience, de l'espace et de la narration.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
