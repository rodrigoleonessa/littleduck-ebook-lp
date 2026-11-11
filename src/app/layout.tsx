import type { Metadata } from "next";
import { Lora, Lato, Caveat } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
    <html lang="pt-BR" className={`${lora.variable} ${lato.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
