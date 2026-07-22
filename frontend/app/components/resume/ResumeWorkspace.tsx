import Link from "next/link";
import AIRecommendations from "./AIRecommendations";
import CurrentResumeCard from "./CurrentResumeCard";
import { UploadIcon } from "./ResumeIcons";
import ResumeSummaryCards from "./ResumeSummaryCards";
import SavedResumesSection from "./SavedResumesSection";
import type { Resume, ResumeSummary } from "./types";

const currentResume: Resume = { id: "resume-01", title: "Verouka_Kouassi_Product_Resume.pdf", targetRole: "Senior Product Manager", uploadedAt: "July 18, 2026", score: 86, status: "Current" };
const savedResumes: Resume[] = [
  currentResume,
  { id: "resume-02", title: "Product Manager — Fintech", targetRole: "Product Manager", uploadedAt: "July 2, 2026", score: 82, status: "Inactive" },
  { id: "resume-03", title: "Technical Program Manager", targetRole: "Technical Program Manager", uploadedAt: "June 14, 2026", score: 78, status: "Inactive" },
];
const summaries: ResumeSummary[] = [
  { label: "Total Resumes", value: "3", detail: "Across 3 target roles", icon: "documents" },
  { label: "Current Resume Score", value: "86%", detail: "+4 points since last update", icon: "score" },
  { label: "Skills Identified", value: "24", detail: "8 core skills highlighted", icon: "skills" },
  { label: "Last Updated", value: "Jul 18", detail: "3 days ago", icon: "calendar" },
];

export default function ResumeWorkspace() {
  return <div className="space-y-6 md:space-y-8"><header className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">Career profile</p><h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Resume Workspace</h1><p className="mt-2 text-sm leading-6 text-slate-500 sm:text-base">Manage, analyze, and prepare your resume for interviews.</p></div><Link href="/resume/upload" className="inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 hover:from-indigo-700 hover:to-violet-700"><UploadIcon className="size-4" /> Upload New Resume</Link></header><ResumeSummaryCards summaries={summaries} /><div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1.6fr)_minmax(300px,0.75fr)]"><CurrentResumeCard resume={currentResume} /><AIRecommendations /></div><SavedResumesSection resumes={savedResumes} /></div>;
}
