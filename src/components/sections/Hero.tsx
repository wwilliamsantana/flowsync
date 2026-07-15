"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { heroContent } from "@/data/hero";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-zinc-900 pt-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl"
        >
          {heroContent.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400"
        >
          {heroContent.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 "
        >
          <button className="rounded-full bg-violet-600 px-6 py-3 font-medium text-white transition  hover:scale-[1.03]">
            {heroContent.primaryButton}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className=" w-full mt-20"
        >
          <Image
            src="/bg.png"
            alt="FlowSync Dashboard"
            className="rounded-xl border border-white/10 shadow-2xl"
            width={1400}
            height={700}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
