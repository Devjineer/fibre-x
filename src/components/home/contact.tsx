import { veronica } from "@/lib/constants/images";
import { WHATSAPP } from "@/lib/constants/wa_me";
import { env } from "@/lib/env";
import { MessageCircle, Phone, Mail, Sparkles } from "lucide-react";

export function Contact() {
  
  const MAILTO = `mailto:${env.email}?subject=${encodeURIComponent("MTN FibreX Enquiry")}&body=${encodeURIComponent("Hello Ms. Veronica,\n\nI would like to learn more about MTN FibreX.\n\nThank you.")}`;

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-mtn-black text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-mtn-yellow blur-3xl" />
        <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-mtn-green blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <span className="chip bg-white/10 border-white/20 text-white">
            Contact
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl text-white">
            Let's Get You Connected.
          </h2>
          <p className="mt-4 text-white/70 max-w-lg">
            Personal service from an official MTN FibreX Telesales Agent (Huawei
            Telecommunications). No call centre queues — just a real human,
            ready to help.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat with Ms. Veronica on WhatsApp"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 font-display font-bold shadow-premium hover:scale-105 hover:shadow-glow transition duration-300"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </a>
            <a
              href={`tel:${env.phone}`}
              aria-label="Call Ms. Veronica"
              className="btn-primary btn-primary-hover"
            >
              <Phone className="h-4 w-4" /> Call
            </a>
            <a
              href={MAILTO}
              aria-label="Email Ms. Veronica"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 text-white px-6 py-3 font-display font-bold hover:bg-white hover:text-black transition duration-300"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
        </div>
        <div className="relative animate-fade-up">
          <div className="mb-4 rounded-2xl bg-white/10 border border-mtn-yellow/40 backdrop-blur px-5 py-4 shadow-premium">
            <div className="flex items-start gap-3">
              <Sparkles className="h-5 w-5 text-mtn-yellow shrink-0 mt-0.5" />
              <p className="text-sm sm:text-base text-white/90 font-medium leading-relaxed">
                <span className="font-display font-black text-mtn-yellow">
                  "Need help choosing a plan? I'm here to help."
                </span>
                <br />
                <span className="text-white/70 text-xs sm:text-sm">
                  — Ms. Veronica
                </span>
              </p>
            </div>
          </div>
          <div className="relative rounded-[2rem] overflow-hidden shadow-premium border-4 border-white/10">
            <img
              src={veronica}
              alt="Ms. Veronica"
              className="w-full h-[520px] object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-6">
              <div className="font-display font-black text-2xl text-white">
                Ms. Veronica
              </div>
              <div className="text-mtn-yellow text-sm">
                MTN FibreX Telesales Agent · Huawei Telecommunications
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}