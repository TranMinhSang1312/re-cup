type CupIllustrationProps = {
  cupOpacityClassName?: string;
};

export function CupIllustration({
  cupOpacityClassName = "opacity-100",
}: CupIllustrationProps) {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[34rem]" aria-hidden="true">
      <div className="absolute inset-[7%] rounded-full border border-forest/10" />
      <div className="absolute inset-[16%] rounded-full border border-dashed border-coconut/20" />

      <svg
        className={`relative size-full drop-shadow-[0_40px_50px_rgba(23,63,44,0.18)] transition-opacity duration-700 ${cupOpacityClassName}`}
        viewBox="0 0 600 750"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="cup-body" x1="188" y1="185" x2="408" y2="624">
            <stop stopColor="#DAB17C" />
            <stop offset="0.5" stopColor="#C38E55" />
            <stop offset="1" stopColor="#9B6337" />
          </linearGradient>
          <linearGradient id="cup-lid" x1="196" y1="116" x2="402" y2="214">
            <stop stopColor="#FFFDF7" />
            <stop offset="0.56" stopColor="#F3EDDF" />
            <stop offset="1" stopColor="#D9D0C1" />
          </linearGradient>
          <filter id="soft-shadow" x="80" y="58" width="440" height="650" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="24" stdDeviation="22" floodColor="#173F2C" floodOpacity="0.19" />
          </filter>
        </defs>

        <g className="cup-float" filter="url(#soft-shadow)">
          <ellipse cx="300" cy="646" rx="108" ry="22" fill="#173F2C" fillOpacity="0.12" />

          <path
            d="M176 180H424L394 570C391 605 352 628 300 628C248 628 209 605 206 570L176 180Z"
            fill="url(#cup-body)"
          />
          <ellipse cx="300" cy="575" rx="94" ry="30" stroke="#7C4D2B" strokeOpacity="0.28" strokeWidth="3" />

          <path
            d="M164 153H436L428 187C424 207 369 219 300 219C231 219 176 207 172 187L164 153Z"
            fill="url(#cup-lid)"
          />
          <ellipse cx="300" cy="153" rx="136" ry="40" fill="#F6F0E4" />
          <path
            d="M188 144C188 125 238 111 300 111C362 111 412 125 412 144V168C412 185 362 199 300 199C238 199 188 185 188 168V144Z"
            fill="url(#cup-lid)"
          />
          <ellipse cx="300" cy="144" rx="112" ry="32" fill="#FFFCF5" />
          <ellipse cx="300" cy="145" rx="92" ry="23" stroke="#D7CFC1" strokeWidth="3" />
          <path d="M184 174C224 193 376 193 416 174" stroke="#D0C7B8" strokeWidth="3" />
          <path d="M172 188C218 211 382 211 428 188" stroke="#C8BEAF" strokeWidth="4" />
          <rect x="274" y="125" width="52" height="10" rx="5" fill="#C5BCAD" />

          <g fill="#173F2C">
            <path d="M300 336C299 310 298 289 297 267" stroke="#173F2C" strokeWidth="7" strokeLinecap="round" />
            <path d="M290 302C252 299 233 278 232 248C269 251 290 269 290 302Z" />
            <path d="M306 288C318 255 344 243 375 250C365 281 342 296 306 288Z" />
            <text x="300" y="392" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="44" fontWeight="700" letterSpacing="1">
              RE-CUP
            </text>
            <text x="300" y="423" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700" letterSpacing="1.5">
              RETHINK · RETURN · REGROW
            </text>
          </g>
        </g>

        <g fill="#A96D3D">
          <circle cx="103" cy="235" r="3" />
          <circle cx="496" cy="333" r="2.5" />
          <circle cx="126" cy="532" r="2.5" />
          <circle cx="474" cy="589" r="3" />
        </g>
      </svg>
    </div>
  );
}
