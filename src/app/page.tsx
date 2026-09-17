"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

const PowerBankScene = dynamic(
  () => import("@/components/three/PowerBankScene"),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950">
      <Header />

      <main className="flex flex-1 flex-col items-center justify-center gap-12 px-6 py-12 sm:flex-row sm:px-12">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="max-w-lg text-center sm:text-left"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-sky-400">
            Power Bank Store
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Power that fits in your pocket.
          </h1>
          <p className="mt-6 text-lg text-zinc-400">
            Fast-charging, ultra-slim power banks engineered for the way you
            actually live. Drag the model to see it from every angle.
          </p>
          <div className="mt-8 flex justify-center gap-4 sm:justify-start">
            <Button>Shop Now</Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="h-80 w-full max-w-md sm:h-[28rem]"
        >
          <PowerBankScene />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
