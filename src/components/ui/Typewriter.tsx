"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export default function Typewriter({
  words,
  className = "",
  typingSpeed = 80,
  deletingSpeed = 45,
  pauseTime = 1800,
}: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPausing, setIsPausing] = useState(false);

  useEffect(() => {
    if (isPausing) return;

    const targetWord = words[currentWordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = targetWord.slice(0, currentText.length + 1);
        setCurrentText(next);
        if (next === targetWord) {
          setIsPausing(true);
          setTimeout(() => {
            setIsPausing(false);
            setIsDeleting(true);
          }, pauseTime);
        }
      } else {
        const next = currentText.slice(0, currentText.length - 1);
        setCurrentText(next);
        if (next === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPausing, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={className}>
      {currentText}
      <span className="inline-block w-[2px] h-[1em] bg-violet-400 ml-1 align-middle animate-pulse" />
    </span>
  );
}
