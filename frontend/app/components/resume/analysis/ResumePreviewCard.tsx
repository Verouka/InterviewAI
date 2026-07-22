import { CalendarIcon, DocumentIcon } from "../ResumeIcons";

const details = [
  ["Upload date", "July 18, 2026"],
  ["Target role", "Senior Product Manager"],
  ["Resume version", "Version 3.0"],
];

export default function ResumePreviewCard() {
  return <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"><div className="bg-gradient-to-br from-slate-950 to-indigo-950 p-5 text-white"><div className="flex items-start gap-3"><span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/10 text-indigo-200"><DocumentIcon className="size-6" /></span><div className="min-w-0"><p className="text-xs font-medium text-indigo-200">Resume Preview</p><h2 className="mt-1 truncate font-semibold">Verouka_Product_Resume.pdf</h2></div></div></div><dl className="divide-y divide-slate-100 px-5">{details.map(([label, value], index) => <div key={label} className="flex items-center justify-between gap-4 py-4"><dt className="flex items-center gap-2 text-xs text-slate-500">{index === 0 && <CalendarIcon className="size-4" />}{label}</dt><dd className="text-right text-xs font-semibold text-slate-800">{value}</dd></div>)}</dl><div className="border-t border-slate-100 p-4"><button type="button" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:border-indigo-200 hover:bg-indigo-50">Open Resume Preview</button></div></section>;
}
