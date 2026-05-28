import { Phone, MapPin, Share2, MessageCircle } from 'lucide-react'
import { NAV_LINKS, PHONE, PHONE_TEL, FULL_ADDRESS, HOURS } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-matte-black py-14 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-xl font-extrabold text-white">VICK AUTO REPAIR</p>
            <p className="text-sm text-accent-orange">INC</p>
            <p className="mt-4 text-sm leading-relaxed">
              Professional auto repair and maintenance for Queens drivers. Honest
              diagnostics, fair pricing, and quality workmanship.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="rounded-lg border border-white/10 p-2 transition-colors hover:border-white/30 hover:text-white"
              >
                <Share2 className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="rounded-lg border border-white/10 p-2 transition-colors hover:border-white/30 hover:text-white"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Hours</p>
            <ul className="space-y-2 text-sm">
              {HOURS.map((h) => (
                <li key={h.days}>
                  <span className="text-gray-300">{h.days}</span>
                  <br />
                  {h.time}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </p>
            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-orange" />
                {FULL_ADDRESS}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-accent-orange" />
                <a href={`tel:${PHONE_TEL}`} className="font-semibold text-white hover:text-accent-orange">
                  {PHONE}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm">
          <p>
            &copy; {year} Vick Auto Repair INC. All rights reserved. · Fresh Meadows, Queens, NY
          </p>
          <p className="mt-2 text-xs text-gray-600">
            Website redesign demo — not affiliated with production booking systems.
          </p>
        </div>
      </div>
    </footer>
  )
}
