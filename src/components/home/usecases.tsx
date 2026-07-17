import {
  Briefcase,
  Building2,
  Camera,
  Gamepad2,
  HomeIcon,
  Tv,
  Users,
} from "lucide-react";

import family from "@/assets/family.jpg";
import gaming from "@/assets/gaming.jpg";
import remote from "@/assets/remote.jpg";
import smarttv from "@/assets/smarttv.jpg";
import install from "@/assets/install.jpg";
import office from "@/assets/office.jpg";

const useCases = [
  { icon: HomeIcon, label: "Homes & Families", img: family },
  { icon: Gamepad2, label: "Gamers & Streamers", img: gaming },
  { icon: Briefcase, label: "Remote Workers", img: remote },
  { icon: Tv, label: "Smart TV & 4K", img: smarttv },
  { icon: Camera, label: "CCTV & Security", img: install },
  { icon: Building2, label: "Offices & SMEs", img: office },
];

export function UseCases() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div className="max-w-xl">
            <span className="chip">
              <Users className="h-3.5 w-3.5" /> Who it's for
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl">
              One connection, every lifestyle.
            </h2>
          </div>
          <p className="text-black/60 max-w-md text-sm">
            Homeowners, tenants, gamers, streamers, remote workers, schools,
            churches, offices and families — all powered by the same premium
            fibre backbone.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {useCases.map((u) => (
            <div
              key={u.label}
              className="group relative overflow-hidden rounded-3xl shadow-soft aspect-[4/5] sm:aspect-[4/3]"
            >
              <img
                src={u.img}
                alt={u.label}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-mtn-yellow grid place-items-center shrink-0">
                  <u.icon className="h-5 w-5 text-black" />
                </div>
                <div className="font-display font-extrabold">{u.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
