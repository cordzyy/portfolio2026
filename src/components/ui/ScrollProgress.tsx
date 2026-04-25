"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent pointer-events-none">
      <motion.div
        className="h-full origin-left"
        style={{
          background: "linear-gradient(90deg, #7c3aed, #6366f1, #a78bfa)",
          boxShadow: "0 0 10px #7c3aed88, 0 0 20px #6366f144",
          scaleX: scrollProgress / 100,
        }}
        transition={{ ease: "easeOut", duration: 0.1 }}
      />
    </div>
  );
}
