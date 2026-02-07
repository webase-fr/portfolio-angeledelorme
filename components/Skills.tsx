"use client";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    {
      name: "Photoshop",
      logo: "/img/logos/Adobe_Photoshop_CC_icon.svg.png",
      color: "#31A8FF",
      desc: "Retouche photo, photomontage, creation de visuels et composition d'images.",
    },
    {
      name: "Lightroom",
      logo: "/img/logos/Adobe_Photoshop_Lightroom_CC_logo.svg.png",
      color: "#31A8FF",
      desc: "Traitement colorimetrique, retouche par lots et edition de photos RAW.",
    },
    {
      name: "InDesign",
      logo: "/img/logos/Adobe_InDesign_CC_icon.svg.png",
      color: "#FF3366",
      desc: "Mise en page de documents, creation de supports print et edition.",
    },
    {
      name: "Premiere Pro",
      logo: "/img/logos/Adobe_Premiere_Pro_CC_icon.svg.png",
      color: "#9999FF",
      desc: "Montage video, assemblage de sequences et post-production.",
    },
    {
      name: "Figma",
      logo: "/img/logos/Figma-logo.svg",
      color: "#A259FF",
      desc: "Prototypage, maquettage d'interfaces et design collaboratif.",
    },
    {
      name: "Blender",
      logo: "/img/logos/Blender_logo_no_text.svg.png",
      color: "#E87D0D",
      desc: "Modelisation 3D, rendu realiste et mise en scene d'objets.",
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
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] block mb-4">Competences</span>
            <h2 className="text-4xl md:text-6xl font-extralight tracking-tight">
              Logiciels <span className="italic text-[var(--accent)]">&amp; outils</span>
            </h2>
          </div>
          <span className="text-xs tracking-[0.2em] uppercase text-[var(--foreground)]/30">
            {skills.length} maitrises
          </span>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative p-6 md:p-7 rounded-lg border border-[var(--foreground)]/6 hover:border-[var(--accent)]/30 bg-[var(--surface)] transition-all duration-300 overflow-hidden"
            >
              {/* Background glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2"
                style={{ backgroundColor: skill.color }}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-4">
                {/* Logo */}
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                  <img
                    src={skill.logo}
                    alt={`Logo ${skill.name}`}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base md:text-lg font-medium tracking-tight">{skill.name}</h3>
                  <p className="text-xs leading-relaxed text-[var(--foreground)]/40 group-hover:text-[var(--foreground)]/60 transition-colors">
                    {skill.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
