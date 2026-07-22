import { SparklesIcon } from "../ResumeIcons";

const tips = ["Use PDF when possible", "Keep formatting clean", "Tailor your resume to the job", "Include measurable achievements"];

export default function ResumeTipsCard() {
  return <section className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-5 shadow-sm"><div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-xl bg-indigo-600 text-white"><SparklesIcon className="size-5" /></span><div><h2 className="font-semibold text-slate-950">Resume tips</h2><p className="text-xs text-indigo-600">Before you upload</p></div></div><ul className="mt-5 space-y-3">{tips.map((tip) => <li key={tip} className="flex items-start gap-3 text-sm text-slate-700"><span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">✓</span><span>{tip}</span></li>)}</ul></section>;
}
