"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  User, 
  Settings, 
  LogOut,
  X,
  ListOrdered,
  MonitorSmartphone
} from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/qms-demo", icon: LayoutDashboard },
  { name: "Queue", href: "/qms-demo/queue", icon: ListOrdered },
  { name: "Terminals", href: "/qms-demo/terminals", icon: MonitorSmartphone },
  { name: "Users", href: "/qms-demo/users", icon: Users },
  { name: "Profile", href: "/qms-demo/profile", icon: User },
  { name: "Settings", href: "/qms-demo/settings", icon: Settings },
];

interface SidebarProps {
  mobileOpen?: boolean;
  setMobileOpen?: (open: boolean) => void;
}

export default function Sidebar({ mobileOpen, setMobileOpen }: SidebarProps) {
  const pathname = usePathname();

  const sidebarClasses = `
    w-64 bg-slate-950 text-slate-300 h-screen flex flex-col border-r border-slate-800
    fixed md:relative z-50 transition-transform duration-300 ease-in-out
    ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
  `;

  return (
    <>
      {/* Mobile backdrop */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileOpen && setMobileOpen(false)}
        />
      )}
      
      <div className={sidebarClasses}>
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-800">
          <span className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <ListOrdered className="w-6 h-6 text-blue-500" />
            QMS<span className="text-slate-500">Admin</span>
          </span>
          <button 
            className="md:hidden text-slate-400 hover:text-white"
            onClick={() => setMobileOpen && setMobileOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name} 
                href={item.href}
                onClick={() => setMobileOpen && setMobileOpen(false)}
                className={`flex items-center px-3 py-2.5 rounded-md transition-colors ${
                  isActive 
                    ? "bg-blue-600/10 text-blue-500 font-medium" 
                    : "hover:bg-slate-800/50 hover:text-white"
                }`}
              >
                <item.icon className={`w-5 h-5 mr-3 ${isActive ? "text-blue-500" : "text-slate-400"}`} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <Link 
            href="/qms-demo/login" 
            className="flex items-center px-3 py-2.5 rounded-md text-red-400 hover:bg-red-950/30 hover:text-red-300 transition-colors"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Sign Out
          </Link>
        </div>
      </div>
    </>
  );
}
