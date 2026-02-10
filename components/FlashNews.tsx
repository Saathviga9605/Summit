'use client'

export default function FlashNews() {
  return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-gradient-to-r from-sky-600 to-cyan-600 text-white py-3 overflow-hidden shadow-lg">
      <div className="flex items-center">
        <div className="flex-shrink-0 bg-white text-sky-600 px-4 py-1 font-bold text-sm rounded-r-lg mr-4 ml-4 animate-flash">
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-2 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
            FLASH NEWS
          </span>
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="animate-scroll whitespace-nowrap">
            <span className="inline-block px-8">
              🎉 Early Bird Registrations are now OPEN! Register before March 1st for special discounts!
            </span>
            <span className="inline-block px-8">
              📢 Limited seats available for workshops - Secure your spot today!
            </span>
            <span className="inline-block px-8">
              🏆 Hackathon prizes worth ₹5,00,000 up for grabs!
            </span>
            <span className="inline-block px-8">
              ⭐ Distinguished speakers from leading AI institutions confirmed!
            </span>
            <span className="inline-block px-8">
              🎉 Early Bird Registrations are now OPEN! Register before March 1st for special discounts!
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
