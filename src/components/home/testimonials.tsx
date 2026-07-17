import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Chinedu O.",
    role: "Software Engineer, Lekki, Lagos",
    text: "Switched from mobile data to MTN FibreX and my whole team's productivity jumped. Zero downtime, insane speeds.",
    rating: 5,
  },
  {
    name: "Aisha B.",
    role: "Content Creator, Wuse, Abuja",
    text: "Uploads that used to take an hour finish in minutes. Ms. Veronica handled everything from order to install.",
    rating: 5,
  },
  {
    name: "Pastor Emmanuel",
    role: "Church Admin, Oredo, Edo State",
    text: "Our livestreams finally look and sound crisp. The 200Mbps plan changed our Sunday services.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="chip">
            <Star className="h-3.5 w-3.5" /> Loved by Nigerians
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl">
            Real customers. Real fibre. Real speed.
          </h2>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="card-premium p-6">
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-mtn-yellow text-mtn-yellow"
                  />
                ))}
              </div>
              <p className="mt-4 text-sm text-black/80 leading-relaxed">
                "{t.text}"
              </p>
              <div className="mt-5 pt-5 border-t border-black/5">
                <div className="font-display font-extrabold">{t.name}</div>
                <div className="text-xs text-black/60">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}