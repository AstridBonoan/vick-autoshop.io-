import {
  ScanLine,
  Disc,
  Activity,
  Droplet,
  Cog,
  Circle,
  ClipboardCheck,
  Wrench,
  ArrowRight,
} from 'lucide-react'
import { SERVICES } from '../data/site'

const ICONS = {
  scan: ScanLine,
  disc: Disc,
  activity: Activity,
  droplet: Droplet,
  cog: Cog,
  circle: Circle,
  clipboard: ClipboardCheck,
  tool: Wrench,
}

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-accent-red">
            Our Services
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-matte-black sm:text-4xl">
            Complete Vehicle Care
          </h2>
          <p className="mt-4 text-lg text-steel">
            From advanced diagnostics to brakes, suspension, and routine maintenance —
            honest work with clear pricing.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon]
            return (
              <article
                key={service.id}
                className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-steel-blue/30 hover:shadow-lg"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-charcoal text-accent-orange transition-colors group-hover:bg-steel-blue group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-matte-black">{service.title}</h3>
                <p className="mt-1 text-sm font-semibold text-steel-blue">{service.price}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-steel">
                  {service.description}
                </p>
                <a
                  href="#book"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent-red transition-colors hover:text-accent-red/80"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
