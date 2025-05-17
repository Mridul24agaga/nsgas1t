"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { FallingProblem } from "./falling-problem"

type Problem = {
  text: string
  color: string
  delay: number
  left: string
  bottom: string
  finalRotation: number
  isVertical: boolean
}

export function PhysicsProblemsSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  const animationTriggered = useRef(false)
  const [isAnimating, setIsAnimating] = useState(false)

  // Define the exact problem pills as shown in the reference image
  const problems: Problem[] = [
    // Top row pills (previously positioned higher)
    {
      text: "Poor Onboarding",
      color: "bg-sky-200",
      finalRotation: -45,
      left: "15%",
      bottom: "70%", // Moved to middle section
      delay: 0.2,
      isVertical: true,
    },
    {
      text: "Low Open Rate",
      color: "bg-yellow-200",
      finalRotation: 0,
      left: "40%",
      bottom: "70%", // Moved to middle section
      delay: 0.5,
      isVertical: false,
    },
    {
      text: "LinkedIn Limits",
      color: "bg-orange-400",
      finalRotation: 90,
      left: "85%",
      bottom: "70%", // Moved to middle section
      delay: 0.2,
      isVertical: true,
    },
    {
      text: "Scraping Quality",
      color: "bg-orange-400",
      finalRotation: 90,
      left: "70%",
      bottom: "60%", // Moved to middle section
      delay: 0.6,
      isVertical: true,
    },

    // Middle row pills
    {
      text: "Lack of Engagement",
      color: "bg-blue-500",
      finalRotation: 0,
      left: "15%",
      bottom: "35%", // Moved to middle section
      delay: 0.3,
      isVertical: false,
    },
    {
      text: "Low Acceptance Rate",
      color: "bg-purple-400",
      finalRotation: 0,
      left: "40%",
      bottom: "35%", // Moved to middle section
      delay: 0.7,
      isVertical: false,
    },
    {
      text: "Account Restrictions",
      color: "bg-purple-300",
      finalRotation: 180,
      left: "75%",
      bottom: "35%", // Moved to middle section
      delay: 0.7,
      isVertical: false,
    },
    {
      text: "Poor Personalization",
      color: "bg-blue-600",
      finalRotation: 0,
      left: "60%",
      bottom: "35%", // Moved to middle section
      delay: 0.4,
      isVertical: false,
    },

    // Bottom row pills - positioned at the very bottom
    {
      text: "Lack of Results",
      color: "bg-orange-200",
      finalRotation: 0,
      left: "10%",
      bottom: "0%", // At the very bottom
      delay: 0.4,
      isVertical: false,
    },
    {
      text: "Cold Messaging",
      color: "bg-purple-500",
      finalRotation: 0,
      left: "30%",
      bottom: "0%", // At the very bottom
      delay: 0.9,
      isVertical: false,
    },
    {
      text: "Preparing the Database",
      color: "bg-yellow-300",
      finalRotation: 0,
      left: "50%",
      bottom: "0%", // At the very bottom
      delay: 0.6,
      isVertical: false,
    },
    {
      text: "Sending Duplicates",
      color: "bg-yellow-300",
      finalRotation: 0,
      left: "70%",
      bottom: "0%", // At the very bottom
      delay: 0.8,
      isVertical: false,
    },
    {
      text: "Low open rate",
      color: "bg-purple-400",
      finalRotation: 180,
      left: "85%",
      bottom: "0%", // At the very bottom
      delay: 0.3,
      isVertical: false,
    },
    {
      text: "No Engagement",
      color: "bg-sky-200",
      finalRotation: 0,
      left: "95%",
      bottom: "0%", // At the very bottom
      delay: 0.5,
      isVertical: false,
    },
  ]

  useEffect(() => {
    if (inView && !animationTriggered.current) {
      animationTriggered.current = true
      setIsAnimating(true)
    }
  }, [inView])

  // Reset animation when scrolling away and back
  useEffect(() => {
    if (!inView) {
      animationTriggered.current = false
      setIsAnimating(false)
    }
  }, [inView])

  return (
    <section ref={ref} className="relative bg-sky-500 py-20 md:py-32 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full grid grid-cols-12 grid-rows-6">
          {Array.from({ length: 12 * 6 }).map((_, i) => (
            <div key={i} className="border border-white/30"></div>
          ))}
        </div>
      </div>

      {/* Sparkles */}
      <div className="absolute top-[20%] left-[20%] text-white text-2xl opacity-70">✨</div>
      <div className="absolute top-[15%] right-[20%] text-white text-2xl opacity-70">✨</div>
      <div className="absolute bottom-[30%] right-[10%] text-white text-2xl opacity-70">✨</div>
      <div className="absolute bottom-[20%] left-[5%] text-white text-xl opacity-50">✨</div>

      <div className="container relative mx-auto px-4 text-center mb-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Struggling with LinkedIn outreach automation?
        </h2>
        <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
          Expandi helps you navigate the world of automated LinkedIn outreach and handle all the problems below in the
          easiest and fastest way
        </p>
      </div>

      {/* Problem Pills Container - Increased height to allow for proper positioning */}
      <div className="relative h-[500px] md:h-[500px] mx-auto max-w-6xl">
        {problems.map((problem, index) => (
          <FallingProblem
            key={index}
            text={problem.text}
            color={problem.color}
            delay={problem.delay}
            left={problem.left}
            bottom={problem.bottom}
            finalRotation={problem.finalRotation}
            isVertical={problem.isVertical}
            isAnimating={isAnimating}
          />
        ))}
      </div>

      {/* Add CSS for vertical text and falling animation */}
      <style jsx global>{`
        .vertical-text {
          writing-mode: vertical-lr;
          text-orientation: mixed;
          white-space: nowrap;
        }

        @keyframes fallDown {
          0% {
            transform: translate3d(0, -500px, 0) rotate(var(--initial-rotation));
            opacity: 0;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translate3d(var(--drift-x), -250px, 0) rotate(calc(var(--initial-rotation) * 0.5 + var(--final-rotation) * 0.5));
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
          }
          100% {
            transform: translate3d(0, 0, 0) rotate(var(--final-rotation));
            opacity: 1;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          }
        }

        @keyframes bounce {
          0% {
            transform: translateY(0) scale(1) rotate(var(--final-rotation));
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          }
          40% {
            transform: translateY(-25px) scale(1.08) rotate(calc(var(--final-rotation) - 5deg));
            box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
          }
          60% {
            transform: translateY(-10px) scale(1.03) rotate(calc(var(--final-rotation) + 3deg));
            box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
          }
          80% {
            transform: translateY(-5px) scale(1.01) rotate(calc(var(--final-rotation) - 1deg));
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.18);
          }
          100% {
            transform: translateY(0) scale(1) rotate(var(--final-rotation));
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          }
        }

        @keyframes settle {
          0% {
            transform: translateY(0) rotate(var(--final-rotation));
          }
          25% {
            transform: translateY(-3px) rotate(calc(var(--final-rotation) + 1deg));
          }
          50% {
            transform: translateY(0) rotate(var(--final-rotation));
          }
          75% {
            transform: translateY(-1px) rotate(calc(var(--final-rotation) - 0.5deg));
          }
          100% {
            transform: translateY(0) rotate(var(--final-rotation));
          }
        }
      `}</style>
    </section>
  )
}