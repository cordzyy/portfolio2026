import Link from "next/link";
import { Star, Clock, BarChart } from "lucide-react";

interface CourseCardProps {
  course: {
    id: string;
    title: string;
    instructor: string;
    rating: number;
    reviews: number;
    price: number;
    image: string;
    level: string;
    duration: string;
  };
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link 
      href={`/lms-demo/courses/${course.id}`} 
      className="group flex flex-col bg-white dark:bg-zinc-900 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all hover:border-violet-500/50"
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-bold text-zinc-900 dark:text-zinc-100 line-clamp-2 leading-snug group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
          {course.title}
        </h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
          {course.instructor}
        </p>
        
        <div className="flex items-center gap-1 mt-2 text-sm">
          <span className="font-bold text-amber-500">{course.rating}</span>
          <div className="flex items-center text-amber-500">
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
          </div>
          <span className="text-zinc-400 text-xs ml-1">({course.reviews.toLocaleString()})</span>
        </div>
        
        <div className="flex items-center gap-4 mt-4 text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {course.duration}
          </div>
          <div className="flex items-center gap-1.5">
            <BarChart className="w-3.5 h-3.5" />
            {course.level}
          </div>
        </div>

        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="text-lg font-extrabold text-zinc-900 dark:text-white">
            ${course.price}
          </span>
          <span className="text-sm font-semibold text-violet-600 dark:text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity">
            View Course &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
