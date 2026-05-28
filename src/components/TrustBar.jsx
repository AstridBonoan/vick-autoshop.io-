import {
  Wrench,
  DollarSign,
  Clock,
  ScanLine,
  MapPin,
} from 'lucide-react'
import { TRUST_ITEMS } from '../data/site'

const ICONS = {
  wrench: Wrench,
  dollar: DollarSign,
  clock: Clock,
  scan: ScanLine,
  map: MapPin,
}

export default function TrustBar() {
  return (
    <section className="border-y border-gray-200 bg-white py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {TRUST_ITEMS.map((item) => {
            const Icon = ICONS[item.icon]
            return (
              <li
                key={item.label}
                className="flex flex-col items-center text-center sm:flex-row sm:text-left lg:flex-col lg:text-center"
              >
                <div className="mb-3 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-charcoal text-accent-orange sm:mb-0 sm:mr-4 lg:mb-3 lg:mr-0">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-semibold text-charcoal sm:text-base">
                  {item.label}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
