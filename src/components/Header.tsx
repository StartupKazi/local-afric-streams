import { Link, useNavigate } from "@tanstack/react-router";
import {
  Search,
  Bell,
  Upload,
  Sun,
  Moon,
  User,
  Settings,
  LogOut,
  History,
  Heart,
  Bookmark,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import logo from "@/assets/logo.png";
import { useTheme } from "@/lib/theme";

const navLinks = [
  { label: "Live", to: "/" as const },
  { label: "Categories", to: "/categories" as const },
  { label: "Following", to: "/profile" as const },
];

export function Header() {
  const { theme, toggle } = useTheme();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const onSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const q = String(fd.get("q") ?? "").trim();
    navigate({ to: "/search", search: { q, category: "All", page: 1 } });
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center gap-3 px-4 md:gap-6 md:px-6">
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:bg-surface-container-high hover:text-foreground md:hidden"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className="shrink-0">
          <img src={logo} alt="Local Afric" className="h-7 md:h-8" />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="font-body text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <form onSubmit={onSearch} className="mx-auto hidden max-w-md flex-1 md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              name="q"
              placeholder="Search creators, videos, or categories"
              className="h-10 w-full rounded-full bg-input pl-10 pr-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
        </form>

        <div className="ml-auto flex items-center gap-1 md:gap-2">
          <button
            onClick={toggle}
            className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-surface-container-high hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button className="hidden h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-surface-container-high hover:text-foreground sm:flex">
            <Upload className="h-4 w-4" />
          </button>
          <button className="relative hidden h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-surface-container-high hover:text-foreground sm:flex">
            <Bell className="h-4 w-4" />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-secondary" />
          </button>

          <Link
            to="/signin"
            className="hidden rounded-full px-3 py-1.5 font-body text-sm font-semibold text-foreground hover:bg-surface-container-high sm:inline-flex"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="hidden rounded-full border border-primary/60 px-3 py-1.5 font-body text-sm font-semibold text-primary hover:bg-primary/10 sm:inline-flex"
          >
            Sign Up
          </Link>

          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary font-display text-sm font-bold text-primary-foreground"
              aria-label="Profile menu"
            >
              A
            </button>
            {menuOpen && (
              <div className="absolute right-0 top-11 w-56 overflow-hidden rounded-xl bg-popover shadow-2xl">
                <Link
                  to="/profile"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 font-body text-sm text-popover-foreground hover:bg-surface-container-high"
                >
                  <User className="h-4 w-4" /> Your Profile
                </Link>
                <Link
                  to="/profile"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 font-body text-sm text-popover-foreground hover:bg-surface-container-high"
                >
                  <History className="h-4 w-4" /> History
                </Link>
                <Link
                  to="/profile"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 font-body text-sm text-popover-foreground hover:bg-surface-container-high"
                >
                  <Heart className="h-4 w-4" /> Liked
                </Link>
                <Link
                  to="/profile"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 font-body text-sm text-popover-foreground hover:bg-surface-container-high"
                >
                  <Bookmark className="h-4 w-4" /> Saved
                </Link>
                <div className="my-1 h-px bg-border" />
                <button
                  onClick={() => {
                    toggle();
                    setMenuOpen(false);
                  }}
                  className="flex w-full items-center gap-3 px-4 py-2.5 font-body text-sm text-popover-foreground hover:bg-surface-container-high"
                >
                  {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  Switch to {theme === "dark" ? "Light" : "Dark"}
                </button>
                <Link
                  to="/profile"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 font-body text-sm text-popover-foreground hover:bg-surface-container-high"
                >
                  <Settings className="h-4 w-4" /> Account Settings
                </Link>
                <div className="my-1 h-px bg-border" />
                <Link
                  to="/signin"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 font-body text-sm text-popover-foreground hover:bg-surface-container-high"
                >
                  <LogOut className="h-4 w-4" /> Sign out
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background/95 px-4 py-3 md:hidden">
          <form onSubmit={onSearch} className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              name="q"
              placeholder="Search videos..."
              className="h-10 w-full rounded-full bg-input pl-10 pr-4 font-body text-sm text-foreground"
            />
          </form>
          <nav className="mt-3 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 font-body text-sm font-medium text-foreground hover:bg-surface-container-high"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              <Link
                to="/signin"
                onClick={() => setMobileOpen(false)}
                className="flex-1 rounded-full bg-surface-container-highest px-3 py-2 text-center font-body text-sm font-semibold text-foreground"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                onClick={() => setMobileOpen(false)}
                className="flex-1 rounded-full bg-primary px-3 py-2 text-center font-body text-sm font-semibold text-primary-foreground"
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
