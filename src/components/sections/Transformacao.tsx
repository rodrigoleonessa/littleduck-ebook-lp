import { transformacao } from "@/lib/content";
import CtaButton from "@/components/ui/CtaButton";

const TERRA = "#C96D55";
const GREEN = "#2F6848";

function CircleX({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 22 22" width={size} height={size} aria-hidden="true">
      <circle cx="11" cy="11" r="11" fill={TERRA} />
      <path d="M7 7 L15 15 M15 7 L7 15" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CircleCheck({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 22 22" width={size} height={size} aria-hidden="true">
      <circle cx="11" cy="11" r="11" fill={GREEN} />
      <polyline points="6,11 9.5,14 16,7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function HandHeart({ size = 36, rotate = 0, style }: { size?: number; rotate?: number; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 40 36"
      width={size}
      height={size * 0.9}
      fill="none"
      stroke={TERRA}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ transform: `rotate(${rotate}deg)`, ...style }}
    >
      <path d="M20 30 C 6 22 4 12 11 8 c 4 -2 7 1 9 4 c 2 -3 5 -6 9 -4 c 7 4 5 14 -9 22 z" />
    </svg>
  );
}

export default function Transformacao() {
  return (
    <section
      style={{
        backgroundColor: "var(--color-cream)",
        paddingTop: "3rem",
        paddingBottom: "4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <HandHeart
        size={56}
        rotate={-8}
        style={{
          position: "absolute",
          right: "1.5rem",
          bottom: "2.5rem",
          opacity: 0.85,
          zIndex: 0,
        }}
      />

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
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.5rem, 5vw, 2rem)",
            fontWeight: 700,
            color: "#1F1B17",
            textAlign: "center",
            lineHeight: 1.25,
            marginBottom: "1.75rem",
          }}
        >
          {transformacao.headline}
        </h2>

        {/* Card with both columns */}
        <div
          style={{
            position: "relative",
            backgroundColor: "#F8EFE0",
            border: "1px solid rgba(184,138,65,0.25)",
            borderRadius: "20px",
            padding: "1.75rem 1.25rem 3rem",
            boxShadow: "0 6px 22px rgba(0,0,0,0.05)",
          }}
        >
          <div
            className="ba-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "1.5rem",
            }}
          >
            {/* ANTES */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  color: "#1F1B17",
                  marginBottom: "0.875rem",
                }}
              >
                ANTES
              </p>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.625rem",
                }}
              >
                {transformacao.antes.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      fontSize: "0.9375rem",
                      color: "#3A3631",
                    }}
                  >
                    <CircleX />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* DEPOIS */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  color: "#1F1B17",
                  marginBottom: "0.875rem",
                }}
              >
                DEPOIS
              </p>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.625rem",
                }}
              >
                {transformacao.depois.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      fontSize: "0.9375rem",
                      color: "#3A3631",
                    }}
                  >
                    <CircleCheck />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA overlapping bottom */}
          <div
            style={{
              position: "absolute",
              bottom: "-1.5rem",
              left: "50%",
              transform: "translateX(-50%)",
              width: "calc(100% - 1rem)",
              maxWidth: "440px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CtaButton
              text={transformacao.cta}
              className="cta-btn-pain"
              style={
                {
                  width: "100%",
                  fontSize: "0.9375rem",
                  padding: "1.125rem 1.25rem",
                  borderRadius: "999px",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                } as React.CSSProperties
              }
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 600px) {
          .ba-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
