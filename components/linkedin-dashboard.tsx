"use client"

import { Search, Zap, Sparkles } from "lucide-react"
import { Poppins } from "next/font/google"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

// Initialize the Poppins font with specific weights
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export function LinkedInContentLanding() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  }

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
      },
    },
  }

  return (
    <div
      className={`min-h-screen w-full flex items-center justify-center ${poppins.variable} font-sans relative overflow-hidden bg-gradient-to-b from-white to-gray-50`}
      style={{ perspective: "1000px" }}
    >
      {/* Enhanced 3D grid background */}
      <div className="absolute inset-0 w-full h-full perspective-1000">
        {/* 3D Grid container with perspective */}
        <div className="absolute inset-0 w-full h-full" style={{ perspective: "1000px" }}>
          {/* Animated floating 3D boxes */}
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={`box-${i}`}
              className="absolute rounded-lg bg-gradient-to-br from-purple-100/30 to-blue-100/30 backdrop-blur-sm border border-white/20"
              style={{
                width: `${Math.random() * 8 + 4}rem`,
                height: `${Math.random() * 8 + 4}rem`,
                left: `${Math.random() * 85}%`,
                top: `${Math.random() * 85}%`,
                zIndex: 1,
                boxShadow: "0 4px 30px rgba(59, 130, 246, 0.1), 0 1px 3px rgba(147, 51, 234, 0.05)",
              }}
              initial={{
                opacity: 0.7,
                rotateX: Math.random() * 20 - 10,
                rotateY: Math.random() * 20 - 10,
                rotateZ: Math.random() * 10 - 5,
              }}
              animate={{
                opacity: [0.5, 0.7, 0.5],
                rotateX: [Math.random() * 20 - 10, Math.random() * 20 - 10],
                rotateY: [Math.random() * 20 - 10, Math.random() * 20 - 10],
                rotateZ: [Math.random() * 10 - 5, Math.random() * 10 - 5],
                y: [0, Math.random() * 20 - 10, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Horizontal grid lines with 3D effect */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <motion.div
              key={`h-${i}`}
              className="absolute w-full h-[1px] left-0"
              style={{
                top: `${i * 12.5}%`,
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(147, 51, 234, 0.4) 25%, rgba(59, 130, 246, 0.4) 50%, rgba(147, 51, 234, 0.4) 75%, transparent 100%)",
                opacity: 0.15,
                boxShadow: "0 0 8px rgba(147, 51, 234, 0.2), 0 0 16px rgba(59, 130, 246, 0.2)",
                transformStyle: "preserve-3d",
              }}
              initial={{ opacity: 0.1, rotateX: -5 }}
              animate={{
                opacity: [0.1, 0.2, 0.1],
                z: [0, 5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}

          {/* Vertical grid lines with 3D effect */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <motion.div
              key={`v-${i}`}
              className="absolute h-full w-[1px] top-0"
              style={{
                left: `${i * 12.5}%`,
                background:
                  "linear-gradient(180deg, transparent 0%, rgba(147, 51, 234, 0.4) 25%, rgba(59, 130, 246, 0.4) 50%, rgba(147, 51, 234, 0.4) 75%, transparent 100%)",
                opacity: 0.15,
                boxShadow: "0 0 8px rgba(147, 51, 234, 0.2), 0 0 16px rgba(59, 130, 246, 0.2)",
                transformStyle: "preserve-3d",
              }}
              initial={{ opacity: 0.1, rotateY: 5 }}
              animate={{
                opacity: [0.1, 0.2, 0.1],
                z: [0, 5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* Enhanced gradient orbs for 3D effect */}
        <motion.div
          className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Additional floating orbs for depth */}
        <motion.div
          className="absolute top-2/3 left-1/4 w-40 h-40 rounded-full bg-cyan-400/10 blur-2xl"
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-60 h-60 rounded-full bg-indigo-500/10 blur-2xl"
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 14,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content container with animations */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center px-4 py-24 w-full max-w-6xl mx-auto my-auto"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge with animation */}
          <motion.div
            className="mb-8 inline-flex items-center rounded-full border border-transparent bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-1.5 text-sm font-medium text-purple-600 shadow-md"
            variants={itemVariants}
          >
            <Zap className="mr-1.5 h-3.5 w-3.5 text-blue-500" />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-medium">
              Backed by Top Creators, built for career impact
            </span>
          </motion.div>

          {/* Headline with animation */}
          <motion.h1
            className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
            variants={itemVariants}
          >
            Your{" "}
            <span className="text-blue-600 relative">
              AI Co-Pilot
              <span className="absolute bottom-1 left-0 w-full h-1 bg-blue-200 rounded-full opacity-50"></span>
            </span>{" "}
            for
            <br />
            <span className="text-purple-600 relative">
              LinkedIn Growth
              <span className="absolute bottom-1 left-0 w-full h-1 bg-purple-200 rounded-full opacity-50"></span>
            </span>
          </motion.h1>

          {/* Subheadline with animation */}
          <motion.p className="mb-10 text-xl text-gray-700" variants={itemVariants}>
            Build your personal brand, boost engagement, and grow your opportunities—on autopilot.
          </motion.p>

          {/* Feature points with staggered animations */}
          <motion.div className="mb-10 mt-8 flex flex-wrap items-center justify-center gap-4" variants={itemVariants}>
            <motion.div
              className="flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm hover:shadow-md transition-shadow duration-300"
              variants={featureVariants}
            >
              <Search className="mr-2 h-4 w-4 text-blue-500" />
              <span className="text-sm font-medium text-gray-700">Search viral posts for inspiration</span>
            </motion.div>

            <motion.div
              className="flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm hover:shadow-md transition-shadow duration-300"
              variants={featureVariants}
            >
              <svg
                className="mr-2 h-4 w-4 text-purple-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
              </svg>
              <span className="text-sm font-medium text-gray-700">Pick from 200+ templates that work</span>
            </motion.div>

            <motion.div
              className="flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm hover:shadow-md transition-shadow duration-300"
              variants={featureVariants}
            >
              <Sparkles className="mr-2 h-4 w-4 text-purple-500" />
              <span className="text-sm font-medium text-gray-700">Let AI turn your raw ideas into viral posts</span>
            </motion.div>
          </motion.div>

          {/* CTA Buttons with animations */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
            variants={itemVariants}
          >
            {/* Primary CTA Button */}
            <motion.button
              className="rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 px-8 py-4 text-lg font-medium text-white shadow-lg transition-all hover:shadow-xl hover:translate-y-[-2px] w-full sm:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              → Get Free Profile Analysis
            </motion.button>

            {/* Secondary CTA Button */}
            <motion.button
              className="rounded-xl bg-white border border-gray-200 px-8 py-4 text-lg font-medium text-gray-800 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md w-full sm:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Features ↓
            </motion.button>
          </motion.div>

          {/* Social proof */}
          <motion.div className="mt-12 flex flex-col items-center" variants={itemVariants}>
            <p className="text-sm text-gray-500 mb-4">Trusted by professionals from</p>
            <div className="flex flex-wrap justify-center gap-6 opacity-70">
              {["Google", "Microsoft", "Amazon", "Meta", "LinkedIn"].map((company) => (
                <span key={company} className="text-sm font-medium text-gray-600">
                  {company}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
