"use client";

import Link from "next/link";
import { Workflow, Menu, X } from "lucide-react";
import { useState } from "react";
import { MobileNavbar } from "./MobileNavbar";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10  backdrop-blur-xl">
      <nav className=" flex h-16  items-center justify-between  px-5 sm:px-6 lg:px-8">
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

        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-zinc-200 transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={"/"}
            className="text-sm font-medium text-zinc-400 transition hover:text-white"
          >
            Login
          </Link>

          <Link
            href={"/"}
            className="px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] rounded-full bg-linear-to-r from-violet-600 to-indigo-600"
          >
            Start Free
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
          className="rounded-lg p-2 text-white hover:bg-white/5 transition lg:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && <MobileNavbar onClose={() => setIsOpen(false)} />}
    </header>
  );
}
