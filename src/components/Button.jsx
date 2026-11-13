import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 px-6 py-3.5 font-display text-[15px] font-semibold transition-colors duration-200'

const variants = {
  primary: 'bg-ink text-paper hover:bg-plum',
  ghost: 'border-2 border-ink text-ink hover:bg-ink hover:text-paper',
  marker: 'bg-marker text-ink hover:bg-paper',
}

export default function Button({ to, href, variant = 'primary', children, className = '', ...props }) {
  const cls = `${base} ${variants[variant]} ${className}`
  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={cls} {...props}>
      {children}
    </button>
  )
}
