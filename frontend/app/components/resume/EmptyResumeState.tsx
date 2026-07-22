import { DocumentIcon, UploadIcon } from "./ResumeIcons";

export default function EmptyResumeState({ title = "No resumes saved yet", description = "Upload a resume to start tracking versions and receiving tailored recommendations." }: { title?: string; description?: string }) {
  return <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center shadow-sm"><span className="mx-auto grid size-14 place-items-center rounded-2xl bg-indigo-50 text-indigo-600"><DocumentIcon className="size-7" /></span><h3 className="mt-4 font-semibold text-slate-950">{title}</h3><p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">{description}</p><button type="button" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"><UploadIcon className="size-4" /> Upload New Resume</button></div>;
}
