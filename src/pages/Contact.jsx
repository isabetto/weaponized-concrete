import { motion } from 'framer-motion'
import Button from '../components/Button'

const details = [
  { label: 'E-mail', value: 'isabettonvil@gmail.com', href: 'mailto:isabettonvil@gmail.com' },
  { label: 'Telefoon', value: '+31 6 50 57 25 18', href: 'tel:+31650572518' },
  { label: 'Locatie', value: "'s-Hertogenbosch", href: null },
]

export default function Contact() {
  return (
    <section className="bg-mustard px-6 pt-16 pb-20 md:px-10 lg:px-20 md:pt-[120px] md:pb-[140px]">
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-ink/70"
        >
          Contact
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-4 font-display text-[34px] font-medium leading-[1.1] text-ink md:text-[56px]"
        >
          Interesse? Laten we praten.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-6 font-body text-lg leading-[1.45] text-ink/80"
        >
          Stuur me gerust een bericht over een project, samenwerking of gewoon om kennis te
          maken. Ik hoor graag van je!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-10"
        >
          <Button href="mailto:isabettonvil@gmail.com" variant="primary">
            Stuur een e-mail ↗
          </Button>
        </motion.div>

        <div className="mt-16 grid gap-4 text-left sm:grid-cols-3">
          {details.map((d, i) => (
            <motion.div
              key={d.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl bg-cream/70 p-6"
            >
              <p className="font-body text-[11px] font-semibold uppercase tracking-[0.06em] text-ink/60">
                {d.label}
              </p>
              {d.href ? (
                <a href={d.href} className="mt-2 block font-body text-[15px] font-medium text-ink hover:text-coral">
                  {d.value}
                </a>
              ) : (
                <p className="mt-2 font-body text-[15px] font-medium text-ink">{d.value}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
