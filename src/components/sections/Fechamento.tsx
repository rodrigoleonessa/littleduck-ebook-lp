import { fechamento } from "@/lib/content";
import CtaButton from "@/components/ui/CtaButton";

export default function Fechamento() {
  return (
    <section
      className="section section-dark"
      style={{ textAlign: "center" }}
    >
      <div className="container content">
        <h2
          className="reveal-heading"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
            fontWeight: 700,
            marginBottom: "0.25rem",
            lineHeight: 1.2,
          }}
        >
          {fechamento.headline1}
        </h2>
        <h2
          className="reveal-heading"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
            fontWeight: 700,
            marginBottom: "1.75rem",
            lineHeight: 1.2,
            fontStyle: "italic",
            animationDelay: "120ms",
          }}
        >
          {fechamento.headline2}
        </h2>

        <p
          className="reveal"
          style={{
            fontSize: "1.0625rem",
            color: "rgba(250,246,238,0.8)",
            lineHeight: 1.75,
            marginBottom: "2rem",
            animationDelay: "200ms",
          }}
        >
          {fechamento.body}
        </p>

        {/* Price */}
        <div
          className="reveal"
          style={{ marginBottom: "1.75rem", animationDelay: "280ms" }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.875rem",
              color: "rgba(250,246,238,0.5)",
              textDecoration: "line-through",
              marginBottom: "0.25rem",
            }}
          >
            {fechamento.priceFrom}
          </p>
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "3.5rem",
              fontWeight: 900,
              color: "var(--color-cream-light)",
              lineHeight: 1,
            }}
          >
            {fechamento.priceTo}
          </span>
        </div>

        <div
          className="reveal"
          style={{ display: "flex", justifyContent: "center", marginBottom: "2rem", animationDelay: "360ms" }}
        >
          <CtaButton
            text={fechamento.cta}
            style={{
              backgroundColor: "var(--color-cream)",
              color: "var(--color-green)",
            } as React.CSSProperties}
          />
        </div>

        <p
          className="reveal"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1rem",
            fontStyle: "italic",
            color: "rgba(250,246,238,0.65)",
            animationDelay: "440ms",
          }}
        >
          {fechamento.final}
        </p>
      </div>
    </section>
  );
}
