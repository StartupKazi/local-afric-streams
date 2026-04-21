import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Eye, EyeOff } from "lucide-react";
import { AuthShell } from "@/components/AuthShell";

export const Route = createFileRoute("/signin")({
  head: () => ({
    meta: [
      { title: "Sign in to Local Afric Videos" },
      { name: "description", content: "Sign in to your Local Afric Videos account." },
    ],
  }),
  component: SignInPage,
});

function SignInPage() {
  const navigate = useNavigate();
  const [showPw, setShowPw] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate({ to: "/" });
  };

  return (
    <AuthShell
      title="Sign in to Local Afric"
      subtitle={
        <>
          Don&apos;t have an account yet?{" "}
          <Link to="/signup" className="font-semibold text-primary underline-offset-4 hover:underline">
            Sign Up
          </Link>
        </>
      }
    >
      <form onSubmit={onSubmit} className="space-y-5">
        <div>
          <label className="block font-body text-xs text-muted-foreground">Email or Username</label>
          <input
            type="text"
            required
            className="mt-1 h-12 w-full rounded-lg bg-input px-4 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <div>
          <label className="block font-body text-xs text-muted-foreground">Password</label>
          <div className="relative mt-1">
            <input
              type={showPw ? "text" : "password"}
              required
              className="h-12 w-full rounded-lg bg-input px-4 pr-11 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button
              type="button"
              onClick={() => setShowPw((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            >
              {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-end gap-4 pt-2">
          <Link
            to="/forgot-password"
            className="font-body text-sm text-muted-foreground hover:text-foreground"
          >
            Forgot Password?
          </Link>
          <button
            type="submit"
            className="rounded-full bg-primary px-6 py-2.5 font-body text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Sign In
          </button>
        </div>
        <div className="pt-6">
          <p className="text-center font-body text-sm text-muted-foreground">Sign in with:</p>
          <div className="mt-3 flex justify-center gap-3">
            {["Facebook", "Google", "Apple"].map((p) => (
              <button
                key={p}
                type="button"
                className="rounded-full bg-surface-container-highest px-4 py-2 font-body text-sm font-semibold text-foreground hover:bg-surface-bright"
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </form>
    </AuthShell>
  );
}