import { useState } from 'react'
import { MapPin, Phone, Clock, Send } from 'lucide-react'
import {
  PHONE,
  PHONE_TEL,
  FULL_ADDRESS,
  HOURS,
  GOOGLE_MAPS,
  SERVICES,
} from '../data/site'

export default function Booking() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="book" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-accent-red">
              Book an Appointment
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-matte-black sm:text-4xl">
              Book Your Service Today
            </h2>
            <p className="mt-4 text-lg text-steel">
              Fill out the form and we&apos;ll confirm your appointment. Prefer to talk?
              Call us directly — we&apos;re happy to help.
            </p>

            <div id="contact" className="mt-8 space-y-5">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-charcoal text-accent-orange">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-matte-black">Location</p>
                  <p className="text-steel">{FULL_ADDRESS}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-charcoal text-accent-orange">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-matte-black">Phone</p>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="text-lg font-bold text-accent-red hover:underline"
                  >
                    {PHONE}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-charcoal text-accent-orange">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-matte-black">Business Hours</p>
                  <ul className="mt-1 space-y-1 text-steel">
                    {HOURS.map((h) => (
                      <li key={h.days}>
                        <span className="font-medium text-charcoal">{h.days}:</span> {h.time}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <iframe
                title="Vick Auto Repair location on Google Maps"
                src={GOOGLE_MAPS}
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm sm:p-8">
            {submitted ? (
              <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-red/10 text-accent-red">
                  <Send className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-matte-black">Request Received!</h3>
                <p className="mt-2 max-w-sm text-steel">
                  We&apos;ll contact you shortly to confirm your appointment. For urgent
                  matters, call{' '}
                  <a href={`tel:${PHONE_TEL}`} className="font-semibold text-accent-red">
                    {PHONE}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-charcoal">
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base outline-none transition focus:border-steel-blue focus:ring-2 focus:ring-steel-blue/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-charcoal">
                      Phone *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base outline-none transition focus:border-steel-blue focus:ring-2 focus:ring-steel-blue/20"
                      placeholder="(718) 555-0123"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="vehicle" className="mb-1.5 block text-sm font-semibold text-charcoal">
                    Vehicle Make / Model *
                  </label>
                  <input
                    id="vehicle"
                    name="vehicle"
                    type="text"
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base outline-none transition focus:border-steel-blue focus:ring-2 focus:ring-steel-blue/20"
                    placeholder="e.g. 2018 Honda Accord"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-charcoal">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base outline-none transition focus:border-steel-blue focus:ring-2 focus:ring-steel-blue/20"
                    >
                      <option value="">Select a service</option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Other">Other / Not sure</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="date" className="mb-1.5 block text-sm font-semibold text-charcoal">
                      Preferred Date *
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      required
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base outline-none transition focus:border-steel-blue focus:ring-2 focus:ring-steel-blue/20"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-charcoal">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full resize-y rounded-lg border border-gray-300 bg-white px-4 py-3 text-base outline-none transition focus:border-steel-blue focus:ring-2 focus:ring-steel-blue/20"
                    placeholder="Describe symptoms, warning lights, or any details..."
                  />
                </div>

                <button
                  type="submit"
                  className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-lg bg-accent-red px-6 py-4 text-base font-bold text-white transition-all hover:bg-accent-red/90 hover:shadow-lg"
                >
                  <Send className="h-5 w-5" />
                  Book Your Service Today
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
