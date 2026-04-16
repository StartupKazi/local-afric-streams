import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VideoPlayer } from "@/components/VideoPlayer";
import { CommentSection } from "@/components/CommentSection";
import { RelatedVideos } from "@/components/RelatedVideos";
import { SponsoredPartner } from "@/components/SponsoredPartner";
import { AdBanner } from "@/components/AdBanner";
import { ThumbsUp, ThumbsDown, Share2, ShoppingCart } from "lucide-react";
import thumbNairobi from "@/assets/thumb-nairobi.jpg";

export const Route = createFileRoute("/watch")({
  head: () => ({
    meta: [
      { title: "The Hidden Heart of Nairobi — Local Afric Videos" },
      { name: "description", content: "A cinematic journey through Nairobi's hidden gems." },
      { property: "og:title", content: "The Hidden Heart of Nairobi — Local Afric Videos" },
      { property: "og:description", content: "A cinematic journey through Nairobi's hidden gems." },
    ],
  }),
  component: WatchPage,
});

function WatchPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="mx-auto mt-4 max-w-[1400px] px-6">
        {/* Top ad banner */}
        <div className="mb-4 rounded-xl bg-surface-container-low px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
              <ShoppingCart className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="font-display text-sm font-bold text-foreground">
                Upgrade Your Gear
              </p>
              <p className="font-body text-xs text-muted-foreground">
                Exclusive 40% discount for LocalAfric members
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-primary px-4 py-1.5 font-body text-xs font-semibold text-primary-foreground">
              Shop Now
            </button>
            <span className="font-body text-[10px] uppercase tracking-wider text-muted-foreground">
              Sponsored
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
          {/* Left column — video + meta + comments */}
          <div>
            <VideoPlayer thumbnail={thumbNairobi} title="The Hidden Heart of Nairobi" />

            {/* Tags */}
            <div className="mt-3 flex gap-2">
              <span className="rounded-md bg-surface-container-highest px-2.5 py-1 font-body text-xs font-semibold text-foreground">
                Ultra HD
              </span>
              <span className="rounded-md bg-surface-container-highest px-2.5 py-1 font-body text-xs font-semibold text-foreground">
                Original
              </span>
            </div>

            <h1 className="mt-3 font-display text-2xl font-bold text-foreground">
              The Hidden Heart of Nairobi: A Cinematic Journey
            </h1>

            {/* Channel + actions */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-surface-container-highest" />
                <div>
                  <p className="flex items-center gap-1.5 font-display text-sm font-semibold text-foreground">
                    AfriVantage Studios
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-tertiary text-[8px] text-foreground">
                      ✓
                    </span>
                  </p>
                  <p className="font-body text-xs text-muted-foreground">2.4M subscribers</p>
                </div>
                <button className="ml-2 rounded-full bg-surface-container-highest px-5 py-2 font-body text-sm font-semibold text-foreground transition-colors hover:bg-surface-bright">
                  Subscribe
                </button>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center overflow-hidden rounded-full bg-surface-container-highest">
                  <button className="flex items-center gap-1.5 px-4 py-2 font-body text-sm text-foreground hover:bg-surface-bright">
                    <ThumbsUp className="h-4 w-4" /> 142K
                  </button>
                  <div className="h-5 w-px bg-border" />
                  <button className="px-3 py-2 text-foreground hover:bg-surface-bright">
                    <ThumbsDown className="h-4 w-4" />
                  </button>
                </div>
                <button className="flex items-center gap-1.5 rounded-full bg-surface-container-highest px-4 py-2 font-body text-sm text-foreground hover:bg-surface-bright">
                  <Share2 className="h-4 w-4" /> Share
                </button>
              </div>
            </div>

            {/* Sponsored ad */}
            <div className="mt-6">
              <AdBanner />
            </div>

            <CommentSection />
          </div>

          {/* Right sidebar */}
          <aside className="space-y-6">
            <SponsoredPartner />
            <RelatedVideos />
          </aside>
        </div>
      </main>

      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
}
