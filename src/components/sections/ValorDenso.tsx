import { valorDenso } from "@/lib/content";
import CheckItem from "@/components/ui/CheckItem";
import CtaButton from "@/components/ui/CtaButton";

export default function ValorDenso() {
  return (
    <section className="section section-dark">
      <div className="container content" style={{ textAlign: "center" }}>
        <h2
          className="reveal-heading"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            fontWeight: 700,
            marginBottom: "2rem",
          }}
        >
          {valorDenso.headline}
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.6rem",
            marginBottom: "2.5rem",
            textAlign: "left",
          }}
        >
          {valorDenso.whenLines.map((line, i) => (
            <p
              key={i}
              className="reveal-left"
              style={{
                fontSize: "1rem",
                color: "rgba(250,246,238,0.85)",
                paddingLeft: "0.75rem",
                borderLeft: "2px solid rgba(250,246,238,0.25)",
                animationDelay: `${i * 80}ms`,
              }}
            >
              {line}
            </p>
          ))}
        </div>

        <p
          className="reveal"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(250,246,238,0.5)",
            marginBottom: "1rem",
            animationDelay: "580ms",
          }}
        >
          Você recebe
        </p>

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
          {valorDenso.recebe.map((item, i) => (
            <li
              key={i}
              className="reveal-stagger"
              style={{
                color: "var(--color-cream-light)",
                animationDelay: `${640 + i * 70}ms`,
              }}
            >
              <CheckItem text={item} />
            </li>
          ))}
        </ul>

        <p
          className="reveal"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.125rem",
            fontStyle: "italic",
            color: "var(--color-cream-light)",
            marginBottom: "2rem",
            animationDelay: "1100ms",
          }}
        >
          {valorDenso.tagline}
        </p>
      </div>
    </section>
  );
}
