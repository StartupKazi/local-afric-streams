import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { Search as SearchIcon } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VideoCard } from "@/components/VideoCard";
import { Pager } from "@/components/Pager";
import { AdSlot } from "@/components/AdSlot";
import { CATEGORIES, paginate, searchVideos } from "@/lib/videos";
import { Fragment } from "react";

const PAGE_SIZE = 12;

const searchSchema = z.object({
  q: fallback(z.string(), "").default(""),
  category: fallback(z.string(), "All").default("All"),
  page: fallback(z.number().int().min(1), 1).default(1),
});

export const Route = createFileRoute("/search")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "Search — Local Afric Videos" },
      { name: "description", content: "Search videos and creators on Local Afric." },
    ],
  }),
  component: SearchPage,
});

function SearchPage() {
  const { q, category, page } = Route.useSearch();
  const navigate = useNavigate({ from: "/search" });
  const results = searchVideos(q, category);
  const { items, totalPages } = paginate(results, page, PAGE_SIZE);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-[1400px] px-4 py-8 md:px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="font-display text-2xl font-bold text-foreground md:text-3xl">
              {q ? `Results for "${q}"` : "Browse all videos"}
            </h1>
            <p className="mt-1 font-body text-sm text-muted-foreground">
              {results.length} {results.length === 1 ? "result" : "results"}
              {category !== "All" ? ` in ${category}` : ""}
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              navigate({
                search: (prev: { q: string; category: string; page: number }) => ({
                  ...prev,
                  q: String(fd.get("q") ?? ""),
                  page: 1,
                }),
              });
            }}
            className="relative w-full max-w-md"
          >
            <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              name="q"
              defaultValue={q}
              placeholder="Search videos, creators..."
              className="h-11 w-full rounded-full bg-input pl-10 pr-4 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </form>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <Link
              key={c}
              to="/search"
              search={(prev: { q: string; category: string; page: number }) => ({
                ...prev,
                category: c,
                page: 1,
              })}
              className={`rounded-full px-4 py-1.5 font-body text-sm font-medium transition-colors ${
                category === c
                  ? "bg-primary text-primary-foreground"
                  : "bg-surface-container-highest text-muted-foreground hover:bg-surface-bright"
              }`}
            >
              {c}
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <AdSlot variant="wide" label="Search Results Ad" />
        </div>

        {items.length === 0 ? (
          <div className="mt-16 rounded-2xl bg-surface-container-low p-12 text-center">
            <p className="font-display text-lg font-semibold text-foreground">No videos found</p>
            <p className="mt-1 font-body text-sm text-muted-foreground">
              Try a different search term or category.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {items.map((v, idx) => (
              <Fragment key={v.id}>
                {idx === 3 && <AdSlot variant="square" label="Sponsored" />}
                {idx === 9 && <AdSlot variant="square" label="Sponsored" />}
                <Link to="/watch" className="block">
                  <VideoCard {...v} />
                </Link>
              </Fragment>
            ))}
          </div>
        )}

        <Pager
          page={page}
          totalPages={totalPages}
          to="/search"
          buildSearch={(p) => ({ q, category, page: p })}
        />

        <div className="mt-10">
          <AdSlot variant="banner" label="Footer Ad" />
        </div>
      </main>
      <Footer />
    </div>
  );
}