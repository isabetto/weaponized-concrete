import { Link } from 'react-router-dom'

const tones = {
  butter: 'bg-butter',
  olive: 'bg-olive',
  pink: 'bg-marker',
}

const markColor = { butter: 'border-ink/45', olive: 'border-ink/55', pink: 'border-ink/45' }

function Marks({ tone }) {
  const c = markColor[tone]
  return (
    <>
      <span aria-hidden className={`absolute left-3 top-3 h-4 w-4 border-l border-t ${c}`} />
      <span aria-hidden className={`absolute right-3 top-3 h-4 w-4 border-r border-t ${c}`} />
      <span aria-hidden className={`absolute bottom-3 left-3 h-4 w-4 border-b border-l ${c}`} />
      <span aria-hidden className={`absolute bottom-3 right-3 h-4 w-4 border-b border-r ${c}`} />
    </>
  )
}

export function Plate({ tone = 'butter', aspect = 'aspect-[16/10]', className = '', children }) {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden p-10 md:p-14 ${aspect} ${tones[tone]} ${className}`}>
      <Marks tone={tone} />
      {children}
    </div>
  )
}

export default function Figure({ src, alt, tone = 'butter', aspect, to, href, onClick, label, className = '', imageClassName = '', eager = false }) {
  const img = <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" className={`h-auto max-h-full w-auto max-w-full object-contain ${imageClassName}`} />
  const plate = <Plate tone={tone} aspect={aspect}>{img}</Plate>
  const lift = 'block transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_30px_-12px_rgb(84_21_42/0.35)]'
  return (
    <figure className={className}>
      {href ? (
        <a href={href} target="_blank" rel="noreferrer" aria-label={label} className={lift}>
          {plate}
        </a>
      ) : to ? (
        <Link to={to} aria-label={label} className={lift}>
          {plate}
        </Link>
      ) : onClick ? (
        <button type="button" onClick={onClick} aria-label={label} className={`${lift} w-full cursor-zoom-in text-left`}>
          {plate}
        </button>
      ) : (
        plate
      )}
    </figure>
  )
}

export function Placeholder({ label, aspect = 'aspect-[16/10]', className = '' }) {
  return (
    <figure className={className}>
      <div className={`hatch flex items-center justify-center border-2 border-dashed border-ink/50 p-6 ${aspect}`}>
        <p className="max-w-xs text-center font-display text-[15px] font-medium leading-snug text-ink">
          <span className="mb-2 inline-block bg-marker px-2 py-0.5 font-semibold">Placeholder</span>
          <br />
          {label}
        </p>
      </div>
    </figure>
  )
}
