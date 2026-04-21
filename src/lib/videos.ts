import thumbCapetown from "@/assets/thumb-capetown.jpg";
import thumbJazz from "@/assets/thumb-jazz.jpg";
import thumbTech from "@/assets/thumb-tech.jpg";
import thumbJollof from "@/assets/thumb-jollof.jpg";
import thumbArchitecture from "@/assets/thumb-architecture.jpg";
import thumbBluecity from "@/assets/thumb-bluecity.jpg";
import thumbIllustration from "@/assets/thumb-illustration.jpg";
import thumbNairobi from "@/assets/thumb-nairobi.jpg";

export interface Video {
  id: string;
  thumbnail: string;
  title: string;
  duration?: string;
  views: string;
  likes?: string;
  isLive?: boolean;
  quality?: string;
  category: string;
  channel: string;
}

const thumbs = [
  thumbCapetown,
  thumbJazz,
  thumbTech,
  thumbJollof,
  thumbArchitecture,
  thumbBluecity,
  thumbIllustration,
  thumbNairobi,
];

export const CATEGORIES = [
  "All",
  "Music",
  "Gaming",
  "Tech",
  "News",
  "Documentary",
  "Comedy",
  "Lifestyle",
  "Cooking",
  "Education",
  "Sports",
] as const;

const titles = [
  "Exploring the Hidden Gems of Cape Town",
  "Daily Afro-Jazz Session | Live Request Hour",
  "Top 10 Tech Startups in Lagos to Watch",
  "How to make the Perfect Jollof Rice",
  "Sustainable Architecture in Accra",
  "The Blue City: A Visual Journey",
  "Masterclass: Modern Digital Illustration",
  "Nairobi After Dark: Urban Nightlife",
  "Afrobeat Documentary: Beats of the Continent",
  "Inside Kenya's Silicon Savannah",
  "Street Food Tour: Marrakech Edition",
  "Wildlife Cinematography Behind The Scenes",
  "Kente Weaving: A Living Tradition",
  "Lagos Fashion Week Highlights",
  "Pan-African Comedy Special",
  "Coding Bootcamp: Build a Streaming App",
  "Mountain Gorillas of Rwanda",
  "Cape Town Surf Diaries",
  "Inside the African Premier League",
  "Highlife & Hip-Life Hits",
];

const channels = [
  "AfriVantage Studios",
  "NatureFocus TV",
  "SoundLogic Pro",
  "GlobalVibe",
  "Kente Creators",
  "Sahel Sessions",
];

export const ALL_VIDEOS: Video[] = Array.from({ length: 48 }, (_, i) => {
  const cat = CATEGORIES[(i % (CATEGORIES.length - 1)) + 1];
  const isLive = i % 9 === 0;
  return {
    id: `v-${i + 1}`,
    thumbnail: thumbs[i % thumbs.length],
    title: titles[i % titles.length],
    duration: isLive ? undefined : `${5 + (i % 30)}:${String(10 + (i % 49)).padStart(2, "0")}`,
    views: isLive ? `${(1 + (i % 9)).toFixed(1)}k watching` : `${((i + 1) * 1.7).toFixed(1)}k`,
    likes: isLive ? undefined : `${(0.1 + (i % 12)).toFixed(1)}k`,
    isLive,
    quality: i % 4 === 0 ? "4K" : i % 3 === 0 ? "1080p" : undefined,
    category: cat,
    channel: channels[i % channels.length],
  };
});

export function getRecommended(): Video[] {
  return ALL_VIDEOS.slice(0, 4);
}

export function paginate<T>(items: T[], page: number, pageSize: number) {
  const start = (page - 1) * pageSize;
  return {
    items: items.slice(start, start + pageSize),
    totalPages: Math.max(1, Math.ceil(items.length / pageSize)),
  };
}

export function searchVideos(query: string, category?: string): Video[] {
  const q = query.trim().toLowerCase();
  return ALL_VIDEOS.filter((v) => {
    const matchesQ =
      !q ||
      v.title.toLowerCase().includes(q) ||
      v.channel.toLowerCase().includes(q) ||
      v.category.toLowerCase().includes(q);
    const matchesCat = !category || category === "All" || v.category === category;
    return matchesQ && matchesCat;
  });
}