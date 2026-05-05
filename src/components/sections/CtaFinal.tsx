import { ctaFinal } from "@/lib/content";
import CtaButton from "@/components/ui/CtaButton";
import { LeafLeft, LeafRight } from "@/components/ui/Botanical";

export default function CtaFinal() {
  return (
    <section
      className="section"
      style={{ backgroundColor: "var(--color-cream)", position: "relative", overflow: "hidden" }}
    >
      <LeafLeft
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          width: "90px",
          color: "var(--color-botanical)",
          opacity: 0.3,
          pointerEvents: "none",
        } as React.CSSProperties}
      />
      <LeafRight
        style={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          width: "90px",
          color: "var(--color-botanical)",
          opacity: 0.3,
          pointerEvents: "none",
        } as React.CSSProperties}
      />

      <div className="container content" style={{ textAlign: "center" }}>
        <h2
          className="reveal-heading"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.625rem, 3.5vw, 2.5rem)",
            fontWeight: 700,
            color: "var(--color-text)",
            marginBottom: "0.25rem",
            lineHeight: 1.25,
          }}
        >
          {ctaFinal.headline1}
        </h2>
        <h2
          className="reveal-heading"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.625rem, 3.5vw, 2.5rem)",
            fontWeight: 700,
            color: "var(--color-green)",
            marginBottom: "2rem",
            lineHeight: 1.25,
            animationDelay: "100ms",
          }}
        >
          {ctaFinal.headline2}
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            marginBottom: "2rem",
            borderLeft: "2px solid var(--color-border)",
            paddingLeft: "1.25rem",
            textAlign: "left",
          }}
        >
          {ctaFinal.lines.map((line, i) => (
            <p
              key={i}
              className="reveal"
              style={{
                fontSize: "1.0625rem",
                color: "var(--color-text-muted)",
                animationDelay: `${200 + i * 80}ms`,
              }}
            >
              {line}
            </p>
          ))}
        </div>

        <p
          className="reveal"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.125rem",
            fontStyle: "italic",
            color: "var(--color-text-body)",
            marginBottom: "2rem",
            animationDelay: "640ms",
          }}
        >
          {ctaFinal.tagline}
        </p>

        {/* Price */}
        <div
          className="reveal"
          style={{
            marginBottom: "1.5rem",
            animationDelay: "720ms",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1rem",
              color: "var(--color-price-strike)",
              textDecoration: "line-through",
              marginRight: "0.75rem",
            }}
          >
            {ctaFinal.priceFrom}
          </span>
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "2.75rem",
              fontWeight: 900,
              color: "var(--color-green)",
              lineHeight: 1,
            }}
          >
            {ctaFinal.priceTo}
          </span>
        </div>

        <div
          className="reveal"
          style={{ display: "flex", justifyContent: "center", marginBottom: "1.25rem", animationDelay: "800ms" }}
        >
          <CtaButton text={ctaFinal.cta} />
        </div>

        <div
          className="reveal"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
            animationDelay: "880ms",
          }}
        >
          {ctaFinal.microcopy.map((m, i) => (
            <span
              key={i}
              style={{
                fontSize: "0.8125rem",
                color: "var(--color-text-muted)",
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
              }}
            >
              <span style={{ color: "var(--color-green)", fontWeight: 700 }}>✓</span> {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
