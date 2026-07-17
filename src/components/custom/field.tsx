export function Field({
  label,
  required,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  inputMode,
  hint,
}: {
  label: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  type?: string;
  inputMode?: "text" | "numeric" | "tel" | "email";
  hint?: string;
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-black/60">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        inputMode={inputMode}
        className={`mt-1 w-full h-11 rounded-xl border px-3 bg-white focus:outline-none focus:ring-2 focus:ring-mtn-yellow ${error ? "border-red-400" : "border-black/10"}`}
      />
      {hint && !error && (
        <div className="mt-1 text-[11px] text-black/50 leading-snug">
          {hint}
        </div>
      )}
      {error && <div className="mt-1 text-xs text-red-600">{error}</div>}
    </div>
  );
}