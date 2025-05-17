export function CtaBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-500">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Grow on LinkedIn without guesswork.</h2>
          <p className="text-xl text-white/90 mb-8">
            Connect your profile. Get your first AI-powered insights in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="px-8 py-3 bg-white text-purple-600 font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              Start Free Now →
            </a>
            <a
              href="#"
              className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}