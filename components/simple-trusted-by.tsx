import Image from "next/image"

export function SimpleTrustedBy() {
  // Company logos data - simplified version
  const companies = [
    { name: "Intercom", logo: "/generic-chat-bubble-logo.png" },
    { name: "Trigify.io", logo: "/trigify-logo.png" },
    { name: "Clay", logo: "/clay-logo.png" },
    { name: "ContactOut", logo: "/placeholder-9tuly.png" },
    { name: "Coldiq", logo: "/placeholder-bvywn.png" },
    { name: "Replicate", logo: "/placeholder-tuk23.png" },
    { name: "OneAway", logo: "/placeholder-jn5fr.png" },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-gray-800">Trusted by 1,600+ companies, including:</h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-4xl mx-auto">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center justify-center h-10">
              <Image
                src={company.logo || "/placeholder.svg"}
                alt={company.name}
                width={120}
                height={40}
                className="max-h-8 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}