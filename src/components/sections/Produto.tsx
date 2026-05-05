import { produto } from "@/lib/content";
import CtaButton from "@/components/ui/CtaButton";
import { LeafLeft } from "@/components/ui/Botanical";

export default function Produto() {
  return (
    <section className="section" style={{ position: "relative", overflow: "hidden" }}>
      <LeafLeft
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "80px",
          color: "var(--color-botanical)",
          opacity: 0.25,
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
            color: "var(--color-green)",
            marginBottom: "1rem",
          }}
        >
          {produto.headline}
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
          {produto.sub}
        </p>

        <div
          className="reveal"
          style={{
            borderLeft: "3px solid var(--color-green)",
            padding: "1rem 1.5rem",
            textAlign: "left",
            marginBottom: "1.5rem",
            backgroundColor: "var(--color-cream-section)",
            borderRadius: "0 8px 8px 0",
            animationDelay: "200ms",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.125rem",
              fontWeight: 700,
              color: "var(--color-text)",
              marginBottom: "0.25rem",
            }}
          >
            {produto.bigIdea1}
          </p>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.125rem",
              color: "var(--color-text)",
            }}
          >
            {produto.bigIdea2}
          </p>
        </div>

        <p
          className="reveal"
          style={{
            fontSize: "1.0625rem",
            color: "var(--color-text-muted)",
            lineHeight: 1.75,
            marginBottom: "2rem",
            animationDelay: "280ms",
          }}
        >
          {produto.body}
        </p>

        <div
          className="reveal"
          style={{ display: "flex", justifyContent: "center", animationDelay: "360ms" }}
        >
          <CtaButton text={produto.cta} />
        </div>
      </div>
    </section>
  );
}
