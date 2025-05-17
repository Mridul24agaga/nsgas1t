"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

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
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
        <p className="text-gray-600">
          Answers to common questions about SkyAgent and its features. If you have any other questions, please don't
          hesitate to contact us.
        </p>
      </div>

      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-md overflow-hidden">
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                  openIndex === index ? "transform rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4">
                <p className="text-gray-600">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
