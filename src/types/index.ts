export type TuitionMode = 'offline' | 'online';

export type BoardType = 'ICSE' | 'CBSE' | 'Karnataka State Board' | 'NIOS' | 'All Boards';

export interface Course {
  id: string;
  title: string;
  category: 'primary' | 'middle' | 'secondary' | 'senior' | 'specialized';
  gradeRange: string;
  boards: string[];
  description: string;
  fullOverview: string;
  keyHighlights: string[];
  subjectsCovered: string[];
  learningOutcomes: string[];
  tuitionModes: TuitionMode[];
  badge?: string;
  path: string;
}

export interface BoardInfo {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  overview: string;
  gradesOffered: string;
  keyPillars: {
    title: string;
    description: string;
  }[];
  curriculumHighlights: string[];
  subjectsOffered: string[];
  assessmentStrategy: string;
  path: string;
}

export interface Review {
  id: string;
  author: string;
  reviewText: string;
  location?: string;
  source: 'Google Review' | 'Parent Feedback';
  rating: number;
  highlightTag?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'tuition' | 'worksheets' | 'payments' | 'accounts' | 'access' | 'contact';
}

export interface Program {
  id: string;
  title: string;
  tagline: string;
  description: string;
  targetAudience: string;
  activities: string[];
  scheduleNote: string;
  badge?: string;
  path: string;
}

export interface LeadEnquiry {
  id?: string;
  name: string;
  studentGrade: string;
  board: string;
  subjects: string;
  mode: 'Offline Tuition' | 'Online Tuition' | 'Not Decided';
  phone: string;
  email?: string;
  message?: string;
  timestamp?: string;
  status?: 'new' | 'contacted' | 'resolved';
}

export interface WorksheetPageContent {
  pageNumber: number;
  sections: {
    sectionNumber: string;
    title: string;
    instructions?: string;
    questions: {
      number: string;
      text: string;
      subtext?: string;
      prompt?: string;
    }[];
  }[];
}

export interface Worksheet {
  id: string;
  title: string;
  grade: number | string;
  board: string;
  subject: string;
  topic: string;
  difficulty: 'Foundational' | 'Intermediate' | 'Comprehensive Practice' | 'Exam Intensive';
  description: string;
  isFree: boolean;
  pages: number;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
  badge?: string;
  tags: string[];
  pagesContent?: WorksheetPageContent[];
  downloadUrl?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  grade?: string;
  board?: string;
  phone?: string;
  accessStatus: 'free' | 'paid';
  unlockedWorksheetIds: string[];
  purchaseDate?: string;
  paymentId?: string;
  createdAt: string;
}

export interface PaymentRecord {
  paymentId: string;
  userId: string;
  userEmail: string;
  amount: number;
  currency: string;
  status: 'captured' | 'failed';
  purchaseDate: string;
  planName: string;
}

export interface WorksheetFilterState {
  search: string;
  grade: string;
  board: string;
  subject: string;
  difficulty: string;
  access: 'all' | 'free' | 'premium';
  sortBy: 'recommended' | 'newest' | 'popular';
}
