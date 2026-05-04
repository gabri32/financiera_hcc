import { Brain, Database, Home, Cloud, CheckCircle2, XCircle } from 'lucide-react';

const DATA_SOURCES = [
  { icon: Database, label: 'Información crediticia', sub: 'TransUnion' },
  { icon: Home, label: 'Información del mercado', sub: 'Pagos de servicios públicos' },
  { icon: Brain, label: 'Fábrica Alternativa', sub: 'Juicio de expertos con metodología propia' },
  { icon: Cloud, label: 'Otros datos alternativos', sub: 'Variables no tradicionales' },
];

const DIFFERENTIALS = [
  {
    num: '1',
    title: 'Perfiles de Riesgo Ampliados',
    desc: 'Inclusión de perfiles de riesgo más amplios que la banca tradicional, cubriendo la demanda desatendida.',
  },
  {
    num: '2',
    title: 'Producto: Arrendamiento Financiero',
    desc: 'Modelo flexible con opción de compra, alternativa al crédito hipotecario directo.',
  },
  {
    num: '3',
    title: 'Gestión de Garantía por Constructora',
    desc: 'Garantía administrada por la constructora, permitiendo una reasignación ágil en caso de incumplimiento.',
  },
  {
    num: '4',
    title: 'Modelo de Score Alternativo',
    desc: 'Evaluación integral con datos tradicionales (TransUnion) y metodología interna para conocer al cliente.',
  },
  {
    num: '5',
    title: 'Agilidad y Avalúo Digital',
    desc: 'Proceso y avalúo digital agilizados, ofreciendo diferenciación y valor en tiempos de respuesta.',
  },
];

export function TechSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0d1f3c] to-[#2a4a8a]" aria-label="Núcleo tecnológico">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Scoring alternativo */}
        <div>
          <div className="text-center mb-12">
            <span className="inline-block bg-white/10 text-white/80 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Núcleo tecnológico
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Nuestro Scoring Alternativo es nuestra Propiedad Intelectual defendible
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Nuestro valor reside en un modelo de scoring propietario que utiliza analítica avanzada sobre variables no tradicionales para evaluar con mayor certeza a la "Zona Gris". Decisiones en horas, no semanas.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Data sources */}
            <div className="space-y-4">
              <p className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-6">
                Fuentes de datos
              </p>
              {DATA_SOURCES.map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-4"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-[#c8305a]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{label}</p>
                    <p className="text-white/50 text-xs">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ML output */}
            <div className="flex flex-col items-center gap-6">
              <div className="w-28 h-28 bg-white/10 border-2 border-[#c8305a]/50 rounded-2xl flex flex-col items-center justify-center">
                <Brain size={36} className="text-[#c8305a] mb-1" />
                <p className="text-white text-xs font-bold text-center leading-tight">Algoritmo ML (IP)</p>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <CheckCircle2 size={28} className="text-white" />
                  </div>
                  <span className="text-white font-bold text-sm">Aprobado</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/30">
                    <XCircle size={28} className="text-white" />
                  </div>
                  <span className="text-white font-bold text-sm">Rechazado</span>
                </div>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-xl p-4 text-center max-w-xs">
                <p className="text-[#c8305a] font-black text-2xl mb-1">Horas</p>
                <p className="text-white/70 text-sm">vs semanas en la banca tradicional</p>
              </div>
            </div>
          </div>
        </div>

        {/* Differentials */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Diferenciación: Ventaja comparativa y competitiva
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-sm">
              La banca tradicional desatiende segmentos solventes por rigidez documental. Nosotros resolvemos esa falla estructural.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {DIFFERENTIALS.map(item => (
              <div
                key={item.num}
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/15 transition-colors"
              >
                <div className="w-8 h-8 bg-[#c8305a] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-black text-sm">{item.num}</span>
                </div>
                <h3 className="text-white font-bold text-sm mb-2 leading-snug">{item.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
