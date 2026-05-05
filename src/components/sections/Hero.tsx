"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Facebook, Instagram, Download } from "lucide-react";
import { heroData } from "@/data/mock";
import Typewriter from "@/components/ui/Typewriter";
import Magnetic from "@/components/ui/Magnetic";

const iconMap: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  Facebook,
  Instagram,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:72px_72px]" />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-indigo-600/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Badges row */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 flex-wrap">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for work
              </span>
              <Link
                href="https://uswagoncs.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium hover:border-blue-400/50 hover:bg-blue-500/15 transition-all duration-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Co-Founder @ Uswagon CS
              </Link>
            </motion.div>

            {/* Heading */}
            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-zinc-500 text-lg font-light tracking-wide">
                {heroData.greeting}
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05]">
                {heroData.name}
              </h1>
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-3xl lg:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
                  <Typewriter
                    words={["Front-End Developer", "UI/UX Designer", "Web Designer", "Creative Dev"]}
                    typingSpeed={75}
                    deletingSpeed={40}
                    pauseTime={2000}
                  />
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-zinc-400 text-lg leading-relaxed max-w-xl"
            >
              {heroData.description}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 flex-wrap">
              <Magnetic strength={0.3}>
                <Link
                  href={heroData.cta.primary.href}
                  className="group flex items-center gap-2 px-6 py-3 bg-white text-zinc-900 rounded-full font-medium text-sm hover:bg-zinc-100 transition-all duration-200 shadow-xl shadow-white/10"
                >
                  {heroData.cta.primary.label}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Magnetic>
              <Magnetic strength={0.3}>
                <Link
                  href={heroData.cta.secondary.href}
                  className="group flex items-center gap-2 px-6 py-3 border border-zinc-700 text-zinc-300 rounded-full font-medium text-sm hover:border-zinc-500 hover:text-white transition-all duration-200"
                >
                  <ArrowRight className="w-4 h-4" />
                  {heroData.cta.secondary.label}
                </Link>
              </Magnetic>
              <Magnetic strength={0.3}>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-6 py-3 border border-zinc-800 bg-zinc-800/50 text-zinc-400 rounded-full font-medium text-sm hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-violet-300 transition-all duration-200"
                >
                  <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  Resume
                </a>
              </Magnetic>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-8 pt-2"
            >
              {heroData.stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-zinc-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              {heroData.socialLinks.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2.5 rounded-xl border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-600 hover:bg-white/5 transition-all duration-200"
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                  </Link>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Avatar / visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center mt-10 lg:mt-0"
          >
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500/20 to-indigo-500/10 blur-3xl scale-110" />

            {/* Outer border ring */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-full border border-zinc-700/50 scale-110" />
              <div className="absolute inset-0 rounded-full border border-violet-500/20 scale-125" />

              {/* Avatar */}
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-zinc-700/80 shadow-2xl shadow-violet-900/20">
                <Image
                  src={heroData.avatarUrl}
                  alt={heroData.name}
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              {/* Floating badge – top right */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-[#0f0f0f] border border-zinc-700 rounded-2xl px-4 py-2.5 shadow-xl"
              >
                <p className="text-xs text-zinc-500 mb-0.5">Specialized in</p>
                <p className="text-sm font-semibold text-white">React & Next.js</p>
              </motion.div>

              {/* Floating badge – bottom left */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-6 bg-[#0f0f0f] border border-zinc-700 rounded-2xl px-4 py-2.5 shadow-xl flex items-center gap-2.5"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-sm font-medium text-white">Open to work</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
