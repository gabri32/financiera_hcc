import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import type { LoginFormData } from '../types';

export function LoginPage() {
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Partial<LoginFormData>>({});

  function validate(): boolean {
    const newErrors: Partial<LoginFormData> = {};
    if (!formData.email) {
      newErrors.email = 'El correo es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingresa un correo válido';
    }
    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Mínimo 6 caracteres';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    try {
      await login(formData);
      navigate('/dashboard');
    } catch {
      setErrors({ email: 'Credenciales incorrectas. Intenta de nuevo.' });
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left panel — branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#0d1f3c] via-[#2a4a8a] to-[#0d1f3c] flex-col justify-between p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#c8305a] rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-48 h-48 bg-blue-400 rounded-full blur-3xl" />
        </div>

        <Link to="/" className="relative flex items-center gap-3">
          <div className="w-10 h-10 rounded-sm flex items-center justify-center overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #d63a6e, #a01830)' }}>
            <span className="text-white font-black text-xs">HCC</span>
          </div>
          <div>
            <p className="text-white font-black text-sm leading-none">HCC</p>
            <p className="text-[#c8305a] font-bold text-[10px] leading-none tracking-wider">FINANCIAL GROUP</p>
          </div>
        </Link>

        <div className="relative space-y-6">
          <h1 className="text-4xl font-black text-white leading-tight">
            Bienvenido de vuelta a tu plataforma financiera
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Gestiona tus créditos, monitorea tu portafolio y accede a soluciones financieras a la medida.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '$600 MM', label: 'Desembolsos mensuales' },
              { value: '48h', label: 'Tiempo de aprobación' },
            ].map(stat => (
              <div key={stat.label} className="bg-white/10 rounded-xl p-4">
                <p className="text-[#c8305a] font-black text-xl">{stat.value}</p>
                <p className="text-white/60 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="relative text-white/40 text-xs">
          © 2024 HCC Financial Group. Todos los derechos reservados.
        </p>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-12 bg-white">
        <div className="max-w-md w-full mx-auto">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-sm flex items-center justify-center overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #d63a6e, #a01830)' }}>
              <span className="text-white font-black text-xs">HCC</span>
            </div>
            <div>
              <p className="text-[#1e3a6e] font-black text-sm leading-none">HCC</p>
              <p className="text-[#c8305a] font-bold text-[10px] leading-none tracking-wider">FINANCIAL GROUP</p>
            </div>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#1e3a6e] mb-8 transition-colors"
          >
            <ArrowLeft size={15} />
            Volver al inicio
          </Link>

          <div className="mb-8">
            <h2 className="text-2xl font-black text-[#0d1f3c]">Iniciar sesión</h2>
            <p className="text-gray-500 text-sm mt-1">
              ¿No tienes cuenta?{' '}
              <Link to="/register" className="text-[#1e3a6e] font-semibold hover:underline">
                Regístrate gratis
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <Input
              label="Correo electrónico"
              type="email"
              placeholder="tu@correo.com"
              value={formData.email}
              onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
              error={errors.email}
              autoComplete="email"
              required
            />

            <div className="relative">
              <Input
                label="Contraseña"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={formData.password}
                onChange={e => setFormData(prev => ({ ...prev, password: e.target.value }))}
                error={errors.password}
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#1e3a6e] accent-[#1e3a6e]" />
                <span className="text-sm text-gray-600">Recordarme</span>
              </label>
              <Link to="#" className="text-sm text-[#1e3a6e] font-medium hover:underline">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={isLoading}
              className="w-full"
            >
              Iniciar sesión
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-xs text-gray-400">
              Al iniciar sesión aceptas nuestros{' '}
              <Link to="#" className="text-[#1e3a6e] hover:underline">Términos y condiciones</Link>
              {' '}y{' '}
              <Link to="#" className="text-[#1e3a6e] hover:underline">Política de privacidad</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
