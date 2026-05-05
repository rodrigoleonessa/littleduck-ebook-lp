import { apresentacao } from "@/lib/content";
import CtaButton from "@/components/ui/CtaButton";
import { BranchSmall } from "@/components/ui/Botanical";

export default function Apresentacao() {
  return (
    <section className="section" style={{ position: "relative", overflow: "hidden" }}>
      <BranchSmall
        style={{
          position: "absolute",
          right: "2rem",
          top: "2rem",
          width: "60px",
          color: "var(--color-botanical)",
          opacity: 0.4,
          pointerEvents: "none",
        } as React.CSSProperties}
      />

      <div className="container content" style={{ textAlign: "center" }}>
        <h2
          className="reveal-heading"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            fontWeight: 700,
            color: "var(--color-text)",
            marginBottom: "0.25rem",
            lineHeight: 1.25,
          }}
        >
          {apresentacao.headline1}
        </h2>
        <h2
          className="reveal-heading"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            fontWeight: 700,
            color: "var(--color-text)",
            marginBottom: "1.75rem",
            lineHeight: 1.25,
            animationDelay: "120ms",
          }}
        >
          {apresentacao.headline2}
        </h2>

        <p
          className="reveal"
          style={{
            fontSize: "1.0625rem",
            color: "var(--color-text-muted)",
            lineHeight: 1.75,
            marginBottom: "2rem",
            animationDelay: "200ms",
          }}
        >
          {apresentacao.body}
        </p>

        {/* Topic pills */}
        <div
          className="reveal"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            justifyContent: "center",
            marginBottom: "2rem",
            animationDelay: "280ms",
          }}
        >
          {apresentacao.topics.map((topic) => (
            <span
              key={topic}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "var(--color-green-medium)",
                backgroundColor: "var(--color-pill-bg)",
                padding: "0.35rem 0.875rem",
                borderRadius: "9999px",
                border: "1px solid rgba(61,104,41,0.2)",
              }}
            >
              {topic}
            </span>
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
            animationDelay: "360ms",
          }}
        >
          {apresentacao.tagline}
        </p>

        <div
          className="reveal"
          style={{ display: "flex", justifyContent: "center", animationDelay: "440ms" }}
        >
          <CtaButton text={apresentacao.cta} />
        </div>
      </div>
    </section>
  );
}
