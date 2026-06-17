import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Calorisk — AI Food Scanner for Instant Nutrition" },
      {
        name: "description",
        content:
          "Snap a photo of any meal and Calorisk's AI instantly reveals calories, protein, carbs, and fat.",
      },
      { property: "og:title", content: "Calorisk — AI Food Scanner" },
      {
        property: "og:description",
        content: "Scan your meal. Know your nutrition instantly.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

function GoogleIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M12 10.2v3.9h5.5c-.24 1.45-1.7 4.25-5.5 4.25-3.3 0-6-2.74-6-6.12s2.7-6.12 6-6.12c1.88 0 3.14.8 3.86 1.49l2.63-2.53C16.78 3.6 14.6 2.6 12 2.6 6.93 2.6 2.83 6.7 2.83 12s4.1 9.4 9.17 9.4c5.3 0 8.8-3.72 8.8-8.95 0-.6-.06-1.06-.14-1.52H12z"
      />
      <path
        fill="#4285F4"
        d="M21.66 12.45c0-.6-.06-1.06-.14-1.52H12v3.17h5.5c-.11.83-.72 2.08-2.07 2.92l3.34 2.6c1.98-1.83 2.89-4.5 2.89-7.17z"
      />
      <path
        fill="#FBBC05"
        d="M6 13.93a5.94 5.94 0 0 1 0-3.86V7.46H2.6a9.4 9.4 0 0 0 0 9.08L6 13.93z"
      />
      <path
        fill="#34A853"
        d="M12 21.4c2.6 0 4.78-.86 6.37-2.34l-3.34-2.6c-.9.62-2.1 1.05-3.03 1.05-2.34 0-4.32-1.55-5.03-3.7L2.6 16.54C4.18 19.46 7.85 21.4 12 21.4z"
      />
    </svg>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-white font-sans text-foreground antialiased">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="/" className="group inline-flex items-baseline gap-0.5">
          <span className="font-display text-2xl font-extrabold tracking-tight text-foreground">
            Calor
          </span>
          <span className="font-display text-2xl font-extrabold tracking-tight text-brand">
            isk
          </span>
        </a>
      </header>

      <main className="mx-auto flex min-h-[calc(100vh-72px)] max-w-6xl items-start justify-center px-5 pt-8 pb-16 sm:px-8">
        <section className="w-full max-w-sm">
          <div className="rounded-2xl border border-[#e5e7eb] bg-[#f9fafb] p-6 sm:p-8">
            <div className="text-center">
              <h1 className="font-display text-[26px] font-bold leading-tight tracking-tight text-foreground sm:text-[28px]">
                Scan Your Meal.
                <br />
                Know Your Nutrition Instantly.
              </h1>
              <p className="mt-2 text-[15px] text-[#6b7280]">
                Get started with Calorisk today
              </p>
            </div>

            <div className="mt-6 space-y-3">
              <button
                type="button"
                className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-[#e5e7eb] bg-white px-4 text-[15px] font-medium text-foreground transition-all duration-200 hover:bg-gray-50 active:scale-[0.985] focus:outline-none"
              >
                <span className="text-lg font-bold">G</span>
                <span>Continue with Google</span>
              </button>

              <div className="flex items-center gap-3 py-1">
                <div className="h-px flex-1 bg-[#e5e7eb]" />
                <span className="text-[13px] text-[#6b7280]">or</span>
                <div className="h-px flex-1 bg-[#e5e7eb]" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1.5 block text-[13px] font-medium text-foreground">
                    First name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="h-12 w-full rounded-xl border border-[#e5e7eb] bg-white px-4 text-[15px] text-foreground placeholder:text-[#9ca3af] outline-none transition-all focus:border-[#a0aec0] focus:ring-2 focus:ring-[#a0aec0]/20"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-[13px] font-medium text-foreground">
                    Last name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="h-12 w-full rounded-xl border border-[#e5e7eb] bg-white px-4 text-[15px] text-foreground placeholder:text-[#9ca3af] outline-none transition-all focus:border-[#a0aec0] focus:ring-2 focus:ring-[#a0aec0]/20"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-[13px] font-medium text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="h-12 w-full rounded-xl border border-[#e5e7eb] bg-white px-4 text-[15px] text-foreground placeholder:text-[#9ca3af] outline-none transition-all focus:border-[#a0aec0] focus:ring-2 focus:ring-[#a0aec0]/20"
                />
              </div>

              <button
                type="button"
                className="flex h-12 w-full items-center justify-center rounded-xl bg-[#9ca3af] px-4 text-[15px] font-medium text-white transition-all duration-200 hover:bg-[#6b7280] active:scale-[0.985] focus:outline-none"
              >
                Continue
              </button>
            </div>

            <p className="mt-5 text-center text-[13px] text-[#6b7280]">
              Already have an account?{" "}
              <a
                href="#"
                className="font-semibold text-[#3b82f6] transition-colors hover:underline"
              >
                Sign in
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
