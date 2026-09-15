import Button from './Button'
import StitchDivider from './StitchDivider'

export default function Footer() {
  return (
    <footer>
      <StitchDivider bg="bg-tan" thread="#171310" />
      <div className="bg-tan px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
            <div>
              <h2 className="font-display text-4xl font-medium leading-[1.05] text-ink md:text-6xl">
                Zin om samen
                <br />
                iets te maken?
              </h2>
              <div className="mt-8">
                <Button to="/contact" variant="primary">
                  Neem contact op ↗
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-6 font-body text-ink">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink/60">E-mail</p>
                <a href="mailto:isabettonvil@gmail.com" className="text-lg font-medium hover:text-coral">
                  isabettonvil@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink/60">Telefoon</p>
                <a href="tel:+31650572518" className="text-lg font-medium hover:text-coral">
                  +31 6 50 57 25 18
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink/60">Locatie</p>
                <p className="text-lg font-medium">&apos;s-Hertogenbosch</p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col-reverse items-center justify-between gap-4 border-t-2 border-ink/10 pt-6 text-xs font-body text-ink/60 md:flex-row">
            <p>&copy; {new Date().getFullYear()} Isa Bettonvil.</p>
            <p>UX/UI Designer &amp; Visual Communicator</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
