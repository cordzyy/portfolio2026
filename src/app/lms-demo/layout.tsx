"use client";

import LmsNavbar from "@/components/lms-demo/Navbar";
import { BookOpen } from "lucide-react";

export default function LmsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans flex flex-col selection:bg-violet-500/30">
      <LmsNavbar />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      
      {/* Simple LMS Footer */}
      <footer className="bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="bg-violet-600 p-1.5 rounded-md">
                <BookOpen className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight text-zinc-900 dark:text-white">
                Learn<span className="text-violet-600">Hub</span>
              </span>
            </div>
            <div className="flex gap-6 text-sm text-zinc-500 dark:text-zinc-400">
              <a href="#" className="hover:text-violet-600 transition-colors">Terms</a>
              <a href="#" className="hover:text-violet-600 transition-colors">Privacy</a>
              <a href="#" className="hover:text-violet-600 transition-colors">Help and Support</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center text-xs text-zinc-500 dark:text-zinc-400">
            &copy; {new Date().getFullYear()} LearnHub Inc. All rights reserved. This is a demo.
          </div>
        </div>
      </footer>
    </div>
  );
}
