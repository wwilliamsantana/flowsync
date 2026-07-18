import { navigation } from "@/data/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

interface MobileNavbarProps {
  onClose: () => void;
}

export function MobileNavbar({ onClose }: MobileNavbarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/10 bg-zinc-900 p-6 backdrop-blur-xl lg:hidden"
    >
      <div className="flex flex-col gap-5">
        {navigation.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={onClose}
            className="text-zinc-300 transition hover:text-white"
          >
            {item.label}
          </Link>
        ))}

        <div className="mt-3 flex flex-col text-center gap-3">
          <Link
            href="/"
            className="rounded-xl border border-white/10 py-3 text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:border-white/50"
          >
            Login
          </Link>

          <Link
            href="/"
            className="rounded-xl bg-white/10 py-3 font-medium  text-zinc-200 transition-all duration-300 hover:-translate-y-0.5 hover:text-white  bg-linear-to-r from-violet-600 to-indigo-600"
          >
            Start Free
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
