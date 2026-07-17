import { MapPin, Check, MessageCircle } from "lucide-react";
import fatbox from "@/assets/fatbox.jpg";
import { WHATSAPP_COVERAGE } from "@/lib/constants/wa_me";

export function Coverage() {
  return (
    <section id="coverage" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative rounded-[2rem] overflow-hidden shadow-premium">
            <img
              src={fatbox}
              alt="MTN Fibre Access Terminal (FAT Box)"
              className="w-full h-[420px] object-cover"
            />
            <div className="absolute top-4 left-4 chip bg-white">
              FAT Box · Live Network
            </div>
          </div>
          <div>
            <span className="chip">
              <MapPin className="h-3.5 w-3.5" /> Fibre Availability
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl">
              Is MTN FibreX available at your address?
            </h2>
            <p className="mt-4 text-black/75 leading-relaxed">
              If you can see <b>MTN Fibre Access Terminal (FAT) boxes</b>{" "}
              mounted around your street, there is a high chance your location
              is eligible for MTN FibreX service. Tap the button below and we'll
              verify coverage for you on WhatsApp.
            </p>
            <ul className="mt-5 space-y-2.5">
              {[
                "Real-time confirmation by an Agent",
                "No guesses — verified against MTN's live network",
                "Fast reply, usually within minutes",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-2.5 text-sm text-black/80"
                >
                  <Check
                    className="h-4 w-4 mt-0.5 text-mtn-green shrink-0"
                    strokeWidth={3}
                  />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl bg-mtn-cream border border-mtn-yellow/40 p-5">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-mtn-yellow grid place-items-center shrink-0">
                  <MessageCircle className="h-5 w-5 text-black" />
                </div>
                <div className="text-sm text-black/75">
                  Share your address with Ms. Veronica and get instant
                  confirmation on WhatsApp before you register.
                </div>
              </div>
              <a
                href={WHATSAPP_COVERAGE}
                target="_blank"
                rel="noreferrer"
                className="btn-primary btn-primary-hover w-full mt-5"
              >
                <MapPin className="h-4 w-4" /> Check FibreX Coverage
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
