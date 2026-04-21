import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { AuthShell } from "@/components/AuthShell";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [
      { title: "Reset your Local Afric password" },
      { name: "description", content: "Reset access to your Local Afric Videos account." },
    ],
  }),
  component: ForgotPasswordPage,
});

function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <AuthShell
      title="Forgot Password?"
      subtitle="Enter the email address associated with your account and we will send you a link to reset your password."
    >
      {sent ? (
        <div className="space-y-4">
          <p className="font-body text-sm text-foreground">
            Check your inbox — we&apos;ve sent you a reset link.
          </p>
          <Link
            to="/signin"
            className="inline-flex rounded-full bg-primary px-6 py-2.5 font-body text-sm font-semibold text-primary-foreground"
          >
            Back to Sign In
          </Link>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-5">
          <p className="font-body text-sm text-foreground">Enter your Local Afric email to continue.</p>
          <div>
            <label className="block font-body text-xs text-muted-foreground">Email</label>
            <input
              type="email"
              required
              className="mt-1 h-12 w-full rounded-lg bg-input px-4 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => navigate({ to: "/signin" })}
              className="rounded-full bg-surface-container-highest px-5 py-2.5 font-body text-sm font-semibold text-foreground"
            >
              Back
            </button>
            <button
              type="submit"
              className="rounded-full bg-primary px-6 py-2.5 font-body text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Next
            </button>
          </div>
        </form>
      )}
    </AuthShell>
  );
}