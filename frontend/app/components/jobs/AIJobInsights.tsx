import { SparklesIcon } from "./JobIcons";

const insights = [
  { title: "Strengthen cloud-computing keywords", detail: "Highlight AWS, distributed systems, and cloud architecture experience." },
  { title: "Prepare leadership examples", detail: "Build stories that show team influence and cross-functional decisions." },
  { title: "Review system-design responsibilities", detail: "Practice connecting scalable architecture choices to business impact." },
];

export default function AIJobInsights() {
  return <aside className="overflow-hidden rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-violet-50 shadow-sm"><div className="flex items-center gap-3 border-b border-indigo-100 px-5 py-5"><span className="grid size-11 place-items-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-200"><SparklesIcon className="size-6" /></span><div><h2 className="font-semibold text-slate-950">AI Insights</h2><p className="text-sm text-indigo-600">Preparation focus</p></div></div><div className="space-y-3 p-4">{insights.map((insight, index) => <article key={insight.title} className="rounded-xl border border-white bg-white/80 p-4 shadow-sm"><div className="flex items-start gap-3"><span className="grid size-7 shrink-0 place-items-center rounded-lg bg-indigo-100 text-xs font-bold text-indigo-700">{index + 1}</span><div><h3 className="text-sm font-semibold text-slate-900">{insight.title}</h3><p className="mt-1 text-xs leading-5 text-slate-500">{insight.detail}</p></div></div></article>)}</div></aside>;
}
