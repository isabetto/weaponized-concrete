import { motion, useReducedMotion } from 'framer-motion'

// Signature motif: a hand-stitched thread seam between sections —
// a nod to Isa's crochet business and to "visual communication" as
// literally threading ideas together.
export default function StitchDivider({ bg = 'bg-cream', thread = '#171310' }) {
  const reduceMotion = useReducedMotion()

  return (
    <div className={`relative h-12 md:h-16 w-full overflow-hidden ${bg}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 64"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <motion.path
          d="M -20 32 Q 30 4, 80 32 T 180 32 T 280 32 T 380 32 T 480 32 T 580 32 T 680 32 T 780 32 T 880 32 T 980 32 T 1080 32 T 1220 32"
          fill="none"
          stroke={thread}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="10 9"
          initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.55 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  )
}
