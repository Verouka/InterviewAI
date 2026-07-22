import type { JobSummary } from "./types";

const tones = { indigo: "bg-indigo-50 text-indigo-700", violet: "bg-violet-50 text-violet-700", emerald: "bg-emerald-50 text-emerald-700", amber: "bg-amber-50 text-amber-700" };

export default function JobSummaryCards({ summaries }: { summaries: JobSummary[] }) {
  return <section aria-label="Opportunity summary" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{summaries.map((summary, index) => <article key={summary.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="flex items-start justify-between gap-4"><div><p className="text-sm font-medium text-slate-500">{summary.label}</p><p className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">{summary.value}</p></div><span className={`grid size-10 shrink-0 place-items-center rounded-xl text-sm font-bold ${tones[summary.tone]}`}>{index + 1}</span></div><p className="mt-4 text-xs font-medium text-slate-500">{summary.detail}</p></article>)}</section>;
}
