"use client";

import Link from "next/link";
import { Workflow, Menu } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const navigation = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10  backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-90"
        >
          <div className="flex h-10 w-10 items-center justify-center border rounded-xl bg-linear-to-r from-violet-600 to-indigo-600">
            <Workflow size={20} className="text-white" />
          </div>

          <span className="text-lg font-semibold tracking-tight text-white">
            FlowSync
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-zinc-200 transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button className="text-sm font-medium text-zinc-400 transition hover:text-white">
            Login
          </button>

          <button className="px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.08] rounded-full bg-linear-to-r from-violet-600 to-indigo-600">
            Start Free
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-zinc-300 md:hidden"
        >
          <Menu size={24} />
        </button>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/10 bg-zinc-900 p-6 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-5">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-zinc-300 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-3 flex flex-col gap-3">
              <button className="rounded-xl border border-white/10 py-3 text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:border-white/50">
                Login
              </button>

              <button className="rounded-xl bg-white/10 py-3 font-medium  text-zinc-200 transition-all duration-300 hover:-translate-y-0.5 hover:text-white  bg-linear-to-r from-violet-600 to-indigo-600">
                Start Free
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
