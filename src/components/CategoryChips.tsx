import { Link } from "@tanstack/react-router";
import { CATEGORIES } from "@/lib/videos";

export function CategoryChips() {
  return (
    <div className="flex gap-2 overflow-x-auto px-4 py-3 scrollbar-none md:px-6">
      {CATEGORIES.map((cat) => (
        <Link
          key={cat}
          to="/search"
          search={{ q: "", category: cat, page: 1 }}
          className="shrink-0 rounded-full bg-surface-container-highest px-4 py-1.5 font-body text-sm font-medium text-muted-foreground transition-colors hover:bg-surface-bright hover:text-foreground"
        >
          {cat}
        </Link>
      ))}
    </div>
  );
}
