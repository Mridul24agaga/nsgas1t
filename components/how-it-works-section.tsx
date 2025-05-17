"use client"

import { UserCircle, BarChart2, MessageSquare } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      title: "Create Yuktara Account",
      description:
        "Get access to the best LinkedIn outreach software. It's easy as 1,2,3! Just sign up and connect your LinkedIn account.",
      icon: <UserCircle className="w-16 h-16 stroke-[1.5] text-blue-500" />,
      color: "bg-blue-50",
      buttonText: "Get Started",
    },
    {
      title: "Run Your First Campaign",
      description: "Search, Scrape Connect on LinkedIn, Follow up with InMail and Email, and even more in one tool!",
      icon: <BarChart2 className="w-16 h-16 stroke-[1.5] text-yellow-500" />,
      color: "bg-yellow-50",
      buttonText: "Get Started",
    },
    {
      title: "Enjoy Your Results",
      description:
        "Fill your inbox with positive responses, your pipeline with leads, and generate more sales for your business.",
      icon: <MessageSquare className="w-16 h-16 stroke-[1.5] text-purple-500" />,
      color: "bg-purple-50",
      buttonText: "Get Started",
    },
  ]

  const stats = [
    {
      value: ">15000",
      label: "Yuktara Users",
    },
    {
      value: "2500",
      label: "Agencies",
    },
    {
      value: "63%",
      label: "Avg. Connection rate",
    },
    {
      value: "17%",
      label: "Avg. Reply rate",
    },
    {
      value: "3x",
      label: "Revenue growth",
    },
  ]

  return (
    <section className="py-12 md:py-20 bg-white font-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

        .step-card {
          border-radius: 16px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .step-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .stats-container {
          border-radius: 16px;
          background-color: #22a7f0;
          color: white;
          overflow: hidden;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        @media (min-width: 640px) {
          .stats-grid {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }

        @media (min-width: 1024px) {
          .stats-grid {
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
          }
        }

        .stat-item {
          padding: 1rem;
          text-align: center;
          position: relative;
        }

        .stat-item:not(:last-child)::after {
          content: "";
          position: absolute;
          right: 0;
          top: 25%;
          height: 50%;
          width: 1px;
          background-color: rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 1023px) {
          .stat-item:nth-child(5)::after {
            display: none;
          }
          
          .stat-item:nth-child(3)::after {
            display: none;
          }
        }

        @media (max-width: 639px) {
          .stat-item:nth-child(even)::after {
            display: none;
          }
        }

        .get-started-btn {
          display: inline-flex;
          align-items: center;
          font-weight: 500;
          transition: transform 0.2s ease;
        }

        .get-started-btn:hover {
          transform: translateX(5px);
        }

        .get-started-btn svg {
          transition: transform 0.2s ease;
        }

        .get-started-btn:hover svg {
          transform: translateX(3px);
        }
        
        .icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 md:mb-16 gap-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
            Get your next leads in{" "}
            <span className="inline-block bg-blue-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-md">
              3 simple steps
            </span>
          </h2>
          <div className="max-w-md">
            <p className="text-black text-sm md:text-base">
              Contact your prospects on LinkedIn and by Email via smart automated sequences. Launch your first campaign
              in 15 minutes and see results in 24 hours. It's easy as 1-2-3!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {steps.map((step, index) => (
            <div key={index} className={`step-card ${step.color} p-6 md:p-10`}>
              <div className="icon-container">{step.icon}</div>

              <h3 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4 text-center">{step.title}</h3>

              <p className="text-black text-sm md:text-base mb-6 md:mb-8 text-center">{step.description}</p>

              <div className="mt-auto text-center">
                <button className="get-started-btn text-black">
                  {step.buttonText} <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="stats-container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
