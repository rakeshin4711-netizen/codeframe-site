"use client";

import { motion } from "framer-motion";
import { TrendingUp, Zap, Users, Code2, CheckCircle2 } from "lucide-react";

export default function SystemVisual() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[480px] select-none">
      {/* ambient glow */}
      <div className="absolute inset-0 -z-10 rounded-full bg-gold/10 blur-3xl" />
      <svg viewBox="0 0 200 56" className="h-14 w-full"><polyline points="0,44 25,38 50,40 75,26 100,30 125,16 150,20 175,8 200,10" fill="none" stroke="#B08B3F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </div>
  );
}
