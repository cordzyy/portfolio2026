"use client";

import { mockStats, mockRecentActivity } from "@/lib/mock-data";
import { ArrowUpRight, ArrowDownRight, MoreHorizontal, Activity } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">Dashboard</h1>
        <p className="text-zinc-500 dark:text-zinc-400">Overview of your content management system.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {mockStats.map((stat, index) => (
          <div key={index} className="bg-white dark:bg-zinc-900 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm p-6">
            <dt className="truncate text-sm font-medium text-zinc-500 dark:text-zinc-400">{stat.label}</dt>
            <dd className="mt-2 flex items-baseline justify-between">
              <span className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">{stat.value}</span>
              <span className={`inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0 ${
                stat.trend === "up" 
                  ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" 
                  : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
              }`}>
                {stat.trend === "up" ? (
                  <ArrowUpRight className="-ml-1 mr-0.5 h-4 w-4 flex-shrink-0 self-center text-green-500 dark:text-green-400" aria-hidden="true" />
                ) : (
                  <ArrowDownRight className="-ml-1 mr-0.5 h-4 w-4 flex-shrink-0 self-center text-red-500 dark:text-red-400" aria-hidden="true" />
                )}
                <span className="sr-only"> {stat.trend === "up" ? "Increased" : "Decreased"} by </span>
                {stat.change}
              </span>
            </dd>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent Activity */}
        <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden">
          <div className="border-b border-zinc-200 dark:border-zinc-800 px-6 py-4 flex items-center justify-between">
            <h2 className="text-base font-semibold leading-6 text-zinc-900 dark:text-white flex items-center">
              <Activity className="w-5 h-5 mr-2 text-violet-500" />
              Recent Activity
            </h2>
            <button className="text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-300">
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>
          <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {mockRecentActivity.map((activity) => (
              <li key={activity.id} className="px-6 py-4 flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-sm font-medium text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                    {activity.user.charAt(0)}
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-zinc-900 dark:text-white">
                    {activity.action}
                  </p>
                  <p className="truncate text-sm text-zinc-500 dark:text-zinc-400">
                    by {activity.user}
                  </p>
                </div>
                <div>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">{activity.time}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
            <a href="#" className="text-sm font-medium text-violet-600 dark:text-violet-400 hover:text-violet-500 transition-colors">
              View all activity <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>

        {/* Placeholder for Chart or other widget */}
        <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm p-6 flex flex-col items-center justify-center min-h-[300px]">
          <div className="w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
            <Activity className="w-8 h-8 text-zinc-400 dark:text-zinc-500" />
          </div>
          <p className="text-sm font-medium text-zinc-900 dark:text-white">Analytics Chart Placeholder</p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Add a chart library like Recharts here.</p>
        </div>
      </div>
    </div>
  );
}
