import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function ProjectLightbox({ project, onClose }) {
  const screens = project?.screens?.length ? project.screens : project ? [project.image] : []
  const [index, setIndex] = useState(0)
  const [showFlyer, setShowFlyer] = useState(false)

  useEffect(() => {
    setIndex(0)
    setShowFlyer(false)
  }, [project])

  useEffect(() => {
    if (!project) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setIndex((i) => Math.min(i + 1, screens.length - 1))
      if (e.key === 'ArrowLeft') setIndex((i) => Math.max(i - 1, 0))
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [project, onClose, screens.length])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Schermen van ${project.title}`}
        >
          <motion.div
            className="relative flex max-h-full w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-cream shadow-2xl"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b-2 border-ink/10 px-5 py-4 md:px-8">
              <h3 className="font-display text-lg font-medium text-ink md:text-xl">{project.title}</h3>
              <button
                type="button"
                onClick={onClose}
                aria-label="Sluiten"
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink/20 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream"
              >
                ✕
              </button>
            </div>

            <div className="relative flex-1 overflow-auto bg-ink/5">
              {showFlyer && project.flyer ? (
                <img
                  src={project.flyer}
                  alt={`Flyer van ${project.title}`}
                  className="mx-auto max-h-[70vh] w-auto object-contain"
                />
              ) : project.video ? (
                <video
                  key={project.video}
                  src={project.video}
                  controls
                  autoPlay
                  loop
                  playsInline
                  className="mx-auto max-h-[70vh] w-auto"
                />
              ) : (
                <img
                  src={screens[index]}
                  alt={`Scherm ${index + 1} van ${project.title}`}
                  className="mx-auto max-h-[70vh] w-auto object-contain"
                />
              )}

              {project.flyer && (
                <button
                  type="button"
                  onClick={() => setShowFlyer((v) => !v)}
                  aria-pressed={showFlyer}
                  aria-label={showFlyer ? 'Terug naar video' : 'Bekijk flyer'}
                  title={showFlyer ? 'Terug naar video' : 'Bekijk flyer'}
                  className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-cream/60 text-ink/60 shadow-md backdrop-blur-sm transition-all hover:bg-cream hover:text-ink"
                >
                  <span
                    className={`text-base leading-none transition-transform ${showFlyer ? 'rotate-180' : ''}`}
                  >
                    ›
                  </span>
                </button>
              )}

              {!showFlyer && !project.video && screens.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => setIndex((i) => Math.max(i - 1, 0))}
                    disabled={index === 0}
                    aria-label="Vorig scherm"
                    className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-cream text-ink shadow-lg disabled:opacity-30"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() => setIndex((i) => Math.min(i + 1, screens.length - 1))}
                    disabled={index === screens.length - 1}
                    aria-label="Volgend scherm"
                    className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-cream text-ink shadow-lg disabled:opacity-30"
                  >
                    →
                  </button>
                </>
              )}
            </div>

            {!project.video && screens.length > 1 && (
              <div className="flex items-center justify-center gap-2 border-t-2 border-ink/10 px-5 py-3">
                {screens.map((s, i) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Ga naar scherm ${i + 1}`}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      i === index ? 'bg-ink' : 'bg-ink/20'
                    }`}
                  />
                ))}
              </div>
            )}

            {project.social?.length > 0 && (
              <div className="flex items-center justify-center gap-5 border-t-2 border-ink/10 px-5 py-3 font-body text-sm">
                {project.social.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-ink/70 underline decoration-ink/20 underline-offset-4 transition-colors hover:text-ink"
                  >
                    {s.label} {s.handle}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
