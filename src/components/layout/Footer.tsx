import Link from "next/link";
import { Workflow } from "lucide-react";

const product = ["Features", "Pricing", "FAQ"];

const company = ["About", "Careers", "Contact"];

const resources = ["Documentation", "Blog", "Support"];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-900">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Workflow className="text-violet-500" />

              <span className="text-xl font-semibold text-white">FlowSync</span>
            </Link>

            <p className="mt-5 max-w-sm leading-7 text-zinc-400">
              A modern SaaS platform to help teams plan, collaborate and deliver
              projects faster.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">Product</h3>

            <ul className="mt-6 space-y-4">
              {product.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-zinc-400 transition hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Company</h3>

            <ul className="mt-6 space-y-4">
              {company.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-zinc-400 transition hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Resources</h3>

            <ul className="mt-6 space-y-4">
              {resources.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-zinc-400 transition hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row">
          <p>© {new Date().getFullYear()} FlowSync. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="#" className="transition hover:text-white">
              Privacy
            </Link>

            <Link href="#" className="transition hover:text-white">
              Terms
            </Link>

            <Link href="#" className="transition hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
