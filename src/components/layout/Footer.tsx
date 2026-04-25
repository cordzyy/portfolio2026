import Link from "next/link";
import { Zap } from "lucide-react";
import { navLinks } from "@/data/mock";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
            <Zap className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-sm text-zinc-500">joshuacorda.dev</span>
        </div>

        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-zinc-700">
          © {new Date().getFullYear()} Joshua Corda. Built with Next.js & Tailwind.
        </p>
      </div>
    </footer>
  );
}
