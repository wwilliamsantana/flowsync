"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group rounded-2xl border border-white/10 bg-zinc-900 p-8 transition-all duration-300 hover:border-violet-500/40"
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600/10 text-violet-400 transition group-hover:bg-violet-600/20">
        <Icon size={24} />
      </div>

      <h3 className="text-xl font-semibold text-white">{title}</h3>

      <p className="mt-4 leading-7 text-zinc-400">{description}</p>
    </motion.div>
  );
}
