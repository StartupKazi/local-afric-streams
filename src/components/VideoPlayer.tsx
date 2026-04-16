import { Play } from "lucide-react";

interface VideoPlayerProps {
  thumbnail: string;
  title: string;
}

export function VideoPlayer({ thumbnail, title }: VideoPlayerProps) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-surface-container">
      <img
        src={thumbnail}
        alt={title}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-background/30">
        <button className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 backdrop-blur-md transition-transform hover:scale-110">
          <Play className="h-8 w-8 text-primary" fill="currentColor" />
        </button>
      </div>
    </div>
  );
}
