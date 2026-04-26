"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Search, ShoppingCart, Bell, Menu } from "lucide-react";
import { lmsUser } from "@/lib/lms-mock-data";

export default function LmsNavbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="flex h-16 items-center px-4 md:px-6 max-w-7xl mx-auto">
        <Link href="/lms-demo" className="flex items-center gap-2 mr-6">
          <div className="bg-violet-600 p-1.5 rounded-md">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:inline-block text-zinc-900 dark:text-white">
            Learn<span className="text-violet-600">Hub</span>
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link 
            href="/lms-demo/courses" 
            className={`transition-colors hover:text-violet-600 ${pathname === '/lms-demo/courses' ? 'text-violet-600' : 'text-zinc-600 dark:text-zinc-300'}`}
          >
            Catalog
          </Link>
          <Link 
            href="/lms-demo/dashboard" 
            className={`transition-colors hover:text-violet-600 ${pathname === '/lms-demo/dashboard' ? 'text-violet-600' : 'text-zinc-600 dark:text-zinc-300'}`}
          >
            My Learning
          </Link>
        </div>

        <div className="flex-1 ml-6 mr-6 hidden lg:block">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search for anything..."
              className="h-9 w-full rounded-full border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 pl-9 pr-4 text-sm outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all dark:text-white"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 ml-auto">
          <button className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white lg:hidden">
            <Search className="h-5 w-5" />
          </button>
          <Link href="#" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1.5 -right-1.5 h-4 w-4 rounded-full bg-violet-600 text-[10px] font-bold text-white flex items-center justify-center">2</span>
          </Link>
          <button className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white relative hidden sm:block">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 border-2 border-white dark:border-zinc-950"></span>
          </button>
          <Link href="/lms-demo/profile" className="hidden sm:block ml-2 border-2 border-transparent hover:border-violet-500 rounded-full transition-all">
            <img src={lmsUser.avatar} alt="Profile" className="h-8 w-8 rounded-full" />
          </Link>
          <button className="md:hidden text-zinc-600 dark:text-zinc-400 ml-2">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
