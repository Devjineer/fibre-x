import { plans } from "@/lib/constants/plans";
import { Check, MessageCircle, HomeIcon, Sparkles, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";
import { Field } from "../custom/field";
import { env } from "@/lib/env";

type RegForm = {
  firstName: string;
  lastName: string;
  phone: string;
  phone2: string;
  email: string;
  house: string;
  street: string;
  landmark: string;
  lga: string;
  state: string;
  plan: string;
  nin: string;
  dob: string;
};
const emptyReg: RegForm = {
  firstName: "",
  lastName: "",
  phone: "",
  phone2: "",
  email: "",
  house: "",
  street: "",
  landmark: "",
  lga: "",
  state: "",
  plan: plans[1].speed,
  nin: "",
  dob: "",
};

export function Register() {
  const [form, setForm] = useState<RegForm>(emptyReg);
  const [errors, setErrors] = useState<Partial<Record<keyof RegForm, string>>>(
    {},
  );
  const [submitted, setSubmitted] = useState<RegForm | null>(null);
  const [showWelcome, setShowWelcome] = useState(false);

  // Lead recovery: restore draft if present
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem("fibrex_draft");
      if (raw) {
        const draft = JSON.parse(raw) as Partial<RegForm>;
        if (draft && (draft.firstName || draft.phone || draft.email)) {
          setForm((f) => ({ ...f, ...draft }));
          setShowWelcome(true);
        }
      }
    } catch {
      /* ignore */
    }
  }, []);

  const update =
    (k: keyof RegForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const value = e.target.value;
      setForm((f) => {
        const next = { ...f, [k]: value };
        // Auto-save draft as soon as user types identifying info
        try {
          if (
            typeof window !== "undefined" &&
            (next.firstName || next.phone || next.email)
          ) {
            window.localStorage.setItem("fibrex_draft", JSON.stringify(next));
          }
        } catch {
          /* ignore */
        }
        return next;
      });
    };

  const validate = (f: RegForm) => {
    const err: Partial<Record<keyof RegForm, string>> = {};
    const req: (keyof RegForm)[] = [
      "firstName",
      "lastName",
      "phone",
      "email",
      "house",
      "street",
      "landmark",
      "lga",
      "state",
      "plan",
      "nin",
      "dob",
    ];
    req.forEach((k) => {
      if (!String(f[k]).trim()) err[k] = "Required";
    });
    if (f.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email))
      err.email = "Invalid email";
    if (f.phone && !/^[0-9+\s-]{7,15}$/.test(f.phone))
      err.phone = "Invalid phone";
    if (f.phone2 && !/^[0-9+\s-]{7,15}$/.test(f.phone2))
      err.phone2 = "Invalid phone";
    if (f.nin && !/^\d{11}$/.test(f.nin)) err.nin = "NIN must be 11 digits";
    if (
      f.dob &&
      !/^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/.test(f.dob)
    )
      err.dob = "Use DD/MM/YYYY";
    return err;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate(form);
    setErrors(err);
    if (Object.keys(err).length) return;
    const record = { ...form, submittedAt: new Date().toISOString() };
    try {
      if (typeof window !== "undefined") {
        const prev = JSON.parse(
          window.localStorage.getItem("fibrex_registrations") || "[]",
        );
        prev.push(record);
        window.localStorage.setItem(
          "fibrex_registrations",
          JSON.stringify(prev),
        );
        window.localStorage.removeItem("fibrex_draft");
      }
    } catch {
      /* ignore storage errors */
    }
    setSubmitted(form);
  };

  const buildWhatsAppLink = (f: RegForm) => {
    const address = `${f.house} ${f.street}, ${f.landmark}, ${f.lga}, ${f.state}`;
    const parts = [
      "Hello Ms. Veronica, I have just submitted my MTN FibreX registration. Please find my details below:",
      "",
      `First Name: ${f.firstName}`,
      `Last Name: ${f.lastName}`,
      `Phone: ${f.phone}`,
      f.phone2 ? `Phone 2: ${f.phone2}` : "",
      `Email: ${f.email}`,
      `Address: ${address}`,
      `Selected Plan: ${f.plan}`,
      `NIN: ${f.nin}`,
      `Date of Birth: ${f.dob}`,
      "",
      "Kindly proceed with generating my MTN FibreX Account Number. Thank you.",
    ]
      .filter(Boolean)
      .join("\n");
    return `https://wa.me/${env.wa_number}?text=${encodeURIComponent(parts)}`;
  };

  if (submitted) {
    return (
      <section id="register" className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="card-premium p-8 sm:p-10 text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-mtn-green grid place-items-center text-white shadow-premium">
              <Check className="h-8 w-8" strokeWidth={3} />
            </div>
            <h3 className="mt-5 text-2xl sm:text-3xl">
              Registration received successfully.
            </h3>
            <p className="mt-4 text-black/75 leading-relaxed">
              Ms. Veronica will now review your details and generate your MTN
              FibreX Account Number.
              <br />
              You will receive your Account Number shortly.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={buildWhatsAppLink(submitted)}
                target="_blank"
                rel="noreferrer"
                className="btn-primary btn-primary-hover"
              >
                <MessageCircle className="h-4 w-4" /> Continue to WhatsApp
              </a>
              <a
                href="#top"
                onClick={() => {
                  setSubmitted(null);
                  setForm(emptyReg);
                }}
                className="btn-outline"
              >
                <HomeIcon className="h-4 w-4" /> Return Home
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_1.3fr] gap-12 items-start">
        <div>
          <span className="chip">
            <Sparkles className="h-3.5 w-3.5" /> Notify Me If I'm Covered
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl">
            Get connected with Ms. Veronica.
          </h2>
          <p className="mt-4 text-black/70 leading-relaxed">
            Submit your details below. Ms. Veronica will verify coverage,
            generate your MTN FibreX Account Number, and guide you through
            payment and installation.
          </p>
          <div className="mt-8 space-y-4">
            {[
              ["1", "Submit your accurate details securely"],
              ["2", "Receive your MTN FibreX Account Number"],
              ["3", "Pay & get installed within 1–7 working days"],
            ].map(([n, t]) => (
              <div key={n} className="flex items-start gap-4">
                <div className="h-9 w-9 rounded-full bg-mtn-yellow grid place-items-center font-display font-black shrink-0">
                  {n}
                </div>
                <p className="text-sm text-black/75 pt-1">{t}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl bg-mtn-green/5 border border-mtn-green/20 p-4 flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 text-mtn-green shrink-0 mt-0.5" />
            <p className="text-xs text-black/70 leading-relaxed">
              Your information is encrypted in transit and stored securely. It
              is used only to process your MTN FibreX registration.
            </p>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="card-premium p-6 sm:p-8 space-y-5"
          noValidate
        >
          {showWelcome && (
            <div className="rounded-xl bg-mtn-yellow/15 border border-mtn-yellow/50 p-4 flex items-start gap-3">
              <Sparkles className="h-5 w-5 text-mtn-green shrink-0 mt-0.5" />
              <div className="flex-1 text-sm">
                <div className="font-semibold">Welcome back.</div>
                <div className="text-black/70">
                  Would you like to continue your MTN FibreX registration? We
                  restored your previous details.
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setForm(emptyReg);
                  setShowWelcome(false);
                  try {
                    window.localStorage.removeItem("fibrex_draft");
                  } catch {
                    /* ignore */
                  }
                }}
                className="text-xs font-semibold text-black/60 hover:text-black underline"
              >
                Start fresh
              </button>
            </div>
          )}
          <div className="grid sm:grid-cols-2 gap-4">
            <Field
              label="First Name"
              required
              value={form.firstName}
              onChange={update("firstName")}
              error={errors.firstName}
              placeholder="Veronica"
            />
            <Field
              label="Last Name"
              required
              value={form.lastName}
              onChange={update("lastName")}
              error={errors.lastName}
              placeholder="Adeyemi"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field
              label="Phone Number"
              required
              value={form.phone}
              onChange={update("phone")}
              error={errors.phone}
              placeholder="080..."
              type="tel"
            />
            <Field
              label="Phone Number 2"
              value={form.phone2}
              onChange={update("phone2")}
              error={errors.phone2}
              placeholder="Optional"
              type="tel"
              hint="Optional – Helps the installation engineer reach you if your primary number is unavailable"
            />
          </div>
          <Field
            label="Email"
            required
            type="email"
            value={form.email}
            onChange={update("email")}
            error={errors.email}
            placeholder="you@email.com"
          />

          <div className="rounded-2xl border border-black/10 p-4 sm:p-5 bg-mtn-cream/60">
            <div className="text-xs font-black uppercase tracking-wider text-black/70 mb-3">
              Installation Address
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                label="House Number"
                required
                value={form.house}
                onChange={update("house")}
                error={errors.house}
                placeholder="No. 29"
              />
              <Field
                label="Street Name"
                required
                value={form.street}
                onChange={update("street")}
                error={errors.street}
                placeholder="Ademola Street"
              />
              <Field
                label="Nearest Landmark / Bus Stop"
                required
                value={form.landmark}
                onChange={update("landmark")}
                error={errors.landmark}
                placeholder="Aguda"
              />
              <Field
                label="Local Government Area (LGA)"
                required
                value={form.lga}
                onChange={update("lga")}
                error={errors.lga}
                placeholder="Surulere"
              />
              <Field
                label="State"
                required
                value={form.state}
                onChange={update("state")}
                error={errors.state}
                placeholder="Lagos State"
              />
            </div>
            <p className="mt-3 text-[11px] text-black/50 leading-relaxed">
              Example: No. 29 Ademola Street, Aguda, Surulere, Lagos State
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-black/60">
                Preferred Plan <span className="text-red-500">*</span>
              </label>
              <select
                value={form.plan}
                onChange={update("plan")}
                className="mt-1 w-full h-11 rounded-xl border border-black/10 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-mtn-yellow"
              >
                {plans.map((p) => (
                  <option key={p.speed} value={p.speed}>
                    {p.speed} — ₦{p.price}/mo
                  </option>
                ))}
              </select>
              {errors.plan && (
                <div className="mt-1 text-xs text-red-600">{errors.plan}</div>
              )}
            </div>
            <Field
              label="National Identity Number (NIN)"
              required
              value={form.nin}
              onChange={update("nin")}
              error={errors.nin}
              placeholder="11-digit NIN"
              inputMode="numeric"
            />
          </div>

          <Field
            label="Date of Birth"
            required
            value={form.dob}
            onChange={update("dob")}
            error={errors.dob}
            placeholder="DD/MM/YYYY"
          />

          <div className="rounded-2xl bg-mtn-yellow/15 border border-mtn-yellow/50 p-4 text-sm text-black/80 leading-relaxed">
            <b>Please ensure every detail provided is accurate.</b> Incorrect
            information, invalid addresses or using another person's valid NIN
            may delay or prevent installation.
          </div>

          <button
            type="submit"
            className="btn-primary btn-primary-hover w-full"
          >
            <MessageCircle className="h-4 w-4" /> Notify me if I'm covered
          </button>
        </form>
      </div>
    </section>
  );
}