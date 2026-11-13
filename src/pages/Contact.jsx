import Wrap from '../components/Wrap'
import Button from '../components/Button'
import usePageTitle from '../components/usePageTitle'

const details = [
  { label: 'E-mail', value: 'isabettonvil@gmail.com', href: 'mailto:isabettonvil@gmail.com' },
  { label: 'Telefoon', value: '+31 6 50 57 25 18', href: 'tel:+31650572518' },
  { label: 'Locatie', value: "'s-Hertogenbosch", href: null },
]

export default function Contact() {
  usePageTitle('Contact')
  return (
    <section className="on-plum bg-plum py-16 text-paper md:py-28">
      <Wrap>
        <h1 className="max-w-[12ch] font-display text-[48px] font-bold leading-[0.98] tracking-[-0.03em] text-balance md:text-[96px]">
          Zin om samen iets te maken?
        </h1>
        <p className="mt-8 max-w-[44ch] font-body text-xl leading-[1.5] text-paper">
          Stuur me gerust een bericht over een project, samenwerking of gewoon om kennis te maken.
          Ik hoor graag van je!
        </p>
        <div className="mt-8">
          <Button href="mailto:isabettonvil@gmail.com" variant="marker">
            Stuur een e-mail
          </Button>
        </div>

        <dl className="mt-16 grid gap-6 md:mt-24 md:grid-cols-3 md:gap-8">
          {details.map((d) => (
            <div key={d.label} className="border-t border-paper/40 pt-3">
              <dt className="font-display text-sm font-medium text-paper/90">{d.label}</dt>
              <dd className="mt-1 font-body text-xl">
                {d.href ? (
                  <a href={d.href} className="underline decoration-paper/60 underline-offset-4 hover:bg-marker hover:text-ink hover:no-underline">
                    {d.value}
                  </a>
                ) : (
                  d.value
                )}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-16 border-t border-paper/40 pt-5 font-body text-sm text-paper/90">
          &copy; {new Date().getFullYear()} Isa Bettonvil &middot; UX/UI Designer &amp; Visual Communicator
        </p>
      </Wrap>
    </section>
  )
}
