import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;
const baseProps: IconProps = { "aria-hidden": true, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.8, viewBox: "0 0 24 24" };

export function DocumentIcon(props: IconProps) { return <svg {...baseProps} {...props}><path d="M7 3h7l4 4v14H7z" /><path d="M14 3v5h5M10 12h5M10 16h5" /></svg>; }
export function ScoreIcon(props: IconProps) { return <svg {...baseProps} {...props}><path d="M4 19V9M10 19V5M16 19v-7M22 19H2" /></svg>; }
export function SkillsIcon(props: IconProps) { return <svg {...baseProps} {...props}><path d="m12 3 2.2 4.5 5 .7-3.6 3.5.8 5-4.4-2.4-4.4 2.4.8-5-3.6-3.5 5-.7z" /></svg>; }
export function CalendarIcon(props: IconProps) { return <svg {...baseProps} {...props}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></svg>; }
export function UploadIcon(props: IconProps) { return <svg {...baseProps} {...props}><path d="M12 16V4m0 0L7.5 8.5M12 4l4.5 4.5M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" /></svg>; }
export function SparklesIcon(props: IconProps) { return <svg {...baseProps} {...props}><path d="m12 3 1.2 3.3L16.5 7.5l-3.3 1.2L12 12l-1.2-3.3-3.3-1.2 3.3-1.2zM18.5 13l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8zM6 14l.9 2.6 2.6.9-2.6.9L6 21l-.9-2.6-2.6-.9 2.6-.9z" /></svg>; }
export function EyeIcon(props: IconProps) { return <svg {...baseProps} {...props}><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" /><circle cx="12" cy="12" r="2.5" /></svg>; }
export function TrashIcon(props: IconProps) { return <svg {...baseProps} {...props}><path d="M4 7h16M9 7V4h6v3M7 7l1 14h8l1-14M10 11v6M14 11v6" /></svg>; }
