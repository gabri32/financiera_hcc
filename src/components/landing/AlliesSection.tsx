import { ALLIES } from '../../constants';

export function AlliesSection() {
  return (
    <section id="alianzas" className="py-16 bg-gray-50 border-y border-gray-100" aria-label="Alianzas estratégicas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-black text-[#0d1f3c] mb-2">
            Alianzas que respaldan nuestro modelo
          </h2>
          <p className="text-gray-500 text-sm">
            Trabajamos con los mejores actores del ecosistema financiero e inmobiliario.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {ALLIES.map(ally => (
            <div
              key={ally.name}
              className="flex flex-col items-center gap-1 bg-white border border-gray-200 rounded-xl px-8 py-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-[#2a4a8a]/10 rounded-lg flex items-center justify-center mb-2">
                <span className="text-[#2a4a8a] font-black text-xs">{ally.name.charAt(0)}</span>
              </div>
              <p className="font-bold text-[#0d1f3c] text-sm">{ally.name}</p>
              <p className="text-gray-400 text-xs">{ally.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
