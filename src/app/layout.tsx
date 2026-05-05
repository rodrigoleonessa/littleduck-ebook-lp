import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pack Premium de Guias para Pais | Little Duck",
  description:
    "Uma coleção completa de ebooks práticos para mães e pais que querem educar com mais calma, criar limites com respeito e transformar a rotina sem culpa. De R$547 por apenas R$37.",
  openGraph: {
    title: "Pack Premium de Guias para Pais | Little Duck",
    description:
      "10 guias práticos para rotina, birras, telas, autonomia e Montessori em casa. Acesso digital imediato.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${lato.variable}`}>
      <body>{children}</body>
    </html>
  );
}
