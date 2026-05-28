import { useRef } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { REVIEWS } from '../data/site'

function Stars({ count }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-accent-orange text-accent-orange" />
      ))}
    </div>
  )
}

export default function Reviews() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (!scrollRef.current) return
    const amount = scrollRef.current.offsetWidth * 0.85
    scrollRef.current.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <section id="reviews" className="bg-charcoal py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-accent-orange">
              Customer Reviews
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              Trusted by Queens Drivers
            </h2>
            <p className="mt-2 text-gray-400">
              4.9★ on Google · Honest mechanics · Fair pricing · Reliable repairs
            </p>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scroll(-1)}
              className="rounded-lg border border-white/20 p-2 text-white transition-colors hover:bg-white/10"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              className="rounded-lg border border-white/20 p-2 text-white transition-colors hover:bg-white/10"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="mt-10 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {REVIEWS.map((review) => (
            <article
              key={review.name}
              className="w-[min(100%,340px)] shrink-0 snap-center rounded-2xl border border-white/10 bg-charcoal-light p-6 sm:w-[340px]"
            >
              <Stars count={review.rating} />
              <p className="mt-4 text-gray-300 leading-relaxed">&ldquo;{review.text}&rdquo;</p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-semibold text-white">{review.name}</p>
                <p className="text-sm text-gray-500">{review.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
