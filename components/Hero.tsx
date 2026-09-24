"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SystemVisual from "./SystemVisual";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-40 sm:pb-28 sm:pt-48">
      <div className="container-x grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-xl"
        >
          <motion.span variants={item} className="eyebrow mb-6 block">
            DIGITAL SYSTEMS COMPANY
          </motion.span>

          <motion.h1
            variants={item}
            className="text-[2.6rem] font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]"
          >
            We build digital systems that turn{" "}
            <span className="italic-serif">ideas into businesses.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-base font-medium text-stone sm:text-lg"
          >
            Websites <span className="mx-2 text-line">•</span> AI Automation{" "}
            <span className="mx-2 text-line">•</span> Lead Generation{" "}
            <span className="mx-2 text-line">•</span> Custom Software
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-primary">
              Start a Project <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#work" className="btn-secondary">
              View Our Work <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="lg:justify-self-end"
        >
          <SystemVisual />
        </motion.div>
      </div>
    </section>
  );
}
