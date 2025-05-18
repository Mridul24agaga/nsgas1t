"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function HowItWorksSection() {
  const steps = [
    {
      title: "Create Yuktara Account",
      description:
        "Get access to the best LinkedIn outreach software. It's easy as 1,2,3! Just sign up and connect your LinkedIn account.",
      buttonText: "Get Started",
      imagePath: "/card1.png",
      textColor: "text-indigo-500",
    },
    {
      title: "Run Your First Campaign",
      description: "Search, Scrape Connect on LinkedIn, Follow up with InMail and Email, and even more in one tool!",
      buttonText: "Get Started",
      imagePath: "/card8.webp",
      textColor: "text-indigo-500",
    },
    {
      title: "Enjoy Your Results",
      description:
        "Fill your inbox with positive responses, your pipeline with leads, and generate more sales for your business.",
      buttonText: "Get Started",
      imagePath: "/card9.webp",
      textColor: "text-indigo-500",
    },
  ]

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            Get your next leads in <span className="text-indigo-600">3 simple steps</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Contact your prospects on LinkedIn and by Email via smart automated sequences. Launch your first campaign in
            15 minutes and see results in 24 hours.
          </p>
        </div>

        <div className="mb-8 md:mb-16">
          {/* For large screens: display as a centered flex row (unchanged) */}
          <div className="hidden lg:flex justify-center gap-6 flex-wrap">
            {steps.map((step, index) => (
              <div
                key={`desktop-${index}`}
                className="rounded-2xl bg-white overflow-hidden border-2 border-indigo-100 shadow-lg hover:shadow-xl transition-all duration-300 group w-[350px] xl:w-[400px] flex-shrink-0"
              >
                <div className="p-6 md:p-8 text-center">
                  <h3 className={`text-xl md:text-2xl font-bold mb-2 md:mb-3 ${step.textColor}`}>{step.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">{step.description}</p>
                  <button className="inline-flex items-center px-4 py-2 text-indigo-600 font-medium rounded-md hover:bg-indigo-50 hover:text-indigo-700 transition-colors">
                    {step.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 duration-300" />
                  </button>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 h-60 md:h-72 relative border-t-2 border-indigo-100">
                  <Image
                    src={step.imagePath || "/placeholder.svg?height=600&width=800&query=modern UI illustration"}
                    alt={step.title}
                    fill
                    className="object-cover p-0"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 350px, 400px"
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* For smaller screens: MODIFIED with taller images */}
          <div className="lg:hidden">
            <div className="flex flex-col gap-6">
              {steps.map((step, index) => (
                <div
                  key={`mobile-${index}`}
                  className="rounded-2xl bg-white overflow-hidden border-2 border-indigo-100 shadow-lg transition-all duration-300 group w-full"
                >
                  <div className="p-5 sm:p-6 text-center">
                    <h3 className={`text-lg sm:text-xl font-bold mb-2 ${step.textColor}`}>{step.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                    <button className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 text-sm text-indigo-600 font-medium rounded-md hover:bg-indigo-50 hover:text-indigo-700 transition-colors">
                      {step.buttonText}
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5 sm:ml-2 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1 duration-300" />
                    </button>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 relative border-t-2 border-indigo-100 w-full">
                    <div className="h-[300px] sm:h-[350px] md:h-[400px] w-full relative">
                      <Image
                        src={step.imagePath || "/placeholder.svg?height=600&width=800&query=modern UI illustration"}
                        alt={step.title}
                        fill
                        className="object-cover object-center"
                        sizes="100vw"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
