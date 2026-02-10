import HeroBackground from './HeroBackground';

export default function Hero() {
  // Toggle to enable/disable animated background
  const enableAnimatedBackground = true;

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white pt-24 pb-12 overflow-hidden"
    >
      {/* AI-themed animated background component */}
      <HeroBackground enabled={enableAnimatedBackground} />

      {/* Floating AI Code Snippets */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        {[
          { text: 'import neural_net', top: '15%', left: '10%', delay: '0s' },
          { text: 'model.predict()', top: '25%', right: '15%', delay: '2s' },
          { text: 'tensorflow.keras', top: '65%', left: '8%', delay: '4s' },
          { text: 'def train_model():', top: '75%', right: '12%', delay: '6s' },
          { text: 'accuracy: 99.8%', top: '45%', left: '5%', delay: '3s' },
          { text: 'transformer.forward()', top: '55%', right: '8%', delay: '5s' },
        ].map((snippet, i) => (
          <div
            key={i}
            className="absolute text-cyan-300 font-mono text-sm animate-float-slow"
            style={{
              top: snippet.top,
              left: snippet.left,
              right: snippet.right,
              animationDelay: snippet.delay,
            }}
          >
            {snippet.text}
          </div>
        ))}
      </div>

      {/* Binary Data Stream */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
        {[...Array(8)].map((_, col) => (
          <div
            key={col}
            className="absolute top-0 text-sky-400 font-mono text-xs whitespace-nowrap animate-data-stream"
            style={{
              left: `${10 + col * 12}%`,
              animationDelay: `${col * 0.5}s`,
              animationDuration: '15s',
            }}
          >
            {Array.from({ length: 40 }, () => Math.random() > 0.5 ? '1' : '0').join('')}
          </div>
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-32 left-32 w-40 h-40 bg-sky-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }} />

      {/* AI Icon Constellation */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {[
          { icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', top: '20%', left: '15%' },
          { icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', top: '70%', right: '18%' },
          { icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z', top: '35%', right: '10%' },
        ].map((item, i) => (
          <svg
            key={i}
            className="absolute w-12 h-12 text-cyan-400 animate-float-slow"
            style={{ top: item.top, left: item.left, right: item.right, animationDelay: `${i * 2}s` }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
          </svg>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-sky-200 via-cyan-300 to-sky-200 bg-clip-text text-transparent animate-gradient">
          AI for Advancing Humanity
        </h1>

        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-500/20 to-transparent h-px"></div>
          <p className="text-xl md:text-2xl py-6 max-w-3xl mx-auto text-gray-100 font-light relative">
            <span className="inline-block bg-gradient-to-r from-cyan-200 to-sky-200 bg-clip-text text-transparent font-medium">
              Engineering the future of Intelligence
            </span>
          </p>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-500/20 to-transparent h-px bottom-0"></div>
        </div>

        <div className="text-xl md:text-2xl mb-4 text-sky-200 font-light">
          <span className="inline-flex items-center space-x-2">
            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span>Department of Information Technology</span>
          </span>
        </div>

        <div className="text-xl md:text-2xl mb-4 text-sky-200 font-light">
          <span className="inline-flex items-center space-x-2">
            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>SSN College of Engineering, Chennai</span>
          </span>
        </div>

        <div className="text-2xl md:text-3xl mb-12 text-sky-100 font-light">
          <span className="inline-flex items-center space-x-2">
            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>March 25 - 28, 2026</span>
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://aissn.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-sky-500/50 hover:shadow-xl hover:shadow-sky-500/60"
          >
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>Register Now</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
          </a>
          
          <a
            href="/brochure.pdf" // Replace with actual brochure URL
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-sky-500/50 hover:shadow-xl hover:shadow-sky-500/60"
          >
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download Brochure</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
          </a>
        </div>
      </div>
    </section>
  )
}
