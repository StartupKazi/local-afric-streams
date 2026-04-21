import { createFileRoute, Link } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { Header } from "@/components/Header";
import { CategoryChips } from "@/components/CategoryChips";
import { AdBanner } from "@/components/AdBanner";
import { VideoCard } from "@/components/VideoCard";
import { AdSlot } from "@/components/AdSlot";
import { Footer } from "@/components/Footer";
import { VerticalAdSpace } from "@/components/VerticalAdSpace";
import { Pager } from "@/components/Pager";
import { ALL_VIDEOS, getRecommended, paginate } from "@/lib/videos";
import { ChevronRight } from "lucide-react";

const PAGE_SIZE = 12;
const homeSchema = z.object({
  page: fallback(z.number().int().min(1), 1).default(1),
});

export const Route = createFileRoute("/")({
  validateSearch: zodValidator(homeSchema),
  head: () => ({
    meta: [
      { title: "Local Afric Videos — Premium African Content Streaming" },
      {
        name: "description",
        content:
          "Discover and stream the best African content. Music, documentaries, tech, cooking and more from creators across the continent.",
      },
      {
        property: "og:title",
        content: "Local Afric Videos — Premium African Content Streaming",
      },
      {
        property: "og:description",
        content:
          "Discover and stream the best African content from creators across the continent.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { page } = Route.useSearch();
  const recommended = getRecommended();
  const browseAll = ALL_VIDEOS.slice(4);
  const { items, totalPages } = paginate(browseAll, page, PAGE_SIZE);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryChips />

      <div className="flex">
        {/* Left vertical ad */}
        <VerticalAdSpace />

        {/* Main content */}
        <div className="flex-1 min-w-0">
          <div className="mt-4">
            <AdBanner />
          </div>

          <section className="mx-auto mt-8 max-w-[1400px] px-4 md:mt-10 md:px-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-lg font-bold text-foreground md:text-xl">
                Recommended for you
              </h2>
              <Link
                to="/categories"
                className="flex items-center gap-1 font-body text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                View all <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-4">
              {recommended.map((video) => (
                <Link key={video.id} to="/watch" className="block">
                  <VideoCard {...video} />
                </Link>
              ))}
            </div>
          </section>

          <section className="mx-auto mt-10 max-w-[1400px] px-4 md:px-6">
            <AdSlot variant="wide" label="Mid-Page Ad" />
          </section>

          <section className="mx-auto mt-10 max-w-[1400px] px-4 md:px-6">
            <h2 className="font-display text-lg font-bold text-foreground md:text-xl">
              Browse all videos
            </h2>
            <div className="mt-5 grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-4">
              {items.map((video, idx) => (
                <>
                  {idx === 4 && <AdSlot key="ad-1" variant="square" label="Sponsored" />}
                  <Link key={video.id} to="/watch" className="block">
                    <VideoCard {...video} />
                  </Link>
                </>
              ))}
            </div>

            <Pager
              page={page}
              totalPages={totalPages}
              to="/"
              buildSearch={(p) => ({ page: p })}
            />
          </section>

          <section className="mx-auto mt-16 max-w-[1400px] px-4 md:px-6">
            <AdSlot variant="banner" label="Bottom Banner Ad" />
          </section>
        </div>

        {/* Right vertical ad */}
        <VerticalAdSpace />
      </div>

      <Footer />
    </div>
  );
}
