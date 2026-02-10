'use client'

import { useState } from 'react'
import EventModal from './EventModal'

export default function EventHighlights() {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null)

  const highlights = [
    {
      id: 'hackathon',
      title: 'Hackathon',
      description: 'Collaborative coding competition',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      id: 'project-expo',
      title: 'Project Expo',
      description: 'Showcase AI innovations and projects',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 'speakers',
      title: 'Eminent Speakers',
      description: 'Leading AI experts from India',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
    },
    {
      id: 'workshops',
      title: 'Workshops',
      description: 'Hands-on learning and training',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
  ]

  const getModalContent = (id: string) => {
    switch (id) {
      case 'hackathon':
        return (
          <div className="space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed">
              Participate in our intensive 24-hour AI hackathon where teams collaborate to solve real-world challenges using artificial intelligence.
            </p>
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Event Details</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  <span>Duration: 24 hours of continuous coding</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  <span>Team size: 2-4 members</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  <span>Themes: Healthcare AI, Climate Tech, Education Technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  <span>Prizes worth ₹5,00,000 for winning teams</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  <span>Mentorship from industry experts throughout the event</span>
                </li>
              </ul>
            </div>
          </div>
        )
      case 'project-expo':
        return (
          <div className="space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed">
              Showcase your innovative AI projects and research to industry leaders, investors, and fellow enthusiasts at our comprehensive project exhibition.
            </p>
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Exhibition Highlights</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  <span>Open to students, researchers, and startups</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  <span>Categories: Computer Vision, NLP, Robotics, ML Applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  <span>Live demonstrations and interactive sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  <span>Networking opportunities with industry professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  <span>Best project awards in multiple categories</span>
                </li>
              </ul>
            </div>
          </div>
        )
      case 'speakers':
        return (
          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              Learn from distinguished AI experts and industry leaders who are shaping the future of artificial intelligence in India and globally.
            </p>
            <div className="space-y-4">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Featured Speakers</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-sky-500 pl-4">
                    <h4 className="font-semibold text-slate-800">Leading AI Researchers</h4>
                    <p className="text-gray-600">Renowned professors and scientists from premier institutions like IITs, IISc, and international universities</p>
                  </div>
                  <div className="border-l-4 border-sky-500 pl-4">
                    <h4 className="font-semibold text-slate-800">Industry Pioneers</h4>
                    <p className="text-gray-600">AI leaders from top tech companies and innovative startups transforming industries</p>
                  </div>
                  <div className="border-l-4 border-sky-500 pl-4">
                    <h4 className="font-semibold text-slate-800">Policy Makers & Ethics Experts</h4>
                    <p className="text-gray-600">Specialists discussing AI governance, ethics, and societal impact</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Talk Topics</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">•</span>
                    <span>Latest advances in Large Language Models</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">•</span>
                    <span>AI for social good and sustainable development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">•</span>
                    <span>Computer vision and its applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">•</span>
                    <span>AI in healthcare and medical research</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">•</span>
                    <span>Building AI-driven businesses and startups</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )
      case 'workshops':
        return (
          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              Gain hands-on experience with cutting-edge AI technologies through our comprehensive workshop programs designed for different skill levels.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-lg border-2 border-sky-200">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  College Students Workshops
                </h3>
                <p className="text-gray-700 mb-4">Advanced workshops for college students and professionals</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">•</span>
                    <span><strong>Workshop 1: Quantum Computing</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">•</span>
                    <span>Explore quantum computing principles and applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">•</span>
                    <span><strong>Workshop 2: AI Walkthrough</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">•</span>
                    <span>Comprehensive guide to AI technologies and implementations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">•</span>
                    <span>Hands-on experience with modern AI frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">•</span>
                    <span>Certificates of completion included for both workshops</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-lg border-2 border-indigo-200">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  School Students Workshop
                </h3>
                <p className="text-gray-700 mb-4">Specially designed for school students</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span><strong>Introduction to AR/VR</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Discover the exciting world of Augmented and Virtual Reality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Experience immersive AR/VR demonstrations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Create your own simple AR/VR projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Certificate of participation included</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Workshop Schedule</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-start">
                  <span className="text-sky-600 font-bold mr-2">Day 1:</span>
                  <span className="text-gray-700">One workshop session</span>
                </div>
                <div className="flex items-start">
                  <span className="text-sky-600 font-bold mr-2">Day 2:</span>
                  <span className="text-gray-700">Two workshop sessions</span>
                </div>
              </div>
              <p className="text-gray-700">
                <strong>Note:</strong> All workshops include hands-on sessions, take-home materials, and certificates of completion.
              </p>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <>
      <section id="event-highlights" className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Event Highlights
            </h2>
            <div className="w-24 h-1 bg-sky-500 mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Click on any event to learn more about what we have in store for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight) => (
              <div
  key={highlight.id}
  id={highlight.id}
  onClick={(e) => {
    e.preventDefault();
    if (highlight.id === 'project-expo') {
      window.open('https://vivid-website-pi.vercel.app/', '_blank');
    } else {
      setSelectedEvent(highlight.id);
    }
  }}
  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border-t-4 border-sky-500 cursor-pointer group"
>
  <div className="text-sky-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
    {highlight.icon}
  </div>
  <h3 className="text-2xl font-bold text-slate-800 mb-3 text-center">
    {highlight.title}
  </h3>
  <p className="text-gray-600 text-center leading-relaxed mb-4">
    {highlight.description}
  </p>
  <div className="text-center">
    <span className="text-sky-600 text-sm font-semibold group-hover:underline">
      {highlight.id === 'project-expo' ? 'Visit Project Expo →' : 'Click for more info →'}
    </span>
  </div>
</div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Join us for four days of innovation, learning, and collaboration. 
              Experience cutting-edge AI technologies and network with industry leaders.
            </p>
          </div>
        </div>
      </section>

      {selectedEvent && (
        <EventModal
          isOpen={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
          title={highlights.find(h => h.id === selectedEvent)?.title || ''}
        >
          {getModalContent(selectedEvent)}
        </EventModal>
      )}
    </>
  )
}
