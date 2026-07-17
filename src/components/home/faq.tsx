import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Is the router really free?",
    a: "Yes, currently FibreX router and installation is free, so there are no hidden fees.",
  },
  {
    q: "How long does installation take?",
    a: "Once your payment is confirmed and coverage is verified, MTN engineers typically install within 1–7 working days.",
  },
  {
    q: "Is the internet truly unlimited?",
    a: "Absolutely. All MTN FibreX plans include unlimited data with no fair-usage throttling for normal residential use.",
  },
  {
    q: "What locations are covered?",
    a: "MTN FibreX is expanding rapidly across Lagos, FCT Abuja, Ogun, Oyo, Kaduna, Kano and major cities across Nigeria. Use the coverage checker to chat with Ms. Veronica on WhatsApp to confirm your address.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Yes, you can upgrade to a higher speed at anytime — just contact Ms. Veronica.",
  },
  {
    q: "Do you serve businesses and offices?",
    a: "Yes. We offer dedicated plans for SMEs, schools, churches, and offices, including CCTV-friendly configurations.",
  },
  {
    q: "Can I move with the router to another location?",
    a: "Yes, you can move, but the router will only function in a location that has MTN Fibre coverage.",
  },
  {
    q: "Can the router function without light?",
    a: "Yes, it can function without light. It can be connected to a solid power bank, or you can get the router's dedicated power bank which lasts between 6–24 hours.",
  },
  {
    q: "How do I renew monthly?",
    a: "You'll receive a renewal reminder. Payments are simple via bank transfer on the MTN portal. For further assistance, chat with Ms. Veronica.",
  },
  {
    q: "Is FibreX also available to Non-MTN users?",
    a: "Yes, it is available to non-MTN users, but only locations with Fibre coverage can register.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="chip">FAQ</span>
          <h2 className="mt-4 text-3xl sm:text-4xl">
            Questions? We've got answers.
          </h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <button
              key={f.q}
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left card-premium p-5 sm:p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-display font-extrabold text-base sm:text-lg">
                  {f.q}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </div>
              {open === i && (
                <p className="mt-3 text-sm text-black/70 leading-relaxed">
                  {f.a}
                </p>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}