import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import ProjectLightbox from '../components/ProjectLightbox'
import { projects } from '../data/projects'

const bgClasses = {
  orange: 'bg-orange',
  mustard: 'bg-mustard',
  pink: 'bg-pink',
}

export default function Work() {
  const [activeSlug, setActiveSlug] = useState(null)
  const activeProject = projects.find((p) => p.slug === activeSlug) ?? null
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const el = document.querySelector(location.hash)
    if (!el) return
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [location])

  return (
    <div>
      <section className="bg-coral px-6 py-16 md:px-10 lg:px-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-ink/70">
            Projecten
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-[36px] font-medium leading-[1.04] text-ink md:text-[64px]">
            Drie projecten, drie manieren van onderzoeken.
          </h1>
          <p className="mt-6 max-w-xl font-body text-lg leading-[1.45] text-ink/80">
            Van e-commerce tot een toeslagen app, hier zie je hoe ik onderzoek, ontwerp en
            resultaat samenbreng.
          </p>
        </div>
      </section>

      {projects.map((p) => (
          <section key={p.slug} id={p.slug} className={`${bgClasses[p.color]} scroll-mt-20 px-6 py-16 md:px-10 lg:px-20 md:py-24`}>
            <div className="mx-auto max-w-7xl">
              <div
                className={`grid gap-10 md:grid-cols-2 md:items-center ${
                  p.imageFirst ? 'md:[&>*:first-child]:order-2' : ''
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <p className="font-body text-xs font-semibold uppercase tracking-[0.04em] text-ink/60">
                    {p.kicker}
                  </p>
                  <h2 className="mt-3 font-display text-[26px] font-medium text-ink md:text-[34px]">
                    {p.title}
                  </h2>

                  <div className="mt-6 space-y-4 font-body text-[15px] leading-[1.5] text-ink/80">
                    {p.details.map((d) => (
                      <p key={d.slice(0, 24)}>{d}</p>
                    ))}
                  </div>

                  {(p.screens?.length || p.image) && (
                    <div className="mt-8">
                      <Button variant="ghost" onClick={() => setActiveSlug(p.slug)}>
                        Bekijk ↗
                      </Button>
                    </div>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
                  className={
                    p.frameless
                      ? 'overflow-hidden rounded-2xl'
                      : 'overflow-hidden rounded-2xl border-4 border-ink/10 bg-cream shadow-xl'
                  }
                >
                  {p.image && (
                    <button
                      type="button"
                      onClick={() => setActiveSlug(p.slug)}
                      className="block h-full w-full cursor-zoom-in"
                      aria-label={`Bekijk schermen van ${p.title}`}
                    >
                      <img
                        src={p.image}
                        alt={`Werk voor ${p.title}`}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  )}
                </motion.div>
              </div>
            </div>
          </section>
      ))}

      <ProjectLightbox project={activeProject} onClose={() => setActiveSlug(null)} />
    </div>
  )
}
