import { CalendarIcon, DocumentIcon, EyeIcon, TrashIcon } from "./ResumeIcons";
import type { Resume } from "./types";

export default function SavedResumeCard({ resume }: { resume: Resume }) {
  const isCurrent = resume.status === "Current";
  return <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
    <div className="flex items-start justify-between gap-4"><span className="grid size-11 shrink-0 place-items-center rounded-xl bg-violet-50 text-violet-600"><DocumentIcon className="size-5" /></span><span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${isCurrent ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-600"}`}>{resume.status}</span></div>
    <h3 className="mt-4 text-base font-semibold text-slate-950">{resume.title}</h3><p className="mt-1 text-sm text-slate-600">{resume.targetRole}</p>
    <div className="mt-5 flex items-center justify-between border-y border-slate-100 py-3 text-xs text-slate-500"><span className="flex items-center gap-1.5"><CalendarIcon className="size-4" /> {resume.uploadedAt}</span><span className="font-semibold text-indigo-700">Score {resume.score}%</span></div>
    <div className="mt-auto grid grid-cols-2 gap-2 pt-5"><button type="button" className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:border-indigo-200 hover:bg-indigo-50"><EyeIcon className="size-3.5" /> View</button><button type="button" disabled={isCurrent} className="rounded-xl bg-indigo-600 px-3 py-2 text-xs font-semibold text-white hover:bg-indigo-700 disabled:cursor-default disabled:bg-slate-100 disabled:text-slate-400">{isCurrent ? "Current Resume" : "Set as Current"}</button><button type="button" className="col-span-2 inline-flex items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50"><TrashIcon className="size-3.5" /> Delete</button></div>
  </article>;
}
