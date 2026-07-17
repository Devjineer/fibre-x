import { plans } from "@/lib/constants/plans";
import { Zap, Check } from "lucide-react";



export function Plans() {
  return (
    <section
      id="plans"
      className="py-20 lg:py-28 bg-mtn-black text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-0 opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-[80%] rounded-full bg-mtn-yellow blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="chip bg-white/10 border-white/20 text-white">
            <Zap className="h-3.5 w-3.5" /> Simple, honest pricing
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl text-white">
            Pick your speed. Pay one price. Enjoy unlimited.
          </h2>
          <p className="mt-4 text-white/70">
            Every plan is truly unlimited and includes free router + free
            installation.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {plans.map((p) => (
            <div
              key={p.speed}
              className={`relative rounded-3xl p-6 transition duration-300 hover:-translate-y-2 ${p.popular ? "bg-mtn-yellow text-black shadow-glow" : "bg-white/5 border border-white/10 text-white backdrop-blur"}`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 chip bg-black text-mtn-yellow border-black">
                  Most Popular
                </span>
              )}
              <div
                className={`text-xs uppercase tracking-widest ${p.popular ? "text-black/70" : "text-white/60"}`}
              >
                {p.tag}
              </div>
              <div className="mt-1 font-display font-black text-2xl">
                {p.speed}
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-sm opacity-70">₦</span>
                <span className="font-display font-black text-3xl">
                  {p.price}
                </span>
                <span
                  className={`text-xs ${p.popular ? "text-black/60" : "text-white/60"}`}
                >
                  /month
                </span>
              </div>
              <ul className="mt-5 space-y-2 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check
                      className={`h-4 w-4 mt-0.5 shrink-0 ${p.popular ? "text-mtn-green" : "text-mtn-yellow"}`}
                    />
                    <span
                      className={p.popular ? "text-black/80" : "text-white/80"}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#register"
                className={`mt-6 w-full ${p.popular ? "btn-dark" : "btn-primary btn-primary-hover"}`}
              >
                Choose {p.speed}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}