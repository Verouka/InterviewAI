import { BriefcaseIcon } from "../JobIcons";

const uploads = [
  { title: "Senior Software Engineer", company: "Northstar Labs", date: "July 20, 2026", status: "Analyzed" },
  { title: "Staff Backend Engineer", company: "Cloudline", date: "July 16, 2026", status: "Analyzed" },
  { title: "Technical Lead", company: "Acme Financial", date: "July 11, 2026", status: "Processing" },
];

export default function RecentJobUploads() {
  return <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><h2 className="font-semibold text-slate-950">Recent Uploads</h2><p className="mt-1 text-xs text-slate-500">Your latest job descriptions</p><div className="mt-5 space-y-3">{uploads.map((item) => <article key={item.title} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3"><span className="grid size-9 shrink-0 place-items-center rounded-lg bg-white text-violet-600 shadow-sm"><BriefcaseIcon className="size-4" /></span><div className="min-w-0 flex-1"><p className="truncate text-xs font-semibold text-slate-900">{item.title}</p><p className="mt-1 truncate text-[11px] text-slate-500">{item.company} · {item.date}</p></div><span className={`rounded-full px-2 py-1 text-[10px] font-semibold ${item.status === "Analyzed" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>{item.status}</span></article>)}</div></section>;
}
