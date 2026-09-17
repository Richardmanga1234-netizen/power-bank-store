export default function Footer() {
  return (
    <footer className="border-t border-border-subtle px-6 py-12 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-tight text-foreground">
            volt<span className="text-accent-cool">cell</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted">
            Power that keeps up with you. Save your time, don&rsquo;t stress.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
          <div className="flex flex-col gap-2">
            <p className="mb-1 text-xs font-medium uppercase tracking-widest text-muted">
              Product
            </p>
            <a href="#capacity" className="text-foreground/70 hover:text-foreground">Power</a>
            <a href="#ports" className="text-foreground/70 hover:text-foreground">Ports</a>
            <a href="#specs" className="text-foreground/70 hover:text-foreground">Specs</a>
          </div>
          <div className="flex flex-col gap-2">
            <p className="mb-1 text-xs font-medium uppercase tracking-widest text-muted">
              Shop
            </p>
            <a href="#purchase" className="text-foreground/70 hover:text-foreground">Buy Now</a>
            <a href="#reviews" className="text-foreground/70 hover:text-foreground">Reviews</a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-border-subtle pt-6 text-xs text-muted sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Voltcell. All rights reserved.</p>
        <p>Specifications reflect what is shown on official product imagery.</p>
      </div>
    </footer>
  );
}
