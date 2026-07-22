type FeedbackCardProps = { title: string; subtitle: string; items: string[]; tone: "success" | "warning" };

export default function FeedbackCard({ title, subtitle, items, tone }: FeedbackCardProps) {
  const isSuccess = tone === "success";
  return <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"><div><h2 className="font-semibold text-slate-950">{title}</h2><p className="mt-1 text-sm text-slate-500">{subtitle}</p></div><ul className="mt-5 space-y-3">{items.map((item) => <li key={item} className="flex items-start gap-3 text-sm text-slate-700"><span className={`mt-0.5 grid size-6 shrink-0 place-items-center rounded-full text-xs font-bold ${isSuccess ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>{isSuccess ? "✓" : "!"}</span><span className="leading-6">{item}</span></li>)}</ul></section>;
}
