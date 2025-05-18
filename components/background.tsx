"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface BackgroundTextEffectProps {
  text: string
  className?: string
}

export const BackgroundTextEffect = ({ text, className = "" }: BackgroundTextEffectProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [fontSize, setFontSize] = useState("180px")

  // Adjust font size based on container width
  useEffect(() => {
    const updateFontSize = () => {
      if (!containerRef.current) return

      const containerWidth = containerRef.current.offsetWidth
      // Calculate font size based on container width
      const charCount = text.length
      const calculatedSize = Math.min(180, containerWidth / (charCount * 0.6))

      setFontSize(`${calculatedSize}px`)
    }

    // Initial calculation
    updateFontSize()

    // Update on resize
    window.addEventListener("resize", updateFontSize)
    return () => window.removeEventListener("resize", updateFontSize)
  }, [text])

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Main text with higher opacity */}
      <motion.p
        className="select-none font-bold text-black dark:text-white"
        style={{
          fontSize,
          opacity: 0.25, // Increased from 0.1 to 0.25 for better visibility
        }}
        animate={{
          opacity: [0.25, 0.3, 0.25], // Subtle pulsing effect
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.p>

      {/* Glowing effect overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
        }}
        animate={{
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
    </div>
  )
}
