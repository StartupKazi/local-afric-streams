import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import type { FormEvent } from "react";
import { AuthShell } from "@/components/AuthShell";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Create a Local Afric account" },
      { name: "description", content: "Join Local Afric Videos in seconds." },
    ],
  }),
  component: SignUpPage,
});

function SignUpPage() {
  const navigate = useNavigate();
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate({ to: "/" });
  };

  return (
    <AuthShell
      title="Create a Local Afric account"
      subtitle={
        <>
          Already have an account?{" "}
          <Link to="/signin" className="font-semibold text-primary underline-offset-4 hover:underline">
            Sign In
          </Link>
        </>
      }
    >
      <form onSubmit={onSubmit} className="space-y-5">
        <p className="font-body text-sm text-foreground">Enter your account details to get started.</p>
        <div>
          <label className="block font-body text-xs text-muted-foreground">Email</label>
          <input
            type="email"
            required
            className="mt-1 h-12 w-full rounded-lg bg-input px-4 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <div>
          <label className="block font-body text-xs text-muted-foreground">Birthday</label>
          <div className="mt-1 grid grid-cols-3 gap-2">
            <input placeholder="Month" className="h-12 rounded-lg bg-input px-3 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
            <input placeholder="Day" className="h-12 rounded-lg bg-input px-3 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
            <input placeholder="Year" className="h-12 rounded-lg bg-input px-3 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
          </div>
        </div>
        <div>
          <label className="block font-body text-xs text-muted-foreground">Password</label>
          <input
            type="password"
            required
            minLength={6}
            className="mt-1 h-12 w-full rounded-lg bg-input px-4 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <div className="flex items-center justify-end gap-3 pt-2">
          <Link
            to="/signin"
            className="rounded-full bg-surface-container-highest px-5 py-2.5 font-body text-sm font-semibold text-foreground"
          >
            Back
          </Link>
          <button
            type="submit"
            className="rounded-full bg-primary px-6 py-2.5 font-body text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Next
          </button>
        </div>
      </form>
    </AuthShell>
  );
}