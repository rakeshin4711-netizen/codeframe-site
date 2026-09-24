"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function FeaturedWork() {
  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 max-w-xl sm:mb-20"
        >
          <span className="eyebrow mb-4 block">FEATURED WORK</span>
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Systems we&apos;ve built for clients.
          </h2>
        </motion.div>

        <ProjectCard />
      </div>
    </section>
  );
}
