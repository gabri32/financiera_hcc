import { ShieldCheck, Umbrella, TrendingUp } from 'lucide-react';

const FLOWS = [
  {
    icon: ShieldCheck,
    title: 'Fondo de Garantía Privada',
    description:
      'Permite que los créditos de consumo se encuentren garantizados en caso de impago en un 100% de su valor. Riesgo cero en principal.',
    badge: null,
    color: 'from-[#2a4a8a] to-[#0d1f3c]',
  },
  {
    icon: Umbrella,
    title: 'Ecosistema de Seguros',
    description:
      'Ingresos recurrentes por la comercialización de seguros obligatorios y voluntarios integrados en la cuota mensual del cliente.',
    badge: null,
    color: 'from-violet-600 to-violet-800',
  },
  {
    icon: TrendingUp,
    title: 'Margen Neto de Intermediación (MNI)',
    description:
      'Diferencial entre la tasa de colocación y el costo de fondeo. Sostiene la rentabilidad a largo plazo.',
    badge: '8.5% TPP',
    color: 'from-[#c8305a] to-[#8b1428]',
  },
];

export function BusinessModelSection() {
  return (
    <section id="nosotros" className="py-20 bg-white" aria-label="Modelo de negocio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Business model */}
        <div>
          <div className="text-center mb-14">
            <span className="inline-block bg-[#2a4a8a]/10 text-[#2a4a8a] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Modelo de negocio
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0d1f3c] mb-4">
              Tres flujos estratégicos que aseguran rentabilidad
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Operamos bajo un modelo de Originación y Servicio (Lending as a Service) con una estrategia de ingresos diversificada para mitigar la volatilidad.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {FLOWS.map(({ icon: Icon, title, description, badge, color }) => (
              <div
                key={title}
                className={`bg-gradient-to-br ${color} rounded-2xl p-7 text-white shadow-lg`}
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-5">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-black text-lg mb-3 leading-snug">{title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{description}</p>
                {badge && (
                  <div className="mt-5 bg-white/20 rounded-lg px-4 py-2 inline-block">
                    <span className="text-white font-black text-xl">{badge}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Vertical integration */}
        <div>
          <div className="text-center mb-12">
            <span className="inline-block bg-[#c8305a]/15 text-[#c8305a] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Integración vertical
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0d1f3c] mb-4">
              Ecosistema Open House
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Un ecosistema integrado que resuelve la ineficiencia bancaria y mitiga el riesgo del colateral.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative flex flex-col gap-0">
              {[
                { label: 'Constructora', note: 'Reducción de costos de construcción', color: 'border-[#2a4a8a] bg-[#2a4a8a]/5' },
                { label: 'Acabados y Equipamiento', note: 'Economías de escala', color: 'border-violet-400 bg-violet-50' },
                { label: 'FINTECH y Servicios Financieros', note: 'Reducción de costos de financiamiento', color: 'border-[#c8305a] bg-[#c8305a]/5' },
              ].map((item, i) => (
                <div key={item.label} className="flex flex-col items-center">
                  <div className={`w-full border-2 rounded-xl px-6 py-4 flex items-center justify-between ${item.color}`}>
                    <span className="font-bold text-[#0d1f3c]">{item.label}</span>
                    <span className="text-sm text-gray-500 hidden sm:block">{item.note}</span>
                  </div>
                  {i < 2 && (
                    <div className="w-0.5 h-8 bg-gray-300 my-1" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Competitive advantage */}
        <div>
          <div className="text-center mb-12">
            <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Ventaja competitiva
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0d1f3c] mb-4">
              El Ecosistema de Confianza
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Agilidad digital, respaldo físico y blindaje financiero para dominar el mercado hipotecario alternativo.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                num: '1',
                title: 'Integración Vertical: Constructora + Fintech',
                items: [
                  'Control del Activo: Transformamos el inmueble de pasivo bancario a activo gestionable.',
                  'CAC Mínimo: Acceso directo a demanda pre-calificada en salas de venta, eliminando pauta digital.',
                ],
                color: 'border-[#2a4a8a]/30 bg-[#2a4a8a]/5',
                numColor: 'bg-[#2a4a8a] text-white',
              },
              {
                num: '2',
                title: 'Blindaje Financiero: Fondo de Garantía Privada',
                items: [
                  'Cobertura Total: Fondo privado que garantiza el 100% del crédito ante impagos.',
                  'Mitigación de Riesgo: Seguridad superior a plataformas 100% digitales.',
                ],
                color: 'border-teal-300 bg-teal-50',
                numColor: 'bg-teal-600 text-white',
              },
              {
                num: '3',
                title: 'Modelo Híbrido: Estrategia "Phygital"',
                items: [
                  'Agilidad Digital: Scoring y avalúos en línea con respuestas en horas, no semanas.',
                  'Respaldo "Phygital": Acompañamiento presencial localizado (Cauca, Nariño, Valle).',
                ],
                color: 'border-violet-300 bg-violet-50',
                numColor: 'bg-violet-600 text-white',
              },
              {
                num: '4',
                title: 'Alianza Estratégica: El Respaldo de Finnovarisk',
                items: [
                  'Validación Experta: Soporte técnico y estratégico para el modelo financiero, de riesgo y cumplimiento normativo.',
                  'Scoring Escalable: Cruce de data tradicional con analítica avanzada.',
                ],
                color: 'border-rose-300 bg-rose-50',
                numColor: 'bg-rose-600 text-white',
              },
            ].map(item => (
              <div key={item.num} className={`rounded-2xl border-2 p-6 ${item.color}`}>
                <div className="flex items-start gap-4">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-black shrink-0 ${item.numColor}`}>
                    {item.num}
                  </span>
                  <div>
                    <h3 className="font-black text-[#0d1f3c] text-base mb-3">{item.title}</h3>
                    <ul className="space-y-2">
                      {item.items.map(point => (
                        <li key={point} className="text-gray-600 text-sm flex items-start gap-2">
                          <span className="text-[#c8305a] mt-0.5 shrink-0">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
