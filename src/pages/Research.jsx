import Wrap from '../components/Wrap'
import Figure from '../components/Figure'
import usePageTitle from '../components/usePageTitle'
import { theses } from '../data/theses'

function renderBold(text) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-bold">
        {part}
      </strong>
    ) : (
      part
    ),
  )
}

export default function Research() {
  usePageTitle('Onderzoek')
  return (
    <Wrap className="py-16 md:py-24">
      <h1 className="font-display text-[44px] font-bold leading-[1] tracking-[-0.03em] md:text-[88px]">Onderzoek</h1>
      <p className="mt-6 max-w-[48ch] font-body text-xl leading-[1.5] text-muted">
        Mijn bachelorscriptie en masterthesis gaan allebei over hoe ontwerp en onderzoek elkaar
        versterken, van patiëntenportalen tot AI&#8209;desinformatie.
      </p>

      <div className="mt-14 space-y-20 md:mt-20 md:space-y-28">
        {theses.map((t) => (
          <article key={t.slug} className="grid gap-10 border-t-2 border-ink pt-8 md:grid-cols-12 md:gap-8 md:pt-10">
            <Figure
              src={t.cover}
              alt={t.coverAlt}
              tone="butter"
              aspect="aspect-[3/4]"
              className="md:col-span-4"
            />
            <div className="md:col-span-7 md:col-start-6">
              <dl className="flex flex-wrap gap-x-8 gap-y-1 font-display text-sm text-muted">
                <div className="flex gap-2">
                  <dt className="sr-only">Soort</dt>
                  <dd className="font-semibold text-ink">{t.level}</dd>
                </div>
                <div>
                  <dt className="sr-only">Instelling en datum</dt>
                  <dd>Tilburg University &middot; {t.date}</dd>
                </div>
              </dl>
              <h2 className="mt-4 font-display text-[28px] font-bold leading-[1.1] tracking-[-0.02em] text-balance md:text-[38px]">
                {t.title}
              </h2>
              <h3 className="mt-10 font-display text-xl font-bold">{t.abstractLabel}</h3>
              <div className="mt-4 max-w-[62ch] space-y-4 font-body text-[19px] leading-[1.65] text-ink">
                {t.abstract.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{renderBold(paragraph)}</p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Wrap>
  )
}
