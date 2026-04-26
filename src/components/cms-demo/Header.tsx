"use client";

import { Bell, Search, User, Menu } from "lucide-react";

interface HeaderProps {
  onMenuClick?: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="h-16 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 flex items-center justify-between px-4 sm:px-6 sticky top-0 z-10">
      <div className="flex items-center flex-1 gap-4">
        <button 
          onClick={onMenuClick}
          className="md:hidden p-2 -ml-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          <Menu className="h-5 w-5" />
        </button>
        <div className="relative w-full max-w-md hidden sm:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Search..."
            className="h-9 w-full rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 pl-9 pr-4 text-sm outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition-colors dark:text-zinc-300"
          />
        </div>
      </div>
      <div className="flex items-center space-x-3 sm:space-x-4">
        <button className="relative p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 border-2 border-white dark:border-zinc-950"></span>
        </button>
        <div className="h-8 w-8 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center overflow-hidden border border-zinc-300 dark:border-zinc-700">
          <User className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
        </div>
      </div>
    </header>
  );
}
