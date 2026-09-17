"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { productImages } from "@/lib/product";

const devices = ["Phone", "Tablet", "Earbuds", "Camera", "Handheld gaming"];

export default function CompatibilitySection() {
  return (
    <section className="relative overflow-hidden bg-surface py-28 sm:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 sm:px-10 lg:grid-cols-2">
        <Reveal>
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-border-subtle bg-background">
            <Image
              src={productImages.compatibility.src}
              alt={productImages.compatibility.alt}
              fill
              sizes="(min-width: 1024px) 540px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/70 via-transparent to-transparent" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent-cool">
              Compatibility
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
              One power bank.
              <br />
              Everything you carry.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-lg text-muted">
              Wide compatibility keeps the devices you actually use charged —
              no separate charger for every gadget in your bag.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="mt-8 flex flex-wrap gap-3">
              {devices.map((device) => (
                <li
                  key={device}
                  className="rounded-full border border-border-subtle px-5 py-2.5 text-sm text-foreground/80"
                >
                  {device}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
