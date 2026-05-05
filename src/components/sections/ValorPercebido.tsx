import { valorPercebido } from "@/lib/content";
import CtaButton from "@/components/ui/CtaButton";

export default function ValorPercebido() {
  return (
    <section className="section section-alt">
      <div className="container content" style={{ textAlign: "center" }}>
        <h2
          className="reveal-heading"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            fontWeight: 700,
            color: "var(--color-text)",
            marginBottom: "1.75rem",
          }}
        >
          {valorPercebido.headline}
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            marginBottom: "1.5rem",
          }}
        >
          {valorPercebido.comparisons.map((comp, i) => (
            <p
              key={i}
              className="reveal"
              style={{
                fontSize: "1rem",
                color: "var(--color-text-muted)",
                animationDelay: `${i * 100}ms`,
              }}
            >
              {comp}
            </p>
          ))}
        </div>

        <p
          className="reveal"
          style={{
            fontSize: "1.0625rem",
            color: "var(--color-text-body)",
            marginBottom: "1.5rem",
            animationDelay: "320ms",
          }}
        >
          {valorPercebido.body}
        </p>

        <div
          className="reveal"
          style={{
            backgroundColor: "var(--color-cream-section)",
            border: "1px solid var(--color-border)",
            borderRadius: "8px",
            padding: "1.25rem 1.5rem",
            marginBottom: "2rem",
            animationDelay: "400ms",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.125rem",
              fontWeight: 700,
              fontStyle: "italic",
              color: "var(--color-green)",
            }}
          >
            {valorPercebido.impact}
          </p>
        </div>

        <div
          className="reveal"
          style={{ display: "flex", justifyContent: "center", animationDelay: "480ms" }}
        >
          <CtaButton text={valorPercebido.cta} />
        </div>
      </div>
    </section>
  );
}
