"use client";

import { useState } from "react";
import { mockTickets } from "@/lib/qms-mock-data";
import { Search, Filter, PlayCircle, MoreVertical } from "lucide-react";

export default function QueuePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTickets = mockTickets.filter(t => 
    t.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
    t.service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Queue Management</h1>
          <p className="text-slate-500 dark:text-slate-400">View and manage the active customer queue.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            Issue Ticket
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-4 items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search tickets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-9 w-full rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 pl-9 pr-4 text-sm outline-none focus:border-blue-500 transition-colors dark:text-slate-200"
            />
          </div>
          <button className="flex items-center px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors w-full sm:w-auto justify-center">
            <Filter className="w-4 h-4 mr-2" />
            Filter Status
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400">
              <tr>
                <th className="px-6 py-3 font-medium">Ticket ID</th>
                <th className="px-6 py-3 font-medium">Service</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Wait Time</th>
                <th className="px-6 py-3 font-medium">Terminal</th>
                <th className="px-6 py-3 font-medium">Time Issued</th>
                <th className="px-6 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-900 dark:text-slate-100">
              {filteredTickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">{ticket.id}</td>
                  <td className="px-6 py-4">{ticket.service}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      ticket.status === 'serving' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400' :
                      ticket.status === 'completed' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400' :
                      'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300'
                    }`}>
                      {ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={ticket.waitTime.includes("20") || ticket.waitTime.includes("25") ? "text-red-500 font-medium" : ""}>
                      {ticket.waitTime}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{ticket.terminal || '-'}</td>
                  <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{ticket.time}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {ticket.status === "waiting" && (
                        <button title="Call Next" className="p-1.5 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors">
                          <PlayCircle className="w-5 h-5" />
                        </button>
                      )}
                      <button className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredTickets.length === 0 && (
          <div className="p-8 text-center text-slate-500 dark:text-slate-400">
            No tickets found.
          </div>
        )}
      </div>
    </div>
  );
}
