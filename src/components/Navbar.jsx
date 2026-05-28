import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { NAV_LINKS, PHONE, PHONE_TEL } from '../data/site'
import Logo from './Logo'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-matte-black/95 shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="group shrink-0 transition-opacity hover:opacity-90">
          <Logo showTagline />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-accent-orange"
          >
            <Phone className="h-4 w-4" />
            {PHONE}
          </a>
          <a
            href="#book"
            className="rounded-lg bg-accent-red px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-red/90 hover:shadow-lg"
          >
            Schedule Service
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-matte-black md:hidden">
          <ul className="flex flex-col px-4 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  className="block border-b border-white/5 py-3 text-base font-medium text-gray-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href={`tel:${PHONE_TEL}`}
                className="mb-3 flex items-center justify-center gap-2 rounded-lg border border-white/20 py-3 font-semibold text-white"
              >
                <Phone className="h-5 w-5" />
                Call {PHONE}
              </a>
              <a
                href="#book"
                onClick={close}
                className="block rounded-lg bg-accent-red py-3 text-center font-semibold text-white"
              >
                Schedule Service
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
