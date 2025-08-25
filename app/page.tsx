import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import Moments from '@/components/Moments'
import UniqueFeatures from '@/components/UniqueFeatures'
import InvestmentsGraph from '@/components/InvestmentsGraph'
import Testimonials from '@/components/Testimonials'
import AppDownload from '@/components/AppDownload'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Moments />
      <UniqueFeatures />
      <InvestmentsGraph />
      <Testimonials />
      <AppDownload />
      <FAQ />
      <Footer />
    </main>
  )
}
