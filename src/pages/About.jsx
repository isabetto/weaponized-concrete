import { motion } from 'framer-motion'
import StitchDivider from '../components/StitchDivider'

const experience = [
  {
    role: 'Barista',
    place: 'Coffeecompany, \'s-Hertogenbosch',
    period: 'jun 2024 – heden',
    body: 'Klantcontact en servicegerichte werkzaamheden.',
  },
  {
    role: 'Eigenaar',
    place: 'HookedOnMusic',
    period: 'mei 2023 – heden',
    body: 'Verkoop en ontwikkeling van haakpatronen. Volledige verantwoordelijkheid voor product, klantcontact en content.',
  },
  {
    role: 'Social media- & communicatie-expert',
    place: 'Lapswans, Eindhoven',
    period: 'mei 2024 – jun 2025',
    body: 'Content voor Instagram, TikTok en LinkedIn met een consistente tone of voice; blogs voor de website.',
  },
  {
    role: 'Student Mentor',
    place: 'Tilburg University',
    period: 'aug 2023 – dec 2024',
    body: 'Begeleidde eerstejaarsstudenten en werkte samen met docenten binnen een multidisciplinaire onderwijsomgeving.',
  },
  {
    role: 'Verkoopmedewerker',
    place: 'America Today, \'s-Hertogenbosch',
    period: 'mei 2022 – jun 2024',
    body: 'Klantgerichte advisering en verkoop in een dynamische retailomgeving.',
  },
]

const education = [
  {
    title: 'Master Communicatie- en Informatiewetenschappen',
    sub: 'Specialisatie New Media Design · Tilburg University',
    period: '2025 – 2026',
  },
  {
    title: 'Bachelor Communicatie- en Informatiewetenschappen',
    sub: 'Specialisatie New Media Design · Tilburg University',
    period: '2022 – 2025',
  },
]

export default function About() {
  return (
    <div>
      <section className="bg-pink px-6 pt-16 pb-20 md:px-10 md:pt-24 md:pb-28">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-[2rem] border-4 border-ink/10 bg-cream shadow-xl md:mx-0"
          >
            <img src="/isa-portrait-about.png" alt="Isa Bettonvil" className="h-full w-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-ink/70">
              Over mij
            </p>
            <h1 className="mt-4 font-display text-4xl font-medium leading-[1.05] text-ink md:text-6xl">
              Ik houd me bezig met visuele communicatie en UX/UI design.
            </h1>
            <p className="mt-6 font-body text-lg text-ink/80">
              Onlangs afgestudeerd aan Tilburg University met een master Communicatie- en
              Informatiewetenschappen, specialisatie New Media Design. Analytisch en creatief
              ingesteld, met affiniteit voor digitale interactie en gebruikersgericht ontwerp.
            </p>
            <p className="mt-4 font-body text-lg text-ink/80">
              Als zelfstandig ondernemer run ik mijn eigen bedrijf, waarin ik creativiteit en
              ondernemerschap combineer. Ik ben nieuwsgierig naar nieuwe technologieën en
              onderzoek graag hoe die waarde toevoegen aan de digitale belevingen.
            </p>
          </motion.div>
        </div>
      </section>

      <StitchDivider bg="bg-mustard" thread="#171310" />

      <section className="bg-mustard px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-medium text-ink md:text-4xl">Werkervaring</h2>
          <div className="mt-10 space-y-0">
            {experience.map((e, i) => (
              <motion.div
                key={e.role + e.period}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="relative border-l-2 border-ink/20 py-6 pl-8 last:border-transparent"
              >
                <span className="absolute -left-[9px] top-7 h-4 w-4 rounded-full border-2 border-ink bg-cream" />
                <p className="font-body text-xs font-semibold uppercase tracking-wide text-ink/60">
                  {e.period}
                </p>
                <h3 className="mt-1 font-display text-xl font-medium text-ink">
                  {e.role} — <span className="italic">{e.place}</span>
                </h3>
                <p className="mt-2 font-body text-ink/75">{e.body}</p>
              </motion.div>
            ))}
          </div>

          <h2 className="mt-16 font-display text-3xl font-medium text-ink md:text-4xl">Opleidingen</h2>
          <div className="mt-8 space-y-6">
            {education.map((ed) => (
              <div key={ed.title} className="rounded-xl bg-cream/60 p-6">
                <p className="font-body text-xs font-semibold uppercase tracking-wide text-ink/60">
                  {ed.period}
                </p>
                <h3 className="mt-1 font-display text-lg font-medium text-ink">{ed.title}</h3>
                <p className="mt-1 font-body text-sm text-ink/70">{ed.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
