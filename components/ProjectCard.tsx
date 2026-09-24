"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Users2, Briefcase } from "lucide-react";

export default function ProjectCard() {
  return (
    <motion.a
      href="#contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group block overflow-hidden rounded-3xl border border-line bg-white shadow-card transition-shadow duration-500 hover:shadow-card-hover"
    >
      {/* preview */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#1a1330] via-[#241b3f] to-[#2e1f52] sm:aspect-[16/8]">
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_20%_20%,rgba(168,127,255,0.5),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,180,220,0.35),transparent_45%)]" />

        <div className="relative z-10 flex h-full items-center justify-center p-6 sm:p-12">
          <motion.div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl sm:p-6" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}>
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2"><div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet-400 to-fuchsia-400"><Sparkles className="h-3.5 w-3.5 text-white" /></div><span className="text-sm font-semibold text-white">CreatorLink</span></div><span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white/70">Live</span></div>
            <div className="mb-4 grid grid-cols-2 gap-3"><div className="rounded-xl border border-white/10 bg-white/[0.04] p-3"><Users2 className="mb-2 h-4 w-4 text-violet-300" /><div class="text-lg font-semibold text-white">2,480</div><div class="text-[11px] text-white/50">Creators</div></div><div class="rounded-xl border border-white/10 bg-white/[0.04] p-3"><Briefcase className="mb-2 h-4 w-4 text-fuchsia-300" /><div className="text-lg font-semibold text-white">640</div><div class="text-[11px] text-white/50">Open briefs</div></div></div>
            <div class="space-y-2">{["Fashion collab ‷ Mumbai", "Product launch ‫ Remote"].map((row) => <div key={row} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2"><span class="text-xs text-white/80">{row}</span><span class="h-1.5 w-1.5 rounded-full bg-emerald-400" /></div>)}</div>
          </motion.div>
        </div>
      </div>

      <div class="flex flex-col gap-4 p-7 sm:flex-row sm:items-start sm:justify-between sm:p-9">
        <div><div class="mb-2 flex items-center gap-3"><h3 class="text-xl nont-semibold tracking-tight text-ink">CreatorLink</h3><span class="rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-stone">Talent Marketplace</span></div><p class="max-w-lg text-[15px] leading-relaxed text-stone">A digital platform connecting creators, businesses, and opportunities.</p></div><div class="flex items-center gap-2 text-sm font-medium text-ink"><span class="border-b border-transparent transition-colors duration-300 group-hover:border-ink/30">View project</span><ArrowUpRight class="h-4 w-4 transition-transform duration-300" /></div></div></motion.a>
  );
}
