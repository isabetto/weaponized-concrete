import { motion } from 'framer-motion'
import Button from '../components/Button'
import StitchDivider from '../components/StitchDivider'
import { projects } from '../data/projects'

const bgClasses = {
  orange: 'bg-orange',
  mustard: 'bg-mustard',
  pink: 'bg-pink',
}

export default function Work() {
  return (
    <div>
      <section className="bg-coral px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-ink/70">
            Projecten
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-[1.05] text-ink md:text-6xl">
            Drie projecten, drie manieren van onderzoeken.
          </h1>
          <p className="mt-6 max-w-xl font-body text-lg text-ink/80">
            Van e-commerce tot een toeslagen app, hier zie je hoe ik onderzoek, ontwerp en
            resultaat samenbreng.
          </p>
        </div>
      </section>

      {projects.map((p, i) => (
        <div key={p.slug}>
          <StitchDivider bg={bgClasses[p.color]} thread="#171310" />
          <section id={p.slug} className={`${bgClasses[p.color]} scroll-mt-20 px-6 py-16 md:px-10 md:py-24`}>
            <div className="mx-auto max-w-6xl">
              <div
                className={`grid gap-10 md:grid-cols-2 md:items-center ${
                  i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <p className="font-body text-xs font-semibold uppercase tracking-wide text-ink/60">
                    {p.kicker}
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-medium text-ink md:text-5xl">
                    {p.title}
                  </h2>
                  <div className="mt-3 flex gap-4 font-body text-sm font-semibold text-ink/60">
                    <span>{p.role}</span>
                    <span aria-hidden="true">·</span>
                    <span>{p.year}</span>
                  </div>

                  <div className="mt-6 space-y-4 font-body text-ink/80">
                    {p.details.map((d) => (
                      <p key={d.slice(0, 24)}>{d}</p>
                    ))}
                  </div>

                  {p.link && (
                    <div className="mt-8">
                      <Button href={p.link} variant="ghost" target="_blank" rel="noreferrer">
                        {p.linkLabel} ↗
                      </Button>
                    </div>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
                  className="overflow-hidden rounded-2xl border-4 border-ink/10 bg-cream shadow-xl"
                >
                  {p.image && (
                    <img src={p.image} alt={`Werk voor ${p.title}`} className="h-full w-full object-cover" />
                  )}
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  )
}
