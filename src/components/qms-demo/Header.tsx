"use client";

import { Bell, Search, User, Menu } from "lucide-react";

interface HeaderProps {
  onMenuClick?: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex items-center justify-between px-4 sm:px-6 sticky top-0 z-10">
      <div className="flex items-center flex-1 gap-4">
        <button 
          onClick={onMenuClick}
          className="md:hidden p-2 -ml-2 text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
        >
          <Menu className="h-5 w-5" />
        </button>
        <div className="relative w-full max-w-md hidden sm:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search queue..."
            className="h-9 w-full rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 pl-9 pr-4 text-sm outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-colors dark:text-slate-300"
          />
        </div>
      </div>
      <div className="flex items-center space-x-3 sm:space-x-4">
        <button className="relative p-2 text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-blue-500 border-2 border-white dark:border-slate-950"></span>
        </button>
        <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center overflow-hidden border border-blue-200 dark:border-blue-800">
          <User className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        </div>
      </div>
    </header>
  );
}
