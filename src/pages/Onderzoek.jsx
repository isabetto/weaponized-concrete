import { motion } from 'framer-motion'
import { theses } from '../data/theses'

const bgClasses = ['bg-tan', 'bg-pink']

export default function Onderzoek() {
  return (
    <div>
      <section className="bg-butter px-6 py-16 md:px-10 lg:px-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-ink/70">
            Onderzoek
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-[36px] font-medium leading-[1.04] text-ink md:text-[64px]">
            Onderzoek achter het ontwerp.
          </h1>
          <p className="mt-6 max-w-xl font-body text-lg leading-[1.45] text-ink/80">
            Mijn bachelorscriptie en masterthesis gaan allebei over hoe ontwerp en onderzoek elkaar
            versterken, van patiëntenportalen tot AI-desinformatie.
          </p>
        </div>
      </section>

      {theses.map((t, i) => (
        <section
          key={t.slug}
          id={t.slug}
          className={`${bgClasses[i % bgClasses.length]} scroll-mt-20 px-6 py-16 md:px-10 lg:px-20 md:py-24`}
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_1.4fr] md:items-start md:gap-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border-4 border-ink/10 bg-white shadow-xl md:sticky md:top-28"
              >
                <img src={t.cover} alt={t.coverAlt} className="block h-auto w-full" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
              >
                <p className="font-body text-xs font-semibold uppercase tracking-[0.04em] text-ink/60">
                  {t.level}
                </p>
                <h2 className="mt-3 font-display text-[24px] font-medium leading-[1.15] text-ink md:text-[32px]">
                  {t.title}
                </h2>

                <ul className="mt-5 flex flex-wrap gap-2 font-body text-xs font-semibold text-ink/70">
                  {t.meta.map((m) => (
                    <li key={m} className="rounded-full border-2 border-ink/15 px-3 py-1">
                      {m}
                    </li>
                  ))}
                </ul>

                <h3 className="mt-8 font-body text-[11px] font-semibold uppercase tracking-[0.06em] text-ink/60">
                  {t.abstractLabel}
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.6] text-ink/85">{t.abstract}</p>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
