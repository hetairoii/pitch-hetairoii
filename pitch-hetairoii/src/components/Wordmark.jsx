import { useId } from 'react'

// Wordmark cromado (degradado verde azulado con "horizonte") y contorno azul marino.
const Wordmark = ({ text, className = '' }) => {
  const gradId = 'chrome-' + useId().replace(/:/g, '')
  const font = "'Archivo Black', 'Arial Black', Impact, sans-serif"
  return (
    <svg viewBox="0 0 1100 150" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#cdebf0" />
          <stop offset="0.46" stopColor="#4aa3b5" />
          <stop offset="0.5" stopColor="#13525f" />
          <stop offset="1" stopColor="#62b7c4" />
        </linearGradient>
      </defs>
      {/* sombra */}
      <text
        x="554"
        y="128"
        textAnchor="middle"
        textLength="1040"
        lengthAdjust="spacingAndGlyphs"
        fontSize="128"
        fill="#1b2a52"
        opacity="0.28"
        style={{ fontFamily: font }}
      >
        {text}
      </text>
      <text
        x="550"
        y="122"
        textAnchor="middle"
        textLength="1040"
        lengthAdjust="spacingAndGlyphs"
        fontSize="128"
        fill={'url(#' + gradId + ')'}
        stroke="#1b2a52"
        strokeWidth="7"
        strokeLinejoin="round"
        paintOrder="stroke"
        style={{ fontFamily: font }}
      >
        {text}
      </text>
    </svg>
  )
}

export default Wordmark
