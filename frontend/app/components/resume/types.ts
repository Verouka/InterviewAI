export type Resume = {
  id: string;
  title: string;
  targetRole: string;
  uploadedAt: string;
  score: number;
  status: "Current" | "Inactive";
};

export type ResumeSummary = {
  label: string;
  value: string;
  detail: string;
  icon: "documents" | "score" | "skills" | "calendar";
};
