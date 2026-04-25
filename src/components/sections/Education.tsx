"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    id: "edu-1",
    degree: "Bachelor of Science in Computer Science",
    school: "Bicol University – College of Science",
    period: "2020 – 2024",
    level: "Tertiary",
    description:
      "Studied core computer science fundamentals including algorithms, software engineering, web development, and UI/UX design principles.",
  },
  {
    id: "edu-2",
    degree: "Senior High School",
    school: "Tabaco National High School",
    period: "2018 – 2020",
    level: "Secondary",
    description: "Completed senior high school education with a focus on STEM track.",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 space-y-4"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase">
            Background
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Education
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-violet-500 to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-6 hover:border-zinc-700 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <GraduationCap className="w-5 h-5 text-violet-400" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-xs text-zinc-500 font-medium uppercase tracking-widest">
                    {edu.level} · {edu.period}
                  </span>
                  <h3 className="text-white font-bold leading-snug">{edu.degree}</h3>
                  <p className="text-violet-400 text-sm font-medium">{edu.school}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
