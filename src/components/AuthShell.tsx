import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import type { ReactNode } from "react";

interface AuthShellProps {
  title: string;
  subtitle?: ReactNode;
  children: ReactNode;
}

export function AuthShell({ title, subtitle, children }: AuthShellProps) {
  return (
    <div className="min-h-screen bg-background">
      <header className="mx-auto flex h-16 max-w-[1400px] items-center px-6">
        <Link to="/" className="shrink-0">
          <img src={logo} alt="Local Afric" className="h-8" />
        </Link>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-10">
        <div className="rounded-3xl bg-surface-container-low p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <img src={logo} alt="" className="h-10 w-auto" />
              <h1 className="mt-6 font-display text-3xl font-bold text-foreground md:text-4xl">
                {title}
              </h1>
              {subtitle && (
                <div className="mt-4 font-body text-sm text-muted-foreground">{subtitle}</div>
              )}
            </div>
            <div>{children}</div>
          </div>
        </div>
      </main>
    </div>
  );
}