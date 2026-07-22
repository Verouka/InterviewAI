import { SparklesIcon } from "../JobIcons";

const tips = ["Use the original job posting.", "Include the complete responsibilities.", "Keep qualifications intact.", "Include required technologies."];

export default function JobUploadTips() {
  return <section className="rounded-2xl border border-violet-100 bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-5 shadow-sm"><div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-xl bg-violet-600 text-white"><SparklesIcon className="size-5" /></span><div><h2 className="font-semibold text-slate-950">AI Tips</h2><p className="text-xs text-violet-600">For better matching</p></div></div><ul className="mt-5 space-y-3">{tips.map((tip) => <li key={tip} className="flex items-start gap-3 text-sm text-slate-700"><span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">✓</span><span>{tip}</span></li>)}</ul></section>;
}
