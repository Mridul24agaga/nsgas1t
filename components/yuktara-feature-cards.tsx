"use client"

import Image from "next/image"
// No icon imports needed

export function YuktaraFeatureCards() {
  const features = [
    {
      title: "Elevate Your LinkedIn Profile",
      description:
        "Transform your professional presence with AI-powered optimization that attracts the right connections.",
      color: "#4AB981", // green
      bulletPoints: ["Smart profile analysis", "Strategic keyword placement", "Competitive edge insights"],
      imagePath: "/card1.webp", // You'll replace with your generated image
    },
    {
      title: "Content That Sounds Like You",
      description: "Effortlessly create posts that reflect your authentic voice and resonate with your audience.",
      color: "#776BD8", // purple
      bulletPoints: ["Voice-matched content", "Engagement-optimized posts", "Authentic storytelling"],
      imagePath: "/card2.webp", // You'll replace with your generated image
    },
    {
      title: "Perfect Timing, Every Time",
      description: "Let AI determine when your audience is most active and schedule your content for maximum impact.",
      color: "#708ADC", // blue
      bulletPoints: ["Peak engagement timing", "Automated publishing", "Cross-platform coordination"],
      imagePath: "/card4.webp", // You'll replace with your generated image
    },
    {
      title: "Build Genuine Connections",
      description: "Nurture your network with intelligent engagement suggestions that feel personal and meaningful.",
      color: "#DD4366", // pink
      bulletPoints: ["Intelligent conversation starters", "Relationship nurturing", "Network expansion"],
      imagePath: "/card5.webp", // You'll replace with your generated image
    },
    {
      title: "Data-Driven Growth Strategy",
      description:
        "Gain clear insights into what works and continuously refine your LinkedIn presence for optimal results.",
      color: "#CC9335", // amber
      bulletPoints: ["Performance visualization", "Content effectiveness metrics", "Growth trajectory insights"],
      imagePath: "/card6.webp", // You'll replace with your generated image
    },
  ]

  return (
    <section className="py-20 bg-white font-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        body {
          font-family: 'Poppins', sans-serif;
        }

        .feature-card {
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          background: white;
          transition: transform 0.3s ease, border 0.3s ease;
          border: 1px solid #f0f0f0;
          position: relative;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 16px;
          padding: 2px;
          background: linear-gradient(45deg, transparent 50%, rgba(139, 92, 246, 0.3), transparent);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        @media (min-width: 768px) {
          .feature-card {
            flex-direction: row;
            height: 400px;
          }
        }

        .feature-card:hover {
          transform: translateY(-5px);
          border-color: transparent;
        }
        
        .feature-card:hover::before {
          opacity: 1;
        }

        .feature-content {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          z-index: 1;
          font-family: 'Poppins', sans-serif;
        }

        .feature-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
        }

        .bullet-point {
          display: flex;
          align-items: center;
          margin-bottom: 0.75rem;
          color: #000000;
        }

        .bullet-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          margin-right: 12px;
          flex-shrink: 0;
        }

        .badge {
          background-color: #f3e8ff;
          color: #9333ea;
          font-weight: 500;
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          display: inline-block;
          margin-bottom: 1.5rem;
        }

        .feature-image-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          z-index: 2;
        }

        .feature-image {
          width: 100%;
          height: auto;
          max-width: 400px;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .feature-card:hover .feature-image {
          transform: translateY(-5px);
        }

        /* Decorative elements */
        .visual-decoration {
          position: absolute;
          z-index: 1;
        }

        .decoration-line {
          position: absolute;
          background-color: rgba(255, 255, 255, 0.1);
          z-index: 1;
        }

        .decoration-line-1 {
          height: 100%;
          width: 1px;
          left: 25%;
          top: 0;
        }

        .decoration-line-2 {
          height: 100%;
          width: 1px;
          left: 75%;
          top: 0;
        }

        .decoration-line-3 {
          height: 1px;
          width: 100%;
          left: 0;
          top: 25%;
        }

        .decoration-line-4 {
          height: 1px;
          width: 100%;
          left: 0;
          top: 75%;
        }

        .decoration-circle {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          z-index: 1;
        }

        .decoration-circle-1 {
          width: 120px;
          height: 120px;
          top: -60px;
          right: -60px;
        }

        .decoration-circle-2 {
          width: 80px;
          height: 80px;
          bottom: -40px;
          left: -40px;
        }
      `}</style>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="badge">Introducing Yuktara</div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
            LinkedIn Success on
            <br />
            Autopilot
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            The all-in-one platform that elevates your professional presence without the daily grind.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-content md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">{feature.title}</h3>
                <p className="text-black mb-8">{feature.description}</p>

                <div className="mt-auto space-y-2 mb-8">
                  {feature.bulletPoints.map((point, i) => (
                    <div key={i} className="bullet-point">
                      <div className="bullet-dot" style={{ backgroundColor: feature.color }}></div>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="feature-visual md:w-1/2"
                style={{
                  backgroundColor: feature.color,
                }}
              >
                {/* Decorative elements */}
                <div className="decoration-line decoration-line-1"></div>
                <div className="decoration-line decoration-line-2"></div>
                <div className="decoration-line decoration-line-3"></div>
                <div className="decoration-line decoration-line-4"></div>
                <div className="decoration-circle decoration-circle-1"></div>
                <div className="decoration-circle decoration-circle-2"></div>

                {/* Image container */}
                <div className="feature-image-container">
                  {/* For now, using placeholder images - replace with your generated images */}
                  <Image
                    src={feature.imagePath || "/placeholder.svg"}
                    alt={feature.title}
                    width={800}
                    height={600}
                    className="feature-image"
                    // Fallback to placeholder until you have the real images
                    unoptimized
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `/placeholder.svg?height=600&width=800&query=${encodeURIComponent(
                        `Minimalist illustration for ${feature.title} on ${feature.color} background`,
                      )}`
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
