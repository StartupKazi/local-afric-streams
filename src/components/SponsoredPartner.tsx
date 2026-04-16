import thumbBluecity from "@/assets/thumb-bluecity.jpg";

export function SponsoredPartner() {
  return (
    <div className="relative overflow-hidden rounded-xl">
      <img
        src={thumbBluecity}
        alt="Exclusive partner"
        className="h-64 w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
          Exclusive Partner
        </p>
        <h3 className="mt-1 font-display text-xl font-bold text-foreground">
          Precision Reimagined
        </h3>
        <p className="mt-1 font-body text-xs text-muted-foreground">
          Discover the Nocturnal Series. Limited edition timepieces crafted for the modern curator.
        </p>
        <button className="mt-3 w-full rounded-lg bg-surface-container-highest py-2.5 font-body text-sm font-semibold text-foreground transition-colors hover:bg-surface-bright">
          Explore Collection
        </button>
      </div>
    </div>
  );
}
