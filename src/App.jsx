import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Reviews from './components/Reviews'
import Gallery from './components/Gallery'
import Booking from './components/Booking'
import Footer from './components/Footer'
import MobileCallBar from './components/MobileCallBar'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pb-20 md:pb-0">
        <Hero />
        <TrustBar />
        <Services />
        <WhyChooseUs />
        <Reviews />
        <Gallery />
        <Booking />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  )
}
