import { UploadIcon } from "../ResumeIcons";

const actions = [
  { label: "Analyze Again", style: "border-slate-200 text-slate-700 hover:bg-slate-50" },
  { label: "Download Report", style: "border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-100" },
  { label: "Use Resume for Interview", style: "border-indigo-600 bg-indigo-600 text-white hover:bg-indigo-700" },
];

export default function AnalysisActions() {
  return <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><h2 className="font-semibold text-slate-950">Next steps</h2><p className="mt-1 text-sm text-slate-500">Continue preparing with this resume.</p><div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{actions.map((action) => <button key={action.label} type="button" className={`rounded-xl border px-4 py-3 text-sm font-semibold ${action.style}`}>{action.label}</button>)}<button type="button" className="inline-flex items-center justify-center gap-2 rounded-xl border border-violet-200 bg-violet-50 px-4 py-3 text-sm font-semibold text-violet-700 hover:bg-violet-100"><UploadIcon className="size-4" /> Upload New Resume</button></div></section>;
}
