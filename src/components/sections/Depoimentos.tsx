import { depoimentos } from "@/lib/content";

function Stars() {
  return (
    <div className="stars" aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
          <path d="M7 1l1.55 3.14 3.46.5-2.5 2.44.59 3.44L7 8.77l-3.1 1.75.59-3.44L2 4.64l3.46-.5L7 1z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Depoimentos() {
  return (
    <section className="section section-alt">
      <div className="container">
        <h2
          className="reveal-heading"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.5rem, 3vw, 2.125rem)",
            fontWeight: 700,
            color: "var(--color-text)",
            textAlign: "center",
            marginBottom: "2.5rem",
          }}
        >
          {depoimentos.headline}
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1rem",
          }}
        >
          {depoimentos.quotes.map((quote, i) => (
            <div
              key={i}
              className="quote-card reveal"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--color-text-body)",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  marginBottom: "1rem",
                }}
              >
                "{quote.text}"
              </p>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: "var(--color-text)",
                  }}
                >
                  {quote.name}
                </p>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--color-text-muted)",
                    marginBottom: "0.375rem",
                  }}
                >
                  {quote.role}
                </p>
                <Stars />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
