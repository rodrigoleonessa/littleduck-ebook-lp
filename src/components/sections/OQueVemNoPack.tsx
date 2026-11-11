import { ebooks } from "@/lib/content";

const GOLD = "#B88A41";

const COVER_COLORS = [
  ["#E8B8A6", "#C57676"], // 1 rose
  ["#E8D096", "#C5A35E"], // 2 sand
  ["#A6C4D8", "#6E96B5"], // 3 dusty blue
  ["#D8B6A6", "#A87C66"], // 4 terracotta light
  ["#BFD2A6", "#7FA068"], // 5 sage
  ["#E0C8A6", "#B89870"], // 6 wheat
  ["#E8C8B0", "#C58A6E"], // 7 peach
  ["#C8D8B6", "#8FA876"], // 8 olive
  ["#D8C0B6", "#A88876"], // 9 taupe
  ["#A6BFC8", "#688593"], // 10 slate
];

const ICONS: React.ReactNode[] = [
  /* 1 - Hand / palm (Birras) */
  <svg key="1" viewBox="0 0 32 32" width="22" height="22" fill="none" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 16 V9 a1.5 1.5 0 0 1 3 0 V14 M14 14 V7 a1.5 1.5 0 0 1 3 0 V14 M17 14 V8 a1.5 1.5 0 0 1 3 0 V15 M20 15 V11 a1.5 1.5 0 0 1 3 0 V20 c 0 4 -3 8 -7 8 c -3 0 -5 -1 -7 -4 l -3 -5 c -1 -2 1 -3 2 -2 l 3 3" />
  </svg>,
  /* 2 - Puzzle (Brincadeiras) */
  <svg key="2" viewBox="0 0 32 32" width="22" height="22" fill="none" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 6 h8 v3 a2 2 0 0 0 4 0 V6 h8 v8 h-3 a2 2 0 0 0 0 4 h3 v8 h-8 v-3 a2 2 0 0 0 -4 0 v3 h-8 v-8 h3 a2 2 0 0 0 0 -4 h-3 z" />
  </svg>,
  /* 3 - Checklist (Rotina) */
  <svg key="3" viewBox="0 0 32 32" width="22" height="22" fill="none" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="6" width="14" height="22" rx="2" />
    <path d="M11 11 l1.5 1.5 l3 -3" />
    <path d="M11 17 l1.5 1.5 l3 -3" />
    <line x1="18" y1="11" x2="21" y2="11" />
    <line x1="18" y1="17" x2="21" y2="17" />
    <line x1="11" y1="23" x2="21" y2="23" />
  </svg>,
  /* 4 - Heart with check (Educação Emocional) */
  <svg key="4" viewBox="0 0 32 32" width="22" height="22" fill="none" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 26 C 6 20 4 12 10 9 c 3 -1 5 1 6 3 c 1 -2 3 -4 6 -3 c 6 3 4 11 -6 17 z" />
    <polyline points="12,16 15,19 20,13" />
  </svg>,
  /* 5 - Family 3 (Educação Positiva) */
  <svg key="5" viewBox="0 0 32 32" width="22" height="22" fill="none" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="10" r="3" />
    <circle cx="21" cy="10" r="3" />
    <circle cx="16" cy="20" r="2.5" />
    <path d="M6 23 q 0 -5 5 -5 q 5 0 5 5" />
    <path d="M16 23 q 0 -5 5 -5 q 5 0 5 5" />
    <path d="M12 27 q 0 -3 4 -3 q 4 0 4 3" />
  </svg>,
  /* 6 - Plant (Atividades Montessori) */
  <svg key="6" viewBox="0 0 32 32" width="22" height="22" fill="none" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 28 V14" />
    <path d="M16 18 q -7 -4 -7 -10 q 7 0 7 7" />
    <path d="M16 16 q 7 -4 7 -10 q -7 0 -7 7" />
    <path d="M11 28 h10" />
  </svg>,
  /* 7 - Bottle (Mãe Primeira Viagem) */
  <svg key="7" viewBox="0 0 32 32" width="22" height="22" fill="none" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 4 h6 v3 h-6 z" />
    <path d="M12 7 h8 v3 h-8 z" />
    <path d="M12 10 h8 v15 a3 3 0 0 1 -3 3 h-2 a3 3 0 0 1 -3 -3 z" />
    <line x1="12" y1="14" x2="20" y2="14" />
    <line x1="14" y1="18" x2="18" y2="18" />
  </svg>,
  /* 8 - Leaves (Mãe Inteira) */
  <svg key="8" viewBox="0 0 32 32" width="22" height="22" fill="none" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 28 V12" />
    <path d="M16 20 q -6 -2 -7 -8 q 6 0 7 6" />
    <path d="M16 16 q 6 -2 7 -8 q -6 0 -7 6" />
    <path d="M16 24 q -5 -1 -5 -5 q 5 0 5 4" />
  </svg>,
  /* 9 - Heart with people (Casal) */
  <svg key="9" viewBox="0 0 32 32" width="22" height="22" fill="none" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 26 C 6 20 4 12 10 9 c 3 -1 5 1 6 3 c 1 -2 3 -4 6 -3 c 6 3 4 11 -6 17 z" />
    <circle cx="13" cy="15" r="1.5" />
    <circle cx="19" cy="15" r="1.5" />
    <path d="M12 19 q 4 2 8 0" />
  </svg>,
  /* 10 - Sun (Método Montessori) */
  <svg key="10" viewBox="0 0 32 32" width="22" height="22" fill="none" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="16" cy="16" r="5" />
    <line x1="16" y1="4" x2="16" y2="8" />
    <line x1="16" y1="24" x2="16" y2="28" />
    <line x1="4" y1="16" x2="8" y2="16" />
    <line x1="24" y1="16" x2="28" y2="16" />
    <line x1="7.5" y1="7.5" x2="10" y2="10" />
    <line x1="22" y1="22" x2="24.5" y2="24.5" />
    <line x1="7.5" y1="24.5" x2="10" y2="22" />
    <line x1="22" y1="10" x2="24.5" y2="7.5" />
  </svg>,
];

function GiftBox({ size = 48 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} fill="none" aria-hidden="true">
      <rect x="10" y="26" width="44" height="30" rx="2" fill="#FBF3E7" stroke="#FFFFFF" strokeWidth="1.5" />
      <rect x="29" y="26" width="6" height="30" fill="#FFFFFF" />
      <rect x="6" y="22" width="52" height="8" rx="1.5" fill="#FBF3E7" stroke="#FFFFFF" strokeWidth="1.5" />
      <rect x="29" y="22" width="6" height="8" fill="#FFFFFF" />
      <path
        d="M32 22 c -5 -10 -16 -10 -16 -2 c 0 4 8 4 16 2 z M32 22 c 5 -10 16 -10 16 -2 c 0 4 -8 4 -16 2 z"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function OQueVemNoPack() {
  return (
    <section
      id="o-que-vem"
      style={{
        backgroundColor: "var(--color-cream)",
        paddingTop: "3rem",
        paddingBottom: "3rem",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "640px",
          margin: "0 auto",
          padding: "0 1.25rem",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.375rem, 4.5vw, 1.875rem)",
            fontWeight: 700,
            color: "#1F1B17",
            textAlign: "center",
            marginBottom: "2rem",
            lineHeight: 1.25,
          }}
        >
          O que você recebe no
          <br />
          Pack Premium de Guias para Pais
        </h2>

        {/* Ebook list */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          {ebooks.map((ebook, i) => (
            <div
              key={ebook.num}
              style={{
                display: "grid",
                gridTemplateColumns: "auto auto 1fr auto",
                gap: "0.875rem",
                alignItems: "center",
                backgroundColor: "rgba(255,255,255,0.85)",
                border: "1px solid rgba(184,138,65,0.18)",
                borderRadius: "16px",
                padding: "0.875rem 1rem",
                boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
              }}
            >
              {/* Mini book cover */}
              <div
                style={{
                  width: "44px",
                  height: "60px",
                  borderRadius: "3px",
                  flexShrink: 0,
                  position: "relative",
                  background: `linear-gradient(135deg, ${COVER_COLORS[i][0]} 0%, ${COVER_COLORS[i][1]} 100%)`,
                  boxShadow: "1px 2px 6px rgba(0,0,0,0.15), inset 1.5px 0 0 rgba(255,255,255,0.25), inset -1px 0 0 rgba(0,0,0,0.12)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "4px 3px",
                  overflow: "hidden",
                }}
              >
                <span
                  style={{
                    width: "70%",
                    height: "1.5px",
                    backgroundColor: "rgba(255,255,255,0.55)",
                    marginBottom: "3px",
                    borderRadius: "1px",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "5px",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.95)",
                    textAlign: "center",
                    lineHeight: 1.1,
                    letterSpacing: "0.02em",
                    display: "-webkit-box",
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {ebook.title}
                </span>
                <span
                  style={{
                    width: "40%",
                    height: "1px",
                    backgroundColor: "rgba(255,255,255,0.4)",
                    marginTop: "3px",
                    borderRadius: "1px",
                  }}
                />
              </div>

              {/* Number badge */}
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  backgroundColor: GOLD,
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  fontWeight: 800,
                  flexShrink: 0,
                }}
              >
                {parseInt(ebook.num, 10)}
              </div>

              {/* Text */}
              <div style={{ minWidth: 0 }}>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9375rem",
                    fontWeight: 700,
                    color: "#1F1B17",
                    lineHeight: 1.3,
                    marginBottom: "0.2rem",
                  }}
                >
                  {ebook.title}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.8125rem",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.4,
                  }}
                >
                  {ebook.desc}
                </p>
              </div>

              {/* Icon */}
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#FBF3E7",
                  border: `1px solid ${GOLD}33`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {ICONS[i] ?? null}
              </div>
            </div>
          ))}
        </div>

        {/* Bonus banner */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            backgroundColor: "var(--color-green)",
            borderRadius: "16px",
            padding: "1rem 1.25rem",
            marginTop: "1.5rem",
            color: "#FFFFFF",
            boxShadow: "0 4px 16px rgba(47,104,72,0.25)",
          }}
        >
          <div style={{ flexShrink: 0 }}>
            <GiftBox size={48} />
          </div>
          <div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1rem",
                fontWeight: 800,
                marginBottom: "0.15rem",
                letterSpacing: "0.02em",
              }}
            >
              + BÔNUS EXCLUSIVOS
            </p>
            <p style={{ fontSize: "0.8125rem", opacity: 0.9, lineHeight: 1.4 }}>
              Materiais extras para apoiar ainda mais sua jornada
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
