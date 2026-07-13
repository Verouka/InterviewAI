const stats = [
  { label: "Interview readiness", value: "74%", detail: "+8% from last practice", progress: 74 },
  { label: "Resume match", value: "82%", detail: "Strong match for your role", progress: 82 },
  { label: "Practice sessions", value: "12", detail: "3 completed this month", progress: 60 },
];

const interviews = [
  { role: "Software Engineer", type: "Mixed", date: "Jul 12", score: 82 },
  { role: "Backend Developer", type: "Technical", date: "Jul 8", score: 76 },
  { role: "Product Analyst", type: "Behavioral", date: "Jul 3", score: 88 },
];

function WelcomeBanner() {
  return <section id="dashboard" className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-9 text-white shadow-xl sm:px-9"><div className="absolute -right-16 -top-24 size-72 rounded-full bg-indigo-500/30 blur-3xl" /><div className="relative max-w-2xl"><p className="text-sm font-medium text-indigo-300">✦ YOUR AI INTERVIEW COACH</p><h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Welcome back, Verouka</h1><p className="mt-4 max-w-xl leading-7 text-slate-300">You&apos;re building stronger interview habits. Keep the momentum going with a personalized practice session today.</p><a href="#interviews" className="mt-7 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-indigo-50">Start new interview →</a></div></section>;
}

function StatisticsCards() {
  return <section aria-label="Preparation statistics" className="grid gap-4 md:grid-cols-3">{stats.map((stat) => <article key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><p className="text-sm font-medium text-slate-500">{stat.label}</p><p className="mt-2 text-3xl font-semibold text-slate-950">{stat.value}</p><div className="mt-5 h-1.5 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" style={{ width: `${stat.progress}%` }} /></div><p className="mt-3 text-xs font-medium text-slate-500">{stat.detail}</p></article>)}</section>;
}

function AICoachCard() {
  return <article className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-6 shadow-sm"><div className="flex items-center gap-3"><span className="grid size-11 place-items-center rounded-xl bg-indigo-600 text-white">AI</span><div><h2 className="font-semibold text-slate-950">AI Coach</h2><p className="text-sm text-indigo-600">Today&apos;s recommendation</p></div></div><blockquote className="mt-5 text-lg font-medium leading-8 text-slate-800">“Your technical answers are improving. Today, focus on structuring your behavioral stories with a clear result.”</blockquote><div className="mt-5 flex flex-wrap gap-2"><span className="rounded-full bg-white px-3 py-1.5 text-xs ring-1 ring-slate-200">STAR method</span><span className="rounded-full bg-white px-3 py-1.5 text-xs ring-1 ring-slate-200">Behavioral practice</span></div></article>;
}

function QuickActions() {
  const actions = [["New interview", "Practice for a specific role"], ["Upload resume", "Update your candidate profile"], ["Add job description", "Analyze a new opportunity"]];
  return <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><h2 className="font-semibold text-slate-950">Quick actions</h2><p className="mt-1 text-sm text-slate-500">Continue your preparation</p><div className="mt-5 space-y-3">{actions.map(([label, detail]) => <a key={label} href="#interviews" className="flex items-center gap-3 rounded-xl border border-slate-200 p-3.5 hover:border-indigo-200 hover:bg-indigo-50"><span className="grid size-10 place-items-center rounded-xl bg-indigo-100 font-bold text-indigo-700">+</span><span className="min-w-0 flex-1"><span className="block text-sm font-semibold text-slate-900">{label}</span><span className="block truncate text-xs text-slate-500">{detail}</span></span><span className="text-slate-400">→</span></a>)}</div></section>;
}

function RecentInterviews() {
  return <section id="interviews" className="rounded-2xl border border-slate-200 bg-white shadow-sm"><div className="flex items-center justify-between border-b border-slate-100 px-6 py-5"><div><h2 className="font-semibold text-slate-950">Recent interviews</h2><p className="mt-1 text-sm text-slate-500">Your latest practice sessions</p></div><a href="#history" className="text-sm font-semibold text-indigo-600">View all</a></div><div className="overflow-x-auto"><table className="w-full min-w-[600px] text-left text-sm"><thead className="bg-slate-50 text-xs uppercase text-slate-500"><tr><th className="px-6 py-3">Position</th><th className="px-4 py-3">Type</th><th className="px-4 py-3">Date</th><th className="px-6 py-3 text-right">Score</th></tr></thead><tbody className="divide-y divide-slate-100">{interviews.map((item) => <tr key={item.role}><td className="px-6 py-4 font-medium text-slate-900">{item.role}</td><td className="px-4 py-4 text-slate-600">{item.type}</td><td className="px-4 py-4 text-slate-500">{item.date}</td><td className="px-6 py-4 text-right"><span className="rounded-full bg-emerald-50 px-3 py-1 font-semibold text-emerald-700">{item.score}%</span></td></tr>)}</tbody></table></div></section>;
}

function ProgressChart() {
  const scores = [58, 64, 62, 71, 76, 82];
  return <section id="progress" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><div className="flex justify-between"><div><h2 className="font-semibold text-slate-950">Your progress</h2><p className="mt-1 text-sm text-slate-500">Last 6 practice sessions</p></div><span className="h-fit rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">+24 points</span></div><div className="mt-7 flex h-36 items-end gap-3" aria-label="Scores improved from 58 to 82 percent">{scores.map((score, index) => <div key={index} className="flex h-full flex-1 items-end"><div className="relative w-full rounded-t-lg bg-gradient-to-t from-indigo-600 to-violet-400" style={{ height: `${score}%` }}><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[11px] font-semibold text-slate-500">{score}</span></div></div>)}</div></section>;
}

export default function DashboardContent() {
  return <div className="space-y-6 md:space-y-8"><WelcomeBanner /><StatisticsCards /><div className="grid gap-6 xl:grid-cols-[1.55fr_0.85fr]"><AICoachCard /><QuickActions /></div><div className="grid gap-6 xl:grid-cols-[1.55fr_0.85fr]"><RecentInterviews /><ProgressChart /></div></div>;
}
