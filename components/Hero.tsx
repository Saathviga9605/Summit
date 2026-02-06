import HeroBackground from './HeroBackground';

export default function Hero() {
  // Toggle to enable/disable animated background
  const enableAnimatedBackground = true;

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white pt-16 overflow-hidden"
    >
      {/* AI-themed animated background component */}
      <HeroBackground enabled={enableAnimatedBackground} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo Area */}
        <div className="flex justify-center items-center space-x-8 mb-8">
          <div className="text-left">
            {/* <div className="text-6xl font-bold mb-2">SSN</div>
            <div className="text-xl">College of Engineering</div> */}
          </div>
          {/* <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center">
            <div className="text-center">
              <div className="text-sm font-semibold">AI SUMMIT</div>
              <div className="text-2xl font-bold">2026</div>
            </div>
          </div> */}
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-sky-200 to-cyan-300 bg-clip-text text-transparent">
          SSN AI Summit 2026
        </h1>

        <div className="text-2xl md:text-3xl mb-4 text-sky-100">
          March 25 - 28, 2026
        </div>

        <div className="text-xl md:text-2xl mb-8 text-sky-200">
          @ SSN College of Engineering, Chennai
        </div>

        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-100">
          Advancing AI for societal impact and innovation
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://aissn.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            Register Now
          </a>
          <a
            href="#event-highlights"
            className="bg-transparent border-2 border-sky-400 hover:bg-slate-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all"
          >
            Learn More
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-sky-300"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}
