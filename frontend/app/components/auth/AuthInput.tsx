import type { ComponentPropsWithoutRef } from "react";

type AuthInputProps = ComponentPropsWithoutRef<"input"> & {
  label: string;
};

export default function AuthInput({ label, id, className = "", ...props }: AuthInputProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-700">{label}</label>
      <input
        id={id}
        className={`h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 ${className}`}
        {...props}
      />
    </div>
  );
}
