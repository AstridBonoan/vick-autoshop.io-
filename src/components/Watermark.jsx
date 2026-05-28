const WATERMARK_SRC = `${import.meta.env.BASE_URL}bonoan-labs-watermark.png`

export default function Watermark() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[60] overflow-hidden"
      aria-hidden="true"
    >
      {/* Corner badge — visible on all sections */}
      <img
        src={WATERMARK_SRC}
        alt=""
        className="absolute bottom-20 right-4 w-28 opacity-[0.18] sm:bottom-6 sm:right-6 sm:w-36 md:opacity-[0.22]"
        width={269}
        height={72}
        decoding="async"
      />
      {/* Subtle center wash for broader coverage */}
      <img
        src={WATERMARK_SRC}
        alt=""
        className="absolute left-1/2 top-1/2 w-[min(90vw,420px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.04] sm:opacity-[0.05]"
        width={269}
        height={72}
        decoding="async"
      />
      <p className="absolute bottom-20 left-4 text-[10px] font-medium tracking-wide text-charcoal/25 sm:bottom-6 sm:text-xs md:text-charcoal/30">
        Site by Bonoan Labs
      </p>
    </div>
  )
}
