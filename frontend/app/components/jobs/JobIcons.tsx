import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;
const base: IconProps = { "aria-hidden": true, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.8, viewBox: "0 0 24 24" };
export function BriefcaseIcon(props: IconProps) { return <svg {...base} {...props}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2" /></svg>; }
export function LocationIcon(props: IconProps) { return <svg {...base} {...props}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>; }
export function CalendarIcon(props: IconProps) { return <svg {...base} {...props}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></svg>; }
export function EyeIcon(props: IconProps) { return <svg {...base} {...props}><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" /><circle cx="12" cy="12" r="2.5" /></svg>; }
export function TrashIcon(props: IconProps) { return <svg {...base} {...props}><path d="M4 7h16M9 7V4h6v3M7 7l1 14h8l1-14M10 11v6M14 11v6" /></svg>; }
export function SparklesIcon(props: IconProps) { return <svg {...base} {...props}><path d="m12 3 1.2 3.3L16.5 7.5l-3.3 1.2L12 12l-1.2-3.3-3.3-1.2 3.3-1.2zM18.5 13l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" /></svg>; }
export function PlusIcon(props: IconProps) { return <svg {...base} {...props}><path d="M12 5v14M5 12h14" /></svg>; }
