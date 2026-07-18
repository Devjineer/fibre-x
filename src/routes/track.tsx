import { env } from "@/lib/env";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Loader2, MessageCircle } from "lucide-react";
import { useState } from "react";

const WHATSAPP_HELP = `https://wa.me/${env.wa_number}?text=${encodeURIComponent("Hi Ms. Veronica, I need help tracking my MTN FibreX registration.")}`;

export const Route = createFileRoute("/track")({
  component: TrackPage,
});

function TrackPage() {
  const [result, setResult] = useState(null);
  const [q, setQ] = useState("");
  return (
    <div className="min-h-screen">
      <div className="min-h-screen bg-[#FFFDF4]">
        <header className="sticky top-0 z-40 backdrop-blur-lg bg-white/80 border-b border-black/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-9 w-14 rounded-full bg-mtn-yellow grid place-items-center border-2 border-black">
                <span className="font-display font-black text-[13px]">MTN</span>
              </div>
              <div className="leading-tight hidden sm:block">
                <div className="font-display font-extrabold text-sm">
                  FibreX
                </div>
                <div className="text-[10px] text-muted-foreground -mt-0.5">
                  Customer Portal
                </div>
              </div>
            </Link>
            <Link
              to="/"
              className="text-sm font-medium text-black/70 hover:text-black"
            >
              ← Home
            </Link>
          </div>
        </header>

        {/* main */}
        <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          {!result ? (
            <div>
              <span className="chip">
                <Sparkles className="h-3.5 w-3.5" /> Customer Portal
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl font-display font-extrabold leading-tight">
                Track your MTN FibreX Registration
              </h1>
              <p className="mt-4 text-black/70 leading-relaxed">
                Enter any ONE of the following to track your registration:
              </p>
              <ul className="mt-2 space-y-1 text-sm text-black/70 list-disc pl-5">
                <li>Registered Phone Number</li>
                <li>Registered Email Address</li>
                <li>MTN FibreX Account Number (if already generated)</li>
              </ul>

              <form
                //   onSubmit={onSubmit}
                className="card-premium p-6 sm:p-8 mt-8 space-y-5"
              >
                <div>
                  <label className="text-sm font-semibold">Your details</label>
                  <input
                    type="text"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="Enter your phone number, email or generated account number"
                    className="mt-2 w-full rounded-full border border-black/15 px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-mtn-yellow"
                    autoComplete="off"
                  />
                  {/* {error && <p className="mt-2 text-xs text-red-600">{error}</p>} */}
                </div>
                <button
                  type="submit"
                  // disabled={loading}
                  className="btn-dark w-full disabled:opacity-60"
                >
                  {false ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Checking…
                    </>
                  ) : (
                    "View my status"
                  )}
                </button>
                <div className="text-center pt-2">
                  <div className="text-sm text-black/60">Need help?</div>
                  <a
                    href={WHATSAPP_HELP}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-2 rounded-full border-2 border-mtn-green/30 px-5 py-2.5 text-sm font-semibold text-mtn-green hover:bg-mtn-green/5 transition"
                  >
                    <MessageCircle className="h-4 w-4" /> Chat with Ms. Veronica
                  </a>
                </div>
              </form>
            </div>
          ) : (
            <div>result</div>
          )}
        </main>
      </div>
    </div>
  );
}
