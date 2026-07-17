import { Sparkles, ShieldCheck, CreditCard, FileCheck2, HardHat, IdCard, PlugZap, Receipt, UserPlus } from "lucide-react";


const howToConnect = [
  {
    icon: UserPlus,
    title: "Submit Your Details",
    text: "Complete the Fibre Availability form with your contact information and installation address.",
  },
  {
    icon: IdCard,
    title: "Account Creation",
    text: "Ms. Veronica generates your official MTN FibreX account.",
  },
  {
    icon: Receipt,
    title: "Receive Your Account Number",
    text: "Your unique MTN FibreX account number is shared with you for payment.",
  },
  {
    icon: CreditCard,
    title: "Make Payment",
    text: "Complete your payment within one hour using the generated account number to avoid expiration.",
  },
  {
    icon: FileCheck2,
    title: "Upload Required Documents",
    text: "Upload your payment receipt for verification.",
  },
  {
    icon: HardHat,
    title: "MTN Assigns an Installer",
    text: "Once your payment and registration have been successfully verified, MTN assigns an installer to your location. The assigned installer will contact you directly to arrange a convenient installation appointment.",
  },
  {
    icon: PlugZap,
    title: "Installation & Activation",
    text: "The installer completes the installation, activates your FibreX connection, and confirms that your service is working so you can immediately begin enjoying fast, reliable, unlimited fibre internet.",
  },
];

export function HowToConnect() {
  return (
    <section
      id="how-to-connect"
      className="py-20 lg:py-28 bg-mtn-cream relative overflow-hidden"
    >
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-mtn-yellow/25 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-mtn-green/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="chip">
            <Sparkles className="h-3.5 w-3.5" /> Onboarding Journey
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl">
            How to Get Connected
          </h2>
          <p className="mt-4 text-black/70">
            Seven simple steps from application to activation — with Ms.
            Veronica supporting you at every stage.
          </p>
        </div>

        <ol className="mt-14 relative">
          <div
            aria-hidden
            className="absolute left-6 sm:left-8 top-2 bottom-2 w-0.5 bg-gradient-to-b from-mtn-yellow via-mtn-green to-mtn-yellow"
          />
          {howToConnect.map((s, i) => (
            <li
              key={s.title}
              className="relative pl-16 sm:pl-24 pb-8 last:pb-0 group"
            >
              <div className="absolute left-0 top-0 flex items-center justify-center">
                <div className="relative h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-white border-2 border-mtn-yellow shadow-premium grid place-items-center transition group-hover:scale-105 group-hover:border-mtn-green">
                  <s.icon
                    className="h-5 w-5 sm:h-6 sm:w-6 text-mtn-green"
                    strokeWidth={2.2}
                  />
                  <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-black text-mtn-yellow text-[11px] font-black grid place-items-center border-2 border-white">
                    {i + 1}
                  </span>
                </div>
              </div>
              <div className="rounded-2xl bg-white p-5 sm:p-6 border border-black/5 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_50px_-20px_rgba(244,180,0,0.45)] hover:border-mtn-yellow/60">
                <div className="text-[11px] font-black uppercase tracking-widest text-mtn-green">
                  Step {i + 1}
                </div>
                <h3 className="mt-1 text-lg sm:text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-black/70 leading-relaxed">
                  {s.text}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-3xl bg-black text-white p-6 sm:p-8 shadow-premium border border-mtn-yellow/30">
          <div className="flex items-start gap-4">
            <div className="h-11 w-11 rounded-2xl bg-mtn-yellow grid place-items-center shrink-0">
              <ShieldCheck className="h-5 w-5 text-black" />
            </div>
            <div>
              <div className="font-display font-black text-mtn-yellow">
                Important
              </div>
              <p className="mt-2 text-sm text-white/85 leading-relaxed">
                Installation scheduling and timelines are managed by MTN based
                on network availability and your location. As your dedicated MTN
                FibreX Telesales Agent, Ms. Veronica actively follows up on
                every application, monitors its progress, and works closely with
                the appropriate teams to help ensure a smooth and timely
                installation process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}