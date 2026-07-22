import Link from "next/link";
import JobDetailsForm from "./JobDetailsForm";
import JobUploadDropzone from "./JobUploadDropzone";
import JobUploadTips from "./JobUploadTips";
import PasteJobDescriptionCard from "./PasteJobDescriptionCard";
import RecentJobUploads from "./RecentJobUploads";

export default function JobUploadWorkspace() {
  return <div className="space-y-6 md:space-y-8">
    <header><Link href="/jobs" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-violet-600">← Back to Job Description Workspace</Link><div className="mt-5"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-600">Job Opportunities</p><h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Upload Job Description</h1><p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500 sm:text-base">Upload or paste a job description to prepare AI-powered interview questions and resume matching.</p></div></header>
    <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1.65fr)_minmax(280px,0.75fr)]">
      <div className="space-y-6"><JobUploadDropzone /><PasteJobDescriptionCard /><JobDetailsForm /></div>
      <aside className="space-y-6 xl:sticky xl:top-28"><JobUploadTips /><RecentJobUploads /></aside>
    </div>
    <div className="flex flex-col-reverse gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-end"><Link href="/jobs" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50">Cancel</Link><button type="button" className="rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-200 hover:from-indigo-700 hover:to-violet-700">Analyze Job Description</button></div>
  </div>;
}
