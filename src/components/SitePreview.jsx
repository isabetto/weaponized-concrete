import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import LangspeelplaatSite, { SITE_HEIGHT, SITE_WIDTH } from './LangspeelplaatSite'

const MIN_SCALE = 0.5625 // never smaller than 720px wide; narrower screens scroll sideways

/* Scales the 1280px-wide Langspeelplaat site to the width of the window it is shown in. */
function ScaledSite() {
  const box = useRef(null)
  const [scale, setScale] = useState(0.8)
  useLayoutEffect(() => {
    const el = box.current?.parentElement
    if (!el) return
    const update = () => setScale(Math.max(MIN_SCALE, el.clientWidth / SITE_WIDTH))
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div ref={box} style={{ width: SITE_WIDTH * scale, height: SITE_HEIGHT * scale }}>
      <div style={{ width: SITE_WIDTH, height: SITE_HEIGHT, transform: `scale(${scale})`, transformOrigin: 'top left' }}>
        <LangspeelplaatSite />
      </div>
    </div>
  )
}

/* A scrollable website, shown in a browser window. */
function SiteBody({ project }) {
  const { image, alt } = project.preview
  return (
    <div
      tabIndex={0}
      role="region"
      aria-label={`Scrollbare preview van de website van ${project.title}`}
      className="min-h-0 flex-1 overflow-auto bg-white"
    >
      <p className="sr-only">{alt}</p>
      {image ? <img src={image} alt="" className="block h-auto w-full min-w-[720px]" /> : <ScaledSite />}
    </div>
  )
}

/* An app, shown on a phone that can be stepped through screen by screen. */
function AppBody({ project }) {
  const { screens } = project.preview
  const [i, setI] = useState(0)
  const last = screens.length - 1
  const go = (n) => setI(Math.min(last, Math.max(0, n)))

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'ArrowRight') setI((v) => Math.min(last, v + 1))
      if (e.key === 'ArrowLeft') setI((v) => Math.max(0, v - 1))
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [last])

  const arrow =
    'flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-ink text-lg text-ink transition-colors hover:bg-ink hover:text-paper disabled:cursor-not-allowed disabled:border-ink/30 disabled:text-ink/30 disabled:hover:bg-transparent disabled:hover:text-ink/30'

  return (
    <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-5 overflow-auto bg-butter px-4 py-6">
      <div className="relative aspect-[375/667] h-[min(62vh,600px)] overflow-hidden rounded-[34px] border-[9px] border-ink bg-ink shadow-xl">
        <img src={screens[i].src} alt={screens[i].alt} className="h-full w-full object-cover" />
      </div>
      <div className="flex items-center gap-5">
        <button type="button" onClick={() => go(i - 1)} disabled={i === 0} aria-label="Vorig scherm" className={arrow}>
          ←
        </button>
        <ul className="flex items-center" aria-label="Schermen">
          {screens.map((s, n) => (
            <li key={s.src}>
              <button
                type="button"
                onClick={() => go(n)}
                aria-label={`Ga naar scherm ${n + 1} van ${screens.length}`}
                aria-current={n === i ? 'true' : undefined}
                className="group flex h-8 min-w-8 items-center justify-center"
              >
                <span
                  aria-hidden="true"
                  className={`block h-2.5 rounded-full transition-all ${n === i ? 'w-6 bg-ink' : 'w-2.5 bg-ink/35 group-hover:bg-ink/60'}`}
                />
              </button>
            </li>
          ))}
        </ul>
        <button type="button" onClick={() => go(i + 1)} disabled={i === last} aria-label="Volgend scherm" className={arrow}>
          →
        </button>
      </div>
      <p className="sr-only" aria-live="polite">
        Scherm {i + 1} van {screens.length}
      </p>
    </div>
  )
}

/* The window that shows a project in the website itself: a scrollable site or a phone with an app. */
export default function SitePreview({ project, onClose }) {
  const closeRef = useRef(null)
  const dialogRef = useRef(null)
  const open = Boolean(project)
  const isApp = project?.preview?.kind === 'app'

  useEffect(() => {
    if (!open) return
    const opener = document.activeElement
    closeRef.current?.focus()
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key !== 'Tab' || !dialogRef.current) return
      // Keep keyboard focus inside the open window.
      const items = [...dialogRef.current.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')]
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (!dialogRef.current.contains(document.activeElement)) {
        e.preventDefault()
        first.focus()
      } else if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
      if (opener instanceof HTMLElement) opener.focus()
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-3 md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${isApp ? 'Apppreview' : 'Websitepreview'} van ${project.title}`}
        >
          <motion.div
            ref={dialogRef}
            className={`flex h-full max-h-[900px] w-full flex-col overflow-hidden rounded-xl bg-paper shadow-2xl ${
              isApp ? 'max-w-[640px]' : 'max-w-[1180px]'
            }`}
            initial={{ opacity: 0, scale: 0.97, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4 border-b border-ink/20 bg-butter px-4 py-3 md:px-5">
              <span aria-hidden className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-ink/30" />
                <span className="h-3 w-3 rounded-full bg-ink/30" />
                <span className="h-3 w-3 rounded-full bg-ink/30" />
              </span>
              <p className="min-w-0 flex-1 truncate rounded-full bg-paper px-4 py-1 text-center font-display text-sm font-medium text-ink">
                {project.title}
              </p>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Sluiten"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-ink/50 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
              >
                ✕
              </button>
            </div>
            {isApp ? <AppBody project={project} /> : <SiteBody project={project} />}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
