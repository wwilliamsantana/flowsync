"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type BenefitProps = {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
};

export default function Benefit({
  title,
  description,
  image,
  reverse = false,
}: BenefitProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: reverse ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={`
        flex flex-col items-center gap-16
        lg:gap-20
        ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}
      `}
    >
      <div className="relative flex-1">
        <div className="absolute inset-0 rounded-3xl bg-violet-600/10 blur-3xl" />

        <Image
          src={image}
          alt={title}
          width={768}
          height={1200}
          className="relative rounded-3xl border border-white/10"
        />
      </div>

      <div className="max-w-xl flex-1">
        <span className="text-sm uppercase tracking-[0.25em] text-violet-400">
          Productivity
        </span>

        <h3 className="mt-5 text-3xl lg:text-4xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-6 text-lg leading-8 text-zinc-400">{description}</p>
      </div>
    </motion.div>
  );
}
