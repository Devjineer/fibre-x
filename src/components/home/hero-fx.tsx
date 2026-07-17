export function HeroFx() {
  // Deterministic-ish particle positions to avoid hydration mismatch
  const particles = [
    { l: "8%", t: "18%", d: "0s", s: 6 },
    { l: "22%", t: "72%", d: "1.2s", s: 4 },
    { l: "38%", t: "12%", d: "2.4s", s: 5 },
    { l: "55%", t: "60%", d: "0.6s", s: 7 },
    { l: "70%", t: "22%", d: "1.8s", s: 5 },
    { l: "82%", t: "78%", d: "2.8s", s: 6 },
    { l: "90%", t: "40%", d: "0.4s", s: 4 },
    { l: "14%", t: "48%", d: "3.2s", s: 5 },
  ];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Soft MTN yellow gradient wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,204,0,0.35),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(15,118,110,0.12),transparent_55%),linear-gradient(180deg,#FFFDF4_0%,#FFF6D1_50%,#FFFDF4_100%)]" />
      {/* Connection line SVG */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.18]" viewBox="0 0 800 600" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGrad" x1="0" x2="1">
            <stop offset="0%" stopColor="#F4B400" stopOpacity="0" />
            <stop offset="50%" stopColor="#F4B400" stopOpacity="1" />
            <stop offset="100%" stopColor="#0F766E" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[80, 180, 300, 430, 540].map((y, i) => (
          <path
            key={y}
            d={`M0 ${y} Q 200 ${y - 40} 400 ${y} T 800 ${y}`}
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth="1.2"
            className="hero-line"
            style={{ animationDelay: `${i * 0.7}s` }}
          />
        ))}
      </svg>
      {/* Wi-Fi ripple rings */}
      <div className="absolute right-[8%] top-[14%] h-40 w-40 rounded-full border border-mtn-yellow/40 hero-ring" />
      <div className="absolute right-[8%] top-[14%] h-40 w-40 rounded-full border border-mtn-yellow/40 hero-ring" style={{ animationDelay: "1.2s" }} />
      <div className="absolute left-[6%] bottom-[10%] h-32 w-32 rounded-full border border-mtn-green/40 hero-ring" style={{ animationDelay: "0.6s" }} />
      {/* Glowing particles */}
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-mtn-yellow hero-particle"
          style={{
            left: p.l,
            top: p.t,
            width: p.s,
            height: p.s,
            animationDelay: p.d,
            boxShadow: "0 0 12px 2px rgba(255,204,0,0.7)",
          }}
        />
      ))}
    </div>
  );
}