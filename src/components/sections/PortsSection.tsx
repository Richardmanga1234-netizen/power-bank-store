"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { product, productImages } from "@/lib/product";

export default function PortsSection() {
  return (
    <section id="ports" className="relative overflow-hidden bg-background py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent-cool">
            Ports &amp; Cables
          </p>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            PLUG IN.
            <br />
            KEEP GOING.
          </h2>
          <p className="mt-6 text-lg text-muted">
            {product.inputs} input ports and {product.outputs} output ports,
            plus an integrated charging cable — wide compatibility, more
            convenience.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border-subtle bg-surface">
            <Image
              src={productImages.portsDetail.src}
              alt={productImages.portsDetail.alt}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "60% 75%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
          </Reveal>

          <Reveal delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border-subtle bg-surface">
            <Image
              src={productImages.stackedPair.src}
              alt={productImages.stackedPair.alt}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "70% 55%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-border-subtle bg-border-subtle sm:grid-cols-3">
            <div className="bg-surface px-8 py-8 text-center">
              <p className="text-3xl font-semibold text-foreground">
                {product.inputs}
              </p>
              <p className="mt-1 text-sm text-muted">
                Inputs — {product.inputTypes.join(", ")}
              </p>
            </div>
            <div className="bg-surface px-8 py-8 text-center">
              <p className="text-3xl font-semibold text-foreground">
                {product.outputs}
              </p>
              <p className="mt-1 text-sm text-muted">
                Outputs — {product.outputPortType}
              </p>
            </div>
            <div className="bg-surface px-8 py-8 text-center">
              <p className="text-3xl font-semibold text-foreground">1</p>
              <p className="mt-1 text-sm text-muted">
                Integrated charging cable
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
