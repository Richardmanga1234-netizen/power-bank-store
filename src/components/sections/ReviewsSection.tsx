"use client";

import Reveal from "@/components/ui/Reveal";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="relative bg-surface py-28 sm:py-36">
      <div className="mx-auto max-w-2xl px-6 text-center sm:px-10">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent-cool">
            Reviews
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Be the first to share your experience.
          </h2>
          <p className="mt-5 text-muted">
            Customer reviews for this product will appear here once they come
            in.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
