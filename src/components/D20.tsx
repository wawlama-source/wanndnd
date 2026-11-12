/** Kleiner W20 (Ikosaeder von vorn) als Deko vor dem Spieltitel. */
export function D20({ className = 'title-die' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id="d20-face" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c23a32" />
          <stop offset=".6" stopColor="#7a1a16" />
          <stop offset="1" stopColor="#3f0b09" />
        </linearGradient>
        <linearGradient id="d20-rim" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff3cf" />
          <stop offset=".5" stopColor="#c9a55c" />
          <stop offset="1" stopColor="#6b4f1f" />
        </linearGradient>
      </defs>
      <polygon
        points="32,3 57,17.5 57,46.5 32,61 7,46.5 7,17.5"
        fill="url(#d20-face)"
        stroke="url(#d20-rim)"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <g fill="none" stroke="#f0d48a" strokeOpacity=".75" strokeWidth="1.6" strokeLinejoin="round">
        <polygon points="32,15 50,44 14,44" />
        <path d="M32 3V15 M7 17.5L32 15L57 17.5 M7 17.5L14 44L7 46.5 M57 17.5L50 44L57 46.5 M14 44L32 61L50 44" />
      </g>
      <text x="32" y="38.5" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="700" fontSize="14" fill="#fff3cf">
        20
      </text>
    </svg>
  )
}
