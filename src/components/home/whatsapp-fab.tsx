import { WHATSAPP } from "@/lib/constants/wa_me";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] text-white pl-3 pr-4 py-3 shadow-premium animate-pulse-ring hover:scale-105 transition"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M20.5 3.5A11 11 0 0 0 3.4 17l-1.4 5 5.1-1.3A11 11 0 1 0 20.5 3.5zM12 20a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1s-.6.8-.8 1c-.1.1-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.6-1.2.1-.1 0-.3 0-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.9 2.3 1 2.5c.1.2 1.7 2.7 4.2 3.7 1.6.6 2.2.7 3 .5.5-.1 1.4-.6 1.6-1.2.2-.5.2-1 .1-1.1z" />
      </svg>
      <span className="font-display font-bold text-sm hidden sm:inline">
        WhatsApp
      </span>
    </a>
  );
}