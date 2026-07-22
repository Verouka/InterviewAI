export type Opportunity = {
  id: string;
  title: string;
  company: string;
  location: string;
  employmentType: string;
  dateAdded: string;
  matchScore: number;
  status: "Active" | "Saved";
};

export type JobSummary = {
  label: string;
  value: string;
  detail: string;
  tone: "indigo" | "violet" | "emerald" | "amber";
};
