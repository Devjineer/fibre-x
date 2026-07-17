import { Link } from "@tanstack/react-router";
import { useState } from "react";
import  { Menu,User, X } from "lucide-react";

export function Nav() {
  const [open, setOpen] = useState(false);
  const links: [string, string][] = [
    ["Plans", "#plans"],
    ["Benefits", "#benefits"],
    ["Coverage", "#coverage"],
    ["FAQ", "#faq"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <div className="h-9 w-14 rounded-full bg-mtn-yellow grid place-items-center border-2 border-black">
            <span className="font-display font-black text-[13px] tracking-tight">
              MTN
            </span>
          </div>
          <div className="leading-tight hidden sm:block">
            <div className="font-display font-extrabold text-sm">FibreX</div>
            <div className="text-[10px] text-muted-foreground -mt-0.5">
              with Ms. Veronica
            </div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {links.map(([l, h]) => (
            <a
              key={h}
              href={h}
              className="text-sm font-medium text-black/70 hover:text-black transition"
            >
              {l}
            </a>
          ))}
          <Link
            to="/track"
            className="text-sm font-medium text-black/70 hover:text-black transition inline-flex items-center gap-1.5"
          >
            <User className="h-4 w-4" /> Customer Portal
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#register"
            className="hidden sm:inline-flex btn-primary btn-primary-hover text-sm"
          >
            Get Connected
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-full border border-black/10"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="px-4 py-3 flex flex-col gap-1">
            {links.map(([l, h]) => (
              <a
                key={h}
                href={h}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium"
              >
                {l}
              </a>
            ))}
            <Link
              to="/track"
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-semibold text-[#0F766E] inline-flex items-center gap-1.5"
            >
              <User className="h-4 w-4" /> Customer Portal
            </Link>
            <a
              href="#register"
              onClick={() => setOpen(false)}
              className="btn-primary btn-primary-hover mt-2 text-sm"
            >
              Get Connected
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
