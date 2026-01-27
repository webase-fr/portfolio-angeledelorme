"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      year: "2025",
      title: "EXPOSITION",
      role: "DEMANDE DE PROJET",
      desc: "Dans le cadre d’une collaboration entre le Planning Familial et l’ESAD d’Orléans, j’ai pu être amenée à concevoir un projet destinée à une exposition ouverte au public. Cette démarche vise à mettre en lumière la réalité de l'excision à travers des témoignages de femmes accompagnées par le Planning Familial, afin de sensibiliser et de provoquer une réflexion autour de cette pratique.",
      iconColor: "text-red-500",
      icon: "Planning"
    },
    {
      year: "JUIN 2024 - JUILLET 2024",
      title: "LAMAIN",
      role: "STAGE DE CONCEPTION SCENOGRAPHIQUE",
      desc: "Lors d’un stage de deux mois au sein d’un atelier, j’ai participé à la création de la scénographie d’un festival, de la phase de conception à la mise en œuvre sur le terrain. J’ai également contribué à la réalisation de projets sur mesure pour des marques.",
      iconColor: "text-white",
      icon: "Lamain"
    },
    {
      year: "2026",
      title: "CHEFFE DÉCORATRICE",
      role: "DIRECTION ARTISTIQUE & SCENOGRAPHIE",
      desc: "J'ai pris part à la réalisation d'un clip musical pour un artiste en début de parcours, en assurant la scénographie. Ce projet collaboratif, dédié aux talents émergents, m'a permis de développer mes compétences et d'enrichir mon expérience professionnelle.",
      iconColor: "text-white",
      icon: "Star"
    },
    {
      year: "2014 - 2017",
      title: "FIVERR",
      role: "FREELANCE WEB DESIGNER",
      desc: "Bringing Creativity, Technical Expertise, and a passion for Design to every project.",
      iconColor: "text-green-500",
      icon: "Fiverr"
    }
  ];

  return (
    <section className="w-full min-h-screen py-24 px-4 md:px-8">
      <div className="w-full max-w-[95%] mx-auto flex flex-col gap-12">

        {/* Sticky Full-Width Header */}
        <div className="sticky top-[76px] z-40 bg-[#052902] self-start w-full flex justify-between items-start border-b border-white/20 pb-8 pt-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tighter">EXPÉRIENCES</h2>
          </div>
          {/* Badge */}
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-white/50 rounded-full"></span>
            <span className="border border-white/30 text-white px-4 py-1 text-xs font-bold uppercase tracking-widest">
              PROFESSIONNEL / CRÉATIVE
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-col gap-24 pt-4">

          {/* Experience List */}
          <div className="flex flex-col gap-32 pb-32">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row gap-8"
              >
                {/* Icon Area */}
                <div className="md:w-32 flex justify-center md:justify-start pt-2">
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center font-bold text-xs uppercase border border-white/20 ${exp.iconColor === 'text-green-500' ? 'bg-[#00B14F] text-white' : ''}`}>
                    {exp.icon === 'Fiverr' ? (
                      <span className="font-serif italic text-4xl">fi</span>
                    ) : exp.icon === 'Star' ? (
                      <Star className="w-12 h-12" />
                    ) : exp.icon === 'Planning' ? (
                      <span className="text-red-500 text-[10px] text-center leading-tight">le planning<br />familial</span>
                    ) : (
                      <span className="text-[10px] text-center">LAMAIN</span>
                    )}
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex justify-between items-baseline border-b border-white/20 pb-2 mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">{exp.title}</h3>
                    <span className="font-mono text-sm md:text-base font-bold whitespace-nowrap opacity-80">[ {exp.year} ]</span>
                  </div>

                  <h4 className="text-base md:text-lg font-bold uppercase tracking-widest mb-4 opacity-90">{exp.role}</h4>

                  <p className="text-base leading-relaxed text-neutral-300 max-w-2xl">
                    {exp.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
