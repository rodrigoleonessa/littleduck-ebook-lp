import { identificacao } from "@/lib/content";
import CtaButton from "@/components/ui/CtaButton";

export default function Identificacao() {
  return (
    <section className="section section-alt">
      <div className="container content" style={{ textAlign: "center" }}>
        <h2
          className="reveal-heading"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
            fontWeight: 700,
            color: "var(--color-text)",
            marginBottom: "2rem",
          }}
        >
          {identificacao.headline}
        </h2>

        {/* Thought bubbles grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.75rem",
            marginBottom: "2rem",
          }}
          className="thoughts-grid"
        >
          {identificacao.thoughts.map((thought, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                backgroundColor: "var(--color-white)",
                border: "1px solid var(--color-border-light)",
                borderRadius: "12px",
                padding: "1rem 1.125rem",
                textAlign: "left",
                fontSize: "0.9375rem",
                color: "var(--color-text-body)",
                lineHeight: 1.5,
                fontStyle: "italic",
                boxShadow: "0 1px 8px rgba(60,40,20,0.06)",
                animationDelay: `${i * 80}ms`,
              }}
            >
              "{thought}"
            </div>
          ))}
        </div>

        <div className="divider-leaf reveal" style={{ animationDelay: "520ms" }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M9 16C9 16 2 11 2 6C2 3.2 5 1 9 1C13 1 16 3.2 16 6C16 11 9 16 9 16Z" stroke="var(--color-botanical)" strokeWidth="1" fill="none"/>
            <path d="M9 16L9 1" stroke="var(--color-botanical)" strokeWidth="0.7" opacity="0.6"/>
          </svg>
        </div>

        <p
          className="reveal"
          style={{
            fontSize: "1.125rem",
            color: "var(--color-text-body)",
            marginBottom: "0.375rem",
            animationDelay: "560ms",
          }}
        >
          {identificacao.problem}
        </p>
        <p
          className="reveal"
          style={{
            fontSize: "1.125rem",
            fontWeight: 700,
            color: "var(--color-green)",
            marginBottom: "2rem",
            animationDelay: "620ms",
          }}
        >
          {identificacao.solution}
        </p>

        <div
          className="reveal"
          style={{ display: "flex", justifyContent: "center", animationDelay: "700ms" }}
        >
          <CtaButton text={identificacao.cta} className="cta-btn-pain" />
        </div>
      </div>

      <style>{`
        @media (max-width: 520px) {
          .thoughts-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
