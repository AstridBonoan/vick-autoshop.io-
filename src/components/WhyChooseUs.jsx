import { CheckCircle2 } from 'lucide-react'
import { WHY_CHOOSE } from '../data/site'

const SHOP_IMG =
  'https://images.unsplash.com/photo-1619642751034-765df692b950?w=900&q=80'

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <img
              src={SHOP_IMG}
              alt="Vick Auto Repair shop interior"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-matte-black/90 to-transparent p-6">
              <p className="text-2xl font-bold text-white">WE FIX YOU DRIVE</p>
              <p className="text-sm text-gray-300">Trusted by Queens drivers since day one</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-accent-red">
              Why Choose Us
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-matte-black sm:text-4xl">
              Honest Repairs. Clear Communication.
            </h2>
            <p className="mt-4 text-lg text-steel">
              We combine advanced diagnostic technology with the personal service of a
              neighborhood shop — no unnecessary upsells, no confusing jargon.
            </p>

            <ul className="mt-8 space-y-4">
              {WHY_CHOOSE.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-accent-red" />
                  <span className="text-charcoal leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#book"
              className="mt-10 inline-block rounded-lg bg-charcoal px-8 py-3.5 font-semibold text-white transition-all hover:bg-matte-black"
            >
              Get a Free Estimate
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
