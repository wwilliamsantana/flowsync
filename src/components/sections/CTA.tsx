"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-zinc-900 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className=" relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-800 px-8 py-20 text-center lg:px-20"
        >
          <div className="absolute left-1/2 top-0 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />

          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            Get Started
          </span>

          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            Ready to simplify your workflow?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Join thousands of modern teams using FlowSync to organize projects,
            automate workflows and collaborate more efficiently.
          </p>

          <div className="mt-10 flex justify-center">
            <button className="group flex items-center gap-2 rounded-full bg-violet-600 px-7 py-3 font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:bg-violet-500">
              Start Free
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>

          <p className="mt-5 text-sm text-zinc-500">No credit card required.</p>
        </motion.div>
      </div>
    </section>
  );
}
