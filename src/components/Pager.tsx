import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link, type LinkProps } from "@tanstack/react-router";

interface PagerProps {
  page: number;
  totalPages: number;
  to: LinkProps["to"];
  buildSearch: (page: number) => Record<string, unknown>;
}

export function Pager({ page, totalPages, to, buildSearch }: PagerProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1).filter((p) => {
    if (p === 1 || p === totalPages) return true;
    return Math.abs(p - page) <= 1;
  });

  const items: (number | "...")[] = [];
  pages.forEach((p, i) => {
    if (i > 0 && p - (pages[i - 1] as number) > 1) items.push("...");
    items.push(p);
  });

  const linkBase =
    "flex h-9 min-w-9 items-center justify-center rounded-lg px-3 font-body text-sm font-semibold transition-colors";

  return (
    <nav className="mt-10 flex items-center justify-center gap-1.5" aria-label="Pagination">
      <Link
        to={to}
        search={buildSearch(Math.max(1, page - 1)) as never}
        className={`${linkBase} ${page === 1 ? "pointer-events-none text-muted-foreground/50" : "text-muted-foreground hover:bg-surface-container-high hover:text-foreground"}`}
      >
        <ChevronLeft className="h-4 w-4" />
      </Link>
      {items.map((it, i) =>
        it === "..." ? (
          <span key={`e-${i}`} className="px-2 text-muted-foreground">
            …
          </span>
        ) : (
          <Link
            key={it}
            to={to}
            search={buildSearch(it) as never}
            className={`${linkBase} ${
              it === page
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-surface-container-high hover:text-foreground"
            }`}
          >
            {it}
          </Link>
        ),
      )}
      <Link
        to={to}
        search={buildSearch(Math.min(totalPages, page + 1)) as never}
        className={`${linkBase} ${page === totalPages ? "pointer-events-none text-muted-foreground/50" : "text-muted-foreground hover:bg-surface-container-high hover:text-foreground"}`}
      >
        <ChevronRight className="h-4 w-4" />
      </Link>
    </nav>
  );
}