"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { experienceData } from "@/data/mock";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 space-y-4"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase">
            Career
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Experience
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-violet-500 to-transparent" />
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-6">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-zinc-700/50 to-transparent hidden md:block" />

          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative md:pl-14"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 w-10 h-10 rounded-full bg-zinc-900 border-2 border-zinc-700 hidden md:flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-violet-500" />
              </div>

              {/* Card */}
              <div className="group bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-6 hover:border-zinc-700 transition-colors duration-300">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Left: role info */}
                  <div className="md:col-span-2 space-y-3">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <div>
                        <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                        <p className="text-violet-400 font-medium">{exp.company}</p>
                      </div>
                      <Badge
                        variant="secondary"
                        className="text-xs bg-zinc-800 text-zinc-400 border-zinc-700 rounded-full"
                      >
                        {exp.type}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-zinc-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-zinc-400 text-sm leading-relaxed">{exp.description}</p>

                    {/* Highlights */}
                    <ul className="space-y-2 pt-1">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: tech stack */}
                  <div className="space-y-3">
                    <p className="text-xs text-zinc-600 uppercase tracking-widest">Tech Used</p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-zinc-800 text-zinc-400 border-zinc-700 rounded-full px-2.5 py-0.5 font-normal"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
