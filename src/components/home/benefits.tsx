import { Briefcase, Building2, Cable, Check, Film, Gamepad2, Headphones, InfinityIcon, RouterIcon, Star, Users, Wrench, Zap } from "lucide-react";

const whyFeatures: { icon: any; title: string; text: string; accent: "yellow" | "green" | "black" }[] = [
  { icon: InfinityIcon, title: "Unlimited Internet", text: "No data caps. Your subscription stays active for the full 30 days — no exhaustion.", accent: "yellow" },
  { icon: Cable, title: "Reliable Fibre Connection", text: "Pure fibre-to-the-home built on MTN's national backbone for rock-solid uptime.", accent: "green" },
  { icon: Zap, title: "No Buffering", text: "Consistent low-latency speeds so streams, calls and downloads never stutter.", accent: "yellow" },
  { icon: Briefcase, title: "Remote Work Ready", text: "Zoom, Teams, Meet and cloud tools run smoothly all day, every day.", accent: "black" },
  { icon: Gamepad2, title: "Gaming Ready", text: "Low ping and stable throughput for competitive online gaming.", accent: "green" },
  { icon: Film, title: "Netflix Ready", text: "Stream 4K on Netflix, YouTube, Prime Video and DStv on multiple screens.", accent: "yellow" },
  { icon: Building2, title: "Business Ready", text: "Perfect for SMEs, offices, schools, churches and CCTV setups.", accent: "black" },
  { icon: Users, title: "Connect 7–32 Devices", text: "Whole-home coverage for every phone, laptop, TV, camera and console.", accent: "green" },
  { icon: Wrench, title: "FREE Installation", text: "Professional MTN engineer installs your line at no extra cost.", accent: "yellow" },
  { icon: RouterIcon, title: "FREE Router", text: "Premium Huawei Wi-Fi router included with every active plan.", accent: "black" },
  { icon: Headphones, title: "Fast Support", text: "Priority help from Ms. Veronica plus MTN's 24/7 support line.", accent: "green" },
];

export function Benefits() {
  const accentMap = {
    yellow: "bg-mtn-yellow text-black",
    green: "bg-mtn-green text-white",
    black: "bg-black text-mtn-yellow",
  } as const;
  return (
    <section
      id="benefits"
      className="relative py-20 lg:py-28 bg-white overflow-hidden"
    >
      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-mtn-yellow/20 blur-3xl -z-0" />
      <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-mtn-green/10 blur-3xl -z-0" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="chip">
            <Star className="h-3.5 w-3.5" /> Why MTN FibreX
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl">
            Why Choose MTN FibreX?
          </h2>
          <p className="mt-5 text-base sm:text-lg text-black/75 leading-relaxed">
            <b>MTN FibreX</b> is a premium <b>fibre broadband service</b> that
            delivers the internet to your home or business through dedicated
            fibre-optic lines — not mobile data or copper.
          </p>
          <p className="mt-3 text-base sm:text-lg text-black/75 leading-relaxed">
            You're paying for <b>internet speed (Mbps)</b>, not data volume.
            That means your plan is
            <b> truly UNLIMITED</b> — <u>no data caps, no data exhaustion</u>{" "}
            before your 30-day subscription ends. Your line stays active for the
            full validity period, every month.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {whyFeatures.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-2xl bg-white p-6 border border-black/5 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_25px_50px_-20px_rgba(244,180,0,0.45)] hover:border-mtn-yellow/60"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-mtn-yellow/70 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div
                className={`h-12 w-12 rounded-2xl grid place-items-center ${accentMap[f.accent]} shadow-[0_10px_20px_-10px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-4deg]`}
              >
                <f.icon className="h-6 w-6" strokeWidth={2.2} />
              </div>
              <h3 className="mt-5 text-lg font-display font-extrabold">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-black/65 leading-relaxed">
                {f.text}
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-mtn-green opacity-0 group-hover:opacity-100 transition">
                <Check className="h-3.5 w-3.5" strokeWidth={3} /> Included
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
