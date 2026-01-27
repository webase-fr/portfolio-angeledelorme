"use client";
import React from "react";
import { Armchair, Image as ImageIcon, LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";

export default function Discover() {
  const items = [
    { label: "Objets", icon: Armchair, id: "objets" },
    { label: "Visuels", icon: ImageIcon, id: "visuels" },
    { label: "Espaces", icon: LayoutGrid, id: "espaces" },
  ];

  return (
    <section className="w-full min-h-screen py-24 px-4 md:px-8 flex flex-col justify-center">
      {/* Container matching the other sections "max-w-[95%] mx-auto" */}
      <div className="w-full max-w-[95%] mx-auto flex flex-col gap-16">

        {/* Top: Title - Sticky Header */}
        <div className="sticky top-[76px] z-40 bg-[#052902] self-start w-full flex justify-between items-start border-b border-white/20 pb-8 pt-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tighter">DÉCOUVRIR</h2>
            <span className="text-white/60 text-sm font-medium uppercase tracking-wider">3 Catégories</span>
          </div>
        </div>

        {/* Middle: 3 Images (Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col gap-4 group cursor-pointer items-center"
            >
              <div className="relative aspect-[4/5] w-full bg-white/5 rounded-lg overflow-hidden flex items-center justify-center p-8 group-hover:bg-white/10 transition-colors border border-white/10 group-hover:border-accent">
                <item.icon className="w-24 h-24 text-white/50 group-hover:text-accent group-hover:scale-110 transition-all duration-500" strokeWidth={1} />
              </div>

              <h3 className="text-2xl font-bold uppercase tracking-wider text-center group-hover:text-accent transition-colors">{item.label}</h3>
            </motion.div>
          ))}
        </div>

        {/* Bottom: Text */}
        <div className="w-full text-center mt-8">
          <p className="text-2xl md:text-4xl font-bold text-white uppercase leading-tight max-w-4xl mx-auto">
            "Formes, matières, espaces. Du dessin à la scénographie, nos projets prennent corps."
          </p>
        </div>

      </div>
    </section>
  );
}
