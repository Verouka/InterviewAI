const inputClass = "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-100";

export default function JobDetailsForm() {
  return <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"><div><h2 className="font-semibold text-slate-950">Job details</h2><p className="mt-1 text-sm text-slate-500">Add role context to organize this opportunity.</p></div><div className="mt-5 grid gap-5 sm:grid-cols-2">
    <label className="text-sm font-medium text-slate-700">Company Name<input type="text" defaultValue="Northstar Labs" className={inputClass} /></label>
    <label className="text-sm font-medium text-slate-700">Job Title<input type="text" defaultValue="Senior Software Engineer" className={inputClass} /></label>
    <label className="text-sm font-medium text-slate-700">Location<input type="text" defaultValue="Chicago, IL · Hybrid" className={inputClass} /></label>
    <label className="text-sm font-medium text-slate-700">Employment Type<select defaultValue="Full-time" className={inputClass}><option>Full-time</option><option>Part-time</option><option>Contract</option><option>Internship</option></select></label>
    <label className="text-sm font-medium text-slate-700">Experience Level<select defaultValue="Senior level" className={inputClass}><option>Entry level</option><option>Mid level</option><option>Senior level</option><option>Lead / Manager</option></select></label>
    <label className="text-sm font-medium text-slate-700">Salary <span className="font-normal text-slate-400">(optional)</span><input type="text" placeholder="$140,000–$175,000" className={inputClass} /></label>
    <label className="text-sm font-medium text-slate-700 sm:col-span-2">Recruiter Notes <span className="font-normal text-slate-400">(optional)</span><textarea rows={4} placeholder="Add recruiter context, deadlines, or interview notes..." className={inputClass} /></label>
  </div></section>;
}
