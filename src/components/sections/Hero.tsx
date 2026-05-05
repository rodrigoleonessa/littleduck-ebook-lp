import { hero } from "@/lib/content";
import CtaButton from "@/components/ui/CtaButton";

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        background: "linear-gradient(180deg, #FFF9F1 0%, #F4E5D5 100%)",
        paddingTop: "6.5rem",
        paddingBottom: "3rem",
        paddingLeft: "1.25rem",
        paddingRight: "1.25rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient blobs */}
      <div style={{
        position: "absolute", right: "-5rem", top: "3rem",
        width: "220px", height: "220px", borderRadius: "50%",
        background: "rgba(216,184,151,0.3)", filter: "blur(48px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", left: "-4rem", bottom: "4rem",
        width: "180px", height: "180px", borderRadius: "50%",
        background: "rgba(183,199,173,0.3)", filter: "blur(40px)", pointerEvents: "none",
      }} />

      <div className="container">
        {/* Pill */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "1.25rem" }}>
          <span className="pill">{hero.pill}</span>
        </div>

        {/* Headline */}
        <h1
          className="reveal-heading"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2rem, 8vw, 3rem)",
            fontWeight: 700,
            color: "var(--color-text-title)",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: "1.25rem",
            animationDelay: "80ms",
          }}
        >
          {hero.headline1}
          <span
            style={{
              display: "block",
              fontStyle: "italic",
              fontWeight: 400,
              color: "var(--color-terracotta)",
            }}
          >
            {hero.headlineItalic}
          </span>
          {hero.headline2}
        </h1>

        {/* Sub */}
        <p
          className="reveal"
          style={{
            fontSize: "0.9375rem",
            color: "var(--color-text-body)",
            lineHeight: 1.75,
            textAlign: "center",
            maxWidth: "520px",
            margin: "0 auto 2rem",
            animationDelay: "160ms",
          }}
        >
          {hero.sub}
        </p>

        {/* Book stack visual + price badge */}
        <div
          className="reveal"
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2rem",
            animationDelay: "240ms",
          }}
        >
          <div style={{ position: "relative", height: "200px", width: "260px" }}>
            {/* Book stack */}
            {[
              { left: 0,   rotate: -8,  bg: "#EAD3BD", width: 130 },
              { left: 14,  rotate: -4,  bg: "#D5AD8E", width: 135 },
              { left: 28,  rotate: 1,   bg: "#C8A07A", width: 138 },
              { left: 42,  rotate: -2,  bg: "#1E3A10", width: 140 },
            ].map((book, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: `${book.left}px`,
                  width: `${book.width}px`,
                  height: "180px",
                  backgroundColor: book.bg,
                  borderRadius: "6px 14px 14px 6px",
                  transform: `rotate(${book.rotate}deg)`,
                  transformOrigin: "bottom center",
                  boxShadow: "2px 4px 14px rgba(0,0,0,0.14)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {i === 3 && (
                  <div style={{ textAlign: "center", padding: "0 0.75rem" }}>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.5rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(250,246,238,0.7)", marginBottom: "0.25rem" }}>
                      Guias Digital
                    </p>
                    <p style={{ fontFamily: "var(--font-serif)", fontSize: "0.875rem", fontWeight: 700, color: "var(--color-cream)", lineHeight: 1.3 }}>
                      Pack Premium de Guias para Pais
                    </p>
                    <div style={{ width: "60%", height: "2px", backgroundColor: "rgba(250,246,238,0.4)", margin: "0.5rem auto 0", borderRadius: "2px" }} />
                  </div>
                )}
              </div>
            ))}

            {/* Price badge */}
            <div
              className="reveal-badge"
              style={{
                position: "absolute",
                top: "0",
                right: "-8px",
                width: "96px",
                height: "96px",
                borderRadius: "50%",
                backgroundColor: "var(--color-terracotta)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                textAlign: "center",
                boxShadow: "0 6px 24px rgba(201,109,85,0.45)",
                animationDelay: "500ms",
              }}
            >
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.5625rem", fontWeight: 700, textDecoration: "line-through", opacity: 0.8 }}>
                DE {hero.priceFrom}
              </span>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.625rem", fontWeight: 700 }}>POR</span>
              <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.875rem", fontWeight: 900, lineHeight: 1 }}>
                {hero.priceTo}
              </span>
            </div>
          </div>
        </div>

        {/* Bullets */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            maxWidth: "420px",
            margin: "0 auto 2rem",
          }}
        >
          {hero.bullets.map((b, i) => (
            <div
              key={i}
              className="reveal-stagger"
              style={{ animationDelay: `${320 + i * 60}ms`, display: "flex", alignItems: "center", gap: "0.625rem", fontSize: "0.9375rem", color: "var(--color-text-body)" }}
            >
              <span
                style={{
                  flexShrink: 0, width: "20px", height: "20px",
                  backgroundColor: "var(--color-green)",
                  borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                  <polyline points="1,4 3.5,6.5 9,1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              {b}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", animationDelay: "640ms" }}>
          <CtaButton text={hero.cta} />
          <div style={{ display: "flex", gap: "1.125rem", flexWrap: "wrap", justifyContent: "center" }}>
            {hero.microcopy.map((m, i) => (
              <span key={i} style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                <span style={{ color: "var(--color-green)", fontWeight: 700 }}>✓</span> {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
