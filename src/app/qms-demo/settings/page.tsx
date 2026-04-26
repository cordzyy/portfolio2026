"use client";

import { Save, Building, Clock, Ticket } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">System Settings</h1>
          <p className="text-slate-500 dark:text-slate-400">Configure global parameters for the Queue Management System.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Navigation Sidebar */}
        <div className="space-y-1">
          <button className="w-full flex items-center px-3 py-2.5 rounded-md bg-slate-200/50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium transition-colors">
            <Building className="w-4 h-4 mr-3 text-blue-500" />
            General Information
          </button>
          <button className="w-full flex items-center px-3 py-2.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-400 transition-colors">
            <Clock className="w-4 h-4 mr-3" />
            Business Hours
          </button>
          <button className="w-full flex items-center px-3 py-2.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-400 transition-colors">
            <Ticket className="w-4 h-4 mr-3" />
            Ticket Configuration
          </button>
        </div>

        {/* Content Area */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">General Information</h2>
            
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-900 dark:text-white">Organization Name</label>
                <input 
                  type="text" 
                  defaultValue="Acme Services Inc."
                  className="w-full h-10 px-3 rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm outline-none focus:border-blue-500 transition-colors dark:text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-900 dark:text-white">Support Email</label>
                <input 
                  type="email" 
                  defaultValue="support@acmeservices.com"
                  className="w-full h-10 px-3 rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm outline-none focus:border-blue-500 transition-colors dark:text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-900 dark:text-white">Timezone</label>
                <select className="w-full h-10 px-3 rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm outline-none focus:border-blue-500 transition-colors dark:text-white">
                  <option value="EST">Eastern Standard Time (EST)</option>
                  <option value="CST">Central Standard Time (CST)</option>
                  <option value="MST">Mountain Standard Time (MST)</option>
                  <option value="PST">Pacific Standard Time (PST)</option>
                  <option value="UTC">Coordinated Universal Time (UTC)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Queue Defaults</h2>
            
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-slate-900 dark:text-white">Auto-Close Abandoned Tickets</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Automatically close tickets if the customer does not show up.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-900 dark:text-white">Auto-Close Timeout (Minutes)</label>
                <input 
                  type="number" 
                  defaultValue="15"
                  className="w-full h-10 px-3 rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm outline-none focus:border-blue-500 transition-colors dark:text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
