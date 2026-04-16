import { CheckCircle } from "lucide-react";

export function CreatorCTA() {
  return (
    <div className="mx-auto max-w-[1400px] px-6">
      <div className="grid gap-6 md:grid-cols-[1fr_320px]">
        {/* Join CTA */}
        <div className="rounded-2xl bg-surface-container-low p-8">
          <h2 className="font-display text-2xl font-bold text-foreground">
            The Creator Ecosystem is Growing
          </h2>
          <p className="mt-2 font-body text-sm text-muted-foreground">
            Join over 10,000 African creators sharing their stories, music, and culture with the world.
          </p>
          <div className="mt-6 flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-11 flex-1 rounded-full bg-input px-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <button className="gradient-primary shrink-0 rounded-full px-6 py-2.5 font-body text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
              Join Now
            </button>
          </div>
        </div>

        {/* Verified Program */}
        <div className="rounded-2xl bg-surface-container p-6">
          <CheckCircle className="h-8 w-8 text-tertiary" />
          <h3 className="mt-3 font-display text-lg font-bold text-foreground">
            Verified Program
          </h3>
          <p className="mt-1 font-body text-sm text-muted-foreground">
            Unlock the blue badge and exclusive analytics tools.
          </p>
          <button className="mt-4 flex items-center gap-1 font-body text-sm font-semibold text-tertiary transition-colors hover:text-tertiary/80">
            Learn more <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
