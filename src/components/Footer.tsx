import { Globe, Share2 } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="mx-auto max-w-[1400px] px-6 pb-8 pt-16">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <img src={logo} alt="Local Afric" className="h-7" />
          <p className="mt-3 max-w-xs font-body text-sm text-muted-foreground">
            Celebrating African creativity through digital storytelling and live entertainment. The premier destination for cultural content.
          </p>
          <div className="mt-4 flex gap-2">
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-container-highest text-muted-foreground hover:text-foreground">
              <Globe className="h-4 w-4" />
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-container-highest text-muted-foreground hover:text-foreground">
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Partner banner */}
        <div className="flex items-center gap-4 rounded-2xl bg-surface-container-low p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <span className="text-lg">🚀</span>
          </div>
          <div className="flex-1">
            <p className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              Partner
            </p>
            <p className="font-display text-sm font-semibold text-foreground">
              Upgrade your streaming setup
            </p>
            <p className="font-body text-xs text-muted-foreground">
              Save 20% on all Pro Hubs with code: CREATOR24
            </p>
          </div>
          <button className="shrink-0 rounded-full bg-surface-container-highest px-4 py-2 font-body text-xs font-semibold text-foreground transition-colors hover:bg-surface-bright">
            Apply Coupon
          </button>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 pt-6">
        <div className="flex gap-6 font-body text-xs text-muted-foreground">
          <span className="cursor-pointer hover:text-foreground">Privacy Policy</span>
          <span className="cursor-pointer hover:text-foreground">Terms of Service</span>
          <span className="cursor-pointer hover:text-foreground">Cookie Settings</span>
        </div>
        <p className="font-body text-xs text-muted-foreground">
          © 2024 Local Afric. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
