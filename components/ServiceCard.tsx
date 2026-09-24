"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/data";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-white/60 p-7 shadow-card transition-shadow duration-300 hover:shadow-card-hover sm:p-8">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gold/0 to-gold/0 transition-colors duration-300" />
      <div><div class="mb-8 flex items-start justify-between"><span class="font-serif text-sm text-stone">{service.number}</span><div class="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-cream"><Icon className="h-4.5 w-4.5 text-ink" /></div></div><h3 class="mb-3 text-xl font-semibold tracking-tight text-ink">{service.title}</h3><p>{service.description}</p></div><div class="mt-8 flex items-center text-sm font-medium text-ink">Learn more <ArrowUpRight /></div></motion.div>
  );
}
