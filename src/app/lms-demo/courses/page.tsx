"use client";

import { useState } from "react";
import { Search, Filter } from "lucide-react";
import CourseCard from "@/components/lms-demo/CourseCard";
import { lmsCourses, lmsCategories } from "@/lib/lms-mock-data";

export default function LmsCoursesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredCourses = activeCategory === "All" 
    ? lmsCourses 
    : lmsCourses.filter(c => c.category === activeCategory);

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">Course Catalog</h1>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">Browse our extensive library of courses to learn new skills.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar / Filters */}
          <div className="w-full md:w-64 flex-shrink-0 space-y-8">
            <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <h3 className="font-semibold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Categories
              </h3>
              <div className="space-y-2">
                <button 
                  onClick={() => setActiveCategory("All")}
                  className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    activeCategory === "All" 
                      ? "bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-400 font-medium" 
                      : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  }`}
                >
                  All Categories
                </button>
                {lmsCategories.map(category => (
                  <button 
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      activeCategory === category 
                        ? "bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-400 font-medium" 
                        : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <h3 className="font-semibold text-zinc-900 dark:text-white mb-4">Level</h3>
              <div className="space-y-3">
                {["All Levels", "Beginner", "Intermediate", "Advanced"].map((level, i) => (
                  <label key={level} className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="checkbox" 
                      defaultChecked={i === 0}
                      className="rounded border-zinc-300 text-violet-600 focus:ring-violet-600 dark:border-zinc-700 dark:bg-zinc-800" 
                    />
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">{level}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Course Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Showing {filteredCourses.length} results
              </span>
              <select className="text-sm border-zinc-200 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 py-2 pl-3 pr-8 focus:ring-violet-500 focus:border-violet-500">
                <option>Most Popular</option>
                <option>Highest Rated</option>
                <option>Newest</option>
              </select>
            </div>

            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map(course => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-800 mb-4">
                  <Search className="w-8 h-8 text-zinc-400" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">No courses found</h3>
                <p className="text-zinc-500 dark:text-zinc-400 mt-2">Try adjusting your filters or search query.</p>
                <button 
                  onClick={() => setActiveCategory("All")}
                  className="mt-6 px-4 py-2 text-sm font-medium text-violet-600 hover:text-violet-700"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
