export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "var(--color-cream-dark)",
        borderTop: "1px solid var(--color-border)",
        padding: "2rem 1.5rem",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 700,
            fontSize: "1.125rem",
            color: "var(--color-green)",
          }}
        >
          Little Duck
        </span>

        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a
            href="/privacidade"
            style={{
              fontSize: "0.8125rem",
              color: "var(--color-text-muted)",
              textDecoration: "none",
            }}
          >
            Política de Privacidade
          </a>
          <a
            href="/termos"
            style={{
              fontSize: "0.8125rem",
              color: "var(--color-text-muted)",
              textDecoration: "none",
            }}
          >
            Termos de Uso
          </a>
          <a
            href="https://littleduck.com.br"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.8125rem",
              color: "var(--color-text-muted)",
              textDecoration: "none",
            }}
          >
            littleduck.com.br
          </a>
        </div>

        <p
          style={{
            fontSize: "0.75rem",
            color: "var(--color-text-light)",
          }}
        >
          © {year} Little Duck. Todos os direitos reservados.
          <br />
          O conteúdo é de caráter informativo e educativo, não substitui orientação profissional.
        </p>
      </div>
    </footer>
  );
}
