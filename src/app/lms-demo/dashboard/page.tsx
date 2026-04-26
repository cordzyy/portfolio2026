"use client";

import { PlayCircle, Clock, Trophy } from "lucide-react";
import { lmsEnrolledCourses, lmsUser } from "@/lib/lms-mock-data";

export default function LmsDashboardPage() {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Banner */}
        <div className="bg-violet-600 rounded-2xl p-8 text-white mb-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-violet-500 rounded-full opacity-50 blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 flex items-center gap-6">
            <img src={lmsUser.avatar} alt={lmsUser.name} className="w-20 h-20 rounded-full border-4 border-violet-400/50 shadow-xl" />
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Welcome back, {lmsUser.name.split(' ')[0]}!</h1>
              <p className="mt-2 text-violet-200">You've learned for {lmsUser.hoursLearned} hours. Keep up the great work!</p>
            </div>
          </div>
          
          <div className="relative z-10 mt-6 md:mt-0 flex gap-4">
            <div className="bg-violet-900/40 backdrop-blur-sm border border-violet-500/30 rounded-xl p-4 text-center min-w-[120px]">
              <div className="text-3xl font-bold">{lmsEnrolledCourses.length}</div>
              <div className="text-sm text-violet-200 mt-1">Active Courses</div>
            </div>
            <div className="bg-violet-900/40 backdrop-blur-sm border border-violet-500/30 rounded-xl p-4 text-center min-w-[120px]">
              <div className="text-3xl font-bold">{lmsUser.certificates}</div>
              <div className="text-sm text-violet-200 mt-1">Certificates</div>
            </div>
          </div>
        </div>

        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">My Learning</h2>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm font-medium bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 rounded-md">
              In Progress
            </button>
            <button className="px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-md transition-colors">
              Completed
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lmsEnrolledCourses.map((enrolled) => (
            <div key={enrolled.courseId} className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col transition-all hover:shadow-md">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={enrolled.course.image} 
                  alt={enrolled.course.title} 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                  <PlayCircle className="w-12 h-12 text-white" />
                </div>
              </div>
              
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-zinc-900 dark:text-zinc-100 line-clamp-2 leading-snug">
                  {enrolled.course.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 mb-4">
                  {enrolled.course.instructor}
                </p>
                
                <div className="mt-auto">
                  <div className="flex justify-between text-xs font-medium mb-1.5">
                    <span className="text-violet-600 dark:text-violet-400">{enrolled.progress}% Complete</span>
                    <span className="text-zinc-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Last accessed {enrolled.lastAccessed}
                    </span>
                  </div>
                  <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-violet-600 h-2 rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: `${enrolled.progress}%` }}
                    ></div>
                  </div>
                  
                  <button className="mt-5 w-full py-2.5 rounded-md border border-zinc-300 dark:border-zinc-700 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                    Continue Learning
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
