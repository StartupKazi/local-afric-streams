type AdSlotProps = {
  label?: string;
  variant?: "banner" | "square" | "wide" | "inline";
  className?: string;
};

const SIZE_HINT: Record<NonNullable<AdSlotProps["variant"]>, string> = {
  banner: "728 × 90",
  square: "300 × 300",
  wide: "970 × 250",
  inline: "468 × 120",
};

const HEIGHT: Record<NonNullable<AdSlotProps["variant"]>, string> = {
  banner: "min-h-[120px]",
  square: "min-h-[300px]",
  wide: "min-h-[200px]",
  inline: "min-h-[140px]",
};

export function AdSlot({ label = "Advertisement", variant = "banner", className = "" }: AdSlotProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-2xl border border-dashed border-border/60 bg-surface-container-low/60 px-6 py-8 text-center ${HEIGHT[variant]} ${className}`}
    >
      <p className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-2 font-display text-sm font-semibold text-foreground/70">
        Ad Space
      </p>
      <p className="mt-1 font-body text-[10px] text-muted-foreground/70">
        {SIZE_HINT[variant]}
      </p>
    </div>
  );
}
