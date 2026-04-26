"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  User, 
  Settings, 
  LogOut 
} from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/cms-demo", icon: LayoutDashboard },
  { name: "Content", href: "/cms-demo/content", icon: FileText },
  { name: "Users", href: "/cms-demo/users", icon: Users },
  { name: "Profile", href: "/cms-demo/profile", icon: User },
  { name: "Settings", href: "/cms-demo/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-zinc-950 text-zinc-300 h-screen flex flex-col border-r border-zinc-800">
      <div className="h-16 flex items-center px-6 border-b border-zinc-800">
        <span className="text-xl font-bold text-white tracking-tight">Admin<span className="text-zinc-500">CMS</span></span>
      </div>
      
      <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.name} 
              href={item.href}
              className={`flex items-center px-3 py-2.5 rounded-md transition-colors ${
                isActive 
                  ? "bg-zinc-800 text-white font-medium" 
                  : "hover:bg-zinc-800/50 hover:text-white"
              }`}
            >
              <item.icon className={`w-5 h-5 mr-3 ${isActive ? "text-white" : "text-zinc-400"}`} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-zinc-800">
        <Link 
          href="/cms-demo/login" 
          className="flex items-center px-3 py-2.5 rounded-md text-red-400 hover:bg-red-950/30 hover:text-red-300 transition-colors"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Sign Out
        </Link>
      </div>
    </div>
  );
}
