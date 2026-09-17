import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const homeProjects = [
  {
    slug: 'langspeelplaat',
    kicker: 'UI Design · WEBSITE',
    title: 'Stichting de Langspeelplaat',
    summary: 'Herontwerp van de website om nieuwe klanten te trekken.',
    color: 'pink',
  },
  {
    slug: 'base-app',
    kicker: 'UX/UI DESIGN · MOBIELE APP',
    title: 'BASE',
    summary: 'Een app die jongeren op een laagdrempelige manier leert over toeslagen.',
    color: 'mustard',
  },
  {
    slug: 'lapswans',
    kicker: 'UI Design · E-COMMERCE',
    title: 'Lapswans',
    summary: 'Herontwerp van de webshop om de conversieratio te verbeteren.',
    color: 'orange',
  },
]

const cardColorClasses = {
  orange: 'bg-orange',
  mustard: 'bg-mustard',
  pink: 'bg-pink',
}

const skills = [
  'User-Interface ontwerp & User-experience onderzoek',
  'Prototyping: low- en high-fidelity',
  'Contentcreatie & tone-of-voice',
  'Data-analyse → verbeterinitiatieven',
  'Samenwerken met multidisciplinaire teams',
  'Klantgerichte communicatie',
  'Kwalitatief en kwantitatief onderzoek',
  'NL & EN vloeiend, basis FR & DE',
]

export default function Home() {
  return (
    <div>
      <section className="bg-mustard px-6 pt-16 pb-20 md:px-10 lg:px-20 md:pt-24 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-ink/70">
              UX/UI designer &middot; Visual communicator
            </p>
            <h1 className="mt-4 font-display text-[40px] font-medium leading-[1.04] text-ink md:text-[64px]">
              Ontwerper met een
              <br />
              onderzoekende
              <br />
              <span className="italic text-coral">blik.</span>
            </h1>
            <p className="mt-6 max-w-md font-body text-lg leading-[1.45] text-ink/80">
              Ik ben Isa, UX/UI designer die gebruikersonderzoek combineert met een flinke
              dosis kleur, nieuwsgierigheid en doe-het-zelf mentaliteit.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/werk" variant="primary">
                Bekijk mijn werk ↗
              </Button>
              <Button to="/over-mij" variant="ghost">
                Over mij
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border-4 border-ink/10 bg-cream shadow-xl md:mx-0"
          >
            <img
              src="/isa-portrait.png"
              alt="Isa Bettonvil"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-butter px-6 py-16 md:px-10 lg:px-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-medium text-ink md:text-4xl">
              Projecten
            </h2>
            <Link
              to="/werk"
              className="font-body text-sm font-semibold uppercase text-ink underline decoration-coral decoration-2 underline-offset-4 hover:text-coral"
            >
              Alle projecten →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {homeProjects.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              >
                <Link
                  to={`/werk#${p.slug}`}
                  className={`group block h-full rounded-2xl border-2 border-ink/15 ${cardColorClasses[p.color]} p-7 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl`}
                >
                  <p className="font-body text-[11px] font-semibold uppercase tracking-[0.04em] text-ink/60">
                    {p.kicker}
                  </p>
                  <h3 className="mt-3 font-display text-[22px] font-medium text-ink">{p.title}</h3>
                  <p className="mt-3 font-body text-sm text-ink/75">{p.summary}</p>
                  <p className="mt-5 font-body text-sm font-semibold text-ink group-hover:text-coral">
                    Bekijk case →
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-coral px-6 py-16 md:px-10 lg:px-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-3xl font-medium text-ink md:text-4xl">Skills</h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-xl bg-cream px-4 py-4 font-body text-sm font-medium text-ink"
              >
                {s}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
