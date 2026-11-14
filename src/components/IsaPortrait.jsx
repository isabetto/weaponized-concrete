/* Isa's photo with the background removed (public/isa-photo.webp), standing in a butter circle. The photo is
   clipped by the circle so the shoulders follow its curve. Scaled and shifted so her face sits in the middle of the circle. */
export default function IsaPortrait({ className = '' }) {
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label="Foto van Isa Bettonvil" className={className}>
      <defs>
        <clipPath id="isa-circle">
          <circle cx="200" cy="200" r="200" />
        </clipPath>
      </defs>
      <circle cx="200" cy="200" r="200" fill="#ece398" />
      <image href="/isa-photo.webp" x="35" y="36" width="400" height="491" clipPath="url(#isa-circle)" />
    </svg>
  )
}
