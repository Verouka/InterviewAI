const items = ["Dashboard", "Interviews", "Resume", "Progress", "Settings"];

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 hidden w-64 flex-col bg-slate-950 text-white lg:flex">
      <div className="flex h-20 items-center gap-3 border-b border-white/10 px-6">
        <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 font-bold">AI</span>
        <div><p className="font-semibold">InterviewAI</p><p className="text-xs text-slate-400">AI Interview Coach</p></div>
      </div>
      <nav className="flex-1 space-y-1 p-4" aria-label="Main navigation">
        {items.map((item, index) => <a key={item} href={`#${item.toLowerCase()}`} aria-current={index === 0 ? "page" : undefined} className={`block rounded-xl px-4 py-3 text-sm font-medium ${index === 0 ? "bg-indigo-500/15 text-indigo-300" : "text-slate-400 hover:bg-white/5 hover:text-white"}`}>{item}</a>)}
      </nav>
      <div className="m-4 rounded-2xl border border-white/10 bg-white/5 p-4"><p className="text-xs font-medium text-indigo-300">WEEKLY GOAL</p><p className="mt-2 text-sm">2 of 3 practices complete</p><div className="mt-3 h-1.5 rounded-full bg-white/10"><div className="h-full w-2/3 rounded-full bg-indigo-400" /></div></div>
    </aside>
  );
}
