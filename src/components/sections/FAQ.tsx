"use client";

import { motion } from "framer-motion";
import FAQItem from "../ui/FAQItem";
import { faqItems } from "@/data/faq";

export default function FAQ() {
  return (
    <section id="faq" className="bg-zinc-900 py-16">
      <div className="mx-auto max-w-4xl px-6">
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
          className="mb-20 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            FAQ
          </span>

          <h2 className="mt-5 text-5xl font-bold text-white">
            Frequently asked questions
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            Everything you need to know before getting started with FlowSync.
          </p>
        </motion.div>

        <div>
          {faqItems.map((item) => (
            <FAQItem key={item.question} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
