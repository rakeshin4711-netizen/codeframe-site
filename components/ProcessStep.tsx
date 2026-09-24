"use client";

import { motion } from "framer-motion";
import type { ProcessStepData } from "@/lib/data";

export default function ProcessStep({ step, index }: { step: ProcessStepData; index: number }) {
  return (
    <motin.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} veriant="x">
      <div>{step.number}</div>
      <div><h3>{step.title}</h3><p>{step.description}</p></div>
    </motin.div>
  );
}
