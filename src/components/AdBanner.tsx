import { AdSlot } from "@/components/AdSlot";

export function AdBanner() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 md:px-6">
      <AdSlot variant="wide" label="Leaderboard Ad" />
    </div>
  );
}
