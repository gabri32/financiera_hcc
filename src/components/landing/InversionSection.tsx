import { useNavigate } from 'react-router-dom';
import { TrendingUp, Shield, Percent } from 'lucide-react';
import { Button } from '../ui/Button';

const GENERAL_STATS = [
  {
    icon: Percent,
    value: '55%',
    label: 'Margen neto a 10 años',
    sub: 'Proyectado para el décimo año de operación',
  },
  {
    icon: TrendingUp,
    value: '$29.078 MM',
    label: 'Utilidad Neta (Año 10)',
    sub: 'Utilidad neta anual proyectada al cierre del décimo año',
  },
  {
    icon: Shield,
    value: '$20.007 MM',
    label: 'Inversión requerida (3 años)',
    sub: 'Capital inicial necesario para el plan de crecimiento',
  },
];

const SCENARIOS = [
  {
    title: 'Capital 100% por inversionistas',
    description: 'El capital requerido es aportado en su totalidad por inversionistas. Estructura financiera simple y sin apalancamiento.',
    tir: '21%',
    roe: '29%',
    highlight: false,
  },
  {
    title: 'Estructura mixta (50% inv. – 50% crédito)',
    description: 'El 50% del capital es aportado por inversionistas. El 50% restante se fondea mediante crédito externo a tasas preferenciales.',
    tir: '23%',
    roe: '35%',
    highlight: true,
  },
];

export function InversionSection() {
  const navigate = useNavigate();

  return (
    <section id="inversion" className="py-20 bg-[#f0f4ff]" aria-label="Oportunidad de inversión">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[#c8305a]/15 text-[#c8305a] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Inversión
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0d1f3c] mb-4">
            Escenario General: Capital 100% por inversionistas
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Una oportunidad para liderar el mercado inmobiliario con un ROE del 28%. Nuestro plan operativo proyecta una trayectoria de crecimiento sólido, alcanzando en el año 10 una utilidad neta de $25 mil millones COP.
          </p>
        </div>

        {/* General stats */}
        <div className="grid sm:grid-cols-3 gap-6 mb-14">
          {GENERAL_STATS.map(({ icon: Icon, value, label, sub }) => (
            <div key={label} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
              <div className="w-14 h-14 bg-[#2a4a8a]/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Icon size={26} className="text-[#2a4a8a]" />
              </div>
              <p className="text-3xl font-black text-[#c8305a] mb-2">{value}</p>
              <p className="font-bold text-[#0d1f3c] text-base mb-1">{label}</p>
              <p className="text-gray-500 text-sm">{sub}</p>
            </div>
          ))}
        </div>

        {/* Capital architecture */}
        <div className="mb-10">
          <h3 className="text-2xl font-black text-[#0d1f3c] text-center mb-8">
            Arquitectura del Capital
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {SCENARIOS.map(scenario => (
              <div
                key={scenario.title}
                className={[
                  'rounded-2xl p-8 border-2 transition-all',
                  scenario.highlight
                    ? 'bg-[#2a4a8a] border-[#2a4a8a] shadow-xl shadow-[#2a4a8a]/20'
                    : 'bg-white border-gray-200 shadow-sm',
                ].join(' ')}
              >
                {scenario.highlight && (
                  <span className="inline-block bg-[#c8305a] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                    Recomendado
                  </span>
                )}
                <h4 className={`font-black text-lg mb-3 ${scenario.highlight ? 'text-white' : 'text-[#0d1f3c]'}`}>
                  {scenario.title}
                </h4>
                <p className={`text-sm leading-relaxed mb-6 ${scenario.highlight ? 'text-white/75' : 'text-gray-500'}`}>
                  {scenario.description}
                </p>
                <div className={`rounded-xl p-4 flex items-center justify-around ${scenario.highlight ? 'bg-white/10' : 'bg-gray-50'}`}>
                  <div className="text-center">
                    <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${scenario.highlight ? 'text-white/60' : 'text-gray-400'}`}>TIR</p>
                    <p className={`text-3xl font-black ${scenario.highlight ? 'text-[#c8305a]' : 'text-[#2a4a8a]'}`}>{scenario.tir}</p>
                  </div>
                  <div className={`w-px h-10 ${scenario.highlight ? 'bg-white/20' : 'bg-gray-200'}`} />
                  <div className="text-center">
                    <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${scenario.highlight ? 'text-white/60' : 'text-gray-400'}`}>ROE</p>
                    <p className={`text-3xl font-black ${scenario.highlight ? 'text-[#c8305a]' : 'text-[#2a4a8a]'}`}>{scenario.roe}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Escalamiento */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <h3 className="font-black text-[#0d1f3c] text-xl mb-6 text-center">
            Ruta de Escalamiento y Estrategia de Salida
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                phase: '1',
                title: 'Consolidación Local',
                years: 'Años 1–3',
                capital: '$20.007 MM COP',
                desc: 'Captación a través de inversionistas locales y Family Offices.',
                color: 'border-[#2a4a8a] bg-[#2a4a8a]/5',
                badge: 'bg-[#2a4a8a] text-white',
              },
              {
                phase: '2',
                title: 'Expansión Institucional',
                years: 'Años 4+',
                capital: '$173.041 MM COP',
                desc: 'Fondos nacionales e internacionales.',
                color: 'border-violet-400 bg-violet-50',
                badge: 'bg-violet-600 text-white',
              },
              {
                phase: '3',
                title: 'Expansión Nacional',
                years: 'Años 7–10',
                capital: '$208.786 MM COP',
                desc: 'Fondeo nacional e internacional a escala.',
                color: 'border-[#c8305a] bg-[#c8305a]/5',
                badge: 'bg-[#c8305a] text-white',
              },
            ].map(item => (
              <div key={item.phase} className={`rounded-xl border-2 p-5 ${item.color}`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black ${item.badge}`}>
                    {item.phase}
                  </span>
                  <div>
                    <p className="font-bold text-[#0d1f3c] text-sm">{item.title}</p>
                    <p className="text-gray-400 text-xs">{item.years}</p>
                  </div>
                </div>
                <p className="text-[#2a4a8a] font-black text-lg mb-1">{item.capital}</p>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Button variant="primary" size="lg" onClick={() => navigate('/register')}>
            Quiero invertir
          </Button>
        </div>
      </div>
    </section>
  );
}
