"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { productImages } from "@/lib/product";

const PowerBankScene = dynamic(
  () => import("@/components/three/PowerBankScene"),
  { ssr: false }
);

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-24"
    >
      {/* Ambient background composition from the isolated product shot */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-surface" />
        <div className="absolute right-[-15%] top-[4%] h-[75%] w-[85%] opacity-[0.35] mask-fade-edges sm:right-[-5%] sm:w-[65%]">
          <Image
            src={productImages.heroIsolated.src}
            alt=""
            fill
            priority
            sizes="(min-width: 640px) 65vw, 85vw"
            className="object-cover blend-multiply-dark"
            style={{ objectPosition: "15% 80%" }}
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(125,211,252,0.08),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center gap-10 px-6 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl text-center lg:text-left"
        >
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-accent-cool">
            Voltcell &middot; 50,000mAh
          </p>
          <h1 className="text-balance text-5xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            SAVE YOUR
            <br />
            TIME.
            <br />
            <span className="text-foreground/50">DON&rsquo;T STRESS.</span>
          </h1>
          <p className="mt-7 max-w-md text-balance text-lg text-muted lg:mx-0">
            50,000mAh of portable power built to keep everything moving.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <a href="#purchase">
              <Button size="lg" className="w-full sm:w-auto">
                Buy Now
              </Button>
            </a>
            <a href="#capacity">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Explore
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="h-72 w-full max-w-md sm:h-96 lg:h-[30rem]"
        >
          <PowerBankScene />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="relative z-10 mx-auto mb-8 flex items-center gap-2 text-xs tracking-widest text-muted"
        aria-hidden="true"
      >
        <span className="h-8 w-px bg-gradient-to-b from-transparent via-muted to-transparent" />
        SCROLL
      </motion.div>
    </section>
  );
}
