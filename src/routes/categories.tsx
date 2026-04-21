import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CATEGORIES, ALL_VIDEOS } from "@/lib/videos";

const COVERS = [
  "from-emerald-500/40 to-emerald-700/60",
  "from-rose-500/40 to-rose-700/60",
  "from-sky-500/40 to-sky-700/60",
  "from-amber-500/40 to-amber-700/60",
  "from-violet-500/40 to-violet-700/60",
  "from-fuchsia-500/40 to-fuchsia-700/60",
  "from-teal-500/40 to-teal-700/60",
  "from-orange-500/40 to-orange-700/60",
  "from-blue-500/40 to-blue-700/60",
  "from-pink-500/40 to-pink-700/60",
  "from-lime-500/40 to-lime-700/60",
];

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "Browse categories — Local Afric Videos" },
      { name: "description", content: "Browse all categories on Local Afric Videos." },
    ],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-[1400px] px-4 py-8 md:px-6">
        <h1 className="font-display text-2xl font-bold text-foreground md:text-3xl">
          Browse Categories
        </h1>
        <p className="mt-1 font-body text-sm text-muted-foreground">
          Pick a category to explore curated streams and videos.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {CATEGORIES.filter((c) => c !== "All").map((cat, i) => {
            const count = ALL_VIDEOS.filter((v) => v.category === cat).length;
            return (
              <Link
                key={cat}
                to="/search"
                search={{ q: "", category: cat, page: 1 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className={`aspect-[3/4] bg-gradient-to-br ${COVERS[i % COVERS.length]}`} />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/30 to-transparent p-3">
                  <h3 className="font-display text-base font-bold text-white">{cat}</h3>
                  <p className="font-body text-xs text-white/70">{count} videos</p>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}