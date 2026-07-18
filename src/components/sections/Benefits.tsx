"use client";

import { motion } from "framer-motion";
import Benefit from "../ui/Benefit";
import { benefits } from "@/data/benefits";

export default function Benefits() {
  return (
    <section className="bg-zinc-900 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-28 max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            Product Showcase
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Work smarter,
            <br />
            not harder.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Discover how FlowSync helps modern teams collaborate, automate
            workflows and deliver projects faster.
          </p>
        </motion.div>

        <div className="space-y-28 lg:space-y-36">
          {benefits.map((benefit) => (
            <Benefit key={benefit.title} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}
