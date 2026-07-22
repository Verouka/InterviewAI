type Priority = "High" | "Medium" | "Low";
const recommendations: { title: string; explanation: string; priority: Priority }[] = [
  { title: "Quantify your recent impact", explanation: "Add metrics to your latest role, such as revenue influenced, time saved, or adoption increased.", priority: "High" },
  { title: "Strengthen ATS keyword alignment", explanation: "Mirror core product strategy and cross-functional leadership terms from your target role.", priority: "High" },
  { title: "Expand your professional summary", explanation: "Use two concise sentences to connect your experience, specialty, and next career goal.", priority: "Medium" },
  { title: "Add relevant certifications", explanation: "Include current cloud, product, or agile credentials when they support the role.", priority: "Low" },
];
const priorityStyles = { High: "bg-rose-50 text-rose-700", Medium: "bg-amber-50 text-amber-700", Low: "bg-slate-100 text-slate-600" };

export default function RecommendationsTimeline() {
  return <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"><div><h2 className="font-semibold text-slate-950">AI Recommendations</h2><p className="mt-1 text-sm text-slate-500">Prioritized steps to improve your resume</p></div><div className="mt-6 space-y-0">{recommendations.map((item, index) => <article key={item.title} className="relative flex gap-4 pb-6 last:pb-0">{index < recommendations.length - 1 && <span className="absolute left-[17px] top-9 h-[calc(100%-2rem)] w-px bg-indigo-100" />}<span className="relative z-10 grid size-9 shrink-0 place-items-center rounded-full bg-indigo-600 text-sm font-bold text-white shadow-sm">{index + 1}</span><div className="min-w-0 flex-1 rounded-xl border border-slate-100 bg-slate-50/70 p-4"><div className="flex flex-wrap items-center justify-between gap-2"><h3 className="text-sm font-semibold text-slate-900">{item.title}</h3><span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${priorityStyles[item.priority]}`}>{item.priority}</span></div><p className="mt-2 text-xs leading-5 text-slate-500">{item.explanation}</p></div></article>)}</div></section>;
}
