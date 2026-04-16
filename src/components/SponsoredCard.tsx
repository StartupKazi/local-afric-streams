import { Gift } from "lucide-react";

export function SponsoredCard() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl bg-surface-container-low p-6 text-center">
      <p className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Sponsored Content
      </p>
      <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/20">
        <Gift className="h-6 w-6 text-secondary" />
      </div>
      <h4 className="mt-4 font-display text-base font-bold text-foreground">
        Exclusive Deals for Creators
      </h4>
      <p className="mt-2 font-body text-xs text-muted-foreground">
        Get up to 50% off professional recording gear this week only.
      </p>
      <button className="gradient-logo mt-4 w-full rounded-full px-6 py-2.5 font-body text-sm font-semibold text-foreground transition-opacity hover:opacity-90">
        View Offers
      </button>
    </div>
  );
}
