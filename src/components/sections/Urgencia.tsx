import { urgencia } from "@/lib/content";
import CtaButton from "@/components/ui/CtaButton";

export default function Urgencia() {
  return (
    <section className="section section-alt">
      <div className="container content" style={{ textAlign: "center" }}>
        <h2
          className="reveal-heading"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.5rem, 3vw, 2.125rem)",
            fontWeight: 700,
            color: "var(--color-text)",
            marginBottom: "1.5rem",
          }}
        >
          {urgencia.headline}
        </h2>

        <p
          className="reveal"
          style={{
            fontSize: "1.0625rem",
            color: "var(--color-text-muted)",
            lineHeight: 1.75,
            marginBottom: "2rem",
            animationDelay: "120ms",
          }}
        >
          {urgencia.body}
        </p>

        <div
          className="reveal"
          style={{
            backgroundColor: "var(--color-cream-section)",
            border: "1px solid var(--color-border)",
            borderRadius: "8px",
            padding: "1.5rem",
            marginBottom: "2rem",
            animationDelay: "220ms",
          }}
        >
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--color-text-muted)",
              marginBottom: "0.5rem",
            }}
          >
            {urgencia.strong1}
          </p>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.125rem",
              fontWeight: 700,
              color: "var(--color-green)",
            }}
          >
            {urgencia.strong2}
          </p>
        </div>

        <div
          className="reveal"
          style={{ display: "flex", justifyContent: "center", animationDelay: "320ms" }}
        >
          <CtaButton text={urgencia.cta} className="cta-btn-pain" />
        </div>
      </div>
    </section>
  );
}
