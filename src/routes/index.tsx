import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { CategoryChips } from "@/components/CategoryChips";
import { AdBanner } from "@/components/AdBanner";
import { VideoCard } from "@/components/VideoCard";
import { SponsoredCard } from "@/components/SponsoredCard";
import { CreatorCTA } from "@/components/CreatorCTA";
import { Footer } from "@/components/Footer";
import { ChevronRight } from "lucide-react";

import thumbCapetown from "@/assets/thumb-capetown.jpg";
import thumbJazz from "@/assets/thumb-jazz.jpg";
import thumbTech from "@/assets/thumb-tech.jpg";
import thumbJollof from "@/assets/thumb-jollof.jpg";
import thumbArchitecture from "@/assets/thumb-architecture.jpg";
import thumbBluecity from "@/assets/thumb-bluecity.jpg";
import thumbIllustration from "@/assets/thumb-illustration.jpg";
import thumbNairobi from "@/assets/thumb-nairobi.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Local Afric Videos — Premium African Content Streaming" },
      { name: "description", content: "Discover and stream the best African content. Music, documentaries, tech, cooking and more from creators across the continent." },
      { property: "og:title", content: "Local Afric Videos — Premium African Content Streaming" },
      { property: "og:description", content: "Discover and stream the best African content from creators across the continent." },
    ],
  }),
  component: HomePage,
});

const recommended = [
  { thumbnail: thumbCapetown, title: "Exploring the Hidden Gems of Cape Town", duration: "12:45", views: "12.5k", likes: "1.2k", quality: "1080p" },
  { thumbnail: thumbJazz, title: "Daily Afro-Jazz Session | Live Request Hour", views: "3.4k watching", isLive: true },
  { thumbnail: thumbTech, title: "Top 10 Tech Startups in Lagos to Watch", duration: "08:12", views: "45k", likes: "312" },
  { thumbnail: thumbJollof, title: "How to make the Perfect Jollof Rice", duration: "22:30", views: "120k", likes: "12k" },
];

const moreVideos = [
  { thumbnail: thumbArchitecture, title: "Sustainable Architecture in Accra", views: "8.2k" },
  { thumbnail: thumbBluecity, title: "The Blue City: A Visual Journey", duration: "10:55", views: "25k" },
  { thumbnail: thumbIllustration, title: "Masterclass: Modern Digital Illustration", duration: "35:10", views: "18k" },
  { thumbnail: thumbNairobi, title: "Nairobi After Dark: Urban Nightlife", duration: "28:47", views: "42k" },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryChips />

      <div className="mt-4">
        <AdBanner />
      </div>

      {/* Recommended */}
      <section className="mx-auto mt-10 max-w-[1400px] px-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl font-bold text-foreground">
            Recommended for you
          </h2>
          <button className="flex items-center gap-1 font-body text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">
            View all <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {recommended.map((video) => (
            <VideoCard key={video.title} {...video} />
          ))}
        </div>
      </section>

      {/* More + Sponsored */}
      <section className="mx-auto mt-10 max-w-[1400px] px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <SponsoredCard />
          {moreVideos.slice(0, 3).map((video) => (
            <VideoCard key={video.title} {...video} />
          ))}
        </div>
      </section>

      {/* Creator CTA */}
      <section className="mt-16">
        <CreatorCTA />
      </section>

      <Footer />
    </div>
  );
}
