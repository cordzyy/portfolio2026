"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { projectsData } from "@/data/mock";
import { Badge } from "@/components/ui/badge";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  year: string;
  category: string;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative bg-zinc-900/50 border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-zinc-700 transition-colors duration-300"
    >
      {/* Hover glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent" />

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-black/60 backdrop-blur-sm border border-zinc-700/50 text-zinc-300">
            {project.category}
          </span>
        </div>

        {/* Year */}
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-black/60 backdrop-blur-sm border border-zinc-700/50 text-zinc-400">
            {project.year}
          </span>
        </div>

        {/* Action links – revealed on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-zinc-900 text-xs font-semibold hover:bg-zinc-100 transition-colors shadow-lg"
          >
            <ExternalLink className="w-3 h-3" />
            Live
          </Link>
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-800/90 backdrop-blur-sm text-white text-xs font-semibold hover:bg-zinc-700 transition-colors border border-zinc-700 shadow-lg"
          >
            <Github className="w-3 h-3" />
            Code
          </Link>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="text-base font-semibold text-white group-hover:text-violet-300 transition-colors duration-300 leading-snug">
          {project.title}
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.slice(0, 4).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs bg-zinc-800 text-zinc-400 border-zinc-700 hover:bg-zinc-700 px-2.5 py-0.5 rounded-full font-normal"
            >
              {tag}
            </Badge>
          ))}
          {project.tags.length > 4 && (
            <Badge
              variant="secondary"
              className="text-xs bg-zinc-800 text-zinc-500 border-zinc-700 px-2.5 py-0.5 rounded-full font-normal"
            >
              +{project.tags.length - 4}
            </Badge>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function FeaturedProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative bg-zinc-900/40 border border-zinc-800/80 rounded-3xl overflow-hidden hover:border-zinc-700 transition-all duration-300 shadow-2xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

      <div className="grid md:grid-cols-2 gap-0 h-full">
        {/* Image - Alternating order on desktop */}
        <div className={`relative h-64 md:h-auto overflow-hidden ${!isEven ? 'md:order-2' : 'md:order-1'}`}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Gradient overlays */}
          <div className={`absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent md:hidden`} />
          <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-zinc-900/80 hidden md:block ${!isEven ? 'rotate-180' : ''}`} />
        </div>

        {/* Content */}
        <div className={`p-8 lg:p-10 flex flex-col justify-between ${!isEven ? 'md:order-1' : 'md:order-2'}`}>
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-violet-500/10 border border-violet-500/30 text-violet-400">
                Featured Project
              </span>
              <span className="text-sm font-medium text-zinc-500 tracking-tighter">/ {project.year}</span>
              {project.category.includes("Confidential") && (
                <span className="px-2 py-0.5 rounded border border-zinc-700 bg-zinc-800/50 text-zinc-500 text-[10px] font-medium uppercase">
                  Confidential
                </span>
              )}
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-violet-300 transition-colors duration-300 leading-tight">
              {project.title}
            </h3>
            <p className="text-zinc-400 text-sm lg:text-base leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="text-[11px] bg-zinc-800/50 text-zinc-300 border-zinc-700/50 px-3 py-0.5 rounded-full font-medium"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-zinc-900 text-sm font-bold hover:bg-zinc-100 transition-all shadow-xl shadow-white/5"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </Link>
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-zinc-700 text-zinc-300 text-sm font-bold hover:border-zinc-500 hover:text-white transition-all duration-200"
            >
              <Github className="w-4 h-4" />
              Source Code
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const featured = projectsData.filter((p) => p.featured);
  const rest = projectsData.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 space-y-4"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase">
            Selected Work
          </p>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Projects
            </h2>
            <Link
              href="https://github.com/cordzyy"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-200 transition-colors duration-200"
            >
              View all on GitHub
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
          <div className="w-12 h-px bg-gradient-to-r from-violet-500 to-transparent" />
        </motion.div>

        {/* Featured projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-4 mb-4"
        >
          {featured.map((project, index) => (
            <FeaturedProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* Rest of projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {rest.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
