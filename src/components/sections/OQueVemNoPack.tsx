import { ebooks } from "@/lib/content";

const icons = ["✋", "🧩", "📋", "♡", "👨‍👩‍👧", "🌿", "🍼", "✦", "♡", "☀"];

export default function OQueVemNoPack() {
  return (
    <section
      id="o-que-vem"
      className="section"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="container">
        <h2
          className="reveal-heading"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.5rem, 5vw, 2.25rem)",
            fontWeight: 700,
            color: "var(--color-text)",
            textAlign: "center",
            marginBottom: "0.5rem",
            lineHeight: 1.25,
          }}
        >
          O que você recebe no
          <br />
          Pack Premium de Guias para Pais
        </h2>
        <div className="divider reveal" style={{ animationDelay: "80ms" }} />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            marginTop: "1.5rem",
          }}
        >
          {ebooks.map((ebook, i) => (
            <div
              key={ebook.num}
              className="ebook-row reveal"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {/* Number badge */}
              <div className="ebook-num-badge">{ebook.num}</div>

              {/* Mini book cover */}
              <div className="ebook-mini-cover">
                <div className="ebook-mini-cover-line" />
                <div className="ebook-mini-cover-line" style={{ width: "50%", opacity: 0.6 }} />
                <div className="ebook-mini-cover-dots">
                  <span /><span /><span />
                </div>
              </div>

              {/* Text */}
              <div className="ebook-row-text">
                <div className="ebook-row-title">{ebook.title}</div>
                <div className="ebook-row-desc">{ebook.desc}</div>
              </div>

              {/* Icon */}
              <div className="ebook-row-icon" aria-hidden="true">
                {icons[i]}
              </div>
            </div>
          ))}
        </div>

        {/* Bônus banner */}
        <div
          className="reveal"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.25rem",
            backgroundColor: "var(--color-green)",
            borderRadius: "24px",
            padding: "1.25rem 1.5rem",
            marginTop: "1.5rem",
            color: "white",
            animationDelay: "520ms",
          }}
        >
          <div style={{ fontSize: "2rem", flexShrink: 0 }}>🎁</div>
          <div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", fontWeight: 900, marginBottom: "0.2rem" }}>
              + BÔNUS EXCLUSIVOS
            </p>
            <p style={{ fontSize: "0.875rem", opacity: 0.85 }}>
              Materiais extras para apoiar ainda mais sua jornada
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
