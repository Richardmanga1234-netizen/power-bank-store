"use client";

import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section className="relative bg-background py-28 sm:py-40">
      <div className="mx-auto max-w-2xl px-6 text-center sm:px-10">
        <Reveal>
          <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl">
            SAVE YOUR TIME.
            <br />
            <span className="text-foreground/50">DON&rsquo;T STRESS.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-6 max-w-sm text-lg text-muted">
            Stay powered wherever you go.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <a href="#purchase" className="mt-10 inline-block">
            <Button size="lg">Buy Now</Button>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
