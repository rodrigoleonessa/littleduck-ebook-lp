import { garantia } from "@/lib/content";

const GOLD = "#B88A41";
const GOLD_DARK = "#8C6429";

function GuaranteeMedal({ size = 110 }: { size?: number }) {
  return (
    <svg viewBox="0 0 120 140" width={size} height={(size * 140) / 120} fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="medalGrad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#E8C982" />
          <stop offset="55%" stopColor={GOLD} />
          <stop offset="100%" stopColor={GOLD_DARK} />
        </radialGradient>
      </defs>
      {/* Ribbons */}
      <path d="M30 70 L 14 130 L 30 122 L 38 132 L 48 90 Z" fill={GOLD_DARK} />
      <path d="M90 70 L 106 130 L 90 122 L 82 132 L 72 90 Z" fill={GOLD_DARK} />
      <path d="M32 72 L 18 126 L 30 119 L 36 128 L 46 92 Z" fill={GOLD} />
      <path d="M88 72 L 102 126 L 90 119 L 84 128 L 74 92 Z" fill={GOLD} />
      {/* Outer scalloped circle */}
      <g>
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * 360) / 16;
          const rad = (angle * Math.PI) / 180;
          const cx = 60 + Math.cos(rad) * 46;
          const cy = 60 + Math.sin(rad) * 46;
          return <circle key={i} cx={cx} cy={cy} r="6" fill={GOLD_DARK} />;
        })}
      </g>
      {/* Inner medal */}
      <circle cx="60" cy="60" r="44" fill="url(#medalGrad)" stroke={GOLD_DARK} strokeWidth="1" />
      <circle cx="60" cy="60" r="36" fill="none" stroke={GOLD_DARK} strokeWidth="1.2" strokeDasharray="2 2" opacity="0.5" />
      {/* Text */}
      <text
        x="60"
        y="56"
        textAnchor="middle"
        fontFamily="var(--font-serif), Georgia, serif"
        fontSize="22"
        fontWeight="900"
        fill="#FFFFFF"
      >
        7
      </text>
      <text
        x="60"
        y="70"
        textAnchor="middle"
        fontFamily="var(--font-sans), Helvetica, sans-serif"
        fontSize="9"
        fontWeight="800"
        fill="#FFFFFF"
        letterSpacing="1.3"
      >
        DIAS
      </text>
      <text
        x="60"
        y="83"
        textAnchor="middle"
        fontFamily="var(--font-sans), Helvetica, sans-serif"
        fontSize="6.5"
        fontWeight="700"
        fill="#FFFFFF"
        letterSpacing="1.5"
        opacity="0.95"
      >
        DE GARANTIA
      </text>
    </svg>
  );
}

function LeafBranch({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 80 140" width="80" height="140" fill="none" aria-hidden="true" style={{ pointerEvents: "none", ...style }}>
      <path d="M40 130 Q42 60 30 10" stroke={GOLD} strokeWidth="1.4" fill="none" />
      <path d="M32 30 Q14 28 6 42 Q22 50 32 38 Z" fill={GOLD} fillOpacity="0.55" />
      <path d="M36 50 Q56 48 64 60 Q44 66 36 56 Z" fill={GOLD} fillOpacity="0.55" />
      <path d="M34 70 Q14 68 8 82 Q24 88 34 76 Z" fill={GOLD} fillOpacity="0.5" />
      <path d="M38 92 Q58 90 68 102 Q48 108 38 98 Z" fill={GOLD} fillOpacity="0.5" />
      <path d="M36 112 Q20 110 14 122 Q28 128 36 118 Z" fill={GOLD} fillOpacity="0.45" />
    </svg>
  );
}

export default function Garantia() {
  return (
    <section
      style={{
        backgroundColor: "var(--color-cream)",
        paddingTop: "2.5rem",
        paddingBottom: "2.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <LeafBranch style={{ position: "absolute", right: "-15px", top: "50%", transform: "translateY(-50%)", opacity: 0.85 }} />

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "640px",
          margin: "0 auto",
          padding: "0 1.25rem",
        }}
      >
        <div
          className="garantia-grid"
          style={{
            display: "flex",
            gap: "1.25rem",
            alignItems: "center",
            backgroundColor: "rgba(255,255,255,0.6)",
            border: "1px solid rgba(184,138,65,0.18)",
            borderRadius: "20px",
            padding: "1.5rem 1.25rem",
            boxShadow: "0 4px 18px rgba(0,0,0,0.04)",
          }}
        >
          <div style={{ flexShrink: 0 }}>
            <GuaranteeMedal size={110} />
          </div>

          <div style={{ minWidth: 0 }}>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.25rem, 4.5vw, 1.625rem)",
                fontWeight: 700,
                color: "#1F1B17",
                marginBottom: "0.625rem",
                lineHeight: 1.25,
              }}
            >
              {garantia.headline}
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.9375rem",
                color: "var(--color-text-body)",
                lineHeight: 1.6,
              }}
            >
              {garantia.body}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .garantia-grid {
            flex-direction: column !important;
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
}
