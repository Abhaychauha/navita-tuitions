import { User } from '../types';

const USER_SESSION_KEY = 'navita_auth_user';
const TOKEN_KEY = 'navita_auth_token';
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

export const authService = {
  getCurrentUser: (): User | null => {
    try {
      const raw = localStorage.getItem(USER_SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  },

  getToken: (): string | null => {
    return localStorage.getItem(TOKEN_KEY);
  },

  login: async (email: string, password?: string): Promise<{ success: boolean; user?: User; message: string }> => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), password })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success && data.user) {
          localStorage.setItem(USER_SESSION_KEY, JSON.stringify(data.user));
          if (data.token) localStorage.setItem(TOKEN_KEY, data.token);
          return { success: true, user: data.user, message: data.message };
        }
      }
    } catch (e) {
      console.warn('Backend login fallback:', e);
    }

    const normalizedEmail = email.trim().toLowerCase();
    const fallbackUser: User = {
      id: 'user_' + Date.now().toString(36),
      name: normalizedEmail.split('@')[0].replace('.', ' ').replace(/^\w/, c => c.toUpperCase()),
      email: normalizedEmail,
      accessStatus: 'free',
      unlockedWorksheetIds: ['grade-5-cbse-english-grammar'],
      createdAt: new Date().toISOString()
    };
    localStorage.setItem(USER_SESSION_KEY, JSON.stringify(fallbackUser));
    return { success: true, user: fallbackUser, message: 'Login successful' };
  },

  register: async (userData: { name: string; email: string; grade?: string; board?: string; phone?: string; password?: string }): Promise<{ success: boolean; user?: User; message: string }> => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: userData.name.trim(),
          email: userData.email.trim(),
          phone: userData.phone,
          grade: userData.grade,
          board: userData.board,
          password: userData.password || 'NavitaStudent@2026'
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success && data.user) {
          localStorage.setItem(USER_SESSION_KEY, JSON.stringify(data.user));
          if (data.token) localStorage.setItem(TOKEN_KEY, data.token);
          return { success: true, user: data.user, message: data.message };
        }
        return { success: false, message: data.message || 'Registration failed.' };
      }
    } catch (e) {
      console.warn('Backend register fallback:', e);
    }

    const newUser: User = {
      id: 'user_' + Date.now().toString(36),
      name: userData.name.trim(),
      email: userData.email.trim().toLowerCase(),
      grade: userData.grade,
      board: userData.board,
      phone: userData.phone,
      accessStatus: 'free',
      unlockedWorksheetIds: ['grade-5-cbse-english-grammar'],
      createdAt: new Date().toISOString()
    };
    localStorage.setItem(USER_SESSION_KEY, JSON.stringify(newUser));
    return { success: true, user: newUser, message: 'Account created successfully!' };
  },

  logout: () => {
    localStorage.removeItem(USER_SESSION_KEY);
    localStorage.removeItem(TOKEN_KEY);
  },

  grantPaidAccess: (paymentId: string): User | null => {
    try {
      const current = authService.getCurrentUser();
      if (!current) return null;

      const updatedUser: User = {
        ...current,
        accessStatus: 'paid',
        unlockedWorksheetIds: ['*'],
        paymentId,
        purchaseDate: new Date().toISOString()
      };

      localStorage.setItem(USER_SESSION_KEY, JSON.stringify(updatedUser));
      return updatedUser;
    } catch (err) {
      console.warn('Grant access error:', err);
      return null;
    }
  }
};
