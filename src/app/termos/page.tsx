import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso | Little Duck",
};

export default function Termos() {
  const year = new Date().getFullYear();

  return (
    <div style={{ backgroundColor: "var(--color-cream)", minHeight: "100vh" }}>
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "4rem 1.5rem",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.875rem",
            color: "var(--color-green)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.375rem",
            marginBottom: "2rem",
          }}
        >
          ← Voltar
        </Link>

        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "2rem",
            fontWeight: 700,
            color: "var(--color-green)",
            marginBottom: "0.5rem",
          }}
        >
          Termos de Uso
        </h1>
        <p
          style={{
            fontSize: "0.875rem",
            color: "var(--color-text-muted)",
            marginBottom: "2.5rem",
          }}
        >
          Última atualização: {year}
        </p>

        {[
          {
            title: "1. Aceitação dos Termos",
            body: "Ao adquirir o Pack Premium de Guias para Pais da Little Duck, você concorda com estes Termos de Uso. Se não concordar com qualquer parte destes termos, não realize a compra.",
          },
          {
            title: "2. Descrição do Produto",
            body: "O Pack Premium de Guias para Pais é um produto digital composto por ebooks e materiais práticos sobre parentalidade, rotina infantil e educação positiva. O acesso é entregue de forma digital, após confirmação do pagamento.",
          },
          {
            title: "3. Uso Pessoal",
            body: "O conteúdo adquirido é de uso pessoal e não comercial. É proibida a reprodução, redistribuição, venda ou compartilhamento do material, no todo ou em parte, sem autorização prévia e por escrito da Little Duck.",
          },
          {
            title: "4. Propriedade Intelectual",
            body: "Todo o conteúdo, textos, design e materiais são de propriedade exclusiva da Little Duck e estão protegidos por leis de direitos autorais. A compra concede uma licença de uso pessoal, não transferindo quaisquer direitos de propriedade.",
          },
          {
            title: "5. Garantia e Reembolso",
            body: "Você tem 7 (sete) dias corridos a partir da data da compra para solicitar reembolso integral, conforme as regras da plataforma de pagamento utilizada. Após este prazo, não serão aceitas solicitações de reembolso.",
          },
          {
            title: "6. Natureza do Conteúdo",
            body: "O conteúdo é de caráter educativo e informativo. Não substitui orientação de profissionais de saúde, psicologia, pediatria ou qualquer outra especialidade. Em casos de dúvidas sobre saúde ou desenvolvimento infantil, procure um profissional habilitado.",
          },
          {
            title: "7. Limitação de Responsabilidade",
            body: "A Little Duck não se responsabiliza por resultados individuais, pois estes dependem de fatores como dedicação, contexto familiar e aplicação prática do conteúdo. Os resultados variam de pessoa para pessoa.",
          },
          {
            title: "8. Alterações",
            body: "A Little Duck reserva-se o direito de alterar estes termos a qualquer momento. Alterações significativas serão comunicadas com antecedência razoável.",
          },
          {
            title: "9. Contato",
            body: "Para dúvidas sobre estes Termos de Uso, entre em contato pelo e-mail disponível no site littleduck.com.br.",
          },
        ].map((section) => (
          <div key={section.title} style={{ marginBottom: "2rem" }}>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.125rem",
                fontWeight: 700,
                color: "var(--color-text)",
                marginBottom: "0.5rem",
              }}
            >
              {section.title}
            </h2>
            <p
              style={{
                fontSize: "0.9375rem",
                color: "var(--color-text-muted)",
                lineHeight: 1.75,
              }}
            >
              {section.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
