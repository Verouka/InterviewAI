export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-slate-200 bg-white/90 px-5 backdrop-blur md:px-8">
      <div><p className="font-semibold text-slate-950">Dashboard</p><p className="hidden text-sm text-slate-500 sm:block">Monday, July 13</p></div>
      <div className="flex items-center gap-3"><button aria-label="Notifications" className="grid size-10 place-items-center rounded-xl border border-slate-200 text-slate-600">●</button><button className="flex items-center gap-3 rounded-xl border border-slate-200 py-1.5 pl-1.5 pr-3"><span className="grid size-9 place-items-center rounded-lg bg-indigo-100 text-sm font-bold text-indigo-700">VK</span><span className="hidden text-left sm:block"><span className="block text-sm font-semibold">Verouka</span><span className="block text-xs text-slate-500">Candidate</span></span></button></div>
    </header>
  );
}
