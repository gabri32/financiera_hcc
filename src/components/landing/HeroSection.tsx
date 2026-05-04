import { useNavigate } from 'react-router-dom';
import { ArrowRight, Shield, Clock, UserCheck } from 'lucide-react';
import { Button } from '../ui/Button';

const TRUST_BADGES = [
  { icon: Clock, text: 'Respuesta inicial en 24h' },
  { icon: Shield, text: 'Aprobación en 48h' },
  { icon: UserCheck, text: 'Asesoría personalizada y confidencial' },
];

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0d1f3c] via-[#2a4a8a] to-[#0d1f3c] overflow-hidden"
      aria-label="Sección principal"
    >
      {/* Background blobs — contenidos dentro del section */}
      <div className="absolute inset-0 opacity-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#c8305a] rounded-full blur-3xl translate-x-1/3" />
        <div className="absolute bottom-20 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-blue-400 rounded-full blur-3xl -translate-x-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 max-w-full">
              <span className="w-2 h-2 bg-[#c8305a] rounded-full animate-pulse shrink-0" />
              <span className="text-white/90 text-sm font-medium truncate">Fintech innovadora · Popayán, Colombia</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Financiamos tu crecimiento con{' '}
              <span className="text-[#c8305a]">inteligencia financiera</span>{' '}
              y control de riesgo
            </h1>

            <p className="text-lg text-white/75 leading-relaxed max-w-lg">
              Soluciones de crédito ágiles y seguras, respaldadas por análisis de riesgo avanzado y tecnología.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigate('/register')}
                className="group"
              >
                Simular crédito
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/register')}
                className="border-white/40 text-white hover:bg-white hover:text-[#1e3a6e]"
              >
                Invertir con nosotros
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {TRUST_BADGES.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-white/80">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-[#c8305a]" />
                  </div>
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stats card */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 space-y-6">
              <h2 className="text-white font-bold text-xl">Resultados que generan confianza</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '$600 MM', label: 'Desembolsos mensuales' },
                  { value: '$7.200 MM', label: 'Meta anual' },
                  { value: '~20%', label: 'Margen promedio' },
                  { value: '18.7%', label: 'TIR proyectada' },
                ].map(stat => (
                  <div key={stat.label} className="bg-white/10 rounded-xl p-4">
                    <p className="text-[#c8305a] font-black text-2xl">{stat.value}</p>
                    <p className="text-white/70 text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="bg-[#c8305a]/20 border border-[#c8305a]/30 rounded-xl p-4">
                <p className="text-[#c8305a] font-semibold text-sm">ROI positivo desde año 1</p>
                <p className="text-white/70 text-xs mt-1">Proyecciones basadas en nuestro modelo financiero a 10 años</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
