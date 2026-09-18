import { User } from '../types';

const USER_SESSION_KEY = 'navita_auth_user';
const USERS_DB_KEY = 'navita_registered_users';

// Pre-populate demo accounts for instant evaluation
const initializeDemoAccounts = () => {
  try {
    const existing = localStorage.getItem(USERS_DB_KEY);
    if (!existing) {
      const demoUsers: User[] = [
        {
          id: 'user_free_1',
          name: 'Demo Free Student',
          email: 'free_user@example.com',
          grade: 'Grade 5',
          board: 'CBSE',
          phone: '9876543210',
          accessStatus: 'free',
          unlockedWorksheetIds: ['grade-5-cbse-english-grammar'],
          createdAt: new Date().toISOString()
        },
        {
          id: 'user_paid_1',
          name: 'Priya Sharma (Paid Member)',
          email: 'paid_user@example.com',
          grade: 'Grade 10',
          board: 'ICSE',
          phone: '9886728711',
          accessStatus: 'paid',
          unlockedWorksheetIds: ['*'], // All unlocked
          purchaseDate: new Date().toISOString(),
          paymentId: 'pay_demo_success_8867',
          createdAt: new Date().toISOString()
        }
      ];
      localStorage.setItem(USERS_DB_KEY, JSON.stringify(demoUsers));
    }
  } catch (err) {
    console.warn('LocalStorage error:', err);
  }
};

initializeDemoAccounts();

export const authService = {
  // Get Current Logged-in User
  getCurrentUser: (): User | null => {
    try {
      const raw = localStorage.getItem(USER_SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  },

  // Login
  login: async (email: string, _password?: string): Promise<{ success: boolean; user?: User; message: string }> => {
    await new Promise(r => setTimeout(r, 600)); // Network simulation

    try {
      const dbRaw = localStorage.getItem(USERS_DB_KEY);
      const db: User[] = dbRaw ? JSON.parse(dbRaw) : [];

      const normalizedEmail = email.trim().toLowerCase();
      let user = db.find(u => u.email.toLowerCase() === normalizedEmail);

      if (!user) {
        // Create user on the fly if not found to provide seamless login
        user = {
          id: 'user_' + Date.now().toString(36),
          name: normalizedEmail.split('@')[0].replace('.', ' '),
          email: normalizedEmail,
          accessStatus: 'free',
          unlockedWorksheetIds: ['grade-5-cbse-english-grammar'],
          createdAt: new Date().toISOString()
        };
        db.push(user);
        localStorage.setItem(USERS_DB_KEY, JSON.stringify(db));
      }

      localStorage.setItem(USER_SESSION_KEY, JSON.stringify(user));
      return { success: true, user, message: 'Login successful' };
    } catch (e) {
      return { success: false, message: 'Authentication error. Please try again.' };
    }
  },

  // Register
  register: async (userData: { name: string; email: string; grade?: string; board?: string; phone?: string }): Promise<{ success: boolean; user?: User; message: string }> => {
    await new Promise(r => setTimeout(r, 700));

    try {
      const dbRaw = localStorage.getItem(USERS_DB_KEY);
      const db: User[] = dbRaw ? JSON.parse(dbRaw) : [];

      const normalizedEmail = userData.email.trim().toLowerCase();
      const existing = db.find(u => u.email.toLowerCase() === normalizedEmail);

      if (existing) {
        return { success: false, message: 'An account with this email already exists. Please log in.' };
      }

      const newUser: User = {
        id: 'user_' + Date.now().toString(36),
        name: userData.name.trim(),
        email: normalizedEmail,
        grade: userData.grade,
        board: userData.board,
        phone: userData.phone,
        accessStatus: 'free',
        unlockedWorksheetIds: ['grade-5-cbse-english-grammar'],
        createdAt: new Date().toISOString()
      };

      db.push(newUser);
      localStorage.setItem(USERS_DB_KEY, JSON.stringify(db));
      localStorage.setItem(USER_SESSION_KEY, JSON.stringify(newUser));

      return { success: true, user: newUser, message: 'Account created successfully!' };
    } catch (e) {
      return { success: false, message: 'Registration failed. Please try again.' };
    }
  },

  // Logout
  logout: () => {
    localStorage.removeItem(USER_SESSION_KEY);
  },

  // Update Access Status upon Payment
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

      // Update in Session
      localStorage.setItem(USER_SESSION_KEY, JSON.stringify(updatedUser));

      // Update in DB
      const dbRaw = localStorage.getItem(USERS_DB_KEY);
      if (dbRaw) {
        const db: User[] = JSON.parse(dbRaw);
        const idx = db.findIndex(u => u.email.toLowerCase() === current.email.toLowerCase());
        if (idx !== -1) {
          db[idx] = updatedUser;
          localStorage.setItem(USERS_DB_KEY, JSON.stringify(db));
        }
      }

      return updatedUser;
    } catch (err) {
      console.warn('Grant access error:', err);
      return null;
    }
  }
};
