import Link from "next/link";
import AnalysisActions from "./AnalysisActions";
import AnalysisSummaryCards from "./AnalysisSummaryCards";
import DetectedSkills from "./DetectedSkills";
import FeedbackCard from "./FeedbackCard";
import RecommendationsTimeline from "./RecommendationsTimeline";
import ResumePreviewCard from "./ResumePreviewCard";
import ResumeScoreCard from "./ResumeScoreCard";

const strengths = ["Strong technical skills", "Clean formatting", "Good readability", "Leadership experience", "Clear project descriptions"];
const improvements = ["Add more measurable achievements", "Improve ATS keywords", "Expand professional summary", "Include additional certifications", "Quantify recent accomplishments"];

export default function ResumeAnalysisWorkspace() {
  return <div className="space-y-6 md:space-y-8">
    <header><Link href="/resume" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-indigo-600">← Back to Resume Workspace</Link><div className="mt-5"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">AI resume insights</p><h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Resume Analysis</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">Review your AI-generated resume analysis and prepare for interviews.</p></div></header>
    <AnalysisSummaryCards />
    <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1.6fr)_minmax(280px,0.7fr)]"><ResumeScoreCard /><ResumePreviewCard /></div>
    <div className="grid gap-6 lg:grid-cols-2"><FeedbackCard title="Strengths" subtitle="What your resume already does well" items={strengths} tone="success" /><FeedbackCard title="Areas for Improvement" subtitle="Where focused updates can increase impact" items={improvements} tone="warning" /></div>
    <DetectedSkills />
    <RecommendationsTimeline />
    <AnalysisActions />
  </div>;
}
