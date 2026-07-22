import { SparklesIcon } from "./ResumeIcons";

const recommendations = [
  { title: "Add measurable impact", detail: "Quantify results in your two most recent experience bullets.", priority: "High impact" },
  { title: "Strengthen skills alignment", detail: "Surface TypeScript and system design closer to the top.", priority: "Suggested" },
  { title: "Tighten your summary", detail: "Lead with your target role and strongest differentiator.", priority: "Quick win" },
];

export default function AIRecommendations() {
  return <aside className="overflow-hidden rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-violet-50 shadow-sm"><div className="flex items-center gap-3 border-b border-indigo-100 px-5 py-5"><span className="grid size-11 place-items-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-200"><SparklesIcon className="size-6" /></span><div><h2 className="font-semibold text-slate-950">AI Recommendations</h2><p className="text-sm text-indigo-600">3 ways to improve your resume</p></div></div><div className="space-y-3 p-4">{recommendations.map((recommendation, index) => <article key={recommendation.title} className="rounded-xl border border-white bg-white/80 p-4 shadow-sm"><div className="flex items-start gap-3"><span className="grid size-7 shrink-0 place-items-center rounded-lg bg-indigo-100 text-xs font-bold text-indigo-700">{index + 1}</span><div><div className="flex flex-wrap items-center gap-2"><h3 className="text-sm font-semibold text-slate-900">{recommendation.title}</h3><span className="rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-semibold text-violet-700">{recommendation.priority}</span></div><p className="mt-1 text-xs leading-5 text-slate-500">{recommendation.detail}</p></div></div></article>)}</div><div className="px-5 pb-5"><button type="button" className="w-full rounded-xl border border-indigo-200 bg-white px-4 py-2.5 text-sm font-semibold text-indigo-700 hover:bg-indigo-50">Review all suggestions</button></div></aside>;
}
