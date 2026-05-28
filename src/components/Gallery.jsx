import { GALLERY } from '../data/site'

export default function Gallery() {
  return (
    <section id="gallery" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-accent-red">
            Our Shop
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-matte-black sm:text-4xl">
            Real Work. Real Results.
          </h2>
          <p className="mt-4 text-lg text-steel">
            A look inside our Fresh Meadows shop — where skilled technicians keep Queens
            drivers on the road safely.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((item) => (
            <figure
              key={item.caption}
              className={`group relative overflow-hidden rounded-2xl bg-charcoal-light ${
                item.featured ? 'sm:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  item.featured
                    ? 'aspect-[16/9] h-full min-h-[240px]'
                    : 'aspect-[4/3] h-56 sm:h-64'
                }`}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-matte-black/90 to-transparent px-4 py-4">
                <span className="text-sm font-semibold text-white">{item.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
