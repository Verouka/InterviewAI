"use client";

import { useRef, useState, type ChangeEvent, type DragEvent, type SVGProps } from "react";
import { BriefcaseIcon } from "../JobIcons";

function UploadIcon(props: SVGProps<SVGSVGElement>) {
  return <svg aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" {...props}><path d="M12 16V4m0 0L7.5 8.5M12 4l4.5 4.5M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" /></svg>;
}

export default function JobUploadDropzone() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState({ name: "Senior_Software_Engineer.pdf", size: "2.1 MB" });
  function selectFile(next?: File) { if (next) setFile({ name: next.name, size: next.size ? `${(next.size / 1024 / 1024).toFixed(1)} MB` : "Ready" }); }
  function handleChange(event: ChangeEvent<HTMLInputElement>) { selectFile(event.target.files?.[0]); }
  function handleDrop(event: DragEvent<HTMLDivElement>) { event.preventDefault(); setIsDragging(false); selectFile(event.dataTransfer.files?.[0]); }

  return <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"><h2 className="font-semibold text-slate-950">Upload job description</h2><p className="mt-1 text-sm text-slate-500">Choose the original posting from your device.</p><div onDragEnter={(event) => { event.preventDefault(); setIsDragging(true); }} onDragOver={(event) => event.preventDefault()} onDragLeave={() => setIsDragging(false)} onDrop={handleDrop} className={`mt-5 rounded-2xl border-2 border-dashed px-6 py-10 text-center transition sm:py-12 ${isDragging ? "border-violet-500 bg-violet-50" : "border-slate-300 bg-slate-50/70 hover:border-violet-300"}`}><span className="mx-auto grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-violet-200"><UploadIcon className="size-8" /></span><h3 className="mt-5 text-lg font-semibold text-slate-950">Drag &amp; drop your job description</h3><p className="mt-2 text-sm text-slate-500">or select a file from your device</p><input ref={inputRef} type="file" accept=".pdf,.docx,.txt,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain" onChange={handleChange} className="sr-only" aria-label="Choose a job description file" /><button type="button" onClick={() => inputRef.current?.click()} className="mt-5 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-700">Browse Files</button><div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs font-medium text-slate-500"><span>PDF, DOCX, or TXT</span><span aria-hidden="true">•</span><span>Maximum 10 MB</span></div></div><div className="mt-5 rounded-xl border border-violet-100 bg-violet-50/60 p-4"><div className="flex items-center gap-3"><span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white text-violet-600 shadow-sm"><BriefcaseIcon className="size-5" /></span><div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold text-slate-900">{file.name}</p><p className="text-xs text-slate-500">{file.size} · Uploading</p></div><span className="text-xs font-semibold text-violet-700">72%</span></div><div className="mt-3 h-2 overflow-hidden rounded-full bg-white"><div className="h-full w-[72%] rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" /></div><p className="mt-2 text-xs text-slate-500">Mock progress — no file is being sent.</p></div></section>;
}
