import { Home, Wrench, PiggyBank, Key } from 'lucide-react';
import { PRODUCTS } from '../../constants';

const ICON_MAP: Record<string, React.ElementType> = {
  home: Home,
  wrench: Wrench,
  'piggy-bank': PiggyBank,
  key: Key,
};

export function ProductsSection() {
  return (
    <section id="productos" className="py-20 bg-gray-50" aria-label="Productos financieros">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[#2a4a8a]/10 text-[#2a4a8a] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Productos y servicios
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0d1f3c] mb-4">
            Soluciones financieras a la medida
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Cuatro productos diseñados para acompañarte en cada etapa de tu proyecto inmobiliario.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map(product => {
            const Icon = ICON_MAP[product.icon] ?? Home;
            return (
              <article
                key={product.id}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#2a4a8a]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#2a4a8a] transition-colors duration-300">
                  <Icon
                    size={22}
                    className="text-[#2a4a8a] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="font-bold text-[#0d1f3c] text-base mb-3 leading-snug">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {product.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Problem vs solution */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 border border-red-100 rounded-2xl p-8">
            <h3 className="font-bold text-red-700 text-lg mb-5">
              El crédito tradicional limita tu crecimiento:
            </h3>
            <ul className="space-y-3">
              {[
                'Alta incertidumbre en aprobaciones',
                'Provisiones elevadas',
                'Capital inmovilizado',
                'Menor capacidad de colocación',
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-red-600 text-sm">
                  <span className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center shrink-0 text-red-500 font-bold text-xs">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#2a4a8a] rounded-2xl p-8">
            <h3 className="font-bold text-white text-lg mb-5">
              Transformamos el riesgo en una ventaja competitiva:
            </h3>
            <ul className="space-y-3">
              {[
                'Mitigamos el riesgo crediticio',
                'Protegemos tu flujo de caja',
                'Liberamos capital',
                'Aumentamos tu capacidad de crecimiento',
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-white/90 text-sm">
                  <span className="w-5 h-5 bg-[#c8305a] rounded-full flex items-center justify-center shrink-0 text-white font-bold text-xs">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
