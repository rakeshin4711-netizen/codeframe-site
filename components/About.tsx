"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "4", label: "Core disciplines under one roof" },
  { value: "100%", label: "Systems, not one-off sites" },
  { value: "1:1", label: "Direct access to the team building it" },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow mb-4 block">ABOUT CODEFRAME</span>
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              A company that engineers digital systems.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-stone">
              Most agencies stop at a website. CODEFRAME starts there and keeps
              going — connecting your site to the automation, AI, and lead
              systems that turn it into a working business engine. One team,
              one system, built to scale with you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:pt-2"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="border-l border-line pl-5">
                <div className="font-serif text-3xl text-ink">{stat.value}</div>
                <div className="mt-2 text-sm leading-snug text-stone">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
