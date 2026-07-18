"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type FAQItemProps = {
  question?: string;
  answer?: string;
};

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="my-3 rounded-2xl border border-white/10 bg-zinc-900">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <span className="text-lg font-medium text-white">{question}</span>

        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDown className="text-zinc-400" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 leading-7 text-zinc-400">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
