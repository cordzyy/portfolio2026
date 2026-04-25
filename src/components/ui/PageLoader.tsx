"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15 + 2;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
        >
          {/* Background grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:72px_72px]" />

          {/* Radial glow */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[100px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative flex flex-col items-center gap-10">
            {/* Initials badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative"
            >
              {/* Spinning rings */}
              <motion.div
                className="absolute inset-0 rounded-full border border-violet-500/30"
                style={{ margin: "-10px" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border border-indigo-500/20"
                style={{ margin: "-20px" }}
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />

              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center shadow-2xl shadow-violet-900/40">
                <span className="text-white text-3xl font-bold tracking-tight">JC</span>
              </div>
            </motion.div>

            {/* Progress area */}
            <div className="flex flex-col items-center gap-3 w-64">
              <div className="h-[2px] w-full bg-zinc-800/50 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-violet-500 to-indigo-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between w-full text-[10px] text-zinc-500 font-medium tracking-widest uppercase">
                <span>{progress < 100 ? "Loading Portfolio" : "Complete"}</span>
                <span>{Math.round(progress)}%</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 text-zinc-800 text-[10px] tracking-[0.3em] uppercase font-bold">
            joshuacorda.dev
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
