import { Phone, Calendar } from 'lucide-react'
import { PHONE_TEL } from '../data/site'

export default function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex border-t border-white/10 bg-matte-black p-2 md:hidden">
      <a
        href={`tel:${PHONE_TEL}`}
        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-charcoal-light py-3.5 text-sm font-bold text-white"
      >
        <Phone className="h-5 w-5" />
        Call Now
      </a>
      <a
        href="#book"
        className="ml-2 flex flex-1 items-center justify-center gap-2 rounded-lg bg-accent-red py-3.5 text-sm font-bold text-white"
      >
        <Calendar className="h-5 w-5" />
        Book Service
      </a>
    </div>
  )
}
