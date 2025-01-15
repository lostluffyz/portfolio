import About from './components/About'
import Contact from './components/Contact'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Story from './components/Story'

// Vercel Add ON
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Story />
      <Contact />
      <Footer />

      <Analytics/>
      <SpeedInsights/>
    </main>
  )
}

export default App