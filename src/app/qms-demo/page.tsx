"use client";

import { mockQmsStats, mockQmsRecentActivity } from "@/lib/qms-mock-data";
import { Users, Clock, MonitorSmartphone, CheckCircle, MoreHorizontal, Activity } from "lucide-react";

export default function QmsDashboard() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "users": return <Users className="w-5 h-5" />;
      case "clock": return <Clock className="w-5 h-5" />;
      case "monitor": return <MonitorSmartphone className="w-5 h-5" />;
      case "check": return <CheckCircle className="w-5 h-5" />;
      default: return <Activity className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Dashboard</h1>
        <p className="text-slate-500 dark:text-slate-400">Overview of the Queue Management System.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {mockQmsStats.map((stat, index) => (
          <div key={index} className="bg-white dark:bg-slate-900 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <dt className="truncate text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</dt>
              <div className={`p-2 rounded-lg ${
                stat.icon === "clock" ? "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400" :
                stat.icon === "users" ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" :
                stat.icon === "check" ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400" :
                "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
              }`}>
                {getIcon(stat.icon)}
              </div>
            </div>
            <dd className="flex items-baseline justify-between">
              <span className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">{stat.value}</span>
              <span className={`inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium ${
                stat.trend === "up" 
                  ? "text-emerald-600 dark:text-emerald-400" 
                  : stat.trend === "down" 
                    ? "text-blue-600 dark:text-blue-400" // For wait time, down is good!
                    : "text-slate-500 dark:text-slate-400"
              }`}>
                {stat.trend === "down" ? "-" : stat.trend === "up" ? "+" : ""}{stat.change}
              </span>
            </dd>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent Activity */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between">
            <h2 className="text-base font-semibold leading-6 text-slate-900 dark:text-white flex items-center">
              <Activity className="w-5 h-5 mr-2 text-blue-500" />
              Live Activity
            </h2>
            <button className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>
          <ul className="divide-y divide-slate-200 dark:divide-slate-800">
            {mockQmsRecentActivity.map((activity) => (
              <li key={activity.id} className="px-6 py-4 flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-sm font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {activity.user.charAt(0)}
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-slate-900 dark:text-white">
                    {activity.action}
                  </p>
                  <p className="truncate text-sm text-slate-500 dark:text-slate-400">
                    by {activity.user}
                  </p>
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{activity.time}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Actions Placeholder */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 flex flex-col items-center justify-center min-h-[300px]">
          <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
            <MonitorSmartphone className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <p className="text-lg font-medium text-slate-900 dark:text-white">System Status: Optimal</p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 text-center max-w-sm">
            All terminals are running smoothly. Average wait time is within expected thresholds.
          </p>
          <button className="mt-6 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg text-sm font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors">
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
}
