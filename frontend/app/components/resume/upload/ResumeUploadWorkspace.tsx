import Link from "next/link";
import RecentUploads from "./RecentUploads";
import ResumeDetailsForm from "./ResumeDetailsForm";
import ResumeTipsCard from "./ResumeTipsCard";
import UploadDropzone from "./UploadDropzone";

export default function ResumeUploadWorkspace() {
  return <div className="space-y-6 md:space-y-8">
    <header><Link href="/resume" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-indigo-600">← Back to Resume Workspace</Link><div className="mt-5"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">Resume workspace</p><h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Upload Resume</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">Upload your resume to unlock AI-powered analysis, tailored recommendations, and more focused interview preparation.</p></div></header>
    <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1.65fr)_minmax(280px,0.75fr)]">
      <div className="space-y-6"><UploadDropzone /><ResumeDetailsForm /><div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end"><Link href="/resume" className="rounded-xl border border-slate-200 px-5 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50">Cancel</Link><button type="button" className="rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 hover:from-indigo-700 hover:to-violet-700">Save &amp; Analyze Resume</button></div></div>
      <aside className="space-y-6 xl:sticky xl:top-28"><ResumeTipsCard /><RecentUploads /></aside>
    </div>
  </div>;
}
