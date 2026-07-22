import MainLayout from "../../components/layout/MainLayout";
import ResumeAnalysisWorkspace from "../../components/resume/analysis/ResumeAnalysisWorkspace";

export default async function ResumeAnalysisPage({ params }: { params: Promise<{ id: string }> }) {
  await params;
  return <MainLayout><ResumeAnalysisWorkspace /></MainLayout>;
}
