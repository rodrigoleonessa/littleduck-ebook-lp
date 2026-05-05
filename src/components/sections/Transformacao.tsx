import { transformacao } from "@/lib/content";
import CtaButton from "@/components/ui/CtaButton";

export default function Transformacao() {
  return (
    <section className="section section-alt">
      <div className="container" style={{ textAlign: "center" }}>
        <h2
          className="reveal-heading"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            fontWeight: 700,
            color: "var(--color-text)",
            marginBottom: "2rem",
          }}
        >
          {transformacao.headline}
        </h2>

        <div className="before-after">
          {/* ANTES */}
          <div className="before-col reveal-left">
            <div className="col-label">Antes</div>
            {transformacao.antes.map((item, i) => (
              <div key={i} className="ba-item">
                <span style={{ color: "#8B4040", flexShrink: 0, fontWeight: 700 }}>✕</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* DEPOIS */}
          <div className="after-col reveal-right" style={{ animationDelay: "80ms" }}>
            <div className="col-label">Depois</div>
            {transformacao.depois.map((item, i) => (
              <div key={i} className="ba-item">
                <span style={{ color: "var(--color-green)", flexShrink: 0, fontWeight: 700 }}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="reveal"
          style={{ display: "flex", justifyContent: "center", marginTop: "2.5rem", animationDelay: "200ms" }}
        >
          <CtaButton text={transformacao.cta} className="cta-btn-pain" />
        </div>
      </div>
    </section>
  );
}
