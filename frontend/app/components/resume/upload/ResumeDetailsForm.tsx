export default function ResumeDetailsForm() {
  const inputClass = "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100";
  return <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"><div><h2 className="font-semibold text-slate-950">Resume information</h2><p className="mt-1 text-sm text-slate-500">Add context so your analysis is tailored to your goals.</p></div><div className="mt-5 grid gap-5 sm:grid-cols-2">
    <label className="text-sm font-medium text-slate-700">Resume name<input type="text" defaultValue="Senior Product Resume" className={inputClass} /></label>
    <label className="text-sm font-medium text-slate-700">Target job title<input type="text" defaultValue="Senior Product Manager" className={inputClass} /></label>
    <label className="text-sm font-medium text-slate-700">Resume version<input type="text" defaultValue="Version 3.0" className={inputClass} /></label>
    <label className="text-sm font-medium text-slate-700 sm:col-span-2">Notes <span className="font-normal text-slate-400">(optional)</span><textarea rows={4} placeholder="Add context about this version or the opportunity you are targeting..." className={inputClass} /></label>
  </div></section>;
}
