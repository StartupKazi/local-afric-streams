export function AdBanner() {
  return (
    <div className="mx-auto max-w-[1400px] px-6">
      <div className="rounded-2xl bg-surface-container-low px-8 py-6 text-center">
        <p className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Advertisement
        </p>
        <h3 className="mt-1 font-display text-lg font-bold text-foreground">
          Experience the New Beats Solo 4
        </h3>
        <button className="mt-2 font-body text-sm font-semibold text-primary transition-colors hover:text-primary/80">
          Shop Now
        </button>
      </div>
    </div>
  );
}
