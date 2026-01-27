"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Discover() {
  const items = [
    { label: "Objets", id: "objets", image: "/img/IMG_6313.PNG" },
    { label: "Visuels", id: "visuels", image: "/img/IMG_6314.PNG" },
    { label: "Espaces", id: "espaces", image: "/img/IMG_6312.PNG" },
  ];

  return (
    <section className="w-full min-h-screen pt-32 md:pt-64 pb-24 px-4 md:px-8 flex flex-col justify-center">
      {/* Container matching the other sections "max-w-[95%] mx-auto" */}
      <div className="w-full max-w-[95%] mx-auto flex flex-col gap-12 md:gap-16">
        {/* Top: Title - Sticky Header */}
        <div className="sticky top-[76px] z-40 bg-[#052902] self-start w-full flex justify-between items-start border-b border-white/20 pb-6 md:pb-8 pt-6 md:pt-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tighter">
              DÉCOUVRIR
            </h2>
            <span className="text-white/60 text-xs md:text-sm font-medium uppercase tracking-wider">
              3 Catégories
            </span>
          </div>
        </div>

        {/* Middle: 3 Images (Cards) */}
        <div className="flex flex-col md:flex-row mt-8 md:mt-32 justify-center items-center gap-12 md:gap-48 w-full">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col gap-6 group cursor-pointer items-center"
            >
              <div className="relative aspect-[4/5] w-28 md:w-36 rounded-lg overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-center group-hover:text-accent transition-colors">
                {item.label}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Bottom: Text */}
        <div className="w-full text-center mt-24">
          <p className="text-base md:text-xl font-medium text-white/70 leading-relaxed max-w-3xl mx-auto">
            Formes, matières, espaces. Du dessin à la scénographie, nos projets
            prennent corps.
          </p>
        </div>
      </div>
    </section>
  );
}
