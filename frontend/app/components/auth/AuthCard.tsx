import Link from "next/link";
import type { ReactNode } from "react";

type AuthCardProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer?: ReactNode;
};

export default function AuthCard({ title, subtitle, children, footer }: AuthCardProps) {
  return (
    <div className="w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl shadow-slate-900/[0.08] lg:grid lg:grid-cols-[0.9fr_1.1fr]">
      <aside className="relative hidden overflow-hidden bg-slate-950 p-10 text-white lg:flex lg:flex-col lg:justify-between">
        <div className="absolute -right-28 -top-24 size-80 rounded-full bg-indigo-500/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 size-80 rounded-full bg-violet-500/20 blur-3xl" />
        <Brand light />
        <div className="relative max-w-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">Prepare with purpose</p>
          <p className="mt-5 text-3xl font-semibold leading-tight tracking-tight">Practice smarter. Interview with confidence.</p>
          <p className="mt-5 leading-7 text-slate-300">Personalized interview preparation built around your experience and the role you want.</p>
        </div>
        <p className="relative text-xs text-slate-500">InterviewAI · Your AI interview coach</p>
      </aside>

      <section className="px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
        <div className="mb-9 lg:hidden"><Brand /></div>
        <div className="mx-auto max-w-md">
          <header>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h1>
            <p className="mt-3 leading-7 text-slate-500">{subtitle}</p>
          </header>
          <div className="mt-8">{children}</div>
          {footer ? <div className="mt-7 text-center text-sm text-slate-500">{footer}</div> : null}
        </div>
      </section>
    </div>
  );
}

function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" aria-label="InterviewAI home" className="relative inline-flex w-fit items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2">
      <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-sm font-bold text-white shadow-lg shadow-indigo-950/20">AI</span>
      <span>
        <span className={`block font-semibold tracking-tight ${light ? "text-white" : "text-slate-950"}`}>InterviewAI</span>
        <span className={`block text-xs ${light ? "text-slate-400" : "text-slate-500"}`}>AI Interview Coach</span>
      </span>
    </Link>
  );
}
