import { env } from "../env";

export const WHATSAPP = `https://wa.me/${env.wa_number}?text=${encodeURIComponent("Hello Ms. Veronica, I'd like to order MTN FibreX.")}`;
export const WHATSAPP_COVERAGE = `https://wa.me/${env.wa_number}?text=${encodeURIComponent("Hello Ms. Veronica, I would like to confirm if my location is covered by MTN FibreX before proceeding with registration.")}`;