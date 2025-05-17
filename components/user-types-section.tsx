import { User, Code, Mic, Briefcase } from 'lucide-react'

export function UserTypesSection() {
  const userTypes = [
    {
      icon: <User className="h-6 w-6" />,
      emoji: "👩‍💼",
      title: "The Novice",
      description: "New to LinkedIn? Get guidance, ideas, and your first viral post.",
      color: "bg-blue-100",
      textColor: "text-blue-700",
      iconColor: "text-blue-500",
    },
    {
      icon: <Code className="h-6 w-6" />,
      emoji: "👨‍💻",
      title: "The Career Pro",
      description: "Busy schedule? Let Yuktara optimize your time and output.",
      color: "bg-purple-100",
      textColor: "text-purple-700",
      iconColor: "text-purple-500",
    },
    {
      icon: <Mic className="h-6 w-6" />,
      emoji: "🎙️",
      title: "The Influence Seeker",
      description: "Ready to grow your audience? Build a content engine that doesn't stop.",
      color: "bg-pink-100",
      textColor: "text-pink-700",
      iconColor: "text-pink-500",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      emoji: "💼",
      title: "The Business Developer",
      description: "Looking for leads? Build authority and attract the right connections.",
      color: "bg-green-100",
      textColor: "text-green-700",
      iconColor: "text-green-500",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">For Every Kind of LinkedIn User</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            No matter where you are in your LinkedIn journey, Yuktara has the tools you need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {userTypes.map((userType, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className={`${userType.color} p-6 flex justify-center`}>
                <div className="text-5xl">{userType.emoji}</div>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold ${userType.textColor} mb-3`}>{userType.title}</h3>
                <p className="text-gray-600">{userType.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}