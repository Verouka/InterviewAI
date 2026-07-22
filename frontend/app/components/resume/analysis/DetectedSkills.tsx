const skills = ["React", "Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "Docker", "AWS", "Git", "Python", "Java", "REST APIs"];

export default function DetectedSkills() {
  return <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"><div className="flex flex-wrap items-start justify-between gap-3"><div><h2 className="font-semibold text-slate-950">Detected Skills</h2><p className="mt-1 text-sm text-slate-500">Skills identified across your resume</p></div><span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">24 total</span></div><div className="mt-5 flex flex-wrap gap-2.5">{skills.map((skill) => <span key={skill} className="rounded-full border border-indigo-100 bg-indigo-50/70 px-3.5 py-2 text-sm font-medium text-indigo-700">{skill}</span>)}</div></section>;
}
