"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { processSteps } from "@/lib/data";
import ProcessStep from "./ProcessStep";

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" className="py-24 sm:py-32">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-xl sm:mb-24"
        >
          <span className="eyebrow mb-4 block">OUR PROCESS</span>
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            A systematic approach from start to scale.
          </h2>
        </motion.div>

        <div ref={ref} className="relative">
          {/* desktop connecting line */}
          <div className="absolute left-0 right-0 top-[22px] hidden h-px bg-line lg:block">
            <motion.div
              style={{ scaleX, transformOrigin: "left" }}
              className="h-full w-full bg-gold"
            />
          </div>
          {/* mobile connecting line */}
          <div className="absolute left-[22px] top-0 bottom-0 w-px bg-line lg:hidden">
            <motion.div style={{ scaleY, transformOrigin: "top" }} className="h-full w-full bg-gold" />
          </div>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:`ap-6">
            {processSteps.map((step, i) => (<ProcessStep key={step.number} step={step} index={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
