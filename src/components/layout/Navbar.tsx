import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../../constants';
import { Button } from '../ui/Button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="flex items-center gap-1">
              {/* House icon with red gradient matching real logo */}
              <div className="w-8 h-8 rounded-sm flex items-center justify-center overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #d63a6e, #a01830)' }}>
                <span className="text-white font-black text-xs">HCC</span>
              </div>
              <div className="hidden sm:block">
                <p className="text-[#1e3a6e] font-black text-sm leading-none">HCC</p>
                <p className="text-[#c8305a] font-bold text-[10px] leading-none tracking-wider">FINANCIAL GROUP</p>
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Navegación principal">
            {NAV_ITEMS.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-gray-600 hover:text-[#1e3a6e] font-medium transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/login')}
            >
              Iniciar sesión
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => navigate('/register')}
            >
              Registrarse
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          <nav className="flex flex-col gap-2" aria-label="Navegación móvil">
            {NAV_ITEMS.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-gray-700 hover:text-[#1e3a6e] font-medium py-2 border-b border-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-2 pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => { navigate('/login'); setIsOpen(false); }}
              className="w-full"
            >
              Iniciar sesión
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => { navigate('/register'); setIsOpen(false); }}
              className="w-full"
            >
              Registrarse
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
