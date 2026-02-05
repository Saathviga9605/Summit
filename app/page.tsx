import Hero from '@/components/Hero'
import EventHighlights from '@/components/EventHighlights'
import ResearchSymposium from '@/components/ResearchSymposium'
import Organisers from '@/components/Organisers'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <EventHighlights />
      <ResearchSymposium />
      <Organisers />
    </main>
  )
}
