import { dorReal } from "@/lib/content";
import CtaButton from "@/components/ui/CtaButton";

export default function DorReal() {
  return (
    <section className="section section-alt">
      <div className="container content">
        <div
          className="reveal"
          style={{
            backgroundColor: "var(--color-cream-3)",
            border: "1px solid var(--color-border)",
            borderRadius: "24px",
            padding: "1.75rem",
            position: "relative",
          }}
        >
          <span style={{ position: "absolute", right: "1.25rem", top: "1.25rem", fontSize: "1.5rem", color: "var(--color-terracotta)", lineHeight: 1 }}>♡</span>

          <h2
            className="reveal-heading"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              fontWeight: 700,
              color: "var(--color-text)",
              marginBottom: "1.5rem",
              lineHeight: 1.25,
            }}
          >
            {dorReal.headline}
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "1.5rem" }}>
            {dorReal.lines.map((line, i) => (
              <p
                key={i}
                className="reveal-left"
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--color-text-body)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.625rem",
                  animationDelay: `${i * 80}ms`,
                }}
              >
                <span style={{ color: "var(--color-terracotta)", flexShrink: 0, marginTop: "2px" }}>☹</span>
                {line}
              </p>
            ))}
          </div>

          <div
            className="reveal"
            style={{
              backgroundColor: "rgba(255,255,255,0.7)",
              borderRadius: "16px",
              padding: "1rem",
              textAlign: "center",
              fontSize: "0.9375rem",
              color: "var(--color-text-body)",
              marginBottom: "1.5rem",
              animationDelay: "440ms",
              lineHeight: 1.65,
            }}
          >
            Se você <strong style={{ color: "var(--color-terracotta)" }}>não muda as ferramentas</strong>, a rotina continua entregando os mesmos conflitos.
          </div>

          <div className="reveal" style={{ display: "flex", justifyContent: "center", animationDelay: "520ms" }}>
            <CtaButton text={dorReal.cta} className="cta-btn-pain" />
          </div>
        </div>
      </div>
    </section>
  );
}
