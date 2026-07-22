import { CalendarIcon, DocumentIcon, ScoreIcon, SkillsIcon } from "./ResumeIcons";
import type { ResumeSummary } from "./types";

const icons = { documents: DocumentIcon, score: ScoreIcon, skills: SkillsIcon, calendar: CalendarIcon };

export default function ResumeSummaryCards({ summaries }: { summaries: ResumeSummary[] }) {
  return <section aria-label="Resume summary" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{summaries.map((summary) => {
    const Icon = icons[summary.icon];
    return <article key={summary.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="flex items-start justify-between gap-4"><div><p className="text-sm font-medium text-slate-500">{summary.label}</p><p className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">{summary.value}</p></div><span className="grid size-11 shrink-0 place-items-center rounded-xl bg-indigo-50 text-indigo-600"><Icon className="size-5" /></span></div><p className="mt-4 text-xs font-medium text-slate-500">{summary.detail}</p></article>;
  })}</section>;
}
