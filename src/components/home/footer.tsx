
function SocialBtn({
  label,
  href,
  icon,
}: {
  label: string;
  handle: string;
  href: string;
  icon: "tiktok" | "ig" | "fb";
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="h-11 w-11 rounded-full bg-white/10 hover:bg-mtn-yellow hover:text-black grid place-items-center transition"
    >
      {icon === "tiktok" && (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M19.6 6.3a5.9 5.9 0 0 1-3.4-1.1V15a5.6 5.6 0 1 1-4.8-5.6v3.1a2.6 2.6 0 1 0 1.8 2.5V2h3.1a5.9 5.9 0 0 0 3.3 4.3z" />
        </svg>
      )}
      {icon === "ig" && (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
        </svg>
      )}
      {icon === "fb" && (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.3-1.9 2-1.9h2V2.1C16.7 2 15.7 2 14.6 2 11.9 2 10 3.6 10 6.7V10H7v4h3v8h3z" />
        </svg>
      )}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="bg-mtn-black text-white/80 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-9 w-14 rounded-full bg-mtn-yellow grid place-items-center border-2 border-black">
              <span className="font-display font-black text-[13px] text-black">
                MTN
              </span>
            </div>
            <div>
              <div className="font-display font-extrabold text-white">
                FibreX · Ms. Veronica
              </div>
              <div className="text-[11px] text-white/50">
                Independent MTN FibreX Telesales Agent
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/60 max-w-xs">
            Ms. Veronica is an authorised MTN FibreX Telesales Agent under
            Huawei Telecommunications. MTN and the MTN logo are trademarks of
            MTN Group.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-white/50 mb-3">
            Follow
          </div>
          <div className="flex gap-3">
            <SocialBtn
              label="TikTok"
              handle="pveewebandsocials"
              href="https://www.tiktok.com/@pveewebandsocials"
              icon="tiktok"
            />
            <SocialBtn
              label="Instagram"
              handle="shez.roni"
              href="https://instagram.com/shez.roni"
              icon="ig"
            />
            <SocialBtn
              label="Facebook"
              handle="Pvee Web and Socials"
              href="https://facebook.com/pveewebandsocials"
              icon="fb"
            />
          </div>
          <div className="mt-5 text-xs text-white/50 space-y-1">
            <div>TikTok: @pveewebandsocials</div>
            <div>Instagram: @shez.roni</div>
            <div>Facebook: Pvee Web and Socials</div>
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-white/50 mb-3">
            Quick Links
          </div>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#plans" className="hover:text-mtn-yellow">
                Plans & Pricing
              </a>
            </li>
            <li>
              <a href="#coverage" className="hover:text-mtn-yellow">
                Coverage Checker
              </a>
            </li>
            <li>
              <a href="#register" className="hover:text-mtn-yellow">
                Register
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-mtn-yellow">
                FAQ
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-mtn-yellow">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Ms. Veronica — MTN FibreX Telesales Agent
        (Huawei Telecommunications). All rights reserved.
      </div>
    </footer>
  );
}