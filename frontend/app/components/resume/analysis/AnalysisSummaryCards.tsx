const metrics = [
  { label: "Resume Score", value: "86%", detail: "Competitive profile", tone: "bg-indigo-50 text-indigo-700" },
  { label: "ATS Compatibility", value: "91%", detail: "Excellent readability", tone: "bg-violet-50 text-violet-700" },
  { label: "Skills Detected", value: "24", detail: "12 core skills shown", tone: "bg-emerald-50 text-emerald-700" },
  { label: "Improvement Opportunities", value: "6", detail: "3 high-priority items", tone: "bg-amber-50 text-amber-700" },
];

export default function AnalysisSummaryCards() {
  return <section aria-label="Resume analysis summary" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{metrics.map((metric, index) => <article key={metric.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="flex items-start justify-between gap-3"><div><p className="text-sm font-medium text-slate-500">{metric.label}</p><p className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">{metric.value}</p></div><span className={`grid size-10 place-items-center rounded-xl text-sm font-bold ${metric.tone}`}>{index + 1}</span></div><p className="mt-4 text-xs font-medium text-slate-500">{metric.detail}</p></article>)}</section>;
}
