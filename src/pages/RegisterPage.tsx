import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import type { RegisterFormData } from '../types';

type FormErrors = Partial<Record<keyof RegisterFormData, string>>;

const BENEFITS = [
  'Aprobación en menos de 48 horas',
  'Asesoría personalizada y confidencial',
  'Acceso a 4 productos financieros',
  'Dashboard de seguimiento en tiempo real',
];

export function RegisterPage() {
  const { register, isLoading } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<RegisterFormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(): boolean {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
    if (!formData.email) {
      newErrors.email = 'El correo es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingresa un correo válido';
    }
    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Mínimo 8 caracteres';
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirma tu contraseña';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    try {
      await register(formData);
      navigate('/dashboard');
    } catch {
      setErrors({ email: 'Error al crear la cuenta. Intenta de nuevo.' });
    }
  }

  function handleChange(field: keyof RegisterFormData) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData(prev => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
    };
  }

  return (
    <div className="min-h-screen flex">
      {/* Left panel — branding */}
      <div className="hidden lg:flex lg:w-5/12 bg-gradient-to-br from-[#0d1f3c] via-[#2a4a8a] to-[#0d1f3c] flex-col justify-between p-12 relative overflow-hidden">
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
          <h1 className="text-3xl font-black text-white leading-tight">
            Accede a soluciones de crédito a la medida
          </h1>
          <p className="text-white/70 leading-relaxed">
            Únete a cientos de clientes que ya financian sus proyectos inmobiliarios con HCC Financial Group.
          </p>
          <ul className="space-y-3">
            {BENEFITS.map(benefit => (
              <li key={benefit} className="flex items-center gap-3 text-white/85 text-sm">
                <CheckCircle2 size={18} className="text-[#c8305a] shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <p className="relative text-white/40 text-xs">
          © 2024 HCC Financial Group. Todos los derechos reservados.
        </p>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-12 bg-white overflow-y-auto">
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
            <h2 className="text-2xl font-black text-[#0d1f3c]">Crear cuenta</h2>
            <p className="text-gray-500 text-sm mt-1">
              ¿Ya tienes cuenta?{' '}
              <Link to="/login" className="text-[#1e3a6e] font-semibold hover:underline">
                Inicia sesión
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <Input
              label="Nombre completo"
              type="text"
              placeholder="Juan Pérez"
              value={formData.name}
              onChange={handleChange('name')}
              error={errors.name}
              autoComplete="name"
              required
            />

            <Input
              label="Correo electrónico"
              type="email"
              placeholder="tu@correo.com"
              value={formData.email}
              onChange={handleChange('email')}
              error={errors.email}
              autoComplete="email"
              required
            />

            <Input
              label="Teléfono (opcional)"
              type="tel"
              placeholder="+57 300 000 0000"
              value={formData.phone}
              onChange={handleChange('phone')}
              autoComplete="tel"
            />

            <div className="relative">
              <Input
                label="Contraseña"
                type={showPassword ? 'text' : 'password'}
                placeholder="Mínimo 8 caracteres"
                value={formData.password}
                onChange={handleChange('password')}
                error={errors.password}
                autoComplete="new-password"
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

            <div className="relative">
              <Input
                label="Confirmar contraseña"
                type={showConfirm ? 'text' : 'password'}
                placeholder="Repite tu contraseña"
                value={formData.confirmPassword}
                onChange={handleChange('confirmPassword')}
                error={errors.confirmPassword}
                autoComplete="new-password"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-9 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label={showConfirm ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="pt-1">
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  className="w-4 h-4 mt-0.5 rounded border-gray-300 accent-[#1e3a6e]"
                />
                <span className="text-sm text-gray-600">
                  Acepto los{' '}
                  <Link to="#" className="text-[#1e3a6e] font-medium hover:underline">Términos y condiciones</Link>
                  {' '}y la{' '}
                  <Link to="#" className="text-[#1e3a6e] font-medium hover:underline">Política de privacidad</Link>
                </span>
              </label>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={isLoading}
              className="w-full mt-2"
            >
              Crear cuenta
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
