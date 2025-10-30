'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';

interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  register: (name: string, email: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // localStorage'dan kullanıcı bilgilerini yükle ve demo hesap oluştur
  useEffect(() => {
    // Demo hesap oluştur (eğer yoksa)
    const savedUsers = localStorage.getItem('users');
    if (!savedUsers) {
      const demoUsers = [
        { name: 'Okan', email: 'okan10@gmail.com', password: 'Portakal2004!' }
      ];
      localStorage.setItem('users', JSON.stringify(demoUsers));
    }

    // Kullanıcı oturumunu yükle
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = useCallback((email: string, password: string) => {
    // Basit bir demo giriş sistemi - gerçek uygulamada API çağrısı yapılır
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      const users = JSON.parse(savedUsers);
      const foundUser = users.find((u: any) => u.email === email && u.password === password);
      if (foundUser) {
        const userData = { name: foundUser.name, email: foundUser.email };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        return true;
      }
    }
    return false;
  }, []);

  const register = useCallback((name: string, email: string, password: string) => {
    // Basit bir demo kayıt sistemi - gerçek uygulamada API çağrısı yapılır
    const savedUsers = localStorage.getItem('users');
    const users = savedUsers ? JSON.parse(savedUsers) : [];

    // Email zaten kayıtlı mı kontrol et
    if (users.find((u: any) => u.email === email)) {
      return false;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    const userData = { name, email };
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    return true;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('user');
  }, []);

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
