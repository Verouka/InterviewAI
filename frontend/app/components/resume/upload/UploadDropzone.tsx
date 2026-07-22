"use client";

import { useRef, useState, type ChangeEvent, type DragEvent } from "react";
import { DocumentIcon, UploadIcon } from "../ResumeIcons";

export default function UploadDropzone() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState({ name: "Verouka_Product_Resume.pdf", size: "1.8 MB" });

  function selectFile(next?: File) {
    if (next) setFile({ name: next.name, size: next.size ? `${(next.size / 1024 / 1024).toFixed(1)} MB` : "Ready" });
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) { selectFile(event.target.files?.[0]); }
  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);
    selectFile(event.dataTransfer.files?.[0]);
  }

  return <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
    <h2 className="font-semibold text-slate-950">Resume file</h2><p className="mt-1 text-sm text-slate-500">Choose the document you want InterviewAI to analyze.</p>
    <div onDragEnter={(event) => { event.preventDefault(); setIsDragging(true); }} onDragOver={(event) => event.preventDefault()} onDragLeave={() => setIsDragging(false)} onDrop={handleDrop} className={`mt-5 rounded-2xl border-2 border-dashed px-6 py-10 text-center transition sm:py-12 ${isDragging ? "border-indigo-500 bg-indigo-50" : "border-slate-300 bg-slate-50/70 hover:border-indigo-300"}`}>
      <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-200"><UploadIcon className="size-8" /></span>
      <h3 className="mt-5 text-lg font-semibold text-slate-950">Drag &amp; drop your resume here</h3><p className="mt-2 text-sm text-slate-500">or select a document from your device</p>
      <input ref={inputRef} type="file" accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={handleChange} className="sr-only" aria-label="Choose a resume file" />
      <button type="button" onClick={() => inputRef.current?.click()} className="mt-5 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700">Browse Files</button>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs font-medium text-slate-500"><span>PDF or DOCX</span><span aria-hidden="true">•</span><span>Maximum 10 MB</span></div>
    </div>
    <div className="mt-5 rounded-xl border border-indigo-100 bg-indigo-50/60 p-4"><div className="flex items-center gap-3"><span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white text-indigo-600 shadow-sm"><DocumentIcon className="size-5" /></span><div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold text-slate-900">{file.name}</p><p className="text-xs text-slate-500">{file.size} · Uploading</p></div><span className="text-xs font-semibold text-indigo-700">68%</span></div><div className="mt-3 h-2 overflow-hidden rounded-full bg-white"><div className="h-full w-[68%] rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" /></div><p className="mt-2 text-xs text-slate-500">Mock progress — no file is being sent.</p></div>
  </section>;
}
