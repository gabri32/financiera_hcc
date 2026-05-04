import { Filter, Building, ShieldCheck, Key } from 'lucide-react';

const STAGES = [
  {
    icon: Filter,
    num: '1',
    title: 'Captación y Gestión',
    desc: 'Finnovarisk capta, registra y gestiona las cuotas de fianza.',
    color: 'bg-[#2a4a8a]',
  },
  {
    icon: Building,
    num: '2',
    title: 'Custodia Independiente',
    desc: 'Los recursos se trasladan a una fiduciaria independiente que actúa como custodio del fondo.',
    color: 'bg-violet-600',
  },
  {
    icon: ShieldCheck,
    num: '3',
    title: 'Uso Exclusivo de Recursos',
    desc: 'El fondo se destina exclusivamente a cubrir operaciones crediticias que entren en mora superior a 4 meses.',
    color: 'bg-teal-600',
  },
  {
    icon: Key,
    num: '4',
    title: 'Control y Transparencia',
    desc: 'Los recursos solo se liberan con firma conjunta (Entidad-Finnovarisk), asegurando control total según contrato fiduciario.',
    color: 'bg-[#c8305a]',
  },
];

const BENEFITS = [
  {
    title: 'Riesgo Cero en Principal',
    desc: 'Protección total del capital desembolsado.',
    icon: '🛡️',
  },
  {
    title: 'Liquidez Continua',
    desc: 'Capacidad ininterrumpida de originación.',
    icon: '💧',
  },
  {
    title: 'Eficiencia Operativa',
    desc: 'Externalización de la gestión de cobranza.',
    icon: '⚙️',
  },
];

export function GuaranteeFundSection() {
  return (
    <section className="py-20 bg-white" aria-label="Fondo de garantía privada">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-teal-100 text-teal-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Fondo de Garantía Privada
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0d1f3c] mb-4">
            Blindaje Financiero: La Arquitectura de la Confianza
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mecanismo gestionado por Finnovarisk para asegurar el 100% de créditos de consumo. Un modelo de fianza fiduciaria para transformar el riesgo en una ventaja competitiva.
          </p>
        </div>

        {/* 4 stages */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {STAGES.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <div key={stage.num} className="relative">
                {/* Connector */}
                {index < STAGES.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-6 h-0.5 bg-gray-200 z-10" aria-hidden="true" />
                )}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 h-full hover:shadow-md transition-shadow">
                  <div className={`w-12 h-12 ${stage.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Etapa {stage.num}</span>
                  </div>
                  <h3 className="font-bold text-[#0d1f3c] text-base mb-2">{stage.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{stage.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits */}
        <div className="bg-[#0d1f3c] rounded-2xl p-8">
          <h3 className="text-white font-bold text-lg text-center mb-6">
            Beneficios Clave para la Fintech
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {BENEFITS.map(benefit => (
              <div key={benefit.title} className="flex items-start gap-4">
                <span className="text-2xl shrink-0">{benefit.icon}</span>
                <div>
                  <p className="text-white font-bold text-sm">{benefit.title}</p>
                  <p className="text-white/60 text-sm mt-1">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Payment options */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <h4 className="text-white/70 text-xs font-semibold uppercase tracking-wider text-center mb-4">
              Modalidades de contratación
            </h4>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <p className="text-white font-bold text-sm">Pago Único Anticipado</p>
                <p className="text-white/60 text-xs mt-1">Cobertura total con un solo desembolso inicial.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <p className="text-white font-bold text-sm">Pagos Mensuales Periódicos</p>
                <p className="text-white/60 text-xs mt-1">Cuotas ligadas al desempeño de la cartera.</p>
              </div>
              <div className="bg-[#c8305a]/20 border border-[#c8305a]/40 rounded-xl p-4 text-center">
                <p className="text-[#c8305a] font-black text-lg">7%</p>
                <p className="text-white font-bold text-sm">Comisión</p>
                <p className="text-white/60 text-xs mt-1">Sobre la tarifa aplicada al cliente final.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
