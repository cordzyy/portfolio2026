"use client";

import Link from "next/link";
import { PlayCircle, Award, Users, CheckCircle } from "lucide-react";
import CourseCard from "@/components/lms-demo/CourseCard";
import { lmsCourses } from "@/lib/lms-mock-data";

export default function LmsLandingPage() {
  const featuredCourses = lmsCourses.slice(0, 4);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-zinc-950 text-white overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&h=800&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start">
          <span className="px-3 py-1 text-sm font-semibold text-violet-300 bg-violet-900/50 border border-violet-700/50 rounded-full mb-6">
            Join over 2 million learners
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight max-w-3xl leading-tight">
            Unlock your potential with <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">world-class</span> learning
          </h1>
          <p className="mt-6 text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed">
            Master the most in-demand skills from industry experts. From coding and design to business and marketing, we have the right course for you.
          </p>
          
          <div className="mt-10 flex flex-wrap gap-4">
            <Link 
              href="/lms-demo/courses" 
              className="px-8 py-4 rounded-full bg-violet-600 text-white font-bold hover:bg-violet-500 transition-colors shadow-lg shadow-violet-600/30 text-lg"
            >
              Explore Courses
            </Link>
            <Link 
              href="#" 
              className="px-8 py-4 rounded-full bg-white/10 text-white font-bold hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10 flex items-center gap-2 text-lg"
            >
              <PlayCircle className="w-5 h-5" />
              Watch Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-violet-900 text-violet-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-violet-800">
            <div>
              <div className="text-3xl font-black text-white">100K+</div>
              <div className="text-sm mt-1 font-medium text-violet-300">Online Courses</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">Expert</div>
              <div className="text-sm mt-1 font-medium text-violet-300">Instructors</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">Lifetime</div>
              <div className="text-sm mt-1 font-medium text-violet-300">Access</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">15K+</div>
              <div className="text-sm mt-1 font-medium text-violet-300">Enterprise Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">Featured Courses</h2>
              <p className="mt-2 text-zinc-500 dark:text-zinc-400">Hand-picked courses to help you get started.</p>
            </div>
            <Link href="/lms-demo/courses" className="text-violet-600 dark:text-violet-400 font-semibold hover:text-violet-700 hidden sm:block">
              View all courses &rarr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <Link href="/lms-demo/courses" className="text-violet-600 font-semibold hover:text-violet-700">
              View all courses &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">Why learn with LearnHub?</h2>
            <p className="mt-4 text-zinc-500 dark:text-zinc-400 text-lg">We provide the best learning experience tailored to your needs, whether you're a beginner or a professional.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
              <div className="w-16 h-16 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">Earn Certificates</h3>
              <p className="text-zinc-500 dark:text-zinc-400">Get industry-recognized certificates upon completion to showcase your new skills to employers.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">Expert Instructors</h3>
              <p className="text-zinc-500 dark:text-zinc-400">Learn from industry experts who are passionate about teaching and sharing their real-world experience.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">Learn at your pace</h3>
              <p className="text-zinc-500 dark:text-zinc-400">Enjoy lifetime access to courses on LearnHub's website and app, and learn wherever you go.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
