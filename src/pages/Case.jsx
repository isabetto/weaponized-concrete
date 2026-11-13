import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Wrap from '../components/Wrap'
import Button from '../components/Button'
import Figure, { Placeholder } from '../components/Figure'
import ProjectLightbox from '../components/ProjectLightbox'
import usePageTitle from '../components/usePageTitle'
import { projects } from '../data/projects'

function Block({ title, children }) {
  return (
    <section className="border-t-2 border-ink pt-5">
      <h2 className="font-display text-[28px] font-bold leading-[1.1] tracking-[-0.02em] md:text-[36px]">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  )
}

function PlaceholderText({ children }) {
  return (
    <p className="hatch border-2 border-dashed border-ink/50 p-5 font-body text-[17px] leading-[1.55] text-ink">
      <span className="mr-2 inline-block bg-marker px-2 py-0.5 font-display text-sm font-semibold">Placeholder</span>
      {children}
    </p>
  )
}

export default function Case() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  const p = projects[index]
  const [open, setOpen] = useState(false)
  usePageTitle(p?.title ?? '')
  if (!p) return <Navigate to="/werk" replace />
  const next = projects[(index + 1) % projects.length]

  return (
    <>
      <Wrap className="pb-20 pt-10 md:pb-28 md:pt-14">
        <Link to="/werk" className="font-display text-[15px] font-semibold text-ink underline decoration-ink/40 underline-offset-4 hover:bg-marker">
          &larr; Alle projecten
        </Link>

        <div className="mt-8 grid gap-8 md:grid-cols-12 md:gap-8">
          <h1 className="font-display text-[44px] font-bold leading-[0.98] tracking-[-0.03em] text-balance md:col-span-8 md:text-[80px]">
            {p.title}
          </h1>
          <dl className="grid gap-4 font-display md:col-span-4 md:col-start-9 md:self-end">
            <div className="border-t border-ink/40 pt-2">
              <dt className="text-sm text-muted">Type</dt>
              <dd className="text-base font-semibold">{p.type}</dd>
            </div>
            <div className="border-t border-ink/40 pt-2">
              <dt className="text-sm text-muted">Vaardigheden</dt>
              <dd className="text-base font-semibold">{p.skills.join(' · ')}</dd>
            </div>
          </dl>
        </div>

        <p className="mt-8 max-w-[34ch] font-display text-[26px] font-medium leading-[1.2] tracking-[-0.01em] md:text-[34px]">
          <span className="mark-static">{p.summary}</span>
        </p>

        <Figure
          src={p.image}
          alt={`Werk voor ${p.title}`}
          tone={p.tone}
          aspect="aspect-[16/9]"
          onClick={() => setOpen(true)}
          label={`Bekijk demo van ${p.title}`}
          className="mt-12 md:mt-16"
        />
        <div className="mt-6">
          <Button onClick={() => setOpen(true)}>Bekijk demo</Button>
        </div>

        <div className="mt-20 space-y-16 md:mt-28 md:space-y-24">
          <div className="grid gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-5">
              <Block title="Context">
                <div className="space-y-4 font-body text-[19px] leading-[1.6] text-ink">
                  {p.details.map((d) => (
                    <p key={d.slice(0, 24)}>{d}</p>
                  ))}
                </div>
              </Block>
            </div>
            <div className="md:col-span-6 md:col-start-7 md:self-end">
              <Placeholder label={`Beeld van de uitgangssituatie van ${p.title}, bijvoorbeeld de oude site of een schets`} />
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-5">
              <Block title="Aanpak">
                <PlaceholderText>
                  Beschrijf in drie of vier zinnen hoe je te werk ging: welk onderzoek, welke
                  ontwerpkeuzes en welke tests. Noem ook je rol en de periode.
                </PlaceholderText>
              </Block>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:col-span-6 md:col-start-7">
              <Placeholder label="Schetsen of wireframes" aspect="aspect-[4/5]" />
              <Placeholder label="Testresultaten of inzichten" aspect="aspect-[4/5]" />
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-5">
              <Block title="Resultaat">
                <PlaceholderText>
                  Wat leverde het op? Benoem alleen wat je kunt onderbouwen, zoals een
                  testbevinding, een aangepast ontwerp of feedback van de opdrachtgever.
                </PlaceholderText>
              </Block>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <Placeholder label="Eindontwerp in context, bijvoorbeeld op een apparaat" />
            </div>
          </div>

          {p.social?.length > 0 && (
            <Block title="Online">
              <ul className="flex flex-wrap gap-x-8 gap-y-2 font-display text-lg font-semibold">
                {p.social.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} target="_blank" rel="noreferrer" className="underline decoration-ink/40 underline-offset-4 hover:bg-marker">
                      {s.label} {s.handle}
                    </a>
                  </li>
                ))}
              </ul>
            </Block>
          )}
        </div>
      </Wrap>

      <section className="on-plum bg-plum text-paper">
        <Wrap>
          <Link to={`/werk/${next.slug}`} className="group flex flex-col justify-between gap-6 py-14 md:flex-row md:items-end md:py-20">
            <span className="font-display text-xl font-medium text-paper/90">Volgende project</span>
            <span className="font-display text-[40px] font-bold leading-[1] tracking-[-0.03em] group-hover:underline group-hover:decoration-marker group-hover:decoration-4 group-hover:underline-offset-8 md:text-[72px]">
              {next.title} &rarr;
            </span>
          </Link>
        </Wrap>
      </section>

      <ProjectLightbox project={open ? p : null} onClose={() => setOpen(false)} />
    </>
  )
}
