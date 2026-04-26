import { lmsCourses } from "@/lib/lms-mock-data";
import { Star, Clock, BarChart, Check, PlayCircle, Award, Infinity, MonitorSmartphone, FileText } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const course = lmsCourses.find((c) => c.id === resolvedParams.id);

  if (!course) {
    notFound();
  }

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen">
      {/* Dark Hero Section */}
      <div className="bg-zinc-900 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 relative">
            <div className="lg:w-2/3 pr-0 lg:pr-8">
              <div className="flex items-center gap-2 text-sm font-medium text-violet-400 mb-4">
                <Link href="/lms-demo" className="hover:text-violet-300 transition-colors">Home</Link>
                <span>&rsaquo;</span>
                <Link href="/lms-demo/courses" className="hover:text-violet-300 transition-colors">{course.category}</Link>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 leading-tight">
                {course.title}
              </h1>
              <p className="text-lg text-zinc-300 mb-6 max-w-3xl leading-relaxed">
                Master the concepts of {course.category} with this comprehensive course taught by industry expert {course.instructor}. Perfect for {course.level.toLowerCase()} learners.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
                <div className="flex items-center gap-1 bg-amber-500/20 text-amber-300 px-2 py-1 rounded">
                  <span className="font-bold">{course.rating}</span>
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="text-zinc-400">({course.reviews.toLocaleString()} ratings)</span>
                <span className="text-zinc-400">&bull;</span>
                <span>154,320 students</span>
              </div>
              
              <div className="text-sm">
                Created by <span className="text-violet-400 font-medium underline decoration-violet-400/30 underline-offset-4">{course.instructor}</span>
              </div>
            </div>

            {/* Mobile/Tablet Sticky Card Placeholder - Actual card is positioned absolute on desktop */}
            <div className="lg:hidden w-full bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-xl border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100">
              <div className="relative aspect-video">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer hover:bg-black/50 transition-colors">
                  <PlayCircle className="w-16 h-16 text-white" />
                </div>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold mb-4">${course.price}</div>
                <button className="w-full py-3.5 px-4 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-lg transition-colors mb-3">
                  Add to Cart
                </button>
                <button className="w-full py-3.5 px-4 bg-transparent border border-zinc-900 dark:border-white hover:bg-zinc-100 dark:hover:bg-zinc-800 font-bold rounded-lg transition-colors text-zinc-900 dark:text-white">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* What you'll learn */}
            <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 md:p-8 bg-zinc-50 dark:bg-zinc-900/50 mb-10">
              <h2 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-white">What you'll learn</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Build fully functional, modern applications from scratch.",
                  "Master the latest industry-standard tools and practices.",
                  "Understand complex concepts through real-world projects.",
                  "Learn best practices for performance and accessibility.",
                  "Deploy your projects and build a professional portfolio.",
                  "Prepare for technical interviews and job opportunities."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-zinc-900 dark:text-zinc-100 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Content */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-white">Course content</h2>
              <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-4">
                <span>12 sections</span>
                <span>&bull;</span>
                <span>142 lectures</span>
                <span>&bull;</span>
                <span>{course.duration} total length</span>
              </div>
              
              <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden divide-y divide-zinc-200 dark:divide-zinc-800">
                {[
                  { title: "Introduction & Setup", lectures: 5, time: "45 mins" },
                  { title: "Core Fundamentals", lectures: 18, time: "3 hours 15 mins" },
                  { title: "Advanced Concepts", lectures: 24, time: "5 hours 30 mins" },
                  { title: "Real-world Project Part 1", lectures: 15, time: "4 hours" },
                  { title: "Real-world Project Part 2", lectures: 20, time: "6 hours 20 mins" }
                ].map((section, idx) => (
                  <div key={idx} className="bg-white dark:bg-zinc-950">
                    <div className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-900/50 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
                      <div className="font-semibold text-zinc-900 dark:text-zinc-100">{section.title}</div>
                      <div className="text-sm text-zinc-500">{section.lectures} lectures &bull; {section.time}</div>
                    </div>
                  </div>
                ))}
                <div className="p-4 text-center bg-white dark:bg-zinc-950">
                  <button className="text-violet-600 font-semibold text-sm hover:text-violet-700 transition-colors">
                    7 more sections
                  </button>
                </div>
              </div>
            </div>

            {/* Instructor */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-white">Instructor</h2>
              <div className="flex items-start gap-4">
                <img 
                  src={`https://ui-avatars.com/api/?name=${course.instructor.replace(/ /g, '+')}&background=random`} 
                  alt={course.instructor} 
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="font-bold text-lg text-violet-600 dark:text-violet-400 underline underline-offset-4 decoration-violet-600/30">
                    {course.instructor}
                  </h3>
                  <p className="text-sm text-zinc-500 mb-2">Senior {course.category} Expert & Educator</p>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    With over a decade of industry experience, {course.instructor} has helped hundreds of thousands of students master {course.category}. Passionate about breaking down complex topics into simple, digestible lessons.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Floating Card */}
          <div className="hidden lg:block lg:w-1/3">
            {/* The absolute positioning handles pulling it up into the dark hero area */}
            <div className="sticky top-24 bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800 -mt-72 z-10 text-zinc-900 dark:text-zinc-100">
              <div className="relative aspect-video">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center cursor-pointer hover:bg-black/50 transition-colors">
                  <PlayCircle className="w-16 h-16 text-white mb-2" />
                  <span className="text-white font-medium">Preview this course</span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold mb-4">${course.price}</div>
                <button className="w-full py-3.5 px-4 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-lg transition-colors mb-3">
                  Add to Cart
                </button>
                <button className="w-full py-3.5 px-4 bg-transparent border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 font-bold rounded-lg transition-colors">
                  Buy Now
                </button>
                <div className="text-center text-xs text-zinc-500 mt-4 mb-6">
                  30-Day Money-Back Guarantee
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold mb-2">This course includes:</h4>
                  <div className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <MonitorSmartphone className="w-4 h-4 text-zinc-500" />
                    {course.duration} on-demand video
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <FileText className="w-4 h-4 text-zinc-500" />
                    72 articles and resources
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <Infinity className="w-4 h-4 text-zinc-500" />
                    Full lifetime access
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <Award className="w-4 h-4 text-zinc-500" />
                    Certificate of completion
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
