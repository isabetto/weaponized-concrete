/* Isa's own drawing of her head (public/isa-head.png) on a butter circle, so the crayon outline reads on the plum hero. */
export default function IsaDrawing({ className = '' }) {
  return (
    <svg
      viewBox="0 0 400 400"
      role="img"
      aria-label="Getekende Isa met halflang bruin haar die opzij kijkt"
      className={className}
    >
      <circle cx="200" cy="200" r="200" fill="#ece398" />
      <image href="/isa-head.png" x="50" y="64" width="300" height="281" />
    </svg>
  )
}
