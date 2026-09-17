"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { productImages } from "@/lib/product";

export default function LifestyleSection() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0">
        <Image
          src={productImages.lifestyleCharging.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
          style={{ objectPosition: "60% 40%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-10">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent-cool">
            Lifestyle
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl">
            POWER WHEREVER
            <br />
            LIFE TAKES YOU.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-md text-lg text-muted">
            No socket nearby? Keep moving.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
