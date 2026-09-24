"use client";

import { motion } from "framer-motion";
import { pricingTiers } from "@/lib/data";
import PricingCard from "./PricingCard";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 max-w-xl sm:mb-20"
        >
          <span className="eyebrow mb-4 block">PACKAGES</span>
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Simple packages, powerful results.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={tier.featured ? "lg:-translate-y-3" : ""}
            >
              <PricingCard tier={tier} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
