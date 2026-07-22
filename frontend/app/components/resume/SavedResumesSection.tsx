import EmptyResumeState from "./EmptyResumeState";
import SavedResumeCard from "./SavedResumeCard";
import type { Resume } from "./types";

export default function SavedResumesSection({ resumes }: { resumes: Resume[] }) {
  return <section aria-labelledby="saved-resumes-title"><div className="mb-4"><h2 id="saved-resumes-title" className="text-xl font-semibold tracking-tight text-slate-950">Saved Resumes</h2><p className="mt-1 text-sm text-slate-500">Compare versions tailored to different opportunities.</p></div>{resumes.length > 0 ? <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">{resumes.map((resume) => <SavedResumeCard key={resume.id} resume={resume} />)}</div> : <EmptyResumeState />}</section>;
}
