import Image from "next/image";
import { depoimentos } from "@/lib/content";

const GOLD = "#B88A41";

const AVATARS = ["/av-juliana.jpg", "/av-carla.jpg", "/av-fernanda.jpg"];

function Stars() {
  return (
    <div style={{ display: "flex", gap: "2px" }} aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill={GOLD} aria-hidden="true">
          <path d="M8 1.2l1.75 3.55 3.92.57-2.84 2.76.67 3.9L8 9.97l-3.5 1.01.67-3.9L2.33 5.32l3.92-.57L8 1.2z" />
        </svg>
      ))}
    </div>
  );
}

function QuoteMark() {
  return (
    <svg
      viewBox="0 0 40 30"
      width="38"
      height="28"
      fill={GOLD}
      aria-hidden="true"
      style={{ opacity: 0.18, flexShrink: 0 }}
    >
      <path d="M0 30 V16 Q0 0 16 0 h4 v6 h-4 Q8 6 8 16 v14 H0 Z M22 30 V16 Q22 0 38 0 h2 v6 h-2 Q30 6 30 16 v14 H22 Z" />
    </svg>
  );
}

export default function Depoimentos() {
  const quotes = depoimentos.quotes.slice(0, 3);

  return (
    <section
      style={{
        backgroundColor: "var(--color-cream)",
        paddingTop: "3rem",
        paddingBottom: "3.5rem",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "720px",
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
          {depoimentos.headline}
        </h2>

        <div
          className="depo-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1rem",
          }}
        >
          {quotes.map((quote, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "18px",
                padding: "1.5rem 1.375rem 1.25rem",
                boxShadow: "0 4px 18px rgba(0,0,0,0.07)",
                display: "flex",
                flexDirection: "column",
                gap: "0.875rem",
                position: "relative",
              }}
            >
              {/* Top row: avatar + quote mark */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                {/* Circular avatar */}
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    flexShrink: 0,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    position: "relative",
                  }}
                >
                  <Image
                    src={AVATARS[i]}
                    alt={quote.name}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="56px"
                  />
                </div>

                <QuoteMark />
              </div>

              {/* Quote text */}
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9375rem",
                  color: "#3A3631",
                  lineHeight: 1.65,
                  fontStyle: "italic",
                  flex: 1,
                }}
              >
                "{quote.text}"
              </p>

              {/* Bottom: name, role, stars */}
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9375rem",
                    fontWeight: 700,
                    color: "#1F1B17",
                    marginBottom: "0.125rem",
                  }}
                >
                  {quote.name}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.8125rem",
                    color: "var(--color-text-muted)",
                    fontStyle: "italic",
                    marginBottom: "0.625rem",
                  }}
                >
                  {quote.role}
                </p>
                <Stars />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .depo-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
