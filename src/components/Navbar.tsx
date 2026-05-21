"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#projects" },
  { name: "Stack", href: "#tech" },
  { name: "Impact", href: "#impact" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const getHref = (href: string) => {
    return isHome ? href : `/${href}`;
  };

  return (
    <motion.nav
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/35 px-5 py-3 text-sm backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.28)] sm:px-7">
        <Link href={getHref("#hero")} className="font-display text-lg font-bold tracking-[0.22em] text-white">
          NEXGEN
        </Link>

        <ul className="hidden items-center gap-6 text-white/70 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={getHref(link.href)} className="hover:text-white">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={getHref("#contact")}
          className="hidden rounded-full border border-[#d7ff64]/40 bg-[#d7ff64]/12 px-4 py-2 font-semibold text-[#f5ffc7] md:inline-flex"
        >
          Start a project
        </Link>

        <button
          className="rounded-full border border-white/10 px-4 py-2 text-white md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-auto mt-3 max-w-7xl rounded-[28px] border border-white/10 bg-[#10171c]/95 p-5 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={getHref(link.href)}
                  className="rounded-2xl border border-white/6 px-4 py-3 text-white/80 hover:bg-white/5 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href={getHref("#contact")}
                className="rounded-2xl bg-[#d7ff64] px-4 py-3 font-semibold text-[#0b0f12]"
                onClick={() => setIsOpen(false)}
              >
                Start a project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
