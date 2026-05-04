import { useNavigate } from 'react-router-dom';
import { RefreshCw, Building2, Users, Zap } from 'lucide-react';
import { Button } from '../ui/Button';

export function CapitalSection() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-[#f0f4ff]" aria-label="Estructura de capital y valoración">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Capital reciclado */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <span className="inline-block bg-[#2a4a8a]/10 text-[#2a4a8a] text-sm font-semibold px-4 py-1.5 rounded-full">
              Eficiencia del capital
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0d1f3c] leading-tight">
              Un modelo eficiente que recicla capital para maximizar el crecimiento
            </h2>
            <p className="text-gray-600 leading-relaxed">
              El capital de los socios es consistentemente menor que el capital total desembolsado. Esto se debe a la recuperación y reinversión del capital de los créditos, lo que optimiza la necesidad de nuevas aportaciones y potencia el retorno.
            </p>
            <div className="flex items-center gap-3 bg-white border border-[#2a4a8a]/20 rounded-xl p-4">
              <RefreshCw size={20} className="text-[#2a4a8a] shrink-0" />
              <p className="text-sm text-gray-600">
                <span className="font-bold text-[#2a4a8a]">Capital reciclado:</span> La diferencia entre el capital total desembolsado y el capital de los socios representa el capital recuperado y reinvertido automáticamente.
              </p>
            </div>
          </div>

          {/* Visual comparativo */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h3 className="font-bold text-[#0d1f3c] text-center mb-6">Comparativo de Capital a 10 Años</h3>
            <div className="flex items-end justify-center gap-8">
              {/* Bar 1 */}
              <div className="flex flex-col items-center gap-2">
                <span className="text-[#2a4a8a] font-black text-sm">$717.134 MM</span>
                <div className="w-20 bg-[#2a4a8a] rounded-t-lg" style={{ height: '160px' }} />
                <p className="text-gray-500 text-xs text-center font-medium">Capital Total<br />Desembolsado</p>
              </div>
              {/* Recycled indicator */}
              <div className="flex flex-col items-center gap-1 mb-8">
                <RefreshCw size={20} className="text-violet-500" />
                <span className="text-violet-600 text-xs font-bold">Capital<br />Reciclado</span>
              </div>
              {/* Bar 2 */}
              <div className="flex flex-col items-center gap-2">
                <span className="text-violet-600 font-black text-sm">$397.634 MM</span>
                <div className="w-20 bg-violet-500 rounded-t-lg" style={{ height: '88px' }} />
                <p className="text-gray-500 text-xs text-center font-medium">Capital Total<br />de los Socios</p>
              </div>
            </div>
            <p className="text-center text-xs text-gray-400 mt-4">
              Escenario 1 — Capital 100% por inversionistas
            </p>
          </div>
        </div>

        {/* Necesidad de capital */}
        <div>
          <div className="text-center mb-10">
            <span className="inline-block bg-[#c8305a]/15 text-[#c8305a] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Ronda de capitalización
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0d1f3c] mb-4">
              Para ejecutar nuestro plan a 3 años, necesitamos $21,000 millones en capital de crecimiento
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Los fondos no son un agregado, sino el combustible para una máquina de originación de crédito bien definida y diversificada. La coherencia entre la captación de $7,000 millones anuales y los desembolsos proyectados de $7,200 millones válida la rigurosidad de nuestro plan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
            <div className="bg-[#c8305a] rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Building2 size={22} />
                <span className="font-semibold text-sm">Aporte Fundador (Open House)</span>
              </div>
              <p className="text-4xl font-black mb-2">$9,500 MM</p>
              <p className="text-white/80 text-sm">Timing: Año 1</p>
              <p className="text-white/80 text-sm">Propósito: Capital semilla y demostración de compromiso.</p>
            </div>
            <div className="bg-[#2a4a8a] rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Users size={22} />
                <span className="font-semibold text-sm">Inversión Requerida (Terceros)</span>
              </div>
              <p className="text-4xl font-black mb-2">$21,000 MM</p>
              <p className="text-white/80 text-sm">Monto: $7,000 millones anuales (durante 3 años)</p>
              <p className="text-white/80 text-sm">Propósito: Sostener el ritmo de crecimiento proyectado.</p>
            </div>
          </div>

          <div className="bg-[#0d1f3c] rounded-2xl p-6 text-center max-w-3xl mx-auto">
            <p className="text-white font-bold text-lg">
              El capital total aportado en esta fase será de{' '}
              <span className="text-[#c8305a]">$30,500 millones</span>,
              sentando las bases para nuestra siguiente etapa de crecimiento.
            </p>
          </div>
        </div>

        {/* 10x growth */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#c8305a]/15 text-[#c8305a] text-sm font-semibold px-4 py-1.5 rounded-full">
                <Zap size={14} />
                Salto estratégico
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0d1f3c] leading-tight">
                Asegurar este capital es el catalizador para multiplicar por{' '}
                <span className="text-[#c8305a]">10x</span> los desembolsos en el Año 4
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Esta ronda de capitalización es el principio para ejecutar la visión a 10 años. Al asegurar estos fondos, pavimentamos el camino para consolidar nuestro liderazgo y maximizar el valor futuro para todos los accionistas.
              </p>
              <p className="font-bold text-[#0d1f3c] text-sm">
                Esta inversión financia nuestro plan a 3 años. Lo que realmente compra es el acceso a la siguiente década de crecimiento.
              </p>
            </div>
            <div className="flex items-end justify-center gap-8">
              <div className="flex flex-col items-center gap-3">
                <div className="bg-gray-100 rounded-xl p-4 text-center w-36">
                  <p className="text-gray-500 text-xs mb-1">Etapa Actual (Años 1–3)</p>
                  <p className="text-[#2a4a8a] font-black text-xl">$600 MM</p>
                  <p className="text-gray-400 text-xs">mensuales</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-[#c8305a] font-black text-4xl">10x</span>
                <span className="text-gray-400 text-xs">→</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="bg-[#2a4a8a] rounded-xl p-4 text-center w-36 shadow-lg shadow-[#2a4a8a]/20">
                  <p className="text-white/70 text-xs mb-1">Salto Estratégico (Año 4+)</p>
                  <p className="text-[#c8305a] font-black text-xl">$6,000 MM</p>
                  <p className="text-white/60 text-xs">mensuales</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Valoración accionaria */}
        <div>
          <div className="text-center mb-10">
            <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Valoración y control
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0d1f3c] mb-3">
              Síntesis de Valoración — Capital 100% Inversionistas
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Una visión ejecutiva de la operación de inversión y su impacto en la estructura accionarial.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Valoración */}
            <div className="bg-[#0d1f3c] rounded-2xl p-8 text-white space-y-5">
              <div>
                <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1">Valoración Pre-Money</p>
                <p className="text-[#c8305a] font-black text-3xl">$76.817 M</p>
              </div>
              <div className="border-t border-white/10 pt-5">
                <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1">Valoración Post-Money</p>
                <p className="text-white font-black text-3xl">$96.824 M</p>
                <p className="text-white/50 text-xs mt-1">Pre-money $76.817 M + inversión $20.007 M</p>
              </div>
            </div>

            {/* Participación */}
            <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-8 space-y-5">
              <h4 className="font-bold text-[#0d1f3c]">Participación de inversionistas</h4>
              <p className="text-gray-500 text-sm">La inversión de $20.007 M representa una participación del 20.66%.</p>

              {/* Donut visual */}
              <div className="flex items-center gap-6">
                <div className="relative w-24 h-24 shrink-0">
                  <svg viewBox="0 0 36 36" className="w-24 h-24 -rotate-90">
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e5e7eb" strokeWidth="3.8" />
                    <circle
                      cx="18" cy="18" r="15.9" fill="none"
                      stroke="#ef4444" strokeWidth="3.8"
                      strokeDasharray="20.66 79.34"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[#2a4a8a] font-black text-sm">20.66%</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full" />
                    <span className="text-sm text-gray-600"><strong>20.66%</strong> Inversionistas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-[#2a4a8a] rounded-full" />
                    <span className="text-sm text-gray-600"><strong>79.34%</strong> Fundadores</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-gray-50 rounded-xl p-3 text-center">
                  <p className="text-[#2a4a8a] font-black text-lg">$96.824</p>
                  <p className="text-gray-400 text-xs">COP por acción</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 text-center">
                  <p className="text-[#2a4a8a] font-black text-lg">1 MM</p>
                  <p className="text-gray-400 text-xs">Acciones ordinarias</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button variant="primary" size="lg" onClick={() => navigate('/register')}>
            Quiero ser inversionista
          </Button>
        </div>

      </div>
    </section>
  );
}
