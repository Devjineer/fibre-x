import { WHATSAPP } from "@/lib/constants/wa_me";
import { CreditCard, MessageCircle } from "lucide-react";
import happy from "@/assets/happy.jpg";



export function Payment() {
  return (
    <section className="py-20 lg:py-28 bg-mtn-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
        <div className="rounded-[2rem] overflow-hidden shadow-premium">
          <img
            src={happy}
            alt="Happy MTN FibreX customers"
            className="w-full h-[400px] object-cover"
          />
        </div>
        <div>
          <span className="chip">
            <CreditCard className="h-3.5 w-3.5" /> Payment Confirmation
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl">
            Secure payment. Instant receipt.
          </h2>
          <p className="mt-3 text-black/70">
            Pay directly to MTN's official channels. Once your payment is
            received, you'll get an SMS confirmation and installation scheduling
            call within business hours.
          </p>
          <div className="mt-6 rounded-3xl bg-white p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-black/50">
                  Official Channel
                </div>
                <div className="font-display font-black text-lg">
                  MTN FibreX · Bank Transfer
                </div>
              </div>
              <div className="h-10 w-16 rounded-full bg-mtn-yellow grid place-items-center border-2 border-black">
                <span className="font-display font-black text-xs">MTN</span>
              </div>
            </div>
            <div className="mt-4 border-t border-dashed border-black/10 pt-4 grid grid-cols-2 gap-3 text-sm">
              <div>
                <div className="text-xs text-black/50">Agent</div>
                <div className="font-semibold">Ms. Veronica</div>
              </div>
              <div>
                <div className="text-xs text-black/50">Support</div>
                <div className="font-semibold">0810 491 6120</div>
              </div>
              <div>
                <div className="text-xs text-black/50">Company</div>
                <div className="font-semibold">Huawei Telecom</div>
              </div>
              <div>
                <div className="text-xs text-black/50">Receipt</div>
                <div className="font-semibold">Instant Download</div>
              </div>
            </div>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="btn-dark w-full mt-5"
            >
              <MessageCircle className="h-4 w-4" /> Get Payment Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}