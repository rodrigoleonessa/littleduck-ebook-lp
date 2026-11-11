import Image from "next/image";
import { apresentacao } from "@/lib/content";
import CtaButton from "@/components/ui/CtaButton";

const GOLD = "#B88A41";

const TOPIC_ICONS: Record<string, React.ReactNode> = {
  Telas: (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="9" width="20" height="14" rx="2" />
      <line x1="11" y1="27" x2="21" y2="27" />
      <line x1="16" y1="23" x2="16" y2="27" />
      <circle cx="13" cy="15" r="1.4" fill={GOLD} />
      <path d="M11 19 q5 -3 10 0" />
    </svg>
  ),
  Birras: (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="11" r="5" />
      <path d="M13 11 l1 -1 M19 11 l-1 -1" />
      <path d="M14 14 q2 1 4 0" />
      <path d="M11 19 q-2 4 -1 9 h12 q1 -5 -1 -9" />
      <path d="M16 5 l1 -3 M12 6 l-1 -3 M20 6 l1 -3" />
    </svg>
  ),
  Rotina: (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="14" height="16" rx="1.5" />
      <path d="M11 6 v4 M21 6 v4" />
      <line x1="9" y1="14" x2="23" y2="14" />
      <line x1="13" y1="18" x2="19" y2="18" />
      <line x1="13" y1="21" x2="17" y2="21" />
    </svg>
  ),
  Montessori: (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="8" />
      <path d="M16 8 l1.5 5 l5 0 l-4 3 l1.5 5 l-4 -3 l-4 3 l1.5 -5 l-4 -3 l5 0 z" fill={GOLD} fillOpacity="0.2" />
    </svg>
  ),
  Autonomia: (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="10" r="4" />
      <path d="M10 26 c 0 -6 3 -9 6 -9 c 3 0 6 3 6 9" />
      <path d="M16 17 v9" />
      <path d="M22 7 l3 -3 M22 7 l-1 -3 M22 7 l3 1" />
    </svg>
  ),
  Sono: (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19 a8 8 0 1 1 -9 -10 a6 6 0 0 0 9 10 z" />
      <path d="M24 9 l1 1 l-1 1 l-1 -1 z" fill={GOLD} />
      <path d="M9 7 l1 1 l-1 1 l-1 -1 z" fill={GOLD} />
    </svg>
  ),
};

export default function Apresentacao() {
  const headline = apresentacao.headline1.replace(/\.$/, "");

  return (
    <section
      style={{
        backgroundColor: "var(--color-cream)",
        paddingTop: "0",
        paddingBottom: "3rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Photo + headline split */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 0,
          alignItems: "stretch",
        }}
        className="apres-grid"
      >
        {/* Photo */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "4 / 3",
            overflow: "hidden",
          }}
        >
          <Image
            src="/mae-filha.png"
            alt="Mãe abraçando a filha"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </div>

        {/* Text */}
        <div
          style={{
            padding: "2.5rem 1.5rem 0",
            position: "relative",
            maxWidth: "640px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          {/* Heart decoration */}
          <svg
            viewBox="0 0 40 36"
            width="44"
            height="40"
            fill="none"
            stroke="#C96D55"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            style={{
              position: "absolute",
              right: "1rem",
              top: "1.75rem",
              transform: "rotate(12deg)",
              opacity: 0.85,
            }}
          >
            <path d="M20 30 C 6 22 4 12 11 8 c 4 -2 7 1 9 4 c 2 -3 5 -6 9 -4 c 7 4 5 14 -9 22 z" />
          </svg>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.625rem, 5.5vw, 2.25rem)",
              fontWeight: 700,
              color: "#1F1B17",
              lineHeight: 1.18,
              textAlign: "center",
              marginBottom: "1.25rem",
            }}
          >
            {headline}.
            <br />
            {apresentacao.headline2}
          </h2>

          <p
            style={{
              fontSize: "1rem",
              color: "var(--color-text-body)",
              lineHeight: 1.7,
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            {apresentacao.body}
          </p>
        </div>
      </div>

      {/* Topic icons row */}
      <div
        style={{
          maxWidth: "640px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.25rem 0.75rem",
            marginBottom: "2rem",
            justifyItems: "center",
          }}
        >
          {apresentacao.topics.map((topic) => (
            <div
              key={topic}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-cream)",
                  border: `1.5px solid ${GOLD}33`,
                  boxShadow: "0 4px 14px rgba(184,138,65,0.10)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {TOPIC_ICONS[topic] ?? null}
              </div>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8125rem",
                  color: "var(--color-text-muted)",
                  fontWeight: 500,
                }}
              >
                {topic}
              </span>
            </div>
          ))}
        </div>

        {/* Tagline box with botanicals */}
        <div
          style={{
            position: "relative",
            backgroundColor: "rgba(255,255,255,0.7)",
            border: "1px solid rgba(184,138,65,0.18)",
            borderRadius: "20px",
            padding: "1.5rem 1.25rem",
            textAlign: "center",
            marginBottom: "1.5rem",
            boxShadow: "0 4px 18px rgba(0,0,0,0.04)",
            overflow: "hidden",
          }}
        >
          {/* Botanical decoration left */}
          <svg
            viewBox="0 0 60 80"
            width="40"
            height="55"
            fill="none"
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "-8px",
              bottom: "-8px",
              opacity: 0.55,
            }}
          >
            <path d="M30 70 Q30 30 28 5" stroke="#7A9367" strokeWidth="1.2" fill="none" />
            <path d="M28 22 Q14 18 10 30 Q22 32 28 28 Z" fill="#A0BB87" />
            <path d="M30 38 Q46 34 50 46 Q38 50 30 44 Z" fill="#8FAA77" />
          </svg>
          {/* Botanical decoration right */}
          <svg
            viewBox="0 0 60 80"
            width="40"
            height="55"
            fill="none"
            aria-hidden="true"
            style={{
              position: "absolute",
              right: "-6px",
              top: "-6px",
              transform: "rotate(180deg)",
              opacity: 0.55,
            }}
          >
            <path d="M30 70 Q30 30 28 5" stroke="#7A9367" strokeWidth="1.2" fill="none" />
            <path d="M28 22 Q14 18 10 30 Q22 32 28 28 Z" fill="#A0BB87" />
            <path d="M30 38 Q46 34 50 46 Q38 50 30 44 Z" fill="#8FAA77" />
          </svg>

          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.0625rem",
              color: "#3A3631",
              lineHeight: 1.55,
              fontWeight: 500,
              position: "relative",
              zIndex: 1,
            }}
          >
            {apresentacao.tagline}
          </p>
        </div>

        {/* CTA */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CtaButton
            text={apresentacao.cta}
            style={
              {
                width: "100%",
                maxWidth: "440px",
                fontSize: "1rem",
                padding: "1.125rem 1.5rem",
                borderRadius: "999px",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                fontWeight: 700,
              } as React.CSSProperties
            }
          />
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .apres-grid {
            grid-template-columns: 1fr 1fr !important;
            align-items: center !important;
            max-width: 1100px;
            margin: 0 auto;
          }
          .apres-grid > div:first-child {
            aspect-ratio: 1 / 1 !important;
            min-height: 480px;
          }
        }
      `}</style>
    </section>
  );
}
