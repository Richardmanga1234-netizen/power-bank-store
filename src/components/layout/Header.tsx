"use client";

import { motion } from "framer-motion";

const links = ["Products", "Technology", "Support", "About"];

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center justify-between px-6 py-6 sm:px-12"
    >
      <span className="text-lg font-semibold tracking-tight text-white">
        volt<span className="text-sky-400">cell</span>
      </span>
      <nav className="hidden gap-8 text-sm text-zinc-300 sm:flex">
        {links.map((link) => (
          <a key={link} href="#" className="transition-colors hover:text-white">
            {link}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
