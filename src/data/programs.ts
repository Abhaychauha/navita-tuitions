import { Program } from '../types';

export const programsData: Program[] = [
  {
    id: 'creativia-summer-camp',
    title: 'Creativia — Summer Camp',
    tagline: 'Inspiring Creativity, Curiosity, and Foundational Skills',
    description: 'An engaging, well-structured summer experience combining creative learning, hands-on activities, mathematical logic games, and skill development in an encouraging environment.',
    targetAudience: 'Students from Grade 1 to Grade 7',
    activities: [
      'Creative learning and problem-solving puzzles',
      'Math & logic fun activities to keep minds sharp',
      'English vocabulary building, storytelling & communication',
      'Artistic and structured hands-on projects',
      'Learning through collaborative group activities'
    ],
    scheduleNote: 'Conducted during school summer vacations. Contact us for upcoming batch dates and registration details.',
    badge: 'Summer Special',
    path: '/programs/summer'
  },
  {
    id: 'summer-tutoring-program',
    title: 'Summer Academic Tutoring Program',
    tagline: 'Bridge Academic Gaps & Prepare for the Upcoming Grade',
    description: 'A focused academic bridge program designed to strengthen previous year fundamentals, eliminate learning gaps in mathematics and science, and provide an early head-start for the upcoming school year.',
    targetAudience: 'Students from Grade 4 to Grade 10',
    activities: [
      'Diagnostic review of previous year\'s core topics',
      'Intensive mathematics fundamentals and problem practice',
      'Introduction to upcoming grade syllabus concepts',
      'Developing structured study habits and notebook discipline',
      'Individual doubt clarification and confidence building'
    ],
    scheduleNote: 'Flexible modular batches throughout the summer break. Offline and online options available.',
    badge: 'Academic Bridge',
    path: '/programs/summer'
  }
];
