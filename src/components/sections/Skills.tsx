"use client";

import { motion } from "framer-motion";
import { Layers, Server, Terminal, Palette, Globe } from "lucide-react";
import { skillsData } from "@/data/mock";

const iconMap: Record<string, React.ElementType> = {
  Layers,
  Server,
  Terminal,
  Palette,
  Globe,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      {/* Subtle bg accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_50%,rgba(124,58,237,0.04),transparent)]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 space-y-4"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase">
            Capabilities
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Skills & Tools
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-violet-500 to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillsData.categories.map((category, catIdx) => {
            const Icon = iconMap[category.icon];
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: catIdx * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-6 hover:border-zinc-700 transition-colors duration-300"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                    {Icon && <Icon className="w-4 h-4 text-violet-400" />}
                  </div>
                  <h3 className="text-white font-semibold">{category.name}</h3>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: catIdx * 0.1 + skillIdx * 0.07,
                      }}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-zinc-300">{skill.name}</span>
                        <span className="text-xs text-zinc-600">{skill.level}%</span>
                      </div>
                      <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: catIdx * 0.1 + skillIdx * 0.07 + 0.2,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
