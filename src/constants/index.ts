import type { NavItem, Product } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Productos', href: '#productos' },
  { label: 'Inversión', href: '#inversion' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Alianzas', href: '#alianzas' },
  { label: 'Contacto', href: '#contacto' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'hipotecario',
    name: 'Crédito Hipotecario',
    description: 'Financia la compra de tu vivienda con tasas competitivas y plazos flexibles adaptados a tu capacidad de pago.',
    icon: 'home',
  },
  {
    id: 'consumo-acabados',
    name: 'C. Consumo para Acabados',
    description: 'Crédito de consumo para remodelar y terminar los acabados de tu inmueble con condiciones ágiles.',
    icon: 'wrench',
  },
  {
    id: 'consumo-cuota',
    name: 'C. Consumo para Cuota Inicial',
    description: 'Financia tu cuota inicial y accede a tu vivienda propia sin esperar años de ahorro.',
    icon: 'piggy-bank',
  },
  {
    id: 'arrendamiento',
    name: 'Arrendamiento Financiero',
    description: 'Arrienda con opción de compra. Ocupa tu inmueble hoy y adquiérelo al finalizar el contrato.',
    icon: 'key',
  },
];

export const STATS = [
  { value: '$600 MM', label: 'Mensuales en desembolsos' },
  { value: '$7.200 MM', label: 'Meta anual' },
  { value: '4', label: 'Productos activos' },
  { value: '48h', label: 'Aprobación en menos de' },
];

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Captación y gestión de operaciones',
    description: 'Evaluamos y estructuramos cada crédito.',
  },
  {
    step: 2,
    title: 'Custodia en fiduciaria independiente',
    description: 'Los recursos se administran con total transparencia.',
  },
  {
    step: 3,
    title: 'Fondo cubre mora hasta 4 meses',
    description: 'Protegemos el capital e inversiones.',
  },
  {
    step: 4,
    title: 'Control y transparencia total',
    description: 'Monitoreamos constantemente y reportes en tiempo real.',
  },
];

export const ALLIES = [
  { name: 'Open House', subtitle: 'Constructora' },
  { name: 'Fiduciaria de Occidente', subtitle: 'Fiduciaria' },
  { name: 'CIFIN TransUnion', subtitle: 'Centrales de Riesgo' },
];
