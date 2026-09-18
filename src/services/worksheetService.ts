import { worksheetsData } from '../data/worksheets';
import { Worksheet, User } from '../types';
import { authService } from './authService';

export const worksheetService = {
  // Get all worksheets
  getAllWorksheets: (): Worksheet[] => {
    return worksheetsData;
  },

  // Get worksheet by ID
  getWorksheetById: (id: string): Worksheet | undefined => {
    return worksheetsData.find(w => w.id === id);
  },

  // Verify access for current user
  checkAccess: (worksheet: Worksheet, user: User | null): { hasFullAccess: boolean; requiresLogin: boolean; requiresPayment: boolean } => {
    if (worksheet.isFree) {
      return { hasFullAccess: true, requiresLogin: false, requiresPayment: false };
    }

    if (!user) {
      return { hasFullAccess: false, requiresLogin: true, requiresPayment: false };
    }

    if (user.accessStatus === 'paid' || user.unlockedWorksheetIds.includes(worksheet.id) || user.unlockedWorksheetIds.includes('*')) {
      return { hasFullAccess: true, requiresLogin: false, requiresPayment: false };
    }

    return { hasFullAccess: false, requiresLogin: false, requiresPayment: true };
  }
};
