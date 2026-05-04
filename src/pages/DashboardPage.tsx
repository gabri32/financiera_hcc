import { useNavigate } from 'react-router-dom';
import {
  TrendingUp, Users, DollarSign, FileCheck,
  Bell, LogOut, Home, BarChart2, Settings,
  ChevronRight, ArrowUpRight, ArrowDownRight,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/Button';

const KPI_CARDS = [
  {
    label: 'Desembolsos del mes',
    value: '$487 MM',
    change: '+12.4%',
    trend: 'up',
    icon: DollarSign,
    color: 'bg-[#2a4a8a]',
  },
  {
    label: 'Créditos aprobados',
    value: '34',
    change: '+8',
    trend: 'up',
    icon: FileCheck,
    color: 'bg-emerald-600',
  },
  {
    label: 'Prospectos activos',
    value: '1.248',
    change: '-3.1%',
    trend: 'down',
    icon: Users,
    color: 'bg-[#c8305a]',
  },
  {
    label: 'Pipeline total',
    value: '$1.460 MM',
    change: '+5.7%',
    trend: 'up',
    icon: TrendingUp,
    color: 'bg-violet-600',
  },
];

const RECENT_CREDITS = [
  { id: 'CR-001', client: 'María González', product: 'Crédito Hipotecario', amount: '$180 MM', status: 'Aprobado', date: '02 May 2026' },
  { id: 'CR-002', client: 'Carlos Muñoz', product: 'C. Consumo Cuota Inicial', amount: '$45 MM', status: 'En estudio', date: '01 May 2026' },
  { id: 'CR-003', client: 'Ana Rodríguez', product: 'Arrendamiento Financiero', amount: '$220 MM', status: 'Aprobado', date: '30 Abr 2026' },
  { id: 'CR-004', client: 'Luis Herrera', product: 'C. Consumo Acabados', amount: '$32 MM', status: 'Pendiente', date: '29 Abr 2026' },
  { id: 'CR-005', client: 'Sandra López', product: 'Crédito Hipotecario', amount: '$195 MM', status: 'Desembolsado', date: '28 Abr 2026' },
];

const STATUS_STYLES: Record<string, string> = {
  Aprobado: 'bg-emerald-100 text-emerald-700',
  'En estudio': 'bg-blue-100 text-blue-700',
  Pendiente: 'bg-amber-100 text-amber-700',
  Desembolsado: 'bg-[#2a4a8a]/10 text-[#2a4a8a]',
};

const NAV_ITEMS = [
  { icon: Home, label: 'Inicio', active: true },
  { icon: BarChart2, label: 'Reportes', active: false },
  { icon: Users, label: 'Prospectos', active: false },
  { icon: FileCheck, label: 'Créditos', active: false },
  { icon: Settings, label: 'Configuración', active: false },
];

export function DashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/');
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-[#0d1f3c] text-white shrink-0">
        {/* Logo */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-sm flex items-center justify-center overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #d63a6e, #a01830)' }}>
              <span className="text-white font-black text-xs">HCC</span>
            </div>
            <div>
              <p className="text-white font-black text-sm leading-none">HCC</p>
              <p className="text-[#c8305a] font-bold text-[10px] leading-none tracking-wider">FINANCIAL GROUP</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 space-y-1" aria-label="Navegación del dashboard">
          {NAV_ITEMS.map(({ icon: Icon, label, active }) => (
            <button
              key={label}
              className={[
                'w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors',
                active
                  ? 'bg-white/15 text-white'
                  : 'text-white/60 hover:bg-white/10 hover:text-white',
              ].join(' ')}
            >
              <Icon size={18} />
              {label}
            </button>
          ))}
        </nav>

        {/* User */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 bg-[#c8305a] rounded-full flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-sm">
                {user?.name?.charAt(0).toUpperCase() ?? 'U'}
              </span>
            </div>
            <div className="min-w-0">
              <p className="text-white text-sm font-semibold truncate">{user?.name}</p>
              <p className="text-white/50 text-xs truncate">{user?.email}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-white/60 hover:bg-white/10 hover:text-white text-sm transition-colors"
          >
            <LogOut size={16} />
            Cerrar sesión
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-black text-[#0d1f3c]">Dashboard Comercial</h1>
            <p className="text-gray-500 text-sm">Mayo 2026 · Fase 1 — Lanzamiento y Posicionamiento</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="relative p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
              aria-label="Notificaciones"
            >
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" aria-hidden="true" />
            </button>
            {/* Mobile logout */}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="lg:hidden"
            >
              <LogOut size={16} />
            </Button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 space-y-6 overflow-auto">
          {/* Welcome */}
          <div className="bg-gradient-to-r from-[#2a4a8a] to-[#0d1f3c] rounded-2xl p-6 text-white">
            <p className="text-white/70 text-sm mb-1">Bienvenido de vuelta,</p>
            <h2 className="text-2xl font-black">{user?.name} 👋</h2>
            <p className="text-white/70 text-sm mt-2">
              Meta mensual: <span className="text-[#c8305a] font-bold">$600 MM</span> ·
              Avance: <span className="text-white font-bold">81.2%</span>
            </p>
            {/* Progress bar */}
            <div className="mt-4 bg-white/20 rounded-full h-2">
              <div
                className="bg-[#c8305a] h-2 rounded-full transition-all duration-700"
                style={{ width: '81.2%' }}
                role="progressbar"
                aria-valuenow={81.2}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Progreso de meta mensual"
              />
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {KPI_CARDS.map(card => {
              const Icon = card.icon;
              const isUp = card.trend === 'up';
              return (
                <div key={card.label} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-10 h-10 ${card.color} rounded-xl flex items-center justify-center`}>
                      <Icon size={18} className="text-white" />
                    </div>
                    <span className={[
                      'inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full',
                      isUp ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500',
                    ].join(' ')}>
                      {isUp ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                      {card.change}
                    </span>
                  </div>
                  <p className="text-2xl font-black text-[#0d1f3c]">{card.value}</p>
                  <p className="text-gray-500 text-sm mt-1">{card.label}</p>
                </div>
              );
            })}
          </div>

          {/* Recent credits table */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3 className="font-bold text-[#0d1f3c]">Créditos recientes</h3>
              <button className="text-sm text-[#2a4a8a] font-medium hover:underline flex items-center gap-1">
                Ver todos <ChevronRight size={14} />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                    <th className="text-left px-6 py-3 font-semibold">ID</th>
                    <th className="text-left px-6 py-3 font-semibold">Cliente</th>
                    <th className="text-left px-6 py-3 font-semibold hidden md:table-cell">Producto</th>
                    <th className="text-left px-6 py-3 font-semibold">Monto</th>
                    <th className="text-left px-6 py-3 font-semibold">Estado</th>
                    <th className="text-left px-6 py-3 font-semibold hidden lg:table-cell">Fecha</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {RECENT_CREDITS.map(credit => (
                    <tr key={credit.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-mono text-gray-400 text-xs">{credit.id}</td>
                      <td className="px-6 py-4 font-medium text-[#0d1f3c]">{credit.client}</td>
                      <td className="px-6 py-4 text-gray-500 hidden md:table-cell">{credit.product}</td>
                      <td className="px-6 py-4 font-semibold text-[#0d1f3c]">{credit.amount}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${STATUS_STYLES[credit.status] ?? 'bg-gray-100 text-gray-600'}`}>
                          {credit.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-400 hidden lg:table-cell">{credit.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
