export default function ResearchSymposium() {
  const features = [
    {
      title: 'Frontier Sessions',
      description: 'Explore the latest breakthroughs in AI research',
    },
    {
      title: 'Academic Presentations',
      description: 'Learn from leading researchers and scholars',
    },
    {
      title: 'Poster Showcase',
      description: 'Discover innovative research projects',
    },
  ]

  return (
    <section id="research" className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Research Symposium on AI and its Impact
            </h2>
            <p className="text-xl text-sky-100 mb-8">
              Dive deep into the transformative potential of artificial intelligence 
              and its applications across various domains.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sky-100">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Innovation Hub</h4>
                      <p className="text-sky-200 text-sm">Cutting-edge research</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Collaboration</h4>
                      <p className="text-sky-200 text-sm">Network with experts</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Impact</h4>
                      <p className="text-sky-200 text-sm">Real-world applications</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-sky-600 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
