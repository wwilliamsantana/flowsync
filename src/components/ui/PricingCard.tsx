"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

type PricingCardProps = {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
};

export default function PricingCard({
  name,
  description,
  price,
  period,
  features,
  popular = false,
}: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={`relative rounded-3xl border p-8
        ${popular ? "border-violet-500 bg-violet-500/10 -top-4 lg:-translate-y-4" : "border-white/10 bg-zinc-900"}
      `}
    >
      {popular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-violet-600 px-4 py-1 text-sm font-medium text-white">
          Most Popular
        </span>
      )}

      <h3 className="text-xl font-semibold text-white">{name}</h3>

      <p className="mt-3 text-sm leading-6 text-zinc-400">{description}</p>

      <div className="mt-8 flex items-end gap-2">
        <span className="text-5xl font-bold text-white">{price}</span>

        <span className="mb-2 text-zinc-400">{period}</span>
      </div>

      <button
        className={`mt-8 w-full rounded-full py-3 font-medium transition
          ${popular ? "bg-violet-600 text-white hover:bg-violet-500" : "border border-white/10 bg-white/5 text-white hover:bg-white/10"}
        `}
      >
        Get Started
      </button>

      <ul className="mt-8 space-y-4">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3  leading-6 text-zinc-300"
          >
            <Check size={18} className="text-violet-400" />

            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
