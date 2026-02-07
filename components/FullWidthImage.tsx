"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FullWidthImage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["3%", "-5%"]);

  return (
    <section ref={containerRef} className="w-full overflow-hidden my-8 md:my-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto overflow-hidden rounded-lg">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full h-[40vh] md:h-[60vh] overflow-hidden"
        >
          <motion.img
            src="/img/bae278e8-0b4f-467d-9209-b08daea32321.jpeg"
            alt="Scénographie atelier"
            className="w-full h-full object-cover object-[center_35%]"
            style={{ scale, y }}
          />
        </motion.div>
      </div>
    </section>
  );
}
