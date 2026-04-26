"use client";

import { User, Mail, Shield, Camera } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Profile</h1>
        <p className="text-slate-500 dark:text-slate-400">Manage your account settings and preferences.</p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="relative group cursor-pointer">
              <div className="w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center overflow-hidden border-4 border-white dark:border-slate-950 shadow-sm">
                <User className="w-10 h-10 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Admin User</h2>
              <p className="text-slate-500 dark:text-slate-400">System Administrator</p>
              <div className="mt-2 flex items-center gap-4">
                <span className="inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                  Active
                </span>
                <span className="inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">
                  <Shield className="w-3 h-3 mr-1" />
                  Admin
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-900 dark:text-white">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <input 
                  type="text" 
                  defaultValue="Admin User"
                  className="w-full h-10 pl-10 pr-4 rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm outline-none focus:border-blue-500 transition-colors dark:text-white"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-900 dark:text-white">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <input 
                  type="email" 
                  defaultValue="admin@example.com"
                  className="w-full h-10 pl-10 pr-4 rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm outline-none focus:border-blue-500 transition-colors dark:text-white"
                />
              </div>
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
