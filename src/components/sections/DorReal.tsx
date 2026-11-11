import Image from "next/image";
import { dorReal } from "@/lib/content";
import CtaButton from "@/components/ui/CtaButton";

const TERRA = "#C96D55";

const ICONS = [
  /* Tela / celular */
  <svg key="tela" viewBox="0 0 36 36" width="32" height="32" fill="none" stroke={TERRA} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="6" width="18" height="24" rx="3" />
    <line x1="9" y1="11" x2="27" y2="11" />
    <circle cx="18" cy="26" r="1.2" fill={TERRA} />
    <path d="M14 16 q4 -3 8 0" />
    <path d="M14 20 q4 -3 8 0" />
  </svg>,
  /* Birra — criança chorando */
  <svg key="birra" viewBox="0 0 36 36" width="32" height="32" fill="none" stroke={TERRA} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="14" r="6" />
    <path d="M14 14 l1 -1 M22 14 l-1 -1" />
    <path d="M15 18 q3 2 6 0" transform="rotate(180 18 18)" />
    <path d="M12 22 q-2 4 -1 8 h14 q1 -4 -1 -8" />
    <path d="M14 28 v3 M22 28 v3" />
  </svg>,
  /* Paciência — cabeça nas mãos */
  <svg key="pac" viewBox="0 0 36 36" width="32" height="32" fill="none" stroke={TERRA} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="14" r="6" />
    <path d="M11 12 q-1 -3 1 -5 q3 -2 6 0 q3 -2 6 0 q2 2 1 5" />
    <path d="M11 14 q-3 1 -3 5 q0 3 3 4" />
    <path d="M25 14 q3 1 3 5 q0 3 -3 4" />
    <path d="M15 16 l1 1 M21 16 l-1 1" />
    <path d="M16 19 l4 0" />
  </svg>,
  /* Culpa — coração quebrado / gota */
  <svg key="culpa" viewBox="0 0 36 36" width="32" height="32" fill="none" stroke={TERRA} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 28 C 8 22 6 14 12 11 c 2 -1 4 0 6 2 c 2 -2 4 -3 6 -2 c 6 3 4 11 -6 17 z" />
    <path d="M14 14 l 4 4 l -2 3 l 4 4" />
  </svg>,
  /* Repete — setas circulares */
  <svg key="rep" viewBox="0 0 36 36" width="32" height="32" fill="none" stroke={TERRA} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M27 13 a10 10 0 1 0 1 8" />
    <path d="M28 7 v6 h-6" />
    <circle cx="18" cy="18" r="3" />
    <line x1="18" y1="16.5" x2="18" y2="18" />
    <line x1="18" y1="18" x2="20" y2="19" />
  </svg>,
];

function HandHeart({
  size = 36,
  stroke = TERRA,
  rotate = 0,
  style,
}: {
  size?: number;
  stroke?: string;
  rotate?: number;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 40 36"
      width={size}
      height={size * 0.9}
      fill="none"
      stroke={stroke}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transform: `rotate(${rotate}deg)`, ...style }}
      aria-hidden="true"
    >
      <path d="M20 30 C 6 22 4 12 11 8 c 4 -2 7 1 9 4 c 2 -3 5 -6 9 -4 c 7 4 5 14 -9 22 z" />
    </svg>
  );
}

export default function DorReal() {
  return (
    <section
      className="section section-alt"
      style={{ position: "relative", overflow: "hidden", paddingTop: "2.5rem", paddingBottom: "3rem" }}
    >
      {/* Casinha à direita */}
      <Image
        src="/casinha.png"
        alt=""
        aria-hidden="true"
        width={520}
        height={620}
        style={{
          position: "absolute",
          right: "-90px",
          top: "32%",
          width: "240px",
          height: "auto",
          opacity: 1,
          pointerEvents: "none",
          mixBlendMode: "darken",
          zIndex: 0,
        }}
      />

      {/* Coração desenhado canto direito superior */}
      <HandHeart
        size={62}
        rotate={-12}
        style={{
          position: "absolute",
          top: "5rem",
          right: "1.5rem",
          opacity: 0.9,
          zIndex: 1,
        }}
      />

      <div className="container content" style={{ position: "relative", zIndex: 2, maxWidth: "560px", paddingLeft: "1.25rem", paddingRight: "1.25rem" }}>
        {/* Headline com coração à esquerda */}
        <div style={{ position: "relative", marginBottom: "2rem" }}>
          <HandHeart
            size={42}
            rotate={-15}
            style={{
              position: "absolute",
              left: "-0.25rem",
              top: "1.4rem",
              opacity: 0.95,
            }}
          />
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.5rem, 5.5vw, 2.125rem)",
              fontWeight: 700,
              color: "#1F1B17",
              marginLeft: "2.5rem",
              lineHeight: 1.2,
            }}
          >
            {dorReal.headline}
          </h2>
        </div>

        {/* Lista com ícones desenhados */}
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "1.1rem",
            marginBottom: "2rem",
            paddingLeft: "0.5rem",
          }}
        >
          {dorReal.lines.map((line, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                fontSize: "0.95rem",
                color: "#3A3631",
                lineHeight: 1.45,
              }}
            >
              <span style={{ flexShrink: 0, width: "32px", height: "32px", display: "inline-flex" }}>
                {ICONS[i]}
              </span>
              <span>{line}</span>
            </li>
          ))}
        </ul>

        {/* Box conclusão */}
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.85)",
            border: "1px solid rgba(201,109,85,0.18)",
            borderRadius: "20px",
            padding: "1.25rem 1.5rem",
            textAlign: "center",
            fontSize: "1rem",
            color: "#3A3631",
            marginBottom: "1.5rem",
            lineHeight: 1.55,
            boxShadow: "0 4px 18px rgba(0,0,0,0.04)",
          }}
        >
          Se você{" "}
          <strong style={{ color: "var(--color-terracotta)", fontWeight: 700 }}>
            não muda as ferramentas
          </strong>
          , a rotina continua entregando os mesmos conflitos.
        </div>

        {/* CTA terracotta */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CtaButton
            text={dorReal.cta}
            className="cta-btn-pain"
            style={
              {
                width: "100%",
                maxWidth: "440px",
                fontSize: "1rem",
                padding: "1.125rem 1.5rem",
                borderRadius: "999px",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                fontWeight: 700,
              } as React.CSSProperties
            }
          />
        </div>
      </div>
    </section>
  );
}
