"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { PricingTier } from "@/lib/data";

export default function PricingCard { tier }: { tier: PricingTier }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`relative flex h-full flex-col rounded-2xl border p-8 ${
        tier.featured
          ? "border-ink bg-ink text-cream shadow-soft"
          : "border-line bg-white/60 text-ink shadow-card"
      }`}
    >
      {tier.featured && (
        <span className="absolute -top-3 left-8 rounded-full bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink">
          Most Popular
        </span>
      )}

      <div className="mb-6">
        <span
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${
            tier.featured ? "text-gold-light" : "text-gold"
          }`}
        >
          {tier.name}
        </span>
        <div className="mt-4 flex items-baseline gap-1">
          <span className="font-serif text-4xl">{tier.price}</span>
          {tier.name !== "CUSTOM" && (
            <span className={tier.featured ? "text-cream/50" : "text-stone"}>
              {" "}one-time
            </span>
          )}
        </div>
        <p
          className={`mt-3 text-sm leading-relaxed ${
            tier.featured ? "text-cream/70" : "text-stone"
          }`}
        >
          {tier.description}
        </p>
      </div>

      <ul className="mb-8 flex-1 space-y-3">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2.5 text-sm">
            <Check
              className={`h-4 w-4 shrink-0 ${
                tier.featured ? "text-gold-light" : "text-gold"
              }`}
            />
            <span className={tier.featured ? "text-cream/90" : "text-charcoal"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={
          tier.featured
            ? "inline-flex items-center justify-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-medium text-ink transition-all duration-300 hover:bg-white active:scale-[0.98]"
            : "btn-secondary justify-center"
        }
      >
        {tier.cta}
      </a>
    </motion.div>
  );
}
