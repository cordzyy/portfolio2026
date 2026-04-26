"use client";

import { mockTerminals } from "@/lib/qms-mock-data";
import { MonitorSmartphone, Power, SkipForward, Megaphone } from "lucide-react";

export default function TerminalsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Terminals</h1>
          <p className="text-slate-500 dark:text-slate-400">Manage active service counters and their queue assignments.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            Add Terminal
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {mockTerminals.map((terminal) => (
          <div 
            key={terminal.id} 
            className={`bg-white dark:bg-slate-900 rounded-xl border ${terminal.status === 'online' ? 'border-slate-200 dark:border-slate-800' : 'border-slate-200/50 dark:border-slate-800/50 opacity-75'} shadow-sm overflow-hidden flex flex-col`}
          >
            <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${terminal.status === 'online' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'}`}>
                  <MonitorSmartphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{terminal.name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{terminal.service}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`flex h-2.5 w-2.5 rounded-full ${terminal.status === 'online' ? 'bg-emerald-500' : 'bg-slate-400'}`}></span>
                <span className="text-xs font-medium text-slate-600 dark:text-slate-300 capitalize">{terminal.status}</span>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col items-center justify-center min-h-[120px]">
              {terminal.status === 'online' ? (
                terminal.currentTicket ? (
                  <div className="text-center">
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Currently Serving</p>
                    <div className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">{terminal.currentTicket}</div>
                  </div>
                ) : (
                  <div className="text-center text-slate-400 dark:text-slate-500">
                    <p className="text-sm font-medium">Idle</p>
                    <p className="text-xs mt-1">Ready for next ticket</p>
                  </div>
                )
              ) : (
                <div className="text-center text-slate-400 dark:text-slate-500">
                  <p className="text-sm font-medium">Offline</p>
                  <p className="text-xs mt-1">Terminal is currently closed</p>
                </div>
              )}
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Staff: {terminal.staff}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <button 
                  disabled={terminal.status === 'offline' || !terminal.currentTicket}
                  className="flex flex-col items-center justify-center p-2 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  title="Call Ticket Again"
                >
                  <Megaphone className="w-4 h-4 mb-1" />
                  <span className="text-[10px] font-medium">Call</span>
                </button>
                <button 
                  disabled={terminal.status === 'offline'}
                  className="flex flex-col items-center justify-center p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/50 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  title="Next Ticket"
                >
                  <SkipForward className="w-4 h-4 mb-1" />
                  <span className="text-[10px] font-medium">Next</span>
                </button>
                <button 
                  className={`flex flex-col items-center justify-center p-2 rounded-lg border transition-colors ${
                    terminal.status === 'online' 
                      ? 'bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30' 
                      : 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800/50 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/40'
                  }`}
                  title={terminal.status === 'online' ? "Go Offline" : "Go Online"}
                >
                  <Power className="w-4 h-4 mb-1" />
                  <span className="text-[10px] font-medium">{terminal.status === 'online' ? 'Close' : 'Open'}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
