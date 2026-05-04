import { useState } from 'react';
import { TrendingUp, Info } from 'lucide-react';

const PROJECTIONS = [
  { year: 'Año 1', revenue: '$760 MM', netProfit: '$117 MM', margin: '15%' },
  { year: 'Año 2', revenue: '$1.668 MM', netProfit: '$642 MM', margin: '39%' },
  { year: 'Año 3', revenue: '$2.344 MM', netProfit: '$999 MM', margin: '43%' },
  { year: 'Año 4', revenue: '$7.099 MM', netProfit: '$3.630 MM', margin: '51%', highlight: true },
  { year: 'Año 5', revenue: '$15.967 MM', netProfit: '$9.058 MM', margin: '57%', highlight: true },
  { year: 'Año 6', revenue: '$23.443 MM', netProfit: '$13.412 MM', margin: '57%', highlight: true },
  { year: 'Año 7', revenue: '$31.169 MM', netProfit: '$17.127 MM', margin: '55%' },
  { year: 'Año 8', revenue: '$39.389 MM', netProfit: '$21.776 MM', margin: '55%' },
  { year: 'Año 9', revenue: '$46.968 MM', netProfit: '$26.033 MM', margin: '55%' },
  { year: 'Año 10', revenue: '$52.727 MM', netProfit: '$29.078 MM', margin: '55%' },
];

const SCENARIOS = [
  {
    id: 1,
    title: 'Escenario 1',
    subtitle: 'Capital 100% Inversionistas',
    tir: '21%',
    roe: '29%',
    vpn: '$49.640 MM',
    utilidad: '$29.078 MM',
    margen: '55%',
    rentabilidad: '48%',
    obs: 'La rentabilidad y el ROE crecen de forma sostenida, señalando la madurez del negocio.',
    highlight: false,
    icv: '12% ICV Consumo · 3.5% ICV Arrendamiento',
  },
  {
    id: 2,
    title: 'Escenario 2',
    subtitle: 'Capital Mixto (50/50)',
    tir: '23%',
    roe: '35%',
    vpn: '$33.651 MM',
    utilidad: '$17.996 MM',
    margen: '34%',
    rentabilidad: '30%',
    obs: 'El margen neto se estabiliza en 29-30% desde el año 5, con ROE creciente.',
    highlight: true,
    icv: '12% ICV Consumo · 3.5% ICV Arrendamiento',
  },
  {
    id: 3,
    title: 'Escenario 3',
    subtitle: 'Capital 100% Inv. + Ajuste Costos',
    tir: '21%',
    roe: '25%',
    vpn: '$32.838 MM',
    utilidad: '$25.996 MM',
    margen: '52%',
    rentabilidad: '25%',
    obs: 'El margen neto se estabiliza en 52-53% desde el año 5.',
    highlight: false,
    icv: '12% ICV',
  },
  {
    id: 4,
    title: 'Escenario 4',
    subtitle: 'Capital Mixto + Ajuste Costos',
    tir: '19.76%',
    roe: '23%',
    vpn: '$34.920 MM',
    utilidad: '$10.527 MM',
    margen: '21%',
    rentabilidad: '12%',
    obs: 'El margen neto se estabiliza en 20-21% desde el año 5.',
    highlight: false,
    icv: '12% ICV',
  },
];

// Simple bar chart using CSS
function MiniChart() {
  const values = [117, 642, 999, 3630, 9058, 13412, 17127, 21776, 26033, 29078];
  const max = Math.max(...values);
  return (
    <div className="flex items-end gap-1 h-20" aria-hidden="true">
      {values.map((v, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-sm transition-all duration-500"
          style={{
            height: `${(v / max) * 100}%`,
            background: i >= 3 && i <= 5
              ? 'linear-gradient(to top, #c8305a, #d63a6e)'
              : 'linear-gradient(to top, #2a4a8a, #4a6fa5)',
          }}
          title={`Año ${i + 1}: ${v} MM`}
        />
      ))}
    </div>
  );
}

export function ProjectionsSection() {
  const [activeScenario, setActiveScenario] = useState(0);
  const scenario = SCENARIOS[activeScenario];

  return (
    <section className="py-20 bg-white" aria-label="Proyecciones financieras">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Header */}
        <div className="text-center">
          <span className="inline-block bg-[#2a4a8a]/10 text-[#2a4a8a] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Proyecciones financieras
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0d1f3c] mb-4">
            Crecimiento exponencial de la Utilidad Neta a 10 años
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Las proyecciones muestran un crecimiento sostenido con márgenes de utilidad progresivamente optimizados. El periodo crítico de expansión entre los años 4–6 refleja la capitalización estratégica planificada.
          </p>
        </div>

        {/* Key metrics */}
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { label: 'Margen de utilidad promedio', value: '48%', sub: 'Escenario 1' },
            { label: 'ROE proyectado', value: 'Positivo desde año 1', sub: 'Todos los escenarios' },
            { label: 'TIR', value: '21%', sub: 'Escenario base' },
          ].map(item => (
            <div key={item.label} className="bg-[#2a4a8a]/5 border border-[#2a4a8a]/10 rounded-xl p-5 flex items-center gap-4">
              <TrendingUp size={22} className="text-[#2a4a8a] shrink-0" />
              <div>
                <p className="font-black text-[#0d1f3c] text-lg">{item.value}</p>
                <p className="text-gray-500 text-xs">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Chart + table */}
        <div className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-[#0d1f3c]">Proyección de Utilidad Neta (COP) — Escenario 1</h3>
              <p className="text-gray-400 text-xs mt-0.5">Tasa Leasing 15% · Consumo 25% · ICV 12%</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="w-3 h-3 bg-[#c8305a] rounded-sm inline-block" />
              Expansión (Años 4–6)
            </div>
          </div>

          {/* Mini bar chart */}
          <div className="px-6 pt-4 pb-2">
            <MiniChart />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              {['A1','A2','A3','A4','A5','A6','A7','A8','A9','A10'].map(l => (
                <span key={l} className="flex-1 text-center">{l}</span>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#2a4a8a] text-white text-xs">
                  <th className="text-left px-4 py-3 font-semibold">Año</th>
                  <th className="text-right px-4 py-3 font-semibold">Ingresos por intereses</th>
                  <th className="text-right px-4 py-3 font-semibold">Utilidad Neta</th>
                  <th className="text-right px-4 py-3 font-semibold">Margen</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {PROJECTIONS.map((row) => (
                  <tr
                    key={row.year}
                    className={row.highlight ? 'bg-[#c8305a]/10' : 'hover:bg-gray-50'}
                  >
                    <td className="px-4 py-3 font-semibold text-[#0d1f3c]">
                      {row.year}
                      {row.highlight && (
                        <span className="ml-2 text-[10px] bg-[#c8305a] text-white px-1.5 py-0.5 rounded-full">Expansión</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-right text-gray-600">{row.revenue}</td>
                    <td className="px-4 py-3 text-right font-bold text-[#2a4a8a]">{row.netProfit}</td>
                    <td className="px-4 py-3 text-right">
                      <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                        {row.margin}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Scenario comparison */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black text-[#0d1f3c] mb-2">Comparativo de Escenarios</h3>
            <p className="text-gray-500 text-sm">Selecciona un escenario para ver sus métricas detalladas</p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {SCENARIOS.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActiveScenario(i)}
                className={[
                  'px-4 py-2 rounded-xl text-sm font-semibold transition-all',
                  activeScenario === i
                    ? 'bg-[#2a4a8a] text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
                ].join(' ')}
              >
                {s.title}
              </button>
            ))}
          </div>

          {/* Active scenario detail */}
          <div className={`rounded-2xl border-2 p-8 transition-all ${scenario.highlight ? 'border-[#c8305a] bg-[#c8305a]/5' : 'border-gray-200 bg-gray-50'}`}>
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-black text-[#0d1f3c] text-xl">{scenario.title}</h4>
                  {scenario.highlight && (
                    <span className="bg-[#c8305a] text-white text-xs font-bold px-2 py-0.5 rounded-full">Recomendado</span>
                  )}
                </div>
                <p className="text-gray-500 text-sm">{scenario.subtitle}</p>
                <p className="text-gray-400 text-xs mt-1">{scenario.icv}</p>
              </div>
              <div className="flex items-start gap-2 bg-white border border-gray-200 rounded-xl p-3 max-w-xs">
                <Info size={14} className="text-[#2a4a8a] mt-0.5 shrink-0" />
                <p className="text-gray-600 text-xs italic">"{scenario.obs}"</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {[
                { label: 'Utilidad Neta (Año 10)', value: scenario.utilidad },
                { label: 'Margen Neto (Año 10)', value: scenario.margen },
                { label: 'Rentabilidad promedio', value: scenario.rentabilidad },
                { label: 'TIR (Año 10)', value: scenario.tir },
                { label: 'VPN (Año 10)', value: scenario.vpn },
              ].map(metric => (
                <div key={metric.label} className="bg-white rounded-xl p-4 border border-gray-100 text-center">
                  <p className="text-[#2a4a8a] font-black text-xl">{metric.value}</p>
                  <p className="text-gray-400 text-xs mt-1">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
