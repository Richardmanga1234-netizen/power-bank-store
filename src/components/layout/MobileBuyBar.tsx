"use client";

import { motion } from "framer-motion";
import { product } from "@/lib/product";
import Button from "@/components/ui/Button";

export default function MobileBuyBar() {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.6 }}
      className="fixed inset-x-0 bottom-0 z-30 flex items-center justify-between gap-4 border-t border-border-subtle bg-background/90 px-5 py-4 backdrop-blur-md sm:hidden"
      style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <div className="leading-tight">
        <p className="text-sm font-medium text-foreground">{product.name}</p>
        <p className="text-sm text-muted">${product.price.toFixed(2)}</p>
      </div>
      <a href="#purchase">
        <Button size="md">Buy Now</Button>
      </a>
    </motion.div>
  );
}
