import { motion } from "framer-motion";
import { Eye, Heart } from "lucide-react";

interface VideoCardProps {
  thumbnail: string;
  title: string;
  duration?: string;
  views: string;
  likes?: string;
  isLive?: boolean;
  quality?: string;
}

export function VideoCard({
  thumbnail,
  title,
  duration,
  views,
  likes,
  isLive,
  quality,
}: VideoCardProps) {
  return (
    <motion.div
      className="group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative overflow-hidden rounded-none md:rounded-xl">
        <img
          src={thumbnail}
          alt={title}
          loading="lazy"
          className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

        {isLive && (
          <span className="glass absolute left-2 top-2 flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold text-secondary">
            <span className="pulse-live h-2 w-2 rounded-full bg-secondary" />
            LIVE
          </span>
        )}

        {quality && (
          <span className="glass absolute left-2 top-2 rounded-md px-2 py-0.5 font-body text-xs font-semibold text-foreground">
            {quality}
          </span>
        )}

        {duration && (
          <span className="glass absolute bottom-2 right-2 rounded-md px-2 py-0.5 font-body text-xs font-semibold text-foreground">
            {duration}
          </span>
        )}
      </div>

      <div className="mt-3 px-2 md:px-0">
        <h3 className="font-display text-sm font-semibold leading-tight text-foreground line-clamp-2">
          {title}
        </h3>
        <div className="mt-1.5 flex items-center gap-3 font-body text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Eye className="h-3 w-3" />
            {views}
          </span>
          {likes && (
            <span className="flex items-center gap-1">
              <Heart className="h-3 w-3" />
              {likes}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
