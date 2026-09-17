"use client";

import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";

const links = [
  { label: "Power", href: "#capacity" },
  { label: "Ports", href: "#ports" },
  { label: "Specs", href: "#specs" },
  { label: "Reviews", href: "#reviews" },
];

export default function Header() {
  const { count, openCart } = useCart();

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 z-40 flex w-full items-center justify-between border-b border-border-subtle bg-background/70 px-6 py-5 backdrop-blur-md sm:px-10"
    >
      <a href="#top" className="text-lg font-semibold tracking-tight text-foreground">
        volt<span className="text-accent-cool">cell</span>
      </a>
      <nav className="hidden gap-9 text-sm text-foreground/70 sm:flex">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="transition-colors hover:text-foreground"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <button
        onClick={openCart}
        aria-label={`Open cart, ${count} item${count === 1 ? "" : "s"}`}
        className="relative rounded-full border border-border-subtle p-2.5 text-foreground/80 transition-colors hover:border-white/30 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cool"
      >
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path
            d="M5 6h10l-1 10H6L5 6Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 6V4.5a2.5 2.5 0 0 1 5 0V6"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </svg>
        {count > 0 && (
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent-cool text-[10px] font-semibold text-background">
            {count}
          </span>
        )}
      </button>
    </motion.header>
  );
}
