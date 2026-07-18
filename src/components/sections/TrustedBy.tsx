"use client";

import { companies } from "@/data/trustedBy";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TrustedBy() {
  return (
    <section className=" bg-zinc-900 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-medium uppercase tracking-[0.25em] text-zinc-500"
        >
          Trusted by innovative teams worldwide
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 grid place-items-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
        >
          {companies.map((company, index) => (
            <Image
              src={company.img}
              alt={company.name}
              key={index}
              width={70}
              height={70}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
