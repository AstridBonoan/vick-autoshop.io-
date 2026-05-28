import { Phone, Calendar } from 'lucide-react'
import { PHONE, PHONE_TEL } from '../data/site'

const HERO_IMG =
  'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&q=85'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-matte-black pt-20">
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Mechanic performing vehicle diagnostics"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-matte-black via-matte-black/90 to-matte-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(90vh-5rem)] max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl animate-fade-in-up">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm text-gray-300 backdrop-blur-sm">
            <span className="font-semibold text-accent-orange">4.9★</span>
            <span>Google Rated · Fresh Meadows, Queens</span>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Reliable Auto Repair{' '}
            <span className="text-accent-red">You Can Trust</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-gray-300 sm:text-xl">
            Professional diagnostics, brake service, suspension repair, maintenance, and
            complete vehicle care in Queens.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#book"
              className="flex min-h-[52px] items-center justify-center gap-2 rounded-lg bg-accent-red px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-accent-red/90 hover:shadow-xl"
            >
              <Calendar className="h-5 w-5" />
              Schedule Service
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex min-h-[52px] items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-400">
            Same-day diagnostics available · All makes & models · ASE-trained technicians
          </p>
        </div>
      </div>
    </section>
  )
}
