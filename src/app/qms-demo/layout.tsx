"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/qms-demo/Sidebar";
import Header from "@/components/qms-demo/Header";

export default function QmsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isLoginPage = pathname === "/qms-demo/login";

  if (isLoginPage) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
        {children}
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden text-slate-900 dark:text-slate-100 font-sans relative selection:bg-blue-500/30">
      <Sidebar mobileOpen={sidebarOpen} setMobileOpen={setSidebarOpen} />
      <div className="flex flex-col flex-1 overflow-hidden min-w-0">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-50/50 dark:bg-slate-950/50">
          <div className="mx-auto max-w-6xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
