import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Wrap from './Wrap'

const links = [
  { to: '/werk', label: 'Projecten' },
  { to: '/onderzoek', label: 'Onderzoek' },
  { to: '/over-mij', label: 'Over mij' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const reduced = useReducedMotion()

  // Each menu row is its own block: they unfold downward one by one and fold back upward one by one.
  const panel = {
    closed: { transition: { staggerChildren: reduced ? 0 : 0.06, staggerDirection: -1 } },
    open: { transition: { staggerChildren: reduced ? 0 : 0.08 } },
  }
  const row = {
    closed: { height: 0, opacity: 0, transition: { duration: reduced ? 0 : 0.22, ease: [0.7, 0, 0.84, 0] } },
    open: { height: 'auto', opacity: 1, transition: { duration: reduced ? 0 : 0.32, ease: [0.16, 1, 0.3, 1] } },
  }
  // The pink marker of the current page runs in from the left the moment its row starts to unfold.
  const sweep = {
    closed: { scaleX: 0, transition: { duration: reduced ? 0 : 0.2, ease: [0.7, 0, 0.84, 0] } },
    open: { scaleX: 1, transition: { duration: reduced ? 0 : 0.45, delay: 0, ease: [0.22, 1, 0.36, 1] } },
  }

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const linkClass = ({ isActive }) =>
    `px-1.5 py-0.5 font-display text-[15px] font-semibold text-ink transition-colors hover:bg-marker ${
      isActive ? 'bg-marker underline decoration-2 underline-offset-[6px] hover:text-ink' : ''
    }`

  return (
    <header className="sticky top-0 z-50 bg-paper">
      <Wrap className="flex h-16 items-center justify-between md:h-[103px] lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <NavLink
          to="/"
          end
          className="flex flex-col font-display leading-tight text-ink"
          onClick={() => setOpen(false)}
        >
          <span className="text-xl font-bold tracking-[-0.02em]">Isa Bettonvil</span>
          <span className="text-xs font-medium text-muted">UX/UI Designer</span>
        </NavLink>

        <nav aria-label="Hoofdmenu" className="hidden items-center gap-6 md:flex lg:gap-12">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={open ? 'Sluit menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobiel-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block h-0.5 w-6 bg-ink transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </Wrap>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobiel-menu"
            aria-label="Hoofdmenu"
            variants={panel}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute inset-x-0 top-full md:hidden"
          >
            {links.map((l) => (
              <motion.div key={l.to} variants={row} className="overflow-hidden border-b border-ink/20 bg-paper">
                <Wrap>
                  <NavLink
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="relative block py-4 font-display text-xl font-semibold text-ink"
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <motion.span aria-hidden="true" variants={sweep} className="absolute inset-0 origin-left bg-marker" />
                        )}
                        <span className={`relative ${isActive ? 'underline decoration-2 underline-offset-[6px]' : ''}`}>{l.label}</span>
                      </>
                    )}
                  </NavLink>
                </Wrap>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
