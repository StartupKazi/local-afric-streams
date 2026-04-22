import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VideoCard } from "@/components/VideoCard";
import { AdSlot } from "@/components/AdSlot";
import { ALL_VIDEOS } from "@/lib/videos";
import { History, Heart, MessageSquare, Bookmark, Settings } from "lucide-react";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Your profile — Local Afric Videos" },
      { name: "description", content: "Manage your Local Afric profile, history, and library." },
    ],
  }),
  component: ProfilePage,
});

const TABS = [
  { id: "watched", label: "Watched", icon: History },
  { id: "liked", label: "Liked", icon: Heart },
  { id: "comments", label: "Comments", icon: MessageSquare },
  { id: "saved", label: "Saved", icon: Bookmark },
  { id: "account", label: "Account", icon: Settings },
] as const;

type TabId = (typeof TABS)[number]["id"];

function ProfilePage() {
  const [tab, setTab] = useState<TabId>("watched");

  const watched = ALL_VIDEOS.slice(0, 8);
  const liked = ALL_VIDEOS.slice(8, 16);
  const saved = ALL_VIDEOS.slice(16, 24);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-[1400px] px-4 py-8 md:px-6">
        <div className="mb-6">
          <AdSlot variant="wide" label="Profile Top Ad" />
        </div>

        {/* Profile header */}
        <div className="flex flex-col items-start gap-5 rounded-3xl bg-surface-container-low p-6 md:flex-row md:items-center md:p-8">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary font-display text-3xl font-bold text-primary-foreground">
            A
          </div>
          <div className="flex-1">
            <h1 className="font-display text-2xl font-bold text-foreground">Ada Okoye</h1>
            <p className="font-body text-sm text-muted-foreground">@ada · Joined April 2026</p>
            <div className="mt-2 flex gap-4 font-body text-xs text-muted-foreground">
              <span><strong className="text-foreground">128</strong> watched</span>
              <span><strong className="text-foreground">42</strong> liked</span>
              <span><strong className="text-foreground">12</strong> saved</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-6 flex gap-1 overflow-x-auto border-b border-border">
          {TABS.map((t) => {
            const Icon = t.icon;
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`relative flex shrink-0 items-center gap-2 px-4 py-3 font-body text-sm font-semibold transition-colors ${
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4" />
                {t.label}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="mt-8">
          {tab === "watched" && <VideoGrid videos={watched} emptyMsg="You haven't watched anything yet." />}
          {tab === "liked" && <VideoGrid videos={liked} emptyMsg="No liked videos yet." />}
          {tab === "saved" && <VideoGrid videos={saved} emptyMsg="Your library is empty." />}
          {tab === "comments" && <CommentsList />}
          {tab === "account" && <AccountForm />}
        </div>

        <div className="mt-10">
          <AdSlot variant="banner" label="Profile Bottom Ad" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

function VideoGrid({
  videos,
  emptyMsg,
}: {
  videos: typeof ALL_VIDEOS;
  emptyMsg: string;
}) {
  if (videos.length === 0) {
    return (
      <div className="rounded-2xl bg-surface-container-low p-12 text-center font-body text-sm text-muted-foreground">
        {emptyMsg}
      </div>
    );
  }
  return (
    <div className="-mx-4 grid grid-cols-2 gap-0 md:mx-0 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
      {videos.map((v) => (
        <Link key={v.id} to="/watch" className="block">
          <VideoCard {...v} />
        </Link>
      ))}
    </div>
  );
}

function CommentsList() {
  const myComments = [
    {
      video: "Exploring the Hidden Gems of Cape Town",
      time: "2 days ago",
      text: "This cinematography is incredible! The drone shots over Table Mountain blew me away.",
    },
    {
      video: "Daily Afro-Jazz Session | Live Request Hour",
      time: "1 week ago",
      text: "Caught this live yesterday — the saxophone solo around 28:00 is unreal.",
    },
    {
      video: "How to make the Perfect Jollof Rice",
      time: "3 weeks ago",
      text: "Tried this recipe last weekend and the smoky flavor was on point. Family loved it!",
    },
  ];
  return (
    <div className="space-y-4">
      {myComments.map((c, i) => (
        <div key={i} className="rounded-2xl bg-surface-container-low p-5">
          <p className="font-display text-sm font-semibold text-foreground">On: {c.video}</p>
          <p className="mt-2 font-body text-sm text-foreground/90">{c.text}</p>
          <p className="mt-2 font-body text-xs text-muted-foreground">{c.time}</p>
        </div>
      ))}
    </div>
  );
}

function AccountForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="max-w-2xl space-y-5 rounded-2xl bg-surface-container-low p-6"
    >
      <div>
        <label className="block font-body text-xs text-muted-foreground">Display name</label>
        <input
          defaultValue="Ada Okoye"
          className="mt-1 h-11 w-full rounded-lg bg-input px-4 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
      </div>
      <div>
        <label className="block font-body text-xs text-muted-foreground">Username</label>
        <input
          defaultValue="ada"
          className="mt-1 h-11 w-full rounded-lg bg-input px-4 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
      </div>
      <div>
        <label className="block font-body text-xs text-muted-foreground">Email</label>
        <input
          type="email"
          defaultValue="ada@localafric.tv"
          className="mt-1 h-11 w-full rounded-lg bg-input px-4 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
      </div>
      <div>
        <label className="block font-body text-xs text-muted-foreground">Bio</label>
        <textarea
          rows={3}
          defaultValue="Lover of African cinema and afrobeats."
          className="mt-1 w-full rounded-lg bg-input px-4 py-3 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-primary px-6 py-2.5 font-body text-sm font-semibold text-primary-foreground"
      >
        Save changes
      </button>
    </form>
  );
}