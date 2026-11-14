import { Link } from 'react-router-dom'
import Wrap from '../components/Wrap'
import usePageTitle from '../components/usePageTitle'
import { projects } from '../data/projects'

export default function Work() {
  usePageTitle('Projecten')
  return (
    <Wrap className="py-16 md:py-24">
      <h1 className="font-display text-[44px] font-bold leading-[1] tracking-[-0.03em] md:text-[88px]">Projecten</h1>
      <p className="mt-6 max-w-[48ch] font-body text-xl leading-[1.5] text-muted">
        Van een website voor een platenzaak tot een toeslagen-app: drie projecten waarin onderzoek en
        ontwerp samenkomen.
      </p>

      <ol className="mt-14 border-t-2 border-ink md:mt-20">
        {projects.map((p) => (
          <li key={p.slug} className="border-b border-ink/25">
            <Link
              to={`/werk/${p.slug}`}
              className="group grid items-center gap-5 py-8 md:grid-cols-12 md:gap-x-8 md:gap-y-4 md:py-10"
            >
              <div className="md:col-span-5 md:row-span-2 lg:col-span-4 lg:row-span-1">
                <img src={p.image} alt="" className="block h-auto w-full" />
              </div>
              <div className="md:col-span-7 md:self-end lg:col-span-5 lg:self-auto">
                <h2 className="font-display text-[30px] font-bold leading-[1.05] tracking-[-0.02em] md:text-[36px] lg:text-[44px]">
                  <span className="bg-[linear-gradient(var(--color-marker),var(--color-marker))] bg-[length:0%_0.7em] bg-[position:0_90%] bg-no-repeat transition-[background-size] duration-300 ease-out group-hover:bg-[length:100%_0.7em]">
                    {p.title}
                  </span>
                </h2>
                <p className="mt-3 max-w-[44ch] font-body text-lg leading-[1.5] text-muted">{p.summary}</p>
              </div>
              <div className="md:col-span-7 md:self-start lg:col-span-3 lg:self-auto">
                <p className="font-display text-sm font-semibold text-ink">{p.type}</p>
                <ul className="mt-2 space-y-0.5 font-display text-sm text-muted">
                  {p.skills.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </Wrap>
  )
}
