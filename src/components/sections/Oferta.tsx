import { oferta } from "@/lib/content";
import CtaButton from "@/components/ui/CtaButton";
import CheckItem from "@/components/ui/CheckItem";

export default function Oferta() {
  return (
    <section
      id="comprar"
      className="section"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="container content" style={{ textAlign: "center" }}>
        <h2
          className="reveal-heading"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            fontWeight: 700,
            color: "var(--color-green)",
            marginBottom: "2rem",
          }}
        >
          {oferta.headline}
        </h2>

        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "0.625rem",
            marginBottom: "2.5rem",
            textAlign: "left",
          }}
        >
          {oferta.recebe.map((item, i) => (
            <li key={i} className="reveal-stagger" style={{ animationDelay: `${i * 70}ms` }}>
              <CheckItem text={item} />
            </li>
          ))}
        </ul>

        {/* Price block */}
        <div
          className="reveal"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "1.75rem",
            animationDelay: "460ms",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1.125rem",
              color: "var(--color-price-strike)",
              textDecoration: "line-through",
              fontWeight: 500,
            }}
          >
            DE {oferta.priceFrom}
          </span>
          <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1rem",
                color: "var(--color-text-muted)",
                fontWeight: 600,
              }}
            >
              POR APENAS
            </span>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "3.5rem",
                fontWeight: 900,
                color: "var(--color-terracotta)",
                lineHeight: 1,
              }}
            >
              {oferta.priceTo}
            </span>
          </div>
          <p
            style={{
              fontSize: "0.875rem",
              color: "var(--color-text-muted)",
              fontWeight: 500,
            }}
          >
            {oferta.sub}
          </p>
        </div>

        <div
          className="reveal"
          style={{ display: "flex", justifyContent: "center", marginBottom: "1rem", animationDelay: "540ms" }}
        >
          <CtaButton text={oferta.cta} />
        </div>

        <p
          className="reveal"
          style={{
            fontSize: "0.8125rem",
            color: "var(--color-text-muted)",
            animationDelay: "620ms",
          }}
        >
          {oferta.microcopy}
        </p>
      </div>
    </section>
  );
}
