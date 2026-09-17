import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center gap-2 rounded-full px-6 py-3 font-body font-semibold text-sm transition-all duration-200 ease-out'

const variants = {
  primary: 'bg-ink text-cream hover:bg-white hover:text-ink hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10',
  ghost: 'bg-transparent text-ink border-2 border-ink hover:bg-ink hover:text-cream hover:-translate-y-0.5',
  onDark: 'bg-cream text-ink hover:bg-white hover:-translate-y-0.5',
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
    <button className={cls} {...props}>
      {children}
    </button>
  )
}
