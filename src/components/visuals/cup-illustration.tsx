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
          <pattern id="fiber-body" width="92" height="92" patternUnits="userSpaceOnUse">
            <rect width="92" height="92" fill="#C58A55" />
            <path d="M-8 18C18 4 38 31 62 12" stroke="#E2B579" strokeWidth="1.6" strokeLinecap="round" opacity="0.62" />
            <path d="M28 79C46 57 69 72 101 48" stroke="#6F442B" strokeWidth="1.2" strokeLinecap="round" opacity="0.42" />
            <path d="M5 54C30 47 44 62 75 45" stroke="#E7C18D" strokeWidth="1.1" strokeLinecap="round" opacity="0.55" />
            <path d="M73 2C58 25 75 36 91 42" stroke="#8B5834" strokeWidth="1.2" strokeLinecap="round" opacity="0.38" />
            <circle cx="16" cy="33" r="1.2" fill="#65402A" opacity="0.55" />
            <circle cx="55" cy="86" r="0.9" fill="#F0D09F" opacity="0.62" />
            <circle cx="82" cy="61" r="1.1" fill="#70452C" opacity="0.48" />
          </pattern>
          <linearGradient id="inner-cup" x1="216" y1="131" x2="370" y2="201">
            <stop stopColor="#7B4A2D" />
            <stop offset="0.58" stopColor="#A76D3F" />
            <stop offset="1" stopColor="#D3A066" />
          </linearGradient>
          <filter id="soft-shadow" x="80" y="58" width="440" height="650" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="24" stdDeviation="22" floodColor="#173F2C" floodOpacity="0.19" />
          </filter>
        </defs>

        <g className="cup-float" filter="url(#soft-shadow)">
          <ellipse cx="300" cy="646" rx="108" ry="22" fill="#173F2C" fillOpacity="0.12" />

          <path
            d="M165 160H435L397 556C394 584 353 603 300 603C247 603 206 584 203 556L165 160Z"
            fill="url(#fiber-body)"
          />
          <path
            d="M201 553C221 570 257 579 300 579C343 579 379 570 399 553L395 594C392 614 352 629 300 629C248 629 208 614 205 594L201 553Z"
            fill="url(#fiber-body)"
            stroke="#8A5635"
            strokeOpacity="0.54"
            strokeWidth="3"
          />

          <ellipse cx="300" cy="160" rx="141" ry="39" fill="#D6A36C" />
          <ellipse cx="300" cy="158" rx="124" ry="29" fill="url(#inner-cup)" />
          <ellipse cx="300" cy="159" rx="139" ry="38" fill="none" stroke="#9C653E" strokeWidth="4" />
          <path d="M177 162C210 184 390 184 423 162" stroke="#E5BD88" strokeWidth="3" strokeLinecap="round" opacity="0.62" />

          <g fill="#173F2C">
            <path d="M300 340C299 313 297 286 294 260" stroke="#173F2C" strokeWidth="7" strokeLinecap="round" />
            <path d="M289 307C248 299 227 272 231 237C271 246 291 270 289 307Z" />
            <path d="M307 291C327 251 362 238 397 252C379 290 348 306 307 291Z" />
            <text x="300" y="407" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="54" fontWeight="700" letterSpacing="1">
              RE-CUP
            </text>
            <path d="M251 445H349" stroke="#173F2C" strokeWidth="5" strokeLinecap="round" />
            <text x="300" y="478" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="15" fontWeight="700" letterSpacing="4">
              RETHINK
            </text>
            <text x="300" y="504" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="15" fontWeight="700" letterSpacing="4">
              RETURN
            </text>
            <text x="300" y="530" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="15" fontWeight="700" letterSpacing="4">
              REGROW
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}
