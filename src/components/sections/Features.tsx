"use client";

import { features } from "@/data/features";
import { FeatureCard } from "../ui/FeatureCard";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <section id="features" className="bg-zinc-900 py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            Features
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Everything you need to manage your workflow
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            Powerful features designed for modern teams to collaborate, automate
            and deliver projects faster.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>

    // <div className="mx-auto max-w-7xl px-6 mt-16 grid grid-cols-3 gap-3">
    //   <FeatureCard
    //     icon={CheckSquare}
    //     title="Organize Every Task"
    //     description="Plan projects with boards, lists and timelines designed for productive teams."
    //   />
    //   <FeatureCard
    //     icon={CheckSquare}
    //     title="Organize Every Task"
    //     description="Plan projects with boards, lists and timelines designed for productive teams."
    //   />
    //   <FeatureCard
    //     icon={CheckSquare}
    //     title="Organize Every Task"
    //     description="Plan projects with boards, lists and timelines designed for productive teams."
    //   />
    // </div>
  );
}
