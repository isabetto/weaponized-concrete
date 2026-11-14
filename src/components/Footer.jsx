import Wrap from './Wrap'
import Button from './Button'

const details = [
  { label: 'E-mail', value: 'isabettonvil@gmail.com', href: 'mailto:isabettonvil@gmail.com' },
  { label: 'Telefoon', value: '+31 6 50 57 25 18', href: 'tel:+31650572518' },
  { label: 'Locatie', value: "'s-Hertogenbosch", href: null },
]

export default function Footer() {
  return (
    <footer className="on-plum bg-plum py-16 text-paper md:py-24">
      <Wrap>
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <h2 className="max-w-[14ch] font-display text-[40px] font-bold leading-[1.02] tracking-[-0.03em] md:text-[64px]">
              Zin om samen iets te maken?
            </h2>
            <div className="mt-8">
              <Button to="/contact" variant="marker">
                Neem contact op
              </Button>
            </div>
          </div>
          <dl className="grid gap-6 md:col-span-4 md:col-start-9 md:content-end">
            {details.map((d) => (
              <div key={d.label} className="border-t border-paper/40 pt-3">
                <dt className="font-display text-sm font-medium text-paper/90">{d.label}</dt>
                <dd className="mt-1 font-body text-lg">
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
        </div>
        <p className="mt-16 border-t border-paper/40 pt-5 font-body text-sm text-paper/90">
          &copy; {new Date().getFullYear()} Isa Bettonvil &middot; UX/UI Designer
        </p>
      </Wrap>
    </footer>
  )
}
