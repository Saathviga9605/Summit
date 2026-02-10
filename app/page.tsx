import Hero from '@/components/Hero'
import EventHighlights from '@/components/EventHighlights'
import AboutSection from '@/components/AboutSection'
import ResearchSymposium from '@/components/ResearchSymposium'
import Organisers from '@/components/Organisers'
import StudentCoordinators from '@/components/StudentCoordinators'
import WebDesigners from '@/components/WebDesigners'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <EventHighlights />
      <AboutSection />
      <Organisers />
      <StudentCoordinators />
      <WebDesigners />
    </main>
  )
}
