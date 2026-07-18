import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const inputSchema = z.object({
  q: z.string().trim().min(3).max(100),
  phone: z.string().trim().max(30).optional(),
});

export type TrackResult = {
  found: boolean;
  registration?: {
    id: string;
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    status: string;
    customer_type: string;
    preferred_plan: string | null;
    street: string | null;
    lga: string | null;
    created_at: string;
  };
  payment?: {
    account_number: string;
    account_name: string;
    bank_name: string;
    amount: number;
    expires_at: string;
    active: boolean;
    created_at: string;
  } | null;
  receipts?: Array<{
    id: string;
    status: string;
    file_name: string | null;
    rejection_reason: string | null;
    created_at: string;
  }>;
  notes?: Array<{ id: string; body: string; created_at: string }>;
};

function normalizePhone(p: string): string {
  return p.replace(/\D/g, "");
}

export const trackRegistration = createServerFn({ method: "POST" })
//   .inputValidator((data) => inputSchema.parse(data))
//   .handler(async ({ data }): Promise<TrackResult> => {
//     const { supabaseAdmin } = { supabaseAdmin: "" };
//     //   await import("@/integrations/supabase/client.server");
//     const raw = data.q.trim();
//     const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(raw);
//     const digits = normalizePhone(raw);
//     const isPhone = digits.length >= 7;

//     // Try match by email
//     let reg: TrackResult["registration"] | undefined;

//     const baseCols =
//       "id, first_name, last_name, phone, email, status, customer_type, preferred_plan, street, lga, created_at";

//     // if (isEmail) {
//     //   const { data: r } = await supabaseAdmin
//     //     .from("registrations")
//     //     .select(baseCols)
//     //     .ilike("email", raw)
//     //     .order("created_at", { ascending: false })
//     //     .limit(1)
//     //     .maybeSingle();
//     //   if (r) reg = r as unknown as typeof reg;
//     // }

//     if (!reg && isPhone) {
//       // Match last 10 digits of phone
//     //   const tail = digits.slice(-10);
//     //   const { data: rs } = await supabaseAdmin
//     //     .from("registrations")
//     //     .select(baseCols)
//     //     .ilike("phone", `%${tail}%`)
//     //     .order("created_at", { ascending: false })
//     //     .limit(1);
//     //   if (rs && rs.length > 0) reg = rs[0] as unknown as typeof reg;
//     // }

//     if (!reg) {
//       // Try account_number lookup via payment_accounts
//     //   const { data: pa } = await supabaseAdmin
//     //     .from("payment_accounts")
//     //     .select("registration_id")
//     //     .eq("account_number", raw)
//     //     .order("created_at", { ascending: false })
//     //     .limit(1)
//     //     .maybeSingle();
//     //   if (pa?.registration_id) {
//     //     const { data: r } = await supabaseAdmin
//     //       .from("registrations")
//     //       .select(baseCols)
//     //       .eq("id", pa.registration_id)
//     //       .maybeSingle();
//     //     if (r) reg = r as unknown as typeof reg;
//     //   }
//     }

//     if (!reg) return { found: false };

//     // const [{ data: pa }, { data: recs }, { data: notes }] = await Promise.all([
//     //   supabaseAdmin
//     //     .from("payment_accounts")
//     //     .select(
//     //       "account_number, account_name, bank_name, amount, expires_at, active, created_at",
//     //     )
//     //     .eq("registration_id", reg.id)
//     //     .order("created_at", { ascending: false })
//     //     .limit(1),
//     //   supabaseAdmin
//     //     .from("receipts")
//     //     .select("id, status, file_name, rejection_reason, created_at")
//     //     .eq("registration_id", reg.id)
//     //     .order("created_at", { ascending: false }),
//     //   supabaseAdmin
//     //     .from("registration_notes")
//     //     .select("id, body, created_at")
//     //     .eq("registration_id", reg.id)
//     //     .order("created_at", { ascending: false }),
//     // ]);

//     return {
//       found: true,
//       registration: reg,
//     //   payment:
//     //     pa && pa[0]
//     //       ? {
//     //           account_number: pa[0].account_number,
//     //           account_name: pa[0].account_name,
//     //           bank_name: pa[0].bank_name,
//     //           amount: Number(pa[0].amount),
//     //           expires_at: pa[0].expires_at,
//     //           active: pa[0].active,
//     //           created_at: pa[0].created_at,
//     //         }
//     //       : null,
//     //   receipts: recs ?? [],
//     //   notes: notes ?? [],
//     };
//   });
