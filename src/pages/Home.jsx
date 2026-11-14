import { useCallback, useEffect, useRef, useState } from 'react'
import Wrap from '../components/Wrap'
import SitePreview from '../components/SitePreview'
import Figure from '../components/Figure'
import IsaPortrait from '../components/IsaPortrait'
import { Link } from 'react-router-dom'
import usePageTitle from '../components/usePageTitle'
import { projects, previewLabel } from '../data/projects'

const MARKED = 'onderzoekende blik.'
const TOTAL = MARKED.length

/* The headline highlight follows the mouse. The target (0..1) is eased toward every frame and written
   to each letter as a CSS variable, so the edge of the marker slides smoothly through the letters. */
function MarkedText({ ctl }) {
  const letters = useRef([])
  const root = useRef(null)

  useEffect(() => {
    const state = ctl.current
    state.el = root.current
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = null
    let cur = 0
    const paint = (p) => {
      const pos = p * TOTAL
      letters.current.forEach((el) => {
        if (el) el.style.setProperty('--c', Math.min(1, Math.max(0, pos - Number(el.dataset.i))).toFixed(3))
      })
    }
    const tick = () => {
      const t = state.target
      cur = reduced ? t : cur + (t - cur) * 0.12
      if (Math.abs(t - cur) < 0.0005) cur = t
      paint(cur)
      raf = cur === t ? null : requestAnimationFrame(tick)
    }
    state.wake = () => {
      if (raf === null) raf = requestAnimationFrame(tick)
    }
    paint(0)
    return () => {
      if (raf !== null) cancelAnimationFrame(raf)
      state.wake = () => {}
    }
  }, [ctl])

  // Every character of the phrase, the space included, owns one slot, so the marker edge moves on without gaps.
  let count = 0
  return (
    <>
      <span className="sr-only">{MARKED}</span>
      <span ref={root} aria-hidden="true">
      {MARKED.split(' ').map((word, w) => {
        let space = null
        if (w > 0) {
          const idx = count++
          space = (
            <span ref={(el) => (letters.current[idx] = el)} data-i={idx} data-c=" " className="hl">
              {' '}
            </span>
          )
        }
        return (
          <span key={w}>
            {space}
            <span className="whitespace-nowrap">
              {word.split('').map((ch, i) => {
                const idx = count++
                return (
                  <span key={i} ref={(el) => (letters.current[idx] = el)} data-i={idx} data-c={ch} className="hl">
                    {ch}
                  </span>
                )
              })}
            </span>
          </span>
        )
      })}
      </span>
    </>
  )
}

export default function Home() {
  usePageTitle('')
  const ctl = useRef({ target: 0, touched: false, el: null, wake: () => {} })
  const [preview, setPreview] = useState(null)
  const closePreview = useCallback(() => setPreview(null), [])

  useEffect(() => {
    // Scrolling also drives the marker, for everyone who scrolls without moving the mouse (and on touch screens).
    // The latest input wins: a mouse move over the phrase sets it from the pointer, a scroll sets it from scrollY.
    const fromScroll = () => {
      const range = window.innerWidth >= 768 ? 220 : 140
      ctl.current.target = 0.25 + 0.75 * Math.min(1, Math.max(0, window.scrollY / range))
      ctl.current.wake()
    }
    const id = setTimeout(() => {
      if (!ctl.current.touched) fromScroll()
    }, 450)
    window.addEventListener('scroll', fromScroll, { passive: true })
    return () => {
      clearTimeout(id)
      window.removeEventListener('scroll', fromScroll)
    }
  }, [])

  // Scroll directly instead of relying on the URL hash, so the button also works on a second click.
  const scrollToProjects = (e) => {
    e.preventDefault()
    document.getElementById('projecten')?.scrollIntoView({ behavior: 'auto', block: 'start' })
  }

  const onPointerMove = (e) => {
    if (e.pointerType !== 'mouse') return
    ctl.current.touched = true
    // The marker runs from the first to the last letter of the phrase itself, not across the whole page.
    const el = ctl.current.el
    if (!el) return
    const r = el.getBoundingClientRect()
    ctl.current.target = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width))
    ctl.current.wake()
  }

  return (
    <>
      <section
        onPointerMove={onPointerMove}
        className="on-plum flex bg-plum py-16 text-paper md:min-h-[740px] md:items-center md:py-20"
      >
        <Wrap className="relative">
          <IsaPortrait className="pointer-events-none absolute right-10 top-1/2 hidden h-[300px] w-auto -translate-y-1/2 xl:block" />
          <h1 className="max-w-[16ch] font-display text-[34px] font-bold leading-[1] tracking-[-0.03em] text-balance min-[380px]:text-[44px] md:max-w-none md:text-[64px] lg:text-[88px]">
            Ontwerper met een <MarkedText ctl={ctl} />
          </h1>
          <p className="mt-6 max-w-[760px] font-display text-[22px] leading-[1.3] text-paper md:mt-8 md:text-[36px]">
            Ik combineer gebruikersonderzoek met kleur, nieuwsgierigheid en doe-het-zelf mentaliteit.
          </p>
          <a
            href="#projecten"
            onClick={scrollToProjects}
            className="group mt-10 inline-flex items-center gap-5 font-display text-base font-medium uppercase md:mt-14 md:text-xl"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-paper/70 transition-colors duration-200 group-hover:bg-marker group-hover:text-ink md:h-20 md:w-20">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
                className="transition-transform duration-300 ease-out group-hover:rotate-45 group-focus-visible:rotate-45"
              >
                <path d="M6 6l12 12M18 8v10H8" />
              </svg>
            </span>
            Bekijk projecten
          </a>
        </Wrap>
      </section>

      <section id="projecten" className="py-10 md:py-10">
        <Wrap>
          <h2 className="sr-only">Projecten</h2>
          {projects.map((p, i) => {
            const flip = i % 2 === 1
            return (
              <article key={p.slug} className="grid items-center gap-8 py-8 md:min-h-[500px] md:grid-cols-2 md:gap-0 md:py-0">
                <Figure
                  src={p.image}
                  alt={`Werk voor ${p.title}`}
                  tone={p.tone}
                  aspect="aspect-[14/9]"
                  to={p.preview ? undefined : `/werk/${p.slug}`}
                  onClick={p.preview ? () => setPreview(p) : undefined}
                  label={p.preview ? previewLabel(p) : `Lees de case ${p.title}`}
                  className={flip ? 'md:order-2' : ''}
                />
                <div className={`md:px-10 ${flip ? 'md:order-1' : ''}`}>
                  <div className="max-w-[400px]">
                    <span className="inline-block rounded-full border border-ink px-4 py-1 font-display text-xs font-medium text-ink">
                      {p.type}
                    </span>
                    <h3 className="mt-4 font-display text-[28px] font-medium leading-[1.3] text-ink">{p.title}</h3>
                    <p className="mt-3 font-body text-base leading-[1.5] text-muted">{p.summary}</p>
                    <Link
                      to={`/werk/${p.slug}`}
                      className="mt-2 inline-flex min-h-11 items-center gap-2 font-display text-[15px] font-semibold text-ink underline-offset-4 hover:underline"
                    >
                      Bekijk case <span className="sr-only">{p.title}</span> <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </Wrap>
      </section>
      <SitePreview project={preview} onClose={closePreview} />
    </>
  )
}
