"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { colorOptions } from "@/lib/product";
import Button from "@/components/ui/Button";

function colorLabel(id: string) {
  return colorOptions.find((c) => c.id === id)?.label ?? id;
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, subtotal, updateQuantity, removeItem } =
    useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            onClick={closeCart}
            aria-hidden="true"
          />
          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-border-subtle bg-surface"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
          >
            <div className="flex items-center justify-between border-b border-border-subtle px-6 py-5">
              <h2 className="text-lg font-semibold text-foreground">
                Your Cart
              </h2>
              <button
                onClick={closeCart}
                aria-label="Close cart"
                className="rounded-full p-2 text-muted transition-colors hover:bg-white/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cool"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <p className="mt-12 text-center text-sm text-muted">
                  Your cart is empty.
                </p>
              ) : (
                <ul className="flex flex-col gap-5">
                  {items.map((item) => (
                    <li key={item.color} className="flex gap-4">
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-surface-raised">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-sm font-medium text-foreground">
                              {item.name}
                            </p>
                            <p className="text-xs text-muted">
                              {colorLabel(item.color)}
                            </p>
                          </div>
                          <p className="text-sm font-medium text-foreground">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center rounded-full border border-border-subtle">
                            <button
                              className="px-3 py-1 text-sm text-foreground/80 hover:text-foreground"
                              onClick={() =>
                                updateQuantity(item.color, item.quantity - 1)
                              }
                              aria-label={`Decrease quantity of ${item.name}`}
                            >
                              −
                            </button>
                            <span className="min-w-[1.5rem] text-center text-sm text-foreground">
                              {item.quantity}
                            </span>
                            <button
                              className="px-3 py-1 text-sm text-foreground/80 hover:text-foreground"
                              onClick={() =>
                                updateQuantity(item.color, item.quantity + 1)
                              }
                              aria-label={`Increase quantity of ${item.name}`}
                            >
                              +
                            </button>
                          </div>
                          <button
                            className="text-xs text-muted underline-offset-2 hover:text-foreground hover:underline"
                            onClick={() => removeItem(item.color)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-border-subtle px-6 py-5">
                <div className="mb-4 flex items-center justify-between text-sm">
                  <span className="text-muted">Subtotal</span>
                  <span className="font-semibold text-foreground">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <Button className="w-full" size="lg">
                  Checkout
                </Button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
