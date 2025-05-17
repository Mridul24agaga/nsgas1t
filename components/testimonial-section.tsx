import Image from "next/image"
import { Star } from 'lucide-react'

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "I landed 3 interviews within a week of using Yuktara's profile audit and post planner.",
      author: "Aarav S.",
      role: "Software Engineer",
      avatar: "/testimonial-avatar-1.png",
      stars: 5,
    },
    {
      quote: "It's like having a personal LinkedIn ghostwriter + growth strategist in one.",
      author: "Mira P.",
      role: "Marketing Consultant",
      avatar: "/testimonial-avatar-2.png",
      stars: 5,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            See how professionals like you are transforming their LinkedIn presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <blockquote className="text-xl text-gray-700 italic mb-6">"{testimonial.quote}"</blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={`/professional-headshot.png?height=48&width=48&query=professional ${
                      index === 0 ? "man" : "woman"
                    } headshot`}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}