import { HOW_IT_WORKS } from '../../constants';
import { ArrowRight } from 'lucide-react';

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 bg-white" aria-label="Cómo funciona">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#c8305a]/15 text-[#c8305a] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Proceso
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0d1f3c] mb-4">
            ¿Cómo funciona nuestro modelo?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Un proceso transparente, ágil y respaldado por tecnología financiera avanzada.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#2a4a8a] to-[#c8305a] z-0" aria-hidden="true" />

          {HOW_IT_WORKS.map((item, index) => (
            <div key={item.step} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#2a4a8a] rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-[#2a4a8a]/20">
                <span className="text-white font-black text-2xl">{item.step}</span>
              </div>
              <h3 className="font-bold text-[#0d1f3c] text-base mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
              {index < HOW_IT_WORKS.length - 1 && (
                <ArrowRight
                  size={20}
                  className="lg:hidden text-[#c8305a] mt-4"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
