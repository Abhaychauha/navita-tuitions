import { Course } from '../types';

export const coursesData: Course[] = [
  {
    id: 'primary-school',
    title: 'Primary School Tuition (Grade 1–5)',
    category: 'primary',
    gradeRange: 'Grade 1 to Grade 5',
    boards: ['ICSE', 'CBSE', 'Karnataka State Board'],
    description: 'Build strong fundamentals in mathematics, English, and core school subjects through patient, concept-first teaching.',
    fullOverview: 'The primary school years form the bedrock of academic curiosity and foundational fluency. At Navita Tuitions, we nurture young minds with structured guidance, playful yet disciplined problem-solving, and continuous reinforcement so children gain confidence early on.',
    keyHighlights: [
      'Number sense, mental math & foundational arithmetic',
      'Reading comprehension, grammar & vocabulary building',
      'Basic science and environmental studies concepts',
      'Daily homework assistance and disciplined study routines',
      'Gentle, encouraging environment that reduces math anxiety'
    ],
    subjectsCovered: ['Mathematics', 'English Language & Grammar', 'Science / EVS', 'Social Studies'],
    learningOutcomes: [
      'Solid command over arithmetic operations and times tables',
      'Clear sentence formation and expressive writing',
      'Independent homework completion habits',
      'Enthusiastic attitude towards classroom learning'
    ],
    tuitionModes: ['offline', 'online'],
    badge: 'Foundational',
    path: '/grades/primary'
  },
  {
    id: 'middle-school',
    title: 'Middle School Tuition (Grade 6–8)',
    category: 'middle',
    gradeRange: 'Grade 6 to Grade 8',
    boards: ['ICSE', 'CBSE', 'Karnataka State Board', 'NIOS'],
    description: 'Strengthen concepts, improve analytical problem-solving, and develop consistent study habits as subjects become more rigorous.',
    fullOverview: 'Middle school marks the transition from basic knowledge to abstract reasoning in Algebra, Geometry, Physics, Chemistry, and Biology. Our curriculum-aligned classes ensure students master intermediate theorems, formulas, and critical thinking techniques.',
    keyHighlights: [
      'Algebraic foundations, linear equations & geometry theorems',
      'Scientific method, conceptual clarity in Physics & Chemistry',
      'Systematic chapter-by-chapter worksheets and revision notes',
      'Regular test series aligned with school term assessments',
      'Targeted doubt-clearing sessions before unit tests'
    ],
    subjectsCovered: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English'],
    learningOutcomes: [
      'Mastery of pre-algebra and geometric logic',
      'Conceptual understanding over rote memorisation',
      'Structured note-taking and revision discipline',
      'Consistently higher test scores and academic confidence'
    ],
    tuitionModes: ['offline', 'online'],
    badge: 'Concept Building',
    path: '/grades/middle'
  },
  {
    id: 'secondary-school',
    title: 'Grade 9–10 Board Preparation',
    category: 'secondary',
    gradeRange: 'Grade 9 & Grade 10',
    boards: ['ICSE', 'CBSE', 'Karnataka State Board', 'NIOS'],
    description: 'Focused academic support, rigorous practice, and systematic board examination preparation for Class 10 success.',
    fullOverview: 'Grades 9 and 10 demand precise syllabus alignment, deep conceptual mastery, and rigorous answer-writing practice. We guide students through past board questions, model papers, time management strategies, and intensive doubt clarification.',
    keyHighlights: [
      'Complete chapter breakdown with previous years board questions (PYQs)',
      'Step-by-step mathematical problem solving and formula sheets',
      'Timed mock examinations simulating actual board conditions',
      'Personalised weakness diagnostics and remediation plans',
      'Comprehensive coverage for ICSE, CBSE, SSLC, and NIOS exams'
    ],
    subjectsCovered: ['Mathematics', 'Science (Physics, Chemistry, Biology)', 'Computer Applications (ICSE)', 'Social Sciences'],
    learningOutcomes: [
      'High accuracy and speed in mathematical calculations',
      'Standardized board-standard answer presentation',
      'Elimination of exam fear through repeated timed mock tests',
      'Strong readiness for high school stream selection'
    ],
    tuitionModes: ['offline', 'online'],
    badge: 'Board Intensive',
    path: '/grades/secondary'
  },
  {
    id: 'mathematics-special',
    title: 'Mathematics Coaching (Grades 1–10)',
    category: 'specialized',
    gradeRange: 'Grade 1 to Grade 10',
    boards: ['ICSE', 'CBSE', 'Karnataka State Board', 'NIOS'],
    description: 'Make mathematics easier to understand through step-by-step concept building, daily practice, and formula mastery.',
    fullOverview: 'Mathematics is at the heart of academic success. Our specialized math program breaks down intimidating theorems and algebraic equations into intuitive, easy-to-follow steps. Students practice daily and build the analytical intuition needed for lifetime quantitative mastery.',
    keyHighlights: [
      'Core concept building without shortcuts or rote memorisation',
      'Daily math practice worksheets with graduated difficulty levels',
      'Formula sheets, visual geometry proofs, and quick verification tips',
      'Individual doubt clearing for school textbook problems',
      'Special focus on word problems and application-based questions'
    ],
    subjectsCovered: ['Arithmetic', 'Algebra', 'Geometry & Mensuration', 'Trigonometry', 'Coordinate Geometry', 'Statistics & Probability'],
    learningOutcomes: [
      'Total clarity on mathematical logic and problem structures',
      'Sharp reduction in calculation and careless errors',
      'Increased speed and confidence during school math exams',
      'Strong foundation for STEM careers'
    ],
    tuitionModes: ['offline', 'online'],
    badge: 'Core Specialty',
    path: '/courses/mathematics'
  },
  {
    id: 'icse-computer-applications',
    title: 'ICSE Grade 10 Computer Applications (BlueJ)',
    category: 'specialized',
    gradeRange: 'Grade 9 & 10 (ICSE)',
    boards: ['ICSE'],
    description: 'Master Java programming fundamentals, Object-Oriented concepts, and BlueJ practical coding for ICSE Board examinations.',
    fullOverview: 'The ICSE Computer Applications curriculum requires both theoretical understanding of OOP principles and flawless practical Java coding in BlueJ. Our course provides hands-on code walkthroughs, dry runs, loop tracing, and extensive board paper practice.',
    keyHighlights: [
      'OOP Principles: Classes, Objects, Encapsulation, Polymorphism & Inheritance',
      'BlueJ IDE setup, compilation, debugging, and execution techniques',
      'String handling, arrays (1D/2D), sorting, and searching algorithms',
      'Predicting output / dry-run questions and syntax error debugging',
      'ICSE past 10 years question papers and board practical file assistance'
    ],
    subjectsCovered: ['Java Fundamentals', 'Control Structures', 'Methods & Constructors', 'Arrays & Strings', 'OOP Principles'],
    learningOutcomes: [
      'Ability to write clean, bug-free Java programs on BlueJ',
      'Full mastery of Section A (Theory) and Section B (Programming)',
      'High scoring proficiency in the ICSE 100-mark theory & practical exam'
    ],
    tuitionModes: ['offline', 'online'],
    badge: 'ICSE High Scorer',
    path: '/courses/computer-applications'
  },
  {
    id: 'grade-11-mathematics',
    title: 'Grade 11 Mathematics Coaching',
    category: 'senior',
    gradeRange: 'Grade 11',
    boards: ['CBSE', 'ISC', 'Karnataka State Board'],
    description: 'Bridge the jump from Class 10 to higher secondary mathematics with deep conceptual clarity in Sets, Relations, Functions, and Calculus fundamentals.',
    fullOverview: 'Grade 11 Mathematics is significantly more rigorous than Class 10. Our specialized coaching bridges the conceptual gap, helping students develop the mathematical maturity required for senior secondary boards and competitive readiness.',
    keyHighlights: [
      'Thorough coverage of Sets, Relations, Functions & Trigonometry',
      'Introduction to Limits, Derivatives & Coordinate Geometry',
      'Algebraic topics: Complex Numbers, Permutations & Combinations, Binomial Theorem',
      'Rigorous problem sets covering NCERT and reference publications',
      'Regular unit tests with detailed step-wise feedback'
    ],
    subjectsCovered: ['Sets & Functions', 'Algebra', 'Coordinate Geometry', 'Calculus Fundamentals', 'Mathematical Reasoning', 'Statistics & Probability'],
    learningOutcomes: [
      'Seamless transition from Grade 10 to high school mathematics',
      'Analytical rigor required for Class 12 board preparations',
      'Confidence in solving complex multi-step problems'
    ],
    tuitionModes: ['offline', 'online'],
    badge: 'Senior Secondary',
    path: '/courses/grade-11-math'
  }
];
