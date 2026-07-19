"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  Github,
  ArrowRight,
  ShieldAlert,
  X,
  Images,
  MonitorSmartphone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { projectsData, projectStacks } from "@/data/mock";
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
  screenshots?: string[];
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  year: string;
  category: string;
  stack: string;
  localEnv?: string;
}

interface ProjectProps {
  project: Project;
  onConfidentialClick: (e: React.MouseEvent, project: Project) => void;
  onScreenshotsClick: (project: Project) => void;
}

function ProjectCard({ project, onConfidentialClick, onScreenshotsClick }: ProjectProps) {
  const isConfidential = project.category.includes("Confidential");
  const isLocal = Boolean(project.localEnv);
  const hasCode = project.githubUrl !== "#";

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

        {/* Local environment badge */}
        {isLocal && (
          <div className="absolute bottom-3 left-3 z-20">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/15 backdrop-blur-sm border border-amber-500/30 text-amber-300">
              <MonitorSmartphone className="w-3 h-3" />
              Stored in {project.localEnv}
            </span>
          </div>
        )}

        {/* Action links – revealed on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          {isLocal ? (
            <button
              onClick={() => onScreenshotsClick(project)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-zinc-900 text-xs font-semibold hover:bg-zinc-100 transition-colors shadow-lg cursor-pointer"
            >
              <Images className="w-3 h-3" />
              Screenshots
            </button>
          ) : (
            project.liveUrl !== "#" && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-zinc-900 text-xs font-semibold hover:bg-zinc-100 transition-colors shadow-lg"
              >
                <ExternalLink className="w-3 h-3" />
                Live
              </Link>
            )
          )}
          {(isConfidential || hasCode) && (
            <a
              href={isConfidential ? "#" : project.githubUrl}
              onClick={(e) => isConfidential && onConfidentialClick(e, project)}
              target={isConfidential ? undefined : "_blank"}
              rel={isConfidential ? undefined : "noopener noreferrer"}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-800/90 backdrop-blur-sm text-white text-xs font-semibold hover:bg-zinc-700 transition-colors border border-zinc-700 shadow-lg cursor-pointer"
            >
              {isConfidential ? <ShieldAlert className="w-3 h-3" /> : <Github className="w-3 h-3" />}
              {isConfidential ? "Notice" : "Code"}
            </a>
          )}
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

        {/* Local-only quick access, visible without hover (mobile-friendly) */}
        {isLocal && (
          <button
            onClick={() => onScreenshotsClick(project)}
            className="flex items-center gap-1.5 text-xs font-semibold text-violet-300 hover:text-violet-200 transition-colors pt-1 cursor-pointer"
          >
            <Images className="w-3.5 h-3.5" />
            View screenshots
          </button>
        )}
      </div>
    </motion.div>
  );
}

function FeaturedProjectCard({ project, index, onConfidentialClick, onScreenshotsClick }: ProjectProps & { index: number }) {
  const isEven = index % 2 === 0;
  const isConfidential = project.category.includes("Confidential");
  const isLocal = Boolean(project.localEnv);
  const hasCode = project.githubUrl !== "#";

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
          {isLocal && (
            <div className="absolute bottom-3 left-3 z-20">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/15 backdrop-blur-sm border border-amber-500/30 text-amber-300">
                <MonitorSmartphone className="w-3 h-3" />
                Stored in {project.localEnv}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className={`p-8 lg:p-10 flex flex-col justify-between ${!isEven ? 'md:order-1' : 'md:order-2'}`}>
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-violet-500/10 border border-violet-500/30 text-violet-400">
                Featured Project
              </span>
              <span className="text-sm font-medium text-zinc-500 tracking-tighter">/ {project.year}</span>
              {isConfidential && (
                <span className="px-2 py-0.5 rounded border border-zinc-700 bg-zinc-800/50 text-zinc-500 text-[10px] font-medium uppercase flex items-center gap-1">
                  <ShieldAlert className="w-3 h-3" />
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

          <div className="flex flex-wrap items-center gap-4 mt-8">
            {isLocal ? (
              <button
                onClick={() => onScreenshotsClick(project)}
                className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-zinc-900 text-sm font-bold hover:bg-zinc-100 transition-all shadow-xl shadow-white/5 cursor-pointer"
              >
                <Images className="w-4 h-4" />
                View Screenshots
              </button>
            ) : (
              project.liveUrl !== "#" && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-zinc-900 text-sm font-bold hover:bg-zinc-100 transition-all shadow-xl shadow-white/5"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Link>
              )
            )}
            {(isConfidential || hasCode) && (
              <a
                href={isConfidential ? "#" : project.githubUrl}
                onClick={(e) => isConfidential && onConfidentialClick(e, project)}
                target={isConfidential ? undefined : "_blank"}
                rel={isConfidential ? undefined : "noopener noreferrer"}
                className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-zinc-700 text-zinc-300 text-sm font-bold hover:border-zinc-500 hover:text-white transition-all duration-200 cursor-pointer"
              >
                {isConfidential ? <ShieldAlert className="w-4 h-4" /> : <Github className="w-4 h-4" />}
                {isConfidential ? "Confidential Notice" : "Source Code"}
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectGroup({
  stack,
  projects,
  onConfidentialClick,
  onScreenshotsClick,
}: {
  stack: string;
  projects: Project[];
  onConfidentialClick: (e: React.MouseEvent, project: Project) => void;
  onScreenshotsClick: (project: Project) => void;
}) {
  if (projects.length === 0) return null;

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <div className="mb-16 last:mb-0">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-6"
      >
        <h3 className="text-lg font-semibold text-white tracking-tight whitespace-nowrap">
          {stack}
        </h3>
        <div className="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent" />
      </motion.div>

      {featured.length > 0 && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-4 mb-4"
        >
          {featured.map((project, index) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              index={index}
              onConfidentialClick={onConfidentialClick}
              onScreenshotsClick={onScreenshotsClick}
            />
          ))}
        </motion.div>
      )}

      {rest.length > 0 && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {rest.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onConfidentialClick={onConfidentialClick}
              onScreenshotsClick={onScreenshotsClick}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [lightbox, setLightbox] = useState<{ project: Project; index: number } | null>(null);

  const handleConfidentialClick = (e: React.MouseEvent, project: Project) => {
    e.preventDefault();
    setSelectedProject(project);
  };

  const handleScreenshotsClick = (project: Project) => {
    if (project.screenshots && project.screenshots.length > 0) {
      setLightbox({ project, index: 0 });
    }
  };

  const nextScreenshot = () => {
    if (!lightbox) return;
    const total = lightbox.project.screenshots?.length ?? 1;
    setLightbox({ ...lightbox, index: (lightbox.index + 1) % total });
  };

  const prevScreenshot = () => {
    if (!lightbox) return;
    const total = lightbox.project.screenshots?.length ?? 1;
    setLightbox({ ...lightbox, index: (lightbox.index - 1 + total) % total });
  };

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

        {/* Grouped by stack */}
        {projectStacks.map((stack) => (
          <ProjectGroup
            key={stack}
            stack={stack}
            projects={projectsData.filter((p) => p.stack === stack)}
            onConfidentialClick={handleConfidentialClick}
            onScreenshotsClick={handleScreenshotsClick}
          />
        ))}
      </div>

      {/* Confidential Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-[calc(100vw-2rem)] sm:max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl p-6 overflow-hidden mx-auto"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-500" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-amber-500/10 text-amber-500 rounded-full">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Confidential Project</h3>
              </div>

              <div className="space-y-4 text-zinc-300 text-sm leading-relaxed">
                <p>
                  The project <strong>{selectedProject.title}</strong> is an enterprise-grade application built under a non-disclosure agreement (NDA) or client contract.
                </p>
                <p>
                  Because of these strict confidentiality terms, the original source code and proprietary assets cannot be shared publicly.
                </p>
                <p>
                  However, I have built a safe, sanitized <strong className="text-white">demo version</strong> representing the UI/UX architecture and front-end flow, which you can explore by clicking the &quot;Live Demo&quot; button.
                </p>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-semibold rounded-lg transition-colors border border-zinc-700"
                >
                  Understood
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Screenshot Lightbox (for local / not-yet-deployed projects) */}
      <AnimatePresence>
        {lightbox && lightbox.project.screenshots && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setLightbox(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              className="relative w-full max-w-4xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden mx-auto"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800">
                <div>
                  <h3 className="text-sm font-semibold text-white">{lightbox.project.title}</h3>
                  <p className="flex items-center gap-1.5 text-xs text-amber-300/90 mt-0.5">
                    <MonitorSmartphone className="w-3 h-3" />
                    Stored in {lightbox.project.localEnv} — not yet deployed
                  </p>
                </div>
                <button
                  onClick={() => setLightbox(null)}
                  className="text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative bg-zinc-950 aspect-video">
                <Image
                  src={lightbox.project.screenshots[lightbox.index]}
                  alt={`${lightbox.project.title} screenshot ${lightbox.index + 1}`}
                  fill
                  className="object-contain"
                />

                {lightbox.project.screenshots.length > 1 && (
                  <>
                    <button
                      onClick={prevScreenshot}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextScreenshot}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              <div className="flex items-center justify-center gap-2 py-4">
                {lightbox.project.screenshots.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => setLightbox({ ...lightbox, index: i })}
                    className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                      i === lightbox.index ? "bg-violet-400" : "bg-zinc-700 hover:bg-zinc-600"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
