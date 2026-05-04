import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { AuthState, User, LoginFormData, RegisterFormData } from '../types';

interface AuthContextValue extends AuthState {
  login: (data: LoginFormData) => Promise<void>;
  register: (data: RegisterFormData) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: false,
  });

  const login = useCallback(async (data: LoginFormData) => {
    setState(prev => ({ ...prev, isLoading: true }));
    // Simulated API call — replace with real endpoint
    await new Promise(resolve => setTimeout(resolve, 1000));
    const mockUser: User = {
      id: '1',
      name: 'Ejecutivo HCC',
      email: data.email,
      role: 'advisor',
    };
    setState({ user: mockUser, isAuthenticated: true, isLoading: false });
  }, []);

  const register = useCallback(async (data: RegisterFormData) => {
    setState(prev => ({ ...prev, isLoading: true }));
    // Simulated API call — replace with real endpoint
    await new Promise(resolve => setTimeout(resolve, 1000));
    const mockUser: User = {
      id: '2',
      name: data.name,
      email: data.email,
      role: 'client',
    };
    setState({ user: mockUser, isAuthenticated: true, isLoading: false });
  }, []);

  const logout = useCallback(() => {
    setState({ user: null, isAuthenticated: false, isLoading: false });
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
