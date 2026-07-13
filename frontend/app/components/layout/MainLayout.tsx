import type { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function MainLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-slate-50"><Sidebar /><div className="lg:pl-64"><Header /><main className="mx-auto max-w-[1500px] px-5 py-7 md:px-8 md:py-9">{children}</main></div></div>;
}
