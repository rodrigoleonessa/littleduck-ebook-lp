import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import DorReal from "@/components/sections/DorReal";
import Apresentacao from "@/components/sections/Apresentacao";
import Identificacao from "@/components/sections/Identificacao";
import Produto from "@/components/sections/Produto";
import Transformacao from "@/components/sections/Transformacao";
import OQueVemNoPack from "@/components/sections/OQueVemNoPack";
import ValorDenso from "@/components/sections/ValorDenso";
import ValorPercebido from "@/components/sections/ValorPercebido";
import Oferta from "@/components/sections/Oferta";
import Urgencia from "@/components/sections/Urgencia";
import Garantia from "@/components/sections/Garantia";
import Depoimentos from "@/components/sections/Depoimentos";
import CtaFinal from "@/components/sections/CtaFinal";
import Faq from "@/components/sections/Faq";
import Fechamento from "@/components/sections/Fechamento";
import Footer from "@/components/sections/Footer";
import RevealScript from "@/components/ui/RevealScript";

export default function Home() {
  return (
    <>
      <RevealScript />
      <Navbar />
      <main>
        <Hero />
        <DorReal />
        <Apresentacao />
        <Identificacao />
        <Produto />
        <Transformacao />
        <OQueVemNoPack />
        <ValorDenso />
        <ValorPercebido />
        <Oferta />
        <Urgencia />
        <Garantia />
        <Depoimentos />
        <CtaFinal />
        <Faq />
        <Fechamento />
      </main>
      <Footer />
    </>
  );
}
