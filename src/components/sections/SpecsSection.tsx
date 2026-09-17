"use client";

import Reveal from "@/components/ui/Reveal";
import { specs } from "@/lib/product";

export default function SpecsSection() {
  return (
    <section id="specs" className="relative bg-surface py-28 sm:py-36">
      <div className="mx-auto max-w-3xl px-6 sm:px-10">
        <Reveal className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent-cool">
            Specifications
          </p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            What you actually get.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="mt-14 divide-y divide-border-subtle border-y border-border-subtle">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="flex items-center justify-between gap-6 py-5"
              >
                <dt className="text-sm text-muted">{spec.label}</dt>
                <dd className="text-right text-base font-medium text-foreground">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 text-center text-xs text-muted">
            Specifications reflect only what is visible on official product
            imagery.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
