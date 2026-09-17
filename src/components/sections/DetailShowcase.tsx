"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { productImages } from "@/lib/product";

export default function DetailShowcase() {
  return (
    <section className="relative overflow-hidden bg-background py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent-cool">
            Detail
          </p>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Every angle, engineered.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:grid-rows-2 sm:gap-5">
          <Reveal className="relative col-span-2 row-span-2 aspect-square overflow-hidden rounded-3xl border border-border-subtle bg-white sm:aspect-auto">
            <Image
              src={productImages.heroIsolated.src}
              alt={productImages.heroIsolated.alt}
              fill
              sizes="(min-width: 640px) 45vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "20% 65%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-bl from-black/70 via-transparent to-transparent" />
          </Reveal>

          <Reveal delay={0.05} className="relative col-span-2 aspect-[4/3] overflow-hidden rounded-3xl border border-border-subtle bg-surface sm:col-span-2 sm:aspect-auto">
            <Image
              src={productImages.portsDetail.src}
              alt={productImages.portsDetail.alt}
              fill
              sizes="(min-width: 640px) 45vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "70% 65%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </Reveal>

          <Reveal delay={0.1} className="relative col-span-1 aspect-square overflow-hidden rounded-3xl border border-border-subtle bg-surface">
            <Image
              src={productImages.colorLineup.src}
              alt={productImages.colorLineup.alt}
              fill
              sizes="(min-width: 640px) 22vw, 50vw"
              className="object-cover blend-multiply-dark"
              style={{ objectPosition: "40% 30%" }}
            />
          </Reveal>

          <Reveal delay={0.15} className="relative col-span-1 aspect-square overflow-hidden rounded-3xl border border-border-subtle bg-surface">
            <Image
              src={productImages.stackedPair.src}
              alt={productImages.stackedPair.alt}
              fill
              sizes="(min-width: 640px) 22vw, 50vw"
              className="object-cover"
              style={{ objectPosition: "25% 30%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
