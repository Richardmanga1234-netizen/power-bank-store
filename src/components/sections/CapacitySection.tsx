"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { productImages } from "@/lib/product";

export default function CapacitySection() {
  return (
    <section id="capacity" className="relative overflow-hidden bg-background py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <p className="text-center text-xs font-medium uppercase tracking-[0.3em] text-accent-cool">
            Capacity
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 text-center text-[4rem] font-bold leading-none tracking-tighter text-foreground sm:text-[7rem] lg:text-[9rem]">
            50,000
            <span className="text-3xl font-semibold tracking-normal text-muted sm:text-4xl lg:text-5xl">
              {" "}
              mAh
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-balance text-center text-xl font-medium text-foreground/80 sm:text-2xl">
            Serious power. Less time attached to a wall.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.15} y={40}>
        <div className="relative mx-auto mt-16 h-[24rem] max-w-4xl px-6 sm:h-[30rem]">
          <div className="relative h-full w-full overflow-hidden rounded-3xl border border-border-subtle bg-surface">
            <Image
              src={productImages.heroPair.src}
              alt={productImages.heroPair.alt}
              fill
              sizes="(min-width: 1024px) 900px, 100vw"
              className="object-cover"
              style={{
                objectPosition: "10% 40%",
                transform: "scale(1.55)",
                transformOrigin: "0% 45%",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-background to-transparent" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
