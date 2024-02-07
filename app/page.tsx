import Testemonials from './components/Testemonials'
import Hero from './components/Hero'
import Team from './components/Team'
import HeroBenefits from './components/HeroBenefits'
import Services from './components/Services'
import BookVisit from './components/BookVisit'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between '>
      <Hero />
      <HeroBenefits />
      <Team />
      <Services />
      <Testemonials />
      <BookVisit />
    </main>
  )
}
