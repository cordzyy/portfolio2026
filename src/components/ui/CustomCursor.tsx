"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CURSOR_VARIANTS: Record<string, { emoji: string; color: string }> = {
  default: { emoji: "🚀", color: "#7c3aed" },
  project: { emoji: "</>", color: "#6d28d9" },
  design: { emoji: "✏️", color: "#a78bfa" },
  contact: { emoji: "👋", color: "#10b981" },
  link: { emoji: "↗", color: "#818cf8" },
  button: { emoji: "✦", color: "#f59e0b" },
};

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
}

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState("default");
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleIdRef = useRef(0);
  const lastParticleTime = useRef(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300 };
  const dotX = useSpring(mouseX, { damping: 40, stiffness: 500 });
  const dotY = useSpring(mouseY, { damping: 40, stiffness: 500 });
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);

      // Spawn particles with throttle
      const now = Date.now();
      if (now - lastParticleTime.current > 40) {
        lastParticleTime.current = now;
        const variant = CURSOR_VARIANTS[cursorType] || CURSOR_VARIANTS.default;
        const newParticle: Particle = {
          id: particleIdRef.current++,
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 5 + 2,
          opacity: 1,
          color: variant.color,
        };
        setParticles((prev) => [...prev.slice(-18), newParticle]);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const detectContext = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (!el) return;
      const tag = el.tagName.toLowerCase();
      const classes = el.className || "";
      const sectionId = el.closest("section")?.id || "";

      if (tag === "button" || el.closest("button")) {
        setCursorType("button");
      } else if (tag === "a" || el.closest("a")) {
        if (sectionId === "contact") setCursorType("contact");
        else setCursorType("link");
      } else if (sectionId === "projects" || classes.includes("project")) {
        setCursorType("project");
      } else if (sectionId === "skills" || sectionId === "experience") {
        setCursorType("design");
      } else if (sectionId === "contact") {
        setCursorType("contact");
      } else {
        setCursorType("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousemove", detectContext);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousemove", detectContext);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, cursorType]);

  // Fade out particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({ ...p, opacity: p.opacity - 0.08 }))
          .filter((p) => p.opacity > 0)
      );
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const variant = CURSOR_VARIANTS[cursorType] || CURSOR_VARIANTS.default;

  if (!isVisible) return null;

  return (
    <>
      {/* Particle trail */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="fixed pointer-events-none z-[9998] rounded-full"
          style={{
            left: p.x - p.size / 2,
            top: p.y - p.size / 2,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            backgroundColor: p.color,
            transform: "translate(-50%, -50%)",
            position: "fixed",
            boxShadow: `0 0 ${p.size * 2}px ${p.color}88`,
          }}
        />
      ))}

      {/* Outer ring */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full border-2 flex items-center justify-center text-[10px] font-bold select-none"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: variant.color,
          width: 44,
          height: 44,
          color: variant.color,
          boxShadow: `0 0 12px ${variant.color}44`,
          transition: "border-color 0.2s ease, box-shadow 0.2s ease, color 0.2s ease",
        }}
        animate={{ scale: cursorType === "button" ? 1.3 : 1 }}
        transition={{ duration: 0.15 }}
      >
        <span style={{ fontSize: cursorType === "project" ? "9px" : "13px" }}>
          {variant.emoji}
        </span>
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: 7,
          height: 7,
          backgroundColor: variant.color,
          boxShadow: `0 0 8px ${variant.color}`,
          transition: "background-color 0.2s ease",
        }}
      />
    </>
  );
}
