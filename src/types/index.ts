export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'advisor' | 'client';
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}
