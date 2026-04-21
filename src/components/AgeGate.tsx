import { useEffect, useState } from "react";
import { ShieldAlert } from "lucide-react";

export function AgeGate() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const confirmed = window.sessionStorage.getItem("la-age-confirmed");
    if (!confirmed) setOpen(true);
  }, []);

  if (!open) return null;

  const confirm = () => {
    window.sessionStorage.setItem("la-age-confirmed", "1");
    setOpen(false);
  };

  const leave = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-md px-4">
      <div className="w-full max-w-md rounded-2xl bg-surface-container p-8 ambient-shadow">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15">
          <ShieldAlert className="h-7 w-7 text-primary" />
        </div>
        <h2 className="mt-5 font-display text-2xl font-bold text-foreground">
          Are you 18 or older?
        </h2>
        <p className="mt-2 font-body text-sm text-muted-foreground">
          Local Afric Videos contains content intended for mature audiences. You must be at least
          18 years old to enter this site.
        </p>
        <div className="mt-6 flex gap-3">
          <button
            onClick={leave}
            className="flex-1 rounded-full bg-surface-container-highest px-5 py-2.5 font-body text-sm font-semibold text-foreground transition-colors hover:bg-surface-bright"
          >
            Leave
          </button>
          <button
            onClick={confirm}
            className="flex-1 rounded-full bg-primary px-5 py-2.5 font-body text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
          >
            Yes, I&apos;m 18+
          </button>
        </div>
      </div>
    </div>
  );
}