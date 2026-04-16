import thumbCapetown from "@/assets/thumb-capetown.jpg";
import thumbJazz from "@/assets/thumb-jazz.jpg";
import thumbTech from "@/assets/thumb-tech.jpg";
import thumbIllustration from "@/assets/thumb-illustration.jpg";

interface RelatedVideo {
  thumbnail: string;
  title: string;
  channel: string;
  views: string;
  duration?: string;
  badge?: string;
  isLive?: boolean;
}

const related: RelatedVideo[] = [
  {
    thumbnail: thumbCapetown,
    title: "Urban Pulse: The Evolution of Public Transit",
    channel: "AfriVantage Studios",
    views: "450K views",
    duration: "15:32",
    badge: "4K",
  },
  {
    thumbnail: thumbJazz,
    title: "Into the Wild: Great Rift Valley Secrets",
    channel: "NatureFocus TV",
    views: "12K watching",
    duration: "24:10",
    isLive: true,
    badge: "HD",
  },
  {
    thumbnail: thumbTech,
    title: "Beats of the Continent: Afrobeat Documentary",
    channel: "SoundLogic Pro",
    views: "1.2M views",
    duration: "08:45",
    badge: "Premium",
  },
  {
    thumbnail: thumbIllustration,
    title: "Nightlife Unleashed: Lagos After Dark",
    channel: "GlobalVibe",
    views: "320K views",
    duration: "42:15",
    badge: "4K",
  },
];

export function RelatedVideos() {
  return (
    <div>
      <h3 className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-foreground">
        Up Next <span className="h-2 w-2 rounded-full bg-primary" />
      </h3>

      <div className="mt-4 space-y-4">
        {related.map((v) => (
          <div key={v.title} className="group flex cursor-pointer gap-3">
            <div className="relative h-20 w-36 shrink-0 overflow-hidden rounded-lg">
              <img
                src={v.thumbnail}
                alt={v.title}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
              {v.duration && (
                <span className="glass absolute bottom-1 right-1 rounded px-1.5 py-0.5 font-body text-[10px] font-semibold text-foreground">
                  {v.duration}
                </span>
              )}
              {v.isLive && (
                <span className="absolute left-1 top-1 flex items-center gap-1 rounded bg-destructive px-1.5 py-0.5 text-[10px] font-semibold text-foreground">
                  <span className="pulse-live h-1.5 w-1.5 rounded-full bg-foreground" />
                  LIVE
                </span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-display text-sm font-semibold leading-tight text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                {v.title}
              </h4>
              <p className="mt-1 font-body text-xs text-muted-foreground">{v.channel}</p>
              <p className="mt-0.5 flex items-center gap-2 font-body text-xs text-muted-foreground">
                {v.views}
                {v.badge && (
                  <span className="rounded bg-surface-container-highest px-1.5 py-0.5 text-[10px] font-semibold text-primary">
                    {v.badge}
                  </span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-4 w-full rounded-lg bg-surface-container-low py-2.5 font-body text-sm font-semibold text-muted-foreground transition-colors hover:bg-surface-container hover:text-foreground">
        SHOW MORE
      </button>
    </div>
  );
}
