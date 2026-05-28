const LOGO_SRC = `${import.meta.env.BASE_URL}logo.png`

export default function Logo({ className = 'h-12 w-auto sm:h-14', showTagline = false }) {
  return (
    <div className="flex flex-col">
      <img
        src={LOGO_SRC}
        alt="Vick Auto Repair INC"
        className={`${className} object-contain object-left`}
        width={166}
        height={96}
        decoding="async"
      />
      {showTagline && (
        <span className="mt-0.5 text-xs font-medium text-accent-orange">INC · Queens, NY</span>
      )}
    </div>
  )
}
