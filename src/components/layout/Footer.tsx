import { Link } from 'react-router-dom';
import { Globe, Share2, MessageCircle, CirclePlay, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0d1f3c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              {/* House icon with red gradient matching real logo */}
              <div className="w-10 h-10 rounded-sm flex items-center justify-center overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #d63a6e, #a01830)' }}>
                <span className="text-white font-black text-xs">HCC</span>
              </div>
              <div>
                <p className="text-white font-black text-sm leading-none">HCC</p>
                <p className="text-[#c8305a] font-bold text-[10px] leading-none tracking-wider">FINANCIAL GROUP</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Soluciones financieras ágiles, digitales y adaptadas al mercado regional.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-[#c8305a] transition-colors">
                <Globe size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-[#c8305a] transition-colors">
                <Share2 size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-[#c8305a] transition-colors">
                <MessageCircle size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-400 hover:text-[#c8305a] transition-colors">
                <CirclePlay size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Enlaces rápidos
            </h3>
            <ul className="space-y-2">
              {['Inicio', 'Productos', 'Inversión', 'Cómo funciona', 'Alianzas', 'Contacto'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-').replace('ó', 'o')}`}
                    className="text-gray-400 hover:text-[#c8305a] text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Contáctenos
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <Mail size={15} className="mt-0.5 shrink-0 text-[#c8305a]" />
                <a href="mailto:info@hccfinancialgroup.com" className="hover:text-white transition-colors">
                  info@hccfinancialgroup.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <Phone size={15} className="mt-0.5 shrink-0 text-[#c8305a]" />
                <a href="tel:+573001234567" className="hover:text-white transition-colors">
                  +57 301 123 4567
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin size={15} className="mt-0.5 shrink-0 text-[#c8305a]" />
                <span>Popayán, Cauca, Colombia</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Información legal
            </h3>
            <ul className="space-y-2">
              {[
                'Política de privacidad',
                'Términos y condiciones',
                'Política de tratamiento de datos',
                'SIC - Atención al consumidor financiero',
              ].map(item => (
                <li key={item}>
                  <Link to="#" className="text-gray-400 hover:text-[#c8305a] text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © 2024 HCC Financial Group. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-xs">
            Powered by{' '}
            <a href="https://www.finnovarisk.com" target="_blank" rel="noopener noreferrer"
              className="text-[#c8305a] hover:text-white transition-colors font-medium">
              Finnovarisk
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
