export function VerticalAdSpace() {
  return (
    <div className="hidden xl:flex flex-col items-start justify-start w-[160px] shrink-0 px-3 pt-4">
      <div className="sticky top-20 flex w-full flex-col items-center gap-2 rounded-xl border border-dashed border-border/60 bg-surface-container-low/60 px-3 py-10 text-center">
        <p className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Advertisement
        </p>
        <p className="mt-2 font-display text-sm font-semibold text-foreground/70">
          Ad Space
        </p>
        <p className="mt-1 font-body text-[10px] text-muted-foreground/70">
          160 × 600
        </p>
      </div>
    </div>
  );
}
