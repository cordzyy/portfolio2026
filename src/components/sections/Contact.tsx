"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, ArrowRight, Clock, Briefcase, Phone, MapPin } from "lucide-react";
import { contactData } from "@/data/mock";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-violet-600/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto text-center space-y-8"
        >
          <div className="space-y-4">
            <p className="text-violet-400 text-sm font-medium tracking-widest uppercase">
              Contact
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
              {contactData.heading}
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">{contactData.subheading}</p>
          </div>

          {/* Info pills */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-sm text-zinc-400">
              <Clock className="w-3.5 h-3.5 text-zinc-500" />
              {contactData.responseTime}
            </span>
            <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-sm text-emerald-400">
              <Briefcase className="w-3.5 h-3.5" />
              {contactData.availability}
            </span>
            <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-sm text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-zinc-500" />
              {contactData.location}
            </span>
          </div>

          {/* CTAs */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href={`mailto:${contactData.email}`}
              className="group flex items-center gap-2.5 px-8 py-4 bg-white text-zinc-900 rounded-full font-semibold text-sm hover:bg-zinc-100 transition-all duration-200 shadow-xl shadow-white/10"
            >
              <Mail className="w-4 h-4" />
              {contactData.email}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href={`tel:${contactData.phone}`}
              className="group flex items-center gap-2.5 px-8 py-4 border border-zinc-700 text-zinc-300 rounded-full font-semibold text-sm hover:border-zinc-500 hover:text-white transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              {contactData.phone}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
