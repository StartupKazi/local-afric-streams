import { useState } from "react";

const categories = [
  "All", "Music", "Gaming", "Tech", "News", "Documentary",
  "Comedy", "Lifestyle", "Cooking", "Education", "Sports",
];

export function CategoryChips() {
  const [active, setActive] = useState("All");

  return (
    <div className="flex gap-2 overflow-x-auto px-6 py-3 scrollbar-none">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`shrink-0 rounded-full px-4 py-1.5 font-body text-sm font-medium transition-colors ${
            active === cat
              ? "bg-primary text-primary-foreground"
              : "bg-surface-container-highest text-muted-foreground hover:bg-surface-bright"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
