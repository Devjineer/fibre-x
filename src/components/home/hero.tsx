import { Check, MapPin, Sparkles, Zap } from "lucide-react";
import { HeroFx } from "./hero-fx";
import { router, veronica } from "@/lib/constants/images";





export function Hero() {
  const badges = [
    "Unlimited Internet",
    "FREE Router",
    "FREE Installation",
    "1–7 Working Days Installation",
    "Connect 7–32 Devices",
  ];
  return (
    <section id="top" className="relative overflow-hidden">
      <HeroFx />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-24 lg:pt-24 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-up">
            <span className="chip">
              <Sparkles className="h-3.5 w-3.5" /> Official MTN FibreX Telesales
              Agent
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-display font-black leading-[1.05]">
              Unlimited Fibre Internet
              <br />
              <span className="hero-shine">
                Built for Your Home &amp; Business
              </span>
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-black/75 max-w-xl font-medium">
              <span className="font-display font-extrabold">
                Fast. Reliable. Unlimited.
              </span>
              <br />
              Plans from only <b>₦30,000/month</b>.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#coverage" className="btn-primary btn-primary-hover">
                <MapPin className="h-4 w-4" /> Check FibreX Coverage
              </a>
              <a href="#register" className="btn-dark">
                <Zap className="h-4 w-4" /> Get Connected
              </a>
            </div>
            <ul className="mt-7 flex flex-wrap gap-2 max-w-xl">
              {badges.map((b) => (
                <li
                  key={b}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/80 backdrop-blur px-3 py-1.5 text-xs sm:text-sm font-semibold text-black border border-mtn-yellow/50 shadow-[0_6px_16px_-10px_rgba(0,0,0,0.25)]"
                >
                  <Check
                    className="h-3.5 w-3.5 text-mtn-green"
                    strokeWidth={3}
                  />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-premium bg-white animate-fade-up">
              <img
                src={router}
                alt="MTN FibreX Huawei router"
                className="w-full h-[380px] sm:h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                <div>
                  <div className="text-xs uppercase tracking-widest opacity-80">
                    High-Performance
                  </div>
                  <div className="font-display font-black text-lg">
                    Huawei Fibre Router — MTN Edition
                  </div>
                </div>
                <span className="chip bg-mtn-yellow text-black border-mtn-yellow">
                  Free
                </span>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-4 sm:-left-10 w-40 sm:w-52 rounded-3xl overflow-hidden shadow-premium border-4 border-white animate-float">
              <img
                src={veronica}
                alt="Ms. Veronica, MTN FibreX Telesales Agent"
                className="w-full h-52 sm:h-64 object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-white">
                <div className="font-display font-extrabold text-sm">
                  Ms. Veronica
                </div>
                <div className="text-[10px] opacity-90">
                  MTN FibreX · Huawei
                </div>
              </div>
            </div>

            <div
              className="absolute -top-4 -right-2 sm:-right-6 rounded-2xl bg-black text-mtn-yellow px-4 py-3 shadow-premium animate-float"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="text-[10px] uppercase tracking-widest opacity-70">
                Plans from
              </div>
              <div className="font-display font-black text-2xl">₦30,000</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
