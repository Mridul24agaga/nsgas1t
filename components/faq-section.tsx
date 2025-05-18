"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

type FAQItem = {
  question: string
  answer: string
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqItems: FAQItem[] = [
    {
      question: "What is an AI Agent?",
      answer:
        "An AI Agent is an autonomous software entity that can perceive its environment, make decisions, and take actions to achieve specific goals. Our AI Agents are designed to automate tasks, analyze data, and provide intelligent assistance across various domains.",
    },
    {
      question: "How does SkyAgent work?",
      answer:
        "SkyAgent uses advanced machine learning algorithms to understand your requirements, access relevant data sources, and perform tasks on your behalf. It integrates with your existing workflows and tools, learning from interactions to become more efficient over time.",
    },
    {
      question: "How secure is my data?",
      answer:
        "We take data security extremely seriously. All data is encrypted both in transit and at rest using industry-standard protocols. We implement strict access controls, regular security audits, and comply with major data protection regulations including GDPR and CCPA.",
    },
    {
      question: "Can I integrate my existing tools?",
      answer:
        "Yes, SkyAgent is designed with interoperability in mind. We offer APIs and pre-built integrations for popular business tools, productivity suites, and custom solutions. Our team can also help develop custom integrations for your specific requirements.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial with full access to all features. No credit card is required to start your trial, and you can upgrade to a paid plan at any time to continue using the service.",
    },
    {
      question: "How does SkyAgent save me time?",
      answer:
        "SkyAgent automates repetitive tasks, streamlines complex workflows, and provides instant insights that would otherwise require manual analysis. Our customers report saving an average of 15-20 hours per week by delegating routine tasks to SkyAgent.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full bg-white dark:from-gray-950 dark:to-gray-900 py-20">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
       
          <div className="inline-flex items-center justify-center px-6 py-2 bg-purple-100 dark:bg-purple-900/20 rounded-full mb-4">
            <span className="text-purple-600 dark:text-purple-400 font-medium">Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl font-bold mb-3 text-black dark:text-white">How can we help you?</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Answers to common questions about SkyAgent and its features. If you have any other questions, please don't
            hesitate to contact us.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={cn(
                "border rounded-xl overflow-hidden transition-all duration-200 shadow-sm hover:shadow-md",
                "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",
                openIndex === index ? "ring-2 ring-blue-200 dark:ring-blue-800" : "",
              )}
            >
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-lg">{item.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-blue-500 transition-transform duration-300",
                    openIndex === index ? "transform rotate-180" : "",
                  )}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-2">
                      <motion.p
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="text-gray-600 dark:text-gray-300 leading-relaxed"
                      >
                        {item.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 dark:text-gray-400 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  )
}
