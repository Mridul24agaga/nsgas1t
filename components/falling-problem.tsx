"use client"

import { useEffect, useRef } from "react"

type FallingProblemProps = {
  text: string
  color: string
  delay: number
  left: string
  bottom: string
  finalRotation: number
  isVertical: boolean
  isAnimating: boolean
}

export function FallingProblem({
  text,
  color,
  delay,
  left,
  bottom,
  finalRotation,
  isVertical,
  isAnimating,
}: FallingProblemProps) {
  const problemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!problemRef.current || !isAnimating) return

    const element = problemRef.current

    // Set CSS variables for the animations
    element.style.setProperty("--final-rotation", `${finalRotation}deg`)
    element.style.setProperty("--delay", `${delay}s`)

    // Slightly randomize fall duration for natural effect
    const fallDuration = 1.4 + Math.random() * 0.6
    element.style.setProperty("--fall-duration", `${fallDuration}s`)

    // Random initial rotation
    const initialRotation = Math.random() * 360
    element.style.setProperty("--initial-rotation", `${initialRotation}deg`)

    // Random horizontal drift during fall
    const driftX = Math.random() * 40 - 20 // -20px to +20px
    element.style.setProperty("--drift-x", `${driftX}px`)

    // Apply animations
    element.style.animation = `
      fallDown var(--fall-duration) cubic-bezier(0.45, 0, 0.55, 1) var(--delay) forwards,
      bounce 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) calc(var(--delay) + var(--fall-duration)) forwards,
      settle 1s ease-in-out calc(var(--delay) + var(--fall-duration) + 0.5s) forwards
    `
  }, [isAnimating, finalRotation, delay])

  // Calculate padding based on orientation
  const paddingClasses = isVertical ? "px-4 py-8" : "px-8 py-4"
  const textClasses = isVertical ? "vertical-text" : ""

  return (
    <div
      ref={problemRef}
      className={`absolute ${paddingClasses} rounded-full text-lg md:text-xl font-medium text-black shadow-lg ${color} cursor-grab active:cursor-grabbing hover:brightness-110 transition-all duration-300`}
      style={{
        left: left,
        bottom: bottom,
        opacity: 0,
        transformOrigin: "center center",
        zIndex: Math.floor(Math.random() * 10),
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
        transform: "translateY(-500px)",
      }}
    >
      <span className={textClasses}>{text}</span>
    </div>
  )
}