"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import { product, productImages, type ColorId } from "@/lib/product";

const colorPresentation: Record<
  ColorId,
  { src: string; objectPosition: string; blend: boolean }
> = {
  black: {
    src: productImages.lifestyleCharging.src,
    objectPosition: "30% 55%",
    blend: false,
  },
  red: {
    src: productImages.heroIsolated.src,
    objectPosition: "20% 65%",
    blend: true,
  },
};

export default function PurchaseSection() {
  const [color, setColor] = useState<ColorId>(product.defaultColor);
  const [quantity, setQuantity] = useState(1);
  const { addItem, openCart } = useCart();

  const handleAdd = () => {
    addItem(
      {
        productId: product.id,
        name: product.name,
        price: product.price,
        color,
        image: colorPresentation[color].src,
      },
      quantity
    );
  };

  const handleBuyNow = () => {
    handleAdd();
    openCart();
  };

  return (
    <section id="purchase" className="relative bg-background py-28 sm:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 sm:px-10 lg:grid-cols-2">
        <Reveal>
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-border-subtle bg-surface-raised">
            <Image
              src={colorPresentation[color].src}
              alt={`${product.name} in ${color}`}
              fill
              sizes="(min-width: 1024px) 540px, 100vw"
              className={`object-cover transition-opacity duration-300 ${
                colorPresentation[color].blend ? "blend-multiply-dark" : ""
              }`}
              style={{ objectPosition: colorPresentation[color].objectPosition }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            {colorPresentation[color].blend && (
              <div className="absolute inset-0 bg-gradient-to-bl from-black/70 via-transparent to-transparent" />
            )}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent-cool">
            {product.brand}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {product.name}
          </h2>

          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-3xl font-semibold text-foreground">
              ${product.price.toFixed(2)}
            </span>
            {product.compareAtPrice && (
              <span className="text-lg text-muted line-through">
                ${product.compareAtPrice.toFixed(2)}
              </span>
            )}
          </div>

          <div className="mt-8">
            <p className="mb-3 text-sm font-medium text-foreground/80">
              Color — {product.colors.find((c) => c.id === color)?.label}
            </p>
            <div className="flex gap-3">
              {product.colors.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setColor(c.id)}
                  aria-label={`Select ${c.label}`}
                  aria-pressed={color === c.id}
                  className={`h-9 w-9 rounded-full border-2 transition-all ${
                    color === c.id
                      ? "border-accent-cool scale-110"
                      : "border-border-subtle hover:border-white/40"
                  }`}
                  style={{ backgroundColor: c.swatch }}
                />
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="mb-3 text-sm font-medium text-foreground/80">
              Quantity
            </p>
            <div className="inline-flex items-center rounded-full border border-border-subtle">
              <button
                className="px-4 py-2 text-foreground/80 hover:text-foreground"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="min-w-[2rem] text-center text-foreground">
                {quantity}
              </span>
              <button
                className="px-4 py-2 text-foreground/80 hover:text-foreground"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="sm:flex-1" onClick={handleBuyNow}>
              Buy Now
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="sm:flex-1"
              onClick={handleAdd}
            >
              Add to Cart
            </Button>
          </div>

          <p className="mt-6 text-xs text-muted">
            Shipping and return details are provided at checkout.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
