import Image from "next/image";
import { hero } from "@/lib/content";
import CtaButton from "@/components/ui/CtaButton";

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        background: "linear-gradient(180deg, #FBF3E7 0%, #F4E5D2 100%)",
        paddingTop: "5.5rem",
        paddingBottom: "2.5rem",
        paddingLeft: "1.25rem",
        paddingRight: "1.25rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Curtain gradient on right */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "30%",
          background:
            "linear-gradient(270deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Decorative leaf top right */}
      <svg
        aria-hidden="true"
        viewBox="0 0 60 80"
        width="42"
        height="56"
        style={{
          position: "absolute",
          top: "5.75rem",
          right: "1.25rem",
          opacity: 0.85,
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        <path d="M30 70 Q30 30 28 5" stroke="#5A7A48" strokeWidth="1.4" fill="none" />
        <path d="M28 22 Q14 18 10 30 Q22 32 28 28 Z" fill="#7A9367" />
        <path d="M30 38 Q46 34 50 46 Q38 50 30 44 Z" fill="#8FAA77" />
        <path d="M28 54 Q14 52 12 62 Q22 64 28 60 Z" fill="#A0BB87" />
      </svg>

      <div
        className="container"
        style={{ position: "relative", zIndex: 1, maxWidth: "560px", margin: "0 auto" }}
      >
        {/* Pill */}
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <span
            style={{
              display: "inline-block",
              backgroundColor: "var(--color-terracotta)",
              color: "#FFFFFF",
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              padding: "0.625rem 1.5rem",
              borderRadius: "999px",
              boxShadow: "0 4px 14px rgba(201,109,85,0.28)",
            }}
          >
            {hero.pill}
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.875rem, 7.5vw, 2.875rem)",
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.12,
            marginBottom: "1.25rem",
          }}
        >
          <span style={{ color: "var(--color-green)", display: "block" }}>
            {hero.headline1}
          </span>
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-script)",
              fontWeight: 500,
              color: "var(--color-terracotta)",
              fontSize: "1.45em",
              lineHeight: 0.95,
              marginTop: "0.05em",
              marginBottom: "0.1em",
              letterSpacing: "-0.01em",
            }}
          >
            {hero.headlineItalic}
          </span>
          <span style={{ color: "#1F1B17", display: "block", fontWeight: 500 }}>
            {hero.headline2}
          </span>
        </h1>

        {/* Sub */}
        <p
          style={{
            fontSize: "1rem",
            color: "var(--color-text-body)",
            lineHeight: 1.7,
            textAlign: "center",
            maxWidth: "460px",
            margin: "0 auto 1.75rem",
          }}
        >
          {hero.sub}
        </p>

        {/* Bullets */}
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "0.65rem",
            maxWidth: "360px",
            margin: "0 auto 1.5rem",
            paddingLeft: "0.5rem",
          }}
        >
          {hero.bullets.map((b, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                fontSize: "0.9375rem",
                color: "#3A3631",
                fontWeight: 500,
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  flexShrink: 0,
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-green)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                  <polyline
                    points="1.5,4.5 4,7 9.5,1.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              {b}
            </li>
          ))}
        </ul>

        {/* Hero image: books + tablet + price badge */}
        <div
          style={{
            position: "relative",
            margin: "0 auto 1.5rem",
            width: "calc(100% + 2.5rem)",
            marginLeft: "-1.25rem",
            marginRight: "-1.25rem",
            maxWidth: "none",
          }}
        >
          <Image
            src="/hero-books.png"
            alt="Pack Premium de Guias para Pais — coleção de ebooks"
            width={1280}
            height={800}
            priority
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />

        </div>

        {/* CTA */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1.25rem",
          }}
        >
          <CtaButton
            text={hero.cta}
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

        {/* Trust row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.25rem",
            flexWrap: "wrap",
          }}
        >
          {hero.microcopy.map((m, i) => {
            const goldColor = "#C49A3A";
            const greenColor = "var(--color-green)";
            const stroke = i === 1 ? greenColor : goldColor;
            return (
              <span
                key={i}
                style={{
                  fontSize: "0.75rem",
                  color: "var(--color-text-muted)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontWeight: 500,
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: "18px",
                    height: "18px",
                    flexShrink: 0,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {i === 0 && (
                    /* Lightning / instant access */
                    <svg viewBox="0 0 18 18" width="18" height="18" fill="none">
                      <circle cx="9" cy="9" r="8" stroke={stroke} strokeWidth="1.5" />
                      <path
                        d="M10 4.5 L6 9.8 H8.4 L8 13.5 L12 8.2 H9.6 L10 4.5 Z"
                        fill={stroke}
                      />
                    </svg>
                  )}
                  {i === 1 && (
                    /* Check */
                    <svg viewBox="0 0 18 18" width="18" height="18" fill="none">
                      <circle cx="9" cy="9" r="8" stroke={stroke} strokeWidth="1.5" />
                      <polyline
                        points="5.5,9.2 8,11.5 12.5,6.5"
                        stroke={stroke}
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  )}
                  {i === 2 && (
                    /* Clock */
                    <svg viewBox="0 0 18 18" width="18" height="18" fill="none">
                      <circle cx="9" cy="9" r="8" stroke={stroke} strokeWidth="1.5" />
                      <line
                        x1="9"
                        y1="9"
                        x2="9"
                        y2="5"
                        stroke={stroke}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <line
                        x1="9"
                        y1="9"
                        x2="12"
                        y2="10.5"
                        stroke={stroke}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </span>
                {m}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
