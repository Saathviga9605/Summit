'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Placeholder images for department activities
  const activityImages = [
    '/images/activities/activity1.jpg',
    '/images/activities/activity2.jpg',
    '/images/activities/activity3.jpg',
    '/images/activities/activity4.jpg',
    '/images/activities/activity5.jpg',
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activityImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + activityImages.length) % activityImages.length)
  }

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About SSN College of Engineering */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              About SSN College of Engineering
            </h2>
            <div className="w-24 h-1 bg-sky-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                SSN College of Engineering is an autonomous institution affiliated to Anna University, 
                Chennai. Established in 1996, SSN has emerged as one of the top engineering colleges in India, 
                known for its excellence in education, research, and innovation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Located in the serene campus at Kalavakkam, Chennai, the college offers undergraduate and 
                postgraduate programs in various engineering disciplines. With state-of-the-art infrastructure, 
                world-class faculty, and a strong industry interface, SSN continues to shape the future of 
                engineering education.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-sky-50 p-4 rounded-lg border-l-4 border-sky-500">
                  <div className="text-3xl font-bold text-sky-600">25+</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
                <div className="bg-sky-50 p-4 rounded-lg border-l-4 border-sky-500">
                  <div className="text-3xl font-bold text-sky-600">Top 100</div>
                  <div className="text-gray-600">NIRF Ranking</div>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-cyan-500/20"></div>
              {/* Placeholder for SSN College image */}
              <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                <svg className="w-32 h-32 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* About Department of Information Technology */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Department of Information Technology
            </h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl order-2 md:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-sky-500/20"></div>
              {/* Placeholder for Department image */}
              <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                <svg className="w-32 h-32 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <p className="text-lg text-gray-700 leading-relaxed">
                The Department of Information Technology at SSN College of Engineering is committed to 
                producing industry-ready professionals equipped with cutting-edge knowledge in IT and 
                emerging technologies. The department focuses on areas like Artificial Intelligence, 
                Machine Learning, Data Science, Cloud Computing, and Cybersecurity.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With a team of highly qualified faculty members and excellent laboratory facilities, 
                the department encourages research, innovation, and entrepreneurship among students. 
                Our students consistently excel in academics, competitive exams, placements, and various 
                technical competitions at national and international levels.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
                  <div className="text-3xl font-bold text-cyan-600">500+</div>
                  <div className="text-gray-600">Students Enrolled</div>
                </div>
                <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
                  <div className="text-3xl font-bold text-cyan-600">98%</div>
                  <div className="text-gray-600">Placement Record</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Department Activities Carousel */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Department Activities
            </h2>
            <div className="w-24 h-1 bg-sky-500 mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our vibrant department culture through various events, workshops, and activities
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Carousel Container */}
            <div className="relative h-96 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl overflow-hidden shadow-2xl">
              {/* Placeholder for activity images */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-32 h-32 text-slate-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-600 text-lg">Slide {currentSlide + 1} of {activityImages.length}</p>
                  <p className="text-gray-500 text-sm mt-2">Department Activity Image Placeholder</p>
                </div>
              </div>

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/10 via-transparent to-slate-900/10 pointer-events-none"></div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {activityImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index
                      ? 'bg-sky-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
