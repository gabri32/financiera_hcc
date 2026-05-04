import { useNavigate } from 'react-router-dom';
import { Calculator, CalendarCheck } from 'lucide-react';
import { Button } from '../ui/Button';

export function CtaSection() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-[#0d1f3c]" aria-label="Llamada a la acción">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            ¿Listo para crecer con nosotros?
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Elige tu camino y comencemos hoy.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Client CTA */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-[#c8305a] rounded-xl flex items-center justify-center mx-auto">
              <Calculator size={26} className="text-white" />
            </div>
            <div>
              <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1">Soy cliente</p>
              <h3 className="text-white font-bold text-xl">Simular crédito</h3>
              <p className="text-white/60 text-sm mt-2">
                Conoce tu cuota y condiciones en minutos.
              </p>
            </div>
            <Button
              variant="secondary"
              size="md"
              onClick={() => navigate('/register')}
              className="w-full"
            >
              Comenzar simulación
            </Button>
          </div>

          {/* Investor CTA */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-[#2a4a8a] border border-white/20 rounded-xl flex items-center justify-center mx-auto">
              <CalendarCheck size={26} className="text-white" />
            </div>
            <div>
              <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1">Soy inversionista</p>
              <h3 className="text-white font-bold text-xl">Agendar reunión</h3>
              <p className="text-white/60 text-sm mt-2">
                Conoce nuestro modelo de negocio y retornos.
              </p>
            </div>
            <Button
              variant="outline"
              size="md"
              onClick={() => navigate('/register')}
              className="w-full border-white/40 text-white hover:bg-white hover:text-[#1e3a6e]"
            >
              Agendar ahora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
