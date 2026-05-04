import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/landing/HeroSection';
import { ProductsSection } from '../components/landing/ProductsSection';
import { BusinessModelSection } from '../components/landing/BusinessModelSection';
import { TechSection } from '../components/landing/TechSection';
import { HowItWorksSection } from '../components/landing/HowItWorksSection';
import { GuaranteeFundSection } from '../components/landing/GuaranteeFundSection';
import { InversionSection } from '../components/landing/InversionSection';
import { ProjectionsSection } from '../components/landing/ProjectionsSection';
import { CapitalSection } from '../components/landing/CapitalSection';
import { AlliesSection } from '../components/landing/AlliesSection';
import { CtaSection } from '../components/landing/CtaSection';

export function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* 1. Hero — propuesta de valor */}
        <HeroSection />

        {/* 2. Productos — los 4 productos financieros */}
        <ProductsSection />

        {/* 3. Modelo de negocio + integración vertical + ventaja competitiva */}
        <BusinessModelSection />

        {/* 4. Núcleo tecnológico — scoring alternativo + diferencial */}
        <TechSection />

        {/* 5. Cómo funciona — proceso paso a paso */}
        <HowItWorksSection />

        {/* 6. Fondo de Garantía Privada — blindaje financiero */}
        <GuaranteeFundSection />

        {/* 7. Inversión — escenarios TIR/ROE, ruta de escalamiento */}
        <InversionSection />

        {/* 8. Proyecciones financieras a 10 años + comparativo de escenarios */}
        <ProjectionsSection />

        {/* 9. Capital reciclado + necesidad de capital + valoración accionaria */}
        <CapitalSection />

        {/* 10. Alianzas estratégicas */}
        <AlliesSection />

        {/* 11. CTA final */}
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
