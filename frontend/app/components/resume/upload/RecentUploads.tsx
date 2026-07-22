import { DocumentIcon } from "../ResumeIcons";

type RecentUpload = { filename: string; date: string; status: "Analyzed" | "Processing" };
const uploads: RecentUpload[] = [
  { filename: "Product_Resume_v2.pdf", date: "July 18, 2026", status: "Analyzed" },
  { filename: "Fintech_PM_Resume.pdf", date: "July 2, 2026", status: "Analyzed" },
  { filename: "Program_Manager.docx", date: "June 14, 2026", status: "Processing" },
];

function EmptyUploads() {
  return <div className="rounded-xl border border-dashed border-slate-300 px-4 py-8 text-center"><span className="mx-auto grid size-11 place-items-center rounded-xl bg-slate-100 text-slate-500"><DocumentIcon className="size-5" /></span><p className="mt-3 text-sm font-semibold text-slate-800">No previous uploads</p><p className="mt-1 text-xs leading-5 text-slate-500">Your uploaded resumes will appear here.</p></div>;
}

export default function RecentUploads({ items = uploads }: { items?: RecentUpload[] }) {
  return <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><h2 className="font-semibold text-slate-950">Recent uploads</h2><p className="mt-1 text-xs text-slate-500">Your latest resume files</p><div className="mt-5">{items.length === 0 ? <EmptyUploads /> : <div className="space-y-3">{items.map((item) => <article key={item.filename} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3"><span className="grid size-9 shrink-0 place-items-center rounded-lg bg-white text-indigo-600 shadow-sm"><DocumentIcon className="size-4" /></span><div className="min-w-0 flex-1"><p className="truncate text-xs font-semibold text-slate-900">{item.filename}</p><p className="mt-1 text-[11px] text-slate-500">{item.date}</p></div><span className={`rounded-full px-2 py-1 text-[10px] font-semibold ${item.status === "Analyzed" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>{item.status}</span></article>)}</div>}</div></section>;
}
