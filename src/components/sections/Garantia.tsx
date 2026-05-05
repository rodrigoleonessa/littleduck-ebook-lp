import { garantia } from "@/lib/content";
import CtaButton from "@/components/ui/CtaButton";

export default function Garantia() {
  return (
    <section className="section" style={{ backgroundColor: "var(--color-cream)" }}>
      <div className="container content">
        <div
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "flex-start",
          }}
          className="garantia-grid"
        >
          {/* Badge */}
          <div
            className="reveal-badge"
            style={{ flexShrink: 0 }}
          >
            <div className="guarantee-badge">
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.75rem",
                  fontWeight: 900,
                  color: "var(--color-badge-text)",
                  lineHeight: 1,
                }}
              >
                7
              </span>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.625rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "rgba(250,246,238,0.85)",
                }}
              >
                dias de
              </span>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.625rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "rgba(250,246,238,0.85)",
                }}
              >
                garantia
              </span>
            </div>
          </div>

          {/* Text */}
          <div>
            <h2
              className="reveal-heading"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
                fontWeight: 700,
                color: "var(--color-text)",
                marginBottom: "1rem",
                lineHeight: 1.3,
              }}
            >
              {garantia.headline}
            </h2>

            <p
              className="reveal"
              style={{
                fontSize: "1rem",
                color: "var(--color-text-muted)",
                lineHeight: 1.75,
                marginBottom: "1rem",
                animationDelay: "120ms",
              }}
            >
              {garantia.body}
            </p>

            <p
              className="reveal"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1rem",
                fontWeight: 700,
                color: "var(--color-green)",
                marginBottom: "1.75rem",
                animationDelay: "200ms",
              }}
            >
              {garantia.strong}
            </p>

            <div className="reveal" style={{ animationDelay: "280ms" }}>
              <CtaButton text={garantia.cta} />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 560px) {
          .garantia-grid { flex-direction: column !important; align-items: center !important; text-align: center !important; }
          .garantia-grid > div:last-child { display: flex; flex-direction: column; align-items: center; }
        }
      `}</style>
    </section>
  );
}
