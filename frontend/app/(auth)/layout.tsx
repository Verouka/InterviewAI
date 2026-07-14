import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-slate-50 px-4 py-8 sm:px-6 sm:py-12">
      <div className="pointer-events-none absolute -left-40 top-10 size-96 rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 size-96 rounded-full bg-violet-200/40 blur-3xl" />
      <div className="relative w-full">{children}</div>
    </main>
  );
}
