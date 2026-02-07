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
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] block mb-4">Motivation</span>
          <h2 className="text-4xl md:text-6xl font-extralight tracking-tight">
            Inspiration <span className="italic text-[var(--accent)]">&amp; vision</span>
          </h2>
        </motion.div>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Left: Texts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <p className="text-lg md:text-xl font-light leading-relaxed text-[var(--foreground)]/75">
              La creativite est le coeur battant du design. Chaque forme que l&apos;on dessine, chaque concept que l&apos;on donne vie est le reflet d&apos;une vision unique. Chaque defi est une occasion d&apos;innover — chaque obstacle, un pas de plus vers la decouverte.
            </p>
            <p className="text-base font-light leading-relaxed text-[var(--foreground)]/50">
              Accepter le processus, faire confiance a son instinct et laisser sa passion guider chaque geste. Le design a le pouvoir d&apos;inspirer et de laisser une empreinte durable. Repousser les limites, rester fidele a sa demarche artistique — c&apos;est la que nait l&apos;extraordinaire.
            </p>
          </motion.div>

          {/* Right: Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <div className="p-8 md:p-10 rounded-lg border border-[var(--foreground)]/8 bg-[var(--surface)] relative">
              {/* Accent dot */}
              <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-[var(--accent)]" />

              <blockquote className="text-xl md:text-2xl font-medium leading-snug tracking-tight mb-6">
                &laquo;&nbsp;Le design ne se limite pas a l&apos;apparence et a la sensation. Le design, c&apos;est aussi le fonctionnement.&nbsp;&raquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-6 h-px bg-[var(--accent)]" />
                <span className="text-xs tracking-[0.2em] uppercase text-[var(--muted)]">Steve Jobs</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
