import { motion, useReducedMotion } from 'framer-motion'
import Button from '../components/Button'
import usePageTitle from '../components/usePageTitle'

const details = [
  { label: 'E-mail', value: 'isabettonvil@gmail.com', href: 'mailto:isabettonvil@gmail.com' },
  { label: 'Telefoon', value: '+31 6 50 57 25 18', href: 'tel:+31650572518' },
  { label: 'Locatie', value: "'s-Hertogenbosch", href: null },
]

export default function Contact() {
  usePageTitle('Contact')
  const reduce = useReducedMotion()
  // Same staggered fade-up as the first version, switched off for people who prefer reduced motion.
  const rise = (delay = 0, y = 14) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.55, delay } }

  return (
    <section className="flex bg-butter px-6 pb-20 pt-16 md:min-h-[calc(100vh-103px)] md:items-center md:px-10 md:pb-[120px] md:pt-[100px]">
      <div className="mx-auto w-full max-w-3xl text-center">
        <motion.h1
          {...rise(0.05)}
          className="font-display text-[40px] font-bold leading-[1.05] tracking-[-0.03em] text-ink text-balance md:text-[72px]"
        >
          Zin om samen iets te maken?
        </motion.h1>
        <motion.p {...rise(0.1)} className="mx-auto mt-6 max-w-[44ch] font-body text-xl leading-[1.5] text-ink">
          Stuur me gerust een bericht over een project, samenwerking of gewoon om kennis te maken. Ik hoor graag van
          je!
        </motion.p>

        <motion.div {...rise(0.15)} className="mt-10">
          <Button href="mailto:isabettonvil@gmail.com" className="rounded-full hover:bg-paper! hover:text-ink!">
            Stuur een e-mail ↗
          </Button>
        </motion.div>

        <dl className="mt-16 grid gap-4 text-left sm:grid-cols-3">
          {details.map((d, i) => (
            <motion.div
              key={d.label}
              {...(reduce
                ? {}
                : {
                    initial: { opacity: 0, y: 16 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, amount: 0.5 },
                    transition: { duration: 0.4, delay: i * 0.08 },
                  })}
              className="rounded-2xl bg-paper/70 p-6"
            >
              <dt className="font-display text-sm font-medium text-muted">{d.label}</dt>
              <dd className="mt-2 font-display text-[17px] font-semibold text-ink">
                {d.href ? (
                  <a href={d.href} className="underline decoration-ink/40 underline-offset-4 hover:bg-marker hover:no-underline">
                    {d.value}
                  </a>
                ) : (
                  d.value
                )}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  )
}
