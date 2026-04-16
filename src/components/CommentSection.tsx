import { ThumbsUp, ThumbsDown } from "lucide-react";

interface Comment {
  username: string;
  time: string;
  text: string;
  likes: string;
}

const comments: Comment[] = [
  {
    username: "@zara_explorer",
    time: "2 hours ago",
    text: "This cinematography is absolutely breathtaking. I've lived in Nairobi all my life and I've never seen it captured with such heart. The grading on the night market scene is incredible.",
    likes: "1.2K",
  },
  {
    username: "@kwame_visuals",
    time: "5 hours ago",
    text: "Can we talk about the sound design? Those ambient city sounds mixed with that deep bass track... perfectly sets the mood. Great job AfriVantage!",
    likes: "856",
  },
  {
    username: "@tech_nomad",
    time: "1 day ago",
    text: "Been waiting for this series to drop! The 4K quality is insane on my OLED. Keep it coming guys!",
    likes: "320",
  },
];

export function CommentSection() {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg font-bold text-foreground">
          3,482 Comments{" "}
          <span className="font-body text-sm font-normal text-muted-foreground">
            Sorted by Top
          </span>
        </h3>
        <button className="flex items-center gap-1.5 font-body text-sm text-muted-foreground hover:text-foreground">
          ☰ Filter
        </button>
      </div>

      {/* Comment input */}
      <div className="mt-5 flex items-start gap-3">
        <div className="h-9 w-9 shrink-0 rounded-full bg-surface-container-highest" />
        <div className="flex-1">
          <input
            type="text"
            placeholder="Add a public comment..."
            className="w-full border-b border-border bg-transparent pb-2 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
          <div className="mt-2 flex justify-end gap-2">
            <button className="rounded-full px-4 py-1.5 font-body text-sm text-muted-foreground hover:text-foreground">
              Cancel
            </button>
            <button className="rounded-full bg-primary px-4 py-1.5 font-body text-sm font-semibold text-primary-foreground">
              Comment
            </button>
          </div>
        </div>
      </div>

      {/* Comments list */}
      <div className="mt-6 space-y-6">
        {comments.map((c) => (
          <div key={c.username} className="flex gap-3">
            <div className="h-9 w-9 shrink-0 rounded-full bg-surface-container-highest" />
            <div>
              <p className="font-body text-sm">
                <span className="font-semibold text-foreground">{c.username}</span>{" "}
                <span className="text-muted-foreground">{c.time}</span>
              </p>
              <p className="mt-1 font-body text-sm leading-relaxed text-foreground/90">
                {c.text}
              </p>
              <div className="mt-2 flex items-center gap-4 text-muted-foreground">
                <button className="flex items-center gap-1 font-body text-xs hover:text-foreground">
                  <ThumbsUp className="h-3.5 w-3.5" /> {c.likes}
                </button>
                <button className="flex items-center gap-1 font-body text-xs hover:text-foreground">
                  <ThumbsDown className="h-3.5 w-3.5" />
                </button>
                <button className="font-body text-xs font-semibold hover:text-foreground">
                  REPLY
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
