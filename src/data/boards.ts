import { BoardInfo } from '../types';

export const boardsData: BoardInfo[] = [
  {
    id: 'icse',
    name: 'ICSE Board Tuition',
    slug: 'icse',
    shortDescription: 'In-depth subject coverage aligned with the rigorous CISCE syllabus, with special emphasis on English, Mathematics, and BlueJ Java Computer Applications.',
    overview: 'The ICSE (Indian Certificate of Secondary Education) curriculum is renowned for its comprehensive syllabus, detailed conceptual requirements, and balanced evaluation. At Navita Tuitions, we provide tailored guidance that matches the depth and analytical rigor of ICSE textbooks and board examination patterns.',
    gradesOffered: 'Grade 1 to Grade 10',
    keyPillars: [
      {
        title: 'Rigorous Text Alignment',
        description: 'Detailed study of prescribed CISCE textbooks with structured chapter notes and comprehensive question banks.'
      },
      {
        title: 'Analytical Mathematics',
        description: 'Thorough coverage of Commercial Mathematics, Algebra, Geometry, Mensuration, and Trigonometry with step-by-step proofs.'
      },
      {
        title: 'Computer Applications with BlueJ',
        description: 'Dedicated coding practice in Java, object-oriented concepts, String manipulation, and array algorithms.'
      },
      {
        title: 'Board Exam Strategy',
        description: 'Extensive solving of ICSE 10-year specimen and past question papers with official marking scheme criteria.'
      }
    ],
    curriculumHighlights: [
      'Precise answer writing conforming to ICSE evaluation standards',
      'Equal emphasis on numericals, definitions, and application problems',
      'Regular chapter tests and comprehensive prelims before board exams'
    ],
    subjectsOffered: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Applications (Java)', 'English Language & Literature'],
    assessmentStrategy: 'Weekly topic assessments, monthly unit tests, and full-length timed preliminary examinations.',
    path: '/boards/icse'
  },
  {
    id: 'cbse',
    name: 'CBSE Board Tuition',
    slug: 'cbse',
    shortDescription: 'Conceptual learning structured around the NCERT framework, fostering analytical thinking and board examination excellence.',
    overview: 'The CBSE (Central Board of Secondary Education) curriculum places strong focus on conceptual clarity, NCERT mastery, and competency-based questions. Our tuition programs ensure students thoroughly understand every concept, solve NCERT Exemplar problems, and excel in school and board exams.',
    gradesOffered: 'Grade 1 to Grade 10, plus Grade 11 Mathematics',
    keyPillars: [
      {
        title: 'NCERT & Exemplar Mastery',
        description: 'Complete line-by-line concept explanations paired with exhaustive practice of NCERT in-text, exercise, and Exemplar questions.'
      },
      {
        title: 'Competency-Based Problem Solving',
        description: 'Training in case-study questions, assertion-reasoning problems, and real-world application scenarios.'
      },
      {
        title: 'Systematic Revision Schedules',
        description: 'Planned cyclic revision to ensure long-term retention of scientific principles and mathematical formulas.'
      },
      {
        title: 'Mock Board Tests',
        description: 'Strict adherence to latest CBSE sample question paper blueprints and step-wise marking rubrics.'
      }
    ],
    curriculumHighlights: [
      'Comprehensive understanding of core concepts in Science and Mathematics',
      'Special focus on Case Study and Objective Type questions',
      'Structured doubt-clearing sessions to ensure no concept remains fuzzy'
    ],
    subjectsOffered: ['Mathematics', 'Science (Physics, Chemistry, Biology)', 'Social Science', 'English', 'Grade 11 Mathematics'],
    assessmentStrategy: 'Chapter-wise test series, periodic revision evaluations, and full-syllabus mock board exams.',
    path: '/boards/cbse'
  },
  {
    id: 'state-board',
    name: 'Karnataka State Board Tuition',
    slug: 'state-board',
    shortDescription: 'Dedicated coaching aligned with the Karnataka State syllabus and SSLC board examination pattern for local students.',
    overview: 'The Karnataka Secondary Education Examination Board (KSEEB / KSEAB) requires strong textbook mastery and clear understanding of the state blueprint. We support students with thorough Kannada/English medium syllabus coverage, model papers, and SSLC exam preparation.',
    gradesOffered: 'Grade 1 to Grade 10 (SSLC)',
    keyPillars: [
      {
        title: 'State Textbook & Blueprint Coverage',
        description: 'In-depth explanation of all textbook lessons, theorems, and numerical exercises according to the Karnataka syllabus.'
      },
      {
        title: 'SSLC Board Exam Readiness',
        description: 'Focused practice on 1-mark, 2-mark, 3-mark, 4-mark, and 5-mark question structures with blueprint breakdown.'
      },
      {
        title: 'Language & Core Subject Support',
        description: 'Help with Mathematics, Science, and Social Studies to ensure balanced high-percentage scores.'
      },
      {
        title: 'Passing & Scoring Packages',
        description: 'Special targeted practice on sure-shot theorems, graphical solutions, constructions, and key diagrams.'
      }
    ],
    curriculumHighlights: [
      'Complete preparation for preparatory and annual SSLC examinations',
      'Previous years question paper discussions with scoring keys',
      'Individual attention for students requiring foundation strengthening'
    ],
    subjectsOffered: ['Mathematics', 'Science (Physics, Chemistry, Biology)', 'Social Science', 'English'],
    assessmentStrategy: 'Blueprint-based periodic tests, preparatory test series, and personalized score improvement guidance.',
    path: '/boards/state-board'
  },
  {
    id: 'nios',
    name: 'NIOS Board Tuition',
    slug: 'nios',
    shortDescription: 'Flexible, structured academic coaching for National Institute of Open Schooling (NIOS) secondary students.',
    overview: 'The NIOS (National Institute of Open Schooling) board provides flexible learning opportunities for independent learners. Navita Tuitions offers structured study roadmaps, Tutor Marked Assignment (TMA) guidance, and focused preparation for public and on-demand examinations.',
    gradesOffered: 'Secondary (Class 10) & Foundation',
    keyPillars: [
      {
        title: 'Flexible & Self-Paced Learning',
        description: 'Personalized study schedules designed to match each student’s pace and target examination block.'
      },
      {
        title: 'Tutor Marked Assignment (TMA) Support',
        description: 'Academic guidance on understanding assignment questions and structuring thorough, well-researched submissions.'
      },
      {
        title: 'NIOS Study Material Breakdown',
        description: 'Simplification of official NIOS modules, study guides, and terminal exercise questions.'
      },
      {
        title: 'Public & On-Demand Exam Prep',
        description: 'Targeted revision batches designed for April/May, October/November, and On-Demand exams.'
      }
    ],
    curriculumHighlights: [
      'Support for students transitioning from regular school boards to NIOS',
      'Individual doubt clarification and patient one-on-one concept explanations',
      'Step-by-step guidance on practical examinations and lab records'
    ],
    subjectsOffered: ['Mathematics', 'Science and Technology', 'Social Science', 'English', 'Data Entry / Computer Basics'],
    assessmentStrategy: 'Module assessments, TMA review checks, and mock examinations matching the NIOS paper pattern.',
    path: '/boards/nios'
  }
];
