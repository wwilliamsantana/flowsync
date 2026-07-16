"use client";

import { motion } from "framer-motion";
import PricingCard from "../ui/PricingCard";
import { pricingPlans } from "@/data/pricingPlans";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-zinc-900 py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            Pricing
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Simple pricing,
            <br />
            powerful features.
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            Choose the plan that fits your team and start building better
            workflows.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
