"use client";
import { motion } from "framer-motion";

export default function Motivation() {
  return (
    <section className="w-full py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] block mb-4">Inspiration &amp; créativité</span>
          <h2 className="text-4xl md:text-6xl font-extralight tracking-tight">
            Motivation
          </h2>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl flex flex-col gap-8"
        >
          <p className="text-lg md:text-xl font-light leading-relaxed text-[var(--foreground)]/75">
            Je suis passionnée par l&apos;univers créatif et stimulant de l&apos;événementiel et des expositions. J&apos;aime imaginer, concevoir, organiser et donner vie à des expériences. Être à la fois sur le terrain et dans la réflexion me permet de transformer une idée en réalité.
          </p>
          <p className="text-base font-light leading-relaxed text-[var(--foreground)]/50">
            Chaque projet est pour moi une occasion de mêler imagination, technique et gestion pour créer des univers uniques et immersifs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
