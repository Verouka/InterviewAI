import AIJobInsights from "./AIJobInsights";
import CurrentOpportunityCard from "./CurrentOpportunityCard";
import { PlusIcon } from "./JobIcons";
import JobSummaryCards from "./JobSummaryCards";
import SavedOpportunitiesSection from "./SavedOpportunitiesSection";
import type { JobSummary, Opportunity } from "./types";

const currentOpportunity: Opportunity = { id: "job-01", title: "Senior Software Engineer", company: "Northstar Labs", location: "Chicago, IL · Hybrid", employmentType: "Full-time", dateAdded: "July 20, 2026", matchScore: 88, status: "Active" };
const opportunities: Opportunity[] = [
  currentOpportunity,
  { id: "job-02", title: "Staff Backend Engineer", company: "Cloudline", location: "Remote", employmentType: "Full-time", dateAdded: "July 16, 2026", matchScore: 83, status: "Saved" },
  { id: "job-03", title: "Technical Lead", company: "Acme Financial", location: "New York, NY", employmentType: "Full-time", dateAdded: "July 11, 2026", matchScore: 79, status: "Saved" },
];
const summaries: JobSummary[] = [
  { label: "Total Opportunities", value: "3", detail: "Across 3 companies", tone: "indigo" },
  { label: "Active Target Role", value: "1", detail: "Senior Software Engineer", tone: "violet" },
  { label: "Average Resume Match", value: "83%", detail: "+5 points this month", tone: "emerald" },
  { label: "Last Updated", value: "Jul 20", detail: "2 days ago", tone: "amber" },
];

export default function JobWorkspace() {
  return <div className="space-y-6 md:space-y-8">
    <header className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">Job Opportunities</p><h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Job Description Workspace</h1><p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500 sm:text-base">Manage job descriptions, compare opportunities, and prepare personalized interviews.</p></div><button type="button" className="inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 hover:from-indigo-700 hover:to-violet-700"><PlusIcon className="size-4" /> Add New Job Description</button></header>
    <JobSummaryCards summaries={summaries} />
    <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1.6fr)_minmax(300px,0.75fr)]"><CurrentOpportunityCard opportunity={currentOpportunity} /><AIJobInsights /></div>
    <SavedOpportunitiesSection opportunities={opportunities} />
  </div>;
}
