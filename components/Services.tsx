"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 max-w-xl sm:mb-20">
          <span className="eyebrow mb-4 block">WHAT WE DO</span>
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Services that drive growth.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
