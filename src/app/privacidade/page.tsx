import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade | Little Duck",
};

export default function Privacidade() {
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
          Política de Privacidade
        </h1>
        <p
          style={{
            fontSize: "0.875rem",
            color: "var(--color-text-muted)",
            marginBottom: "2.5rem",
          }}
        >
          Última atualização: {year} — em conformidade com a LGPD (Lei nº 13.709/2018)
        </p>

        {[
          {
            title: "1. Responsável pelo Tratamento",
            body: "Little Duck (littleduck.com.br) é a responsável pelo tratamento dos dados pessoais coletados nesta página. Para dúvidas, entre em contato pelo site oficial.",
          },
          {
            title: "2. Dados Coletados",
            body: "Coletamos apenas os dados necessários para processar sua compra e entregar o acesso ao produto: nome, endereço de e-mail e dados de pagamento. Os dados de pagamento são processados exclusivamente pela plataforma de checkout e não armazenados por nós.",
          },
          {
            title: "3. Finalidade do Tratamento",
            body: "Seus dados são utilizados para: (a) processar e confirmar sua compra; (b) entregar o acesso ao produto digital; (c) enviar comunicações relacionadas ao produto; (d) cumprir obrigações legais.",
          },
          {
            title: "4. Base Legal",
            body: "O tratamento dos seus dados é fundamentado na execução de contrato (Art. 7°, V da LGPD) para a entrega do produto adquirido, e no legítimo interesse para comunicações relacionadas à compra.",
          },
          {
            title: "5. Compartilhamento de Dados",
            body: "Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins comerciais. Compartilhamos apenas com prestadores de serviço essenciais (plataforma de pagamento, entrega de e-mail) sob obrigação de confidencialidade.",
          },
          {
            title: "6. Armazenamento e Segurança",
            body: "Seus dados são armazenados em servidores seguros. Adotamos medidas técnicas e organizacionais adequadas para proteger suas informações contra acesso não autorizado, perda ou alteração.",
          },
          {
            title: "7. Seus Direitos (LGPD)",
            body: "Você tem direito a: acessar seus dados; corrigir dados incorretos; solicitar exclusão; revogar consentimento; obter informações sobre o uso dos seus dados. Para exercer esses direitos, entre em contato pelo site littleduck.com.br.",
          },
          {
            title: "8. Cookies",
            body: "Esta página pode utilizar cookies essenciais para funcionamento e cookies analíticos (anonimizados) para melhorar a experiência. Você pode desativar cookies nas configurações do seu navegador.",
          },
          {
            title: "9. Retenção de Dados",
            body: "Seus dados são mantidos pelo período necessário para cumprir as finalidades descritas nesta política e para atender obrigações legais, especialmente fiscais (5 anos).",
          },
          {
            title: "10. Alterações",
            body: "Esta política pode ser atualizada periodicamente. Alterações relevantes serão comunicadas por e-mail ou por aviso na página. A data de última atualização é sempre indicada no topo deste documento.",
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
