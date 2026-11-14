import Wrap from '../components/Wrap'
import Figure from '../components/Figure'
import usePageTitle from '../components/usePageTitle'
import { education } from '../data/about'

export default function About() {
  usePageTitle('Over mij')
  return (
    <Wrap className="py-16 md:py-24">
      <h1 className="font-display text-[44px] font-bold leading-[1] tracking-[-0.03em] md:text-[88px]">Over mij</h1>

      <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-12 md:gap-8">
        <Figure
          src="/isa-portrait-about.png"
          alt="Isa Bettonvil"
          tone="pink"
          aspect="aspect-[4/5]"
          imageClassName="rounded-[28px]"
          className="md:col-span-4"
        />
        <div className="md:col-span-7 md:col-start-6">
          <p className="max-w-[24ch] font-display text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-balance md:text-[44px]">
            Ik houd me bezig met <span className="mark-static">visuele communicatie</span> en UX/UI design.
          </p>
          <div className="mt-8 max-w-[62ch] space-y-5 font-body text-[19px] leading-[1.65] text-ink">
            <p>
              Onlangs afgestudeerd aan Tilburg University met een master Communicatie- en
              Informatiewetenschappen, specialisatie New Media Design. Analytisch en creatief
              ingesteld, met affiniteit voor digitale interactie en gebruikersgericht ontwerp.
            </p>
            <p>
              Als zelfstandig ondernemer run ik mijn eigen bedrijf, waarin ik creativiteit en
              ondernemerschap combineer. Ik ben nieuwsgierig naar nieuwe technologieën en onderzoek
              graag hoe die waarde toevoegen aan de digitale belevingen.
            </p>
          </div>
        </div>
      </div>

      <section className="mt-20 md:mt-28">
        <h2 className="border-t-2 border-ink pt-5 font-display text-[28px] font-bold tracking-[-0.02em] md:text-[36px]">Opleidingen</h2>
        <dl className="mt-6">
          {education.map((ed) => (
            <div key={ed.title} className="grid gap-1 border-b border-ink/25 py-6 md:grid-cols-12 md:gap-8">
              <dt className="font-display text-base font-semibold text-muted md:col-span-3">{ed.period}</dt>
              <dd className="md:col-span-9">
                <p className="font-display text-xl font-bold md:text-2xl">{ed.title}</p>
                <p className="mt-1 font-body text-lg text-muted">{ed.sub}</p>
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </Wrap>
  )
}
