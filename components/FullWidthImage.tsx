"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FullWidthImage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Scale from 1.5 to 1 as you scroll through
  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  // Move the image up as you scroll
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-20%"]);

  return (
    <section ref={containerRef} className="w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full min-h-[30vh] md:h-auto overflow-hidden"
      >
        <motion.img
          src="/img/IMG_6289.JPG"
          alt="Project showcase"
          className="w-full h-auto object-cover"
          style={{ scale, y }}
        />
      </motion.div>
    </section>
  );
}
