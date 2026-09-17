"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { productImages } from "@/lib/product";

export default function DisplaySection() {
  return (
    <section className="relative overflow-hidden bg-surface py-28 sm:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 sm:px-10 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent-cool">
              Display
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
              KNOW WHAT&rsquo;S LEFT.
              <br />
              AT A GLANCE.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-lg text-muted">
              A built-in LED readout shows your exact battery percentage, so
              you always know how much power you have left before you need
              it.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-border-subtle bg-background">
            <Image
              src={productImages.lifestyleCharging.src}
              alt={productImages.lifestyleCharging.alt}
              fill
              sizes="(min-width: 1024px) 540px, 100vw"
              className="object-cover"
              style={{ objectPosition: "35% 60%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/60 via-transparent to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
