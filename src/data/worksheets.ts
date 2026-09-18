import { Worksheet } from '../types';

export const worksheetsData: Worksheet[] = [
  // 1. Grade 5 CBSE English Grammar (4 pages)
  {
    id: 'grade-5-cbse-english-grammar',
    title: 'English Grammar Worksheet',
    grade: 5,
    board: 'CBSE',
    subject: 'English Grammar',
    topic: 'Sentence Structure, Pronouns, Helping Verbs & Tenses',
    difficulty: 'Comprehensive Practice',
    description: 'Comprehensive English grammar practice covering subjects and predicates, sentence completion, punctuation, apostrophes, personal and possessive pronouns, helping verbs, and verb tenses.',
    isFree: true,
    pages: 4,
    isPublished: true,
    createdAt: '2026-01-15',
    updatedAt: '2026-01-15',
    badge: 'FREE SAMPLE',
    tags: ['Grammar', 'Grade 5', 'CBSE', 'Subject-Predicate', 'Pronouns', 'Tenses', 'Helping Verbs', 'Punctuation'],
    pagesContent: [
      {
        pageNumber: 1,
        sections: [
          {
            sectionNumber: '1',
            title: 'Circle the subject and underline the complete predicate in each sentence:',
            questions: [
              { number: '1', text: 'The swift river flowed through the narrow valley.' },
              { number: '2', text: 'My grandfather planted a mango tree in the backyard.' },
              { number: '3', text: 'Down the street marched the school band.' },
              { number: '4', text: 'All the students in Grade 5 completed their science projects.' },
              { number: '5', text: 'Has your mother baked the chocolate cookies?' }
            ]
          },
          {
            sectionNumber: '2',
            title: 'Complete the sentences by adding a suitable subject or predicate:',
            questions: [
              { number: '1', text: '__________________________________________________ won the inter-school debate competition.' },
              { number: '2', text: 'The ancient wooden clock __________________________________________________.' }
            ]
          },
          {
            sectionNumber: '3',
            title: 'Rewrite the sentences using correct punctuation and capital letters:',
            questions: [
              { number: '1', text: 'wow what a breathtaking view of the mountains exclaimed rohit', prompt: 'Answer line:' },
              { number: '2', text: 'did aunt priya bring apples oranges and bananas from shimla', prompt: 'Answer line:' }
            ]
          },
          {
            sectionNumber: '4',
            title: 'Insert apostrophes correctly to show possession or contraction:',
            questions: [
              { number: '1', text: 'The birds feathers were bright and colourful.', subtext: '(singular possession)' }
            ]
          }
        ]
      },
      {
        pageNumber: 2,
        sections: [
          {
            sectionNumber: '4 (Cont.)',
            title: 'Insert apostrophes correctly (Continued):',
            questions: [
              { number: '2', text: 'The childrens toys are scattered all over the living room.', subtext: '(plural possession)' },
              { number: '3', text: 'Lets go to the park because theyve already arrived.', subtext: '(contractions)' },
              { number: '4', text: 'My parents anniversary falls on the 14th of November.', subtext: '(plural possession)' }
            ]
          },
          {
            sectionNumber: '5',
            title: 'Identify the underlined pronoun as Personal Pronoun or Possessive Pronoun:',
            questions: [
              { number: '1', text: 'That blue water bottle on the desk is mine. — ________________________________' },
              { number: '2', text: 'The teacher asked them to line up in the hallway. — ________________________________' },
              { number: '3', text: 'She completed the assignment before dinner. — ________________________________' },
              { number: '4', text: 'We showed our tickets, and they showed theirs. — ________________________________' }
            ]
          },
          {
            sectionNumber: '6',
            title: 'Fill in the blanks with the correct pronoun from the brackets:',
            questions: [
              { number: '1', text: 'Rahul and ____________________ (I / me) will present the morning assembly.' },
              { number: '2', text: 'Is this umbrella ____________________ (your / yours), or is it Meera’s?' },
              { number: '3', text: 'The principal called Rohan and praised ____________________ (he / him) for honesty.' }
            ]
          },
          {
            sectionNumber: '7',
            title: 'Underline the helping (auxiliary) verb and circle the main verb:',
            questions: [
              { number: '1', text: 'The birds are migrating to warmer regions for the winter.' },
              { number: '2', text: 'Dr. Sen has treated fifty patients today.' },
              { number: '3', text: 'The children were swimming across the wide pool.' },
              { number: '4', text: 'The train will arrive at platform number four shortly.' },
              { number: '5', text: 'They did finish their homework before bedtime.' }
            ]
          }
        ]
      },
      {
        pageNumber: 3,
        sections: [
          {
            sectionNumber: '8',
            title: 'Fill in the blanks with suitable helping verbs (is, are, was, were, has, have, had):',
            questions: [
              { number: '1', text: 'The painter ____________________ mixing the colours when the lights went out.' },
              { number: '2', text: 'We ____________________ already visited the National Museum twice.' }
            ]
          },
          {
            sectionNumber: '9',
            title: 'Identify the tense of the verb in each sentence:',
            instructions: '(Simple Present, Simple Past, Simple Future, Present Continuous, Past Continuous, Present Perfect, Past Perfect)',
            questions: [
              { number: '1', text: 'Neha reads historical fiction before going to sleep. — ________________________________' },
              { number: '2', text: 'The chef was preparing soup when the guests arrived. — ________________________________' },
              { number: '3', text: 'Farmers will harvest the wheat crop next month. — ________________________________' },
              { number: '4', text: 'The gardener has watered all the flowering plants. — ________________________________' },
              { number: '5', text: 'By the time we reached the station, the train had left. — ________________________________' },
              { number: '6', text: 'The students are practicing hard for sports day. — ________________________________' },
              { number: '7', text: 'Ananya wrote a letter to her pen friend in Japan. — ________________________________' }
            ]
          },
          {
            sectionNumber: '10',
            title: 'Fill in the blanks as directed in the brackets:',
            questions: [
              { number: '1', text: 'The sun ____________________ brightly in the summer afternoon.', subtext: '(Simple Present of shine)' }
            ]
          }
        ]
      },
      {
        pageNumber: 4,
        sections: [
          {
            sectionNumber: '10 (Cont.)',
            title: 'Fill in the blanks as directed in the brackets (Continued):',
            questions: [
              { number: '2', text: 'We ____________________ cricket in the park yesterday evening.', subtext: '(Past Continuous of play)' },
              { number: '3', text: 'The mechanic ____________________ my bicycle just now.', subtext: '(Present Perfect of repair)' },
              { number: '4', text: 'They ____________________ for the airport tomorrow morning.', subtext: '(Simple Future of leave)' },
              { number: '5', text: 'The baby ____________________ before the doctor arrived.', subtext: '(Past Perfect of fall asleep)' },
              { number: '6', text: 'Look! The peacock ____________________ gracefully in the garden.', subtext: '(Present Continuous of dance)' }
            ]
          }
        ]
      }
    ]
  },

  // 2. Grade 10 Karnataka State Board Science (3 pages)
  {
    id: 'class-10-karnataka-science-question-paper',
    title: 'Science Examination Question Paper (83-E)',
    grade: 10,
    board: 'Karnataka State Board',
    subject: 'Science',
    topic: 'Combined Section: Chemistry & Biology',
    difficulty: 'Exam Intensive',
    description: 'Karnataka SSLC Class 10 Science question paper covering Chemical Reactions, Periodic Classification, Acids-Bases, Carbon Compounds, Metallurgy, Reflex Actions, Plant Hormones, Genetics, and Digestion.',
    isFree: true,
    pages: 3,
    isPublished: true,
    createdAt: '2026-03-01',
    updatedAt: '2026-03-01',
    badge: 'BOARD EXAM',
    tags: ['Science', 'Grade 10', 'Karnataka SSLC', 'State Board', 'Chemistry', 'Biology', 'Board Exam', 'Question Paper'],
    pagesContent: [
      {
        pageNumber: 1,
        sections: [
          {
            sectionNumber: 'PART - B',
            title: 'CHEMISTRY',
            instructions: 'VII. Four alternatives are given for each of the following questions / incomplete statements. Choose the correct alternative and write the complete answer along with its letter of alphabet. (2 × 1 = 2)',
            questions: [
              { 
                number: '14', 
                text: 'The reactants that exchange ions by reacting with each other and form a precipitate among the following are:',
                subtext: '(A) BaCl₂ and Na₂SO₄   (B) Al₂O₃ and HCl   (C) NaOH and H₂SO₄   (D) Na₂O and CO₂'
              },
              { 
                number: '15', 
                text: 'Among ₂X⁴, ₈Y¹⁶, ₁₀Z²⁰ the elements having zero valency are: [2, 8, 10 are atomic numbers of elements]',
                subtext: '(A) ₂X⁴ and ₈Y¹⁶   (B) ₈Y¹⁶ and ₁₀Z²⁰   (C) ₂X⁴ and ₁₀Z²⁰   (D) ₂X⁴, ₈Y¹⁶ and ₁₀Z²⁰'
              }
            ]
          },
          {
            sectionNumber: 'VIII',
            title: 'Answer the following questions: (4 × 1 = 4)',
            questions: [
              { number: '16', text: 'The general formula of cycloalkanes is CₙH₂ₙ and its first member is cyclopropane (C₃H₆). Write the molecular formula and structural arrangement of the fourth member of this homologous series.' },
              { number: '17', text: 'Packets of chips are flushed with nitrogen gas. Why?' },
              { number: '18', text: 'An iron nail is dropped into a test tube having copper sulphate solution. The iron nail gradually turns to brownish colour. Why?' },
              { number: '19', text: 'What is hydrogenation?' }
            ]
          },
          {
            sectionNumber: 'IX',
            title: 'Answer the following questions: (3 × 2 = 6)',
            questions: [
              { number: '20', text: 'Draw the diagram of arrangement of apparatus to show that acid solution in water conducts electricity and label dilute HCl solution.' },
              { number: '21', text: '"Calcium oxide and carbon dioxide are produced on heating calcium carbonate." Write the balanced chemical equation for this reaction. Mention the type of this chemical reaction.' },
              { number: '22', text: 'Draw the diagram of arrangement of apparatus to show the action of steam on a metal.' }
            ]
          },
          {
            sectionNumber: 'X',
            title: 'Answer the following questions: (3 × 3 = 9)',
            questions: [
              { number: '23', text: 'a) Depict the formation of magnesium chloride with the help of electron dot structure.\nb) Hydrogen gas is not liberated when a metal like zinc reacts with nitric acid. Why?\nOR\nHow are metals in the middle of the reactivity series extracted from their ores? Explain.' }
            ]
          }
        ]
      },
      {
        pageNumber: 2,
        sections: [
          {
            sectionNumber: 'X (Cont.)',
            title: 'Chemistry Questions (Continued):',
            questions: [
              { 
                number: '24', 
                text: 'a) Observe the given part of the modern periodic table and answer the following questions:\nPeriods ↓ / Groups → | 1 | 2 | 13 | 17\n2 | | Be | |\n3 | Na | Mg | Al | Cl\n4 | | Ca | |\ni) Which element is more electropositive? Why?\nii) Atoms of which element have minimum atomic radius? Why?\nb) Mention the period and group number of the element that has atomic number 19.' 
              },
              { 
                number: '25', 
                text: 'Name the salts used in the following situations and write their molecular formula:\na) To remove permanent hardness of water.\nb) To make drinking water free from germs.\nc) To support fractured bones in their right position.\nOR\na) The pH values of four solutions are given: Solution e (pH 5), f (pH 13), g (pH 9), h (pH 2). Classify these into acidic and basic solutions.\nb) Name the antacid used to neutralise excess of acid in the stomach.' 
              }
            ]
          },
          {
            sectionNumber: 'XI',
            title: 'Answer the following question: (1 × 4 = 4)',
            questions: [
              { number: '26', text: 'a) How will ethanol be oxidised?\nb) Explain the cleaning action of soaps.' }
            ]
          },
          {
            sectionNumber: 'PART - C',
            title: 'BIOLOGY',
            instructions: 'XII. Four alternatives are given for each of the following questions / incomplete statements. Choose the correct alternative and write the complete answer along with its letter of alphabet. (2 × 1 = 2)',
            questions: [
              { 
                number: '27', 
                text: '"A person immediately starts running soon after observing a snake." The correct transmission path of reflex impulse in this situation is:',
                subtext: '(A) Receptor → Sensory neuron → Brain → Relay neuron → Motor neuron → Effector\n(B) Receptor → Sensory neuron → Spinal cord → Relay neuron → Motor neuron → Effector\n(C) Effector → Spinal cord → Sensory neuron → Relay neuron → Motor neuron → Receptor\n(D) Effector → Motor neuron → Relay neuron → Brain → Sensory neuron → Receptor'
              }
            ]
          }
        ]
      },
      {
        pageNumber: 3,
        sections: [
          {
            sectionNumber: 'XII (Cont.)',
            title: 'Biology Multiple Choice & Short Questions:',
            questions: [
              { 
                number: '28', 
                text: 'In humans, the testes are located outside the lower abdomen in the scrotum because:',
                subtext: '(A) to protect testes from mechanical shocks  (B) to increase the production of sperms\n(C) to maintain the secretion of testosterone hormone  (D) to maintain the temperature required for sperm production.'
              }
            ]
          },
          {
            sectionNumber: 'XIII',
            title: 'Answer the following questions: (2 × 1 = 2)',
            questions: [
              { number: '29', text: 'What is the role of abscisic acid in plants?' },
              { number: '30', text: 'Write two examples for the organisms that reproduce by binary fission.' }
            ]
          },
          {
            sectionNumber: 'XIV',
            title: 'Answer the following questions: (3 × 2 = 6)',
            questions: [
              { number: '31', text: 'Mention the tools used for tracing the evolutionary relationships between the organisms.' },
              { number: '32', text: 'Observe the figures of stomata (Fig. (i) showing open stomatal pore, Fig. (ii) showing closed stomatal pore, with part X indicating guard cells and part Y indicating the stomatal pore):\na) Which figure indicates the massive amount of exchange of gases? Why?\nb) Name the parts X and Y. What is the function of the part X?' },
              { number: '33', text: 'Give an example for a food chain of grassland ecosystem. If there is an increase in the number of organisms in the second trophic level, how does this affect on that food chain?' }
            ]
          },
          {
            sectionNumber: 'XV & XVI',
            title: 'Long Answer Questions (3 × 3 = 9 & 2 × 4 = 8)',
            questions: [
              { number: '34', text: 'What is pollination? What are the changes that occur in the flower after pollination?' },
              { number: '35', text: 'Coal and petroleum products should be used judiciously. Why?' },
              { number: '36', text: 'Tall pea plant producing red flowers (TTRR) is crossed with short pea plant producing white flowers (ttrr):\ni) Mention the type of plants produced from these plants in the F₁ generation.\nii) Write the ratio of plants obtained in the F₂ generation by crossing the plants of F₁ generation and name the varieties of plants obtained.\nOR\nAnalyse the situations: Situation 1: Green grasshoppers increasing in a green zone. Situation 2: Brown grasshoppers reducing in the same green zone.\na) Where could genetic drift have happened more? Why?\nb) How can natural selection be considered as an important factor in organic evolution?' },
              { number: '37', text: 'Draw the diagram showing the structure of human brain. Label the following parts: i) Hypothalamus  ii) Pons.' },
              { number: '38', text: 'Explain the digestion of food materials in stomach and small intestine.\nOR\nExplain the role of xylem and phloem tissues in the transportation of materials in plants.' }
            ]
          }
        ]
      }
    ]
  },

  // 3. Grade 7 ICSE Mathematics Practice Test (2 pages)
  {
    id: 'icse-class-7-math-fractions-decimals',
    title: 'Mathematics Practice Test — Fractions & Decimals',
    grade: 7,
    board: 'ICSE',
    subject: 'Mathematics',
    topic: 'Fractions and Decimal Fractions (RS Aggarwal Ex 3A–4C)',
    difficulty: 'Comprehensive Practice',
    description: 'Class 7 ICSE Mathematics practice test covering improper fractions, ascending order, single mixed fraction simplification, BODMAS evaluation, merchant potato word problem, vulgar fraction conversion, and decimal arithmetic.',
    isFree: true,
    pages: 2,
    isPublished: true,
    createdAt: '2026-03-02',
    updatedAt: '2026-03-02',
    badge: 'FREE SAMPLE',
    tags: ['Mathematics', 'Grade 7', 'ICSE', 'Fractions', 'Decimals', 'BODMAS', 'RS Aggarwal'],
    pagesContent: [
      {
        pageNumber: 1,
        sections: [
          {
            sectionNumber: 'SECTION A',
            title: 'FRACTIONS (15 MARKS)',
            instructions: 'Time Allowed: 50 Minutes • Maximum Marks: 25. All questions are compulsory. Show necessary working clearly.',
            questions: [
              { number: 'Q1', text: 'Express each of the following improper fractions as a mixed fraction: (a) 18/5   (b) 25/6   (c) 38/5', subtext: '[3 Marks • Ex 3A]' },
              { number: 'Q2', text: 'Arrange the following fractions in ascending order by making their denominators equal: 1/3, 2/5, 3/4, 1/6', subtext: '[3 Marks • Ex 3B]' },
              { number: 'Q3', text: 'Simplify and express the final result as a single mixed fraction: 2 ½ + 2 ⅓ − 1 ¼', subtext: '[2 Marks • Ex 3C]' },
              { number: 'Q4', text: 'Evaluate using BODMAS rules: 2 ¾ − [ 3 ⅛ ÷ { 5 − ( 4 ⅔ − 11/12 ) } ]', subtext: '[3 Marks • Ex 3D]' },
              { number: 'Q5', text: 'From a sack of potatoes weighing 120 kg, a merchant sells four portions weighing 6 kg, 5 ¼ kg, 9 ½ kg, and 9 ¾ kg respectively.\n(a) How many kilograms of potatoes did the merchant sell in total?\n(b) How many kilograms of potatoes are still left in the sack?', subtext: '[4 Marks • Ex 3E]' }
            ]
          },
          {
            sectionNumber: 'SECTION B',
            title: 'DECIMAL FRACTIONS (10 MARKS)',
            questions: [
              { number: 'Q6', text: 'Convert each of the following decimal numbers into a vulgar fraction in its lowest terms: (a) 3.75   (b) 2.04   (c) 0.085', subtext: '[3 Marks • Ex 4A]' },
              { number: 'Q7', text: 'Simplify the following expression: 32.8 − 13 − 10.725 + 3.517', subtext: '[3 Marks • Ex 4B]' }
            ]
          }
        ]
      },
      {
        pageNumber: 2,
        sections: [
          {
            sectionNumber: 'SECTION B (Cont.)',
            title: 'Decimal Arithmetic Operations:',
            questions: [
              { number: 'Q8', text: 'Evaluate the following arithmetic operations:\n(a) 0.568 × 6.4\n(b) 4.8432 ÷ 0.08', subtext: '[4 Marks • Ex 4C]' }
            ]
          }
        ]
      }
    ]
  },

  // 4. Grade 6 CBSE Mathematics Practice Worksheet (2 pages)
  {
    id: 'cbse-class-6-math-lines-angles-fractions-integers',
    title: 'Mathematics Practice Worksheet (Class 6 CBSE)',
    grade: 6,
    board: 'CBSE',
    subject: 'Mathematics',
    topic: 'Lines & Angles, Fractions, The Other Side of Zero (Integers)',
    difficulty: 'Comprehensive Practice',
    description: 'Class 6 CBSE Practice Worksheet for Academic Session 2026–2027 (50 Marks) covering acute/obtuse/reflex angles, number line integer representation, fraction reductions, and real-world hill station winter temperatures.',
    isFree: true,
    pages: 2,
    isPublished: true,
    createdAt: '2026-03-03',
    updatedAt: '2026-03-03',
    badge: 'FREE SAMPLE',
    tags: ['Mathematics', 'Grade 6', 'CBSE', 'Lines and Angles', 'Fractions', 'Integers', 'Geometry'],
    pagesContent: [
      {
        pageNumber: 1,
        sections: [
          {
            sectionNumber: 'Section A',
            title: 'Multiple Choice Questions (1 Mark Each • Total: 5 Marks)',
            questions: [
              { number: '1', text: 'An angle measuring greater than 90° and less than 180° is known as a/an: (a) Acute angle  (b) Right angle  (c) Obtuse angle  (d) Reflex angle' },
              { number: '2', text: 'The integer that lies 4 units to the left of −2 on a number line is: (a) +2  (b) −6  (c) +6  (d) −4' },
              { number: '3', text: 'Which of the following is an improper fraction? (a) 3/7  (b) 9/4  (c) 5/8  (d) 2 ⅓' },
              { number: '4', text: 'The successor of the integer −19 is: (a) −20  (b) −18  (c) +19  (d) +18' },
              { number: '5', text: 'Two lines that lie in the same plane and never intersect, no matter how far extended, are called: (a) Perpendicular lines  (b) Intersecting lines  (c) Concurrent lines  (d) Parallel lines' }
            ]
          },
          {
            sectionNumber: 'Section B',
            title: 'Very Short Answer Questions (2 Marks Each • Total: 10 Marks)',
            questions: [
              { number: '6', text: 'Convert the improper fraction 29/6 into a mixed fraction. Also, write any two equivalent fractions of 3/5.' },
              { number: '7', text: 'Draw a horizontal number line and represent the following integers clearly on it: −5, +3, 0, −2, +6' },
              { number: '8', text: 'Find the measure of the complement and the supplement of an angle measuring 65°.' },
              { number: '9', text: 'Evaluate and simplify the following expression: (−15) + (+28) − (−12) + (−9)' },
              { number: '10', text: 'Reduce the fraction 48/72 to its simplest (lowest) form by finding the HCF of the numerator and denominator.' }
            ]
          },
          {
            sectionNumber: 'Section C',
            title: 'Short Answer Questions (3 Marks Each • Total: 15 Marks)',
            questions: [
              { number: '11', text: 'Solve the following fraction operations:\n(a) 5/8 + 7/12\n(b) 3 ¼ − 1 ⅔' }
            ]
          }
        ]
      },
      {
        pageNumber: 2,
        sections: [
          {
            sectionNumber: 'Section C (Cont.)',
            title: 'Short Answer Questions (Continued):',
            questions: [
              { number: '12', text: 'Classify each of the following as acute, obtuse, right, straight, reflex, or complete angle:\n(a) An angle measuring exactly 180°\n(b) An angle measuring 270°\n(c) The smaller angle formed between the hands of a clock at exactly 3:00 PM.' },
              { number: '13', text: 'Answer the following questions based on integers:\n(a) Subtract (−35) from the sum of 18 and (−42).\n(b) A submarine is situated at a depth of 250 m below sea level. If it ascends by 90 m, what is its new position represented as an integer?' },
              { number: '14', text: 'Reena had a craft ribbon of total length 5 ½ metres. She cut a piece of length 2 ¾ metres for decorating a card. How much ribbon is left with her?' },
              { number: '15', text: 'Arrange the following integers in ascending order: −12, +8, −3, 0, −17, +5, −1' }
            ]
          },
          {
            sectionNumber: 'Section D',
            title: 'Long Answer Questions (5 Marks Each • Total: 20 Marks)',
            questions: [
              { number: '16', text: 'Fractions in Daily Life: A wholesale fruit vendor has a crate containing 60 kg of apples.\n(a) On Monday morning, he sells 2/5 of the total stock. How many kilograms of apples did he sell?\n(b) On Tuesday, he sells 1/3 of the remaining apples. How many kilograms did he sell on Tuesday?\n(c) What fraction of the original total apples remains unsold at the end of Tuesday? (Express in simplest form).' },
              { number: '17', text: 'Understanding Geometry & Angles:\n(a) Define a ray, a line segment, and a line. Mention the number of end points each of them has.\n(b) What is the exact degree measure of a straight angle and a complete angle?\n(c) Two angles are supplementary. If one angle is 30° larger than the other, find the measure of both angles.' },
              { number: '18', text: 'Real-world Integers — Hill Station Temperatures:\nThe table below records minimum temperatures on a winter night: Leh (14°C below 0°C), Shimla (3°C below 0°C), Manali (7°C below 0°C), Srinagar (9°C below 0°C), Ooty (6°C above 0°C).\n(a) Complete the table by writing each temperature as an integer with appropriate positive (+) or negative (−) sign.\n(b) Which hill station is the coldest, and which is the warmest?\n(c) Calculate the temperature difference between the warmest and the coldest station.' }
            ]
          }
        ]
      }
    ]
  },

  // 5. Grade 1 CBSE EVS Worksheet (2 pages)
  {
    id: 'cbse-class-1-evs-animals-body-organs',
    title: 'EVS Worksheet (Class 1 CBSE)',
    grade: 1,
    board: 'CBSE',
    subject: 'EVS',
    topic: 'Animals Around Us, Animal Homes & Food, Body & Sense Organs',
    difficulty: 'Foundational',
    description: 'Class 1 CBSE Environmental Studies (EVS) reading comprehension and question-answer worksheet on Domestic & Wild Animals, Animal Homes, Food Habits, and Human Sense Organs.',
    isFree: true,
    pages: 2,
    isPublished: true,
    createdAt: '2026-03-04',
    updatedAt: '2026-03-04',
    badge: 'FREE SAMPLE',
    tags: ['EVS', 'Grade 1', 'CBSE', 'Animals', 'Sense Organs', 'Foundational', 'Nature'],
    pagesContent: [
      {
        pageNumber: 1,
        sections: [
          {
            sectionNumber: '1',
            title: 'Animals Around Us',
            instructions: 'Read the passage and answer the questions: "We see many animals around us. Some animals, such as dogs, cats and cows, live near people. They are called domestic animals. Lions, bears and deer live in forests. They are wild animals. Birds fly with their wings, while fish live and swim in water. All animals need food and water to stay alive."',
            questions: [
              { number: 'a', text: 'Name any two domestic animals.', prompt: 'Answer:' },
              { number: 'b', text: 'Where do wild animals live?', prompt: 'Answer:' },
              { number: 'c', text: 'What do birds use to fly?', prompt: 'Answer:' },
              { number: 'd', text: 'Name one wild animal.', prompt: 'Answer:' },
              { number: 'e', text: 'Where do fish live?', prompt: 'Answer:' },
              { number: 'f', text: 'What do all animals need to live?', prompt: 'Answer:' }
            ]
          },
          {
            sectionNumber: '2',
            title: 'Food and Home of Animals',
            instructions: 'Read the passage and answer the questions: "Animals eat different kinds of food. A cow eats grass and lives in a shed. A dog eats food and lives in a kennel. A lion eats the flesh of other animals and lives in a den. Birds eat grains and make nests in trees. Animal homes keep them safe from rain, heat and cold."',
            questions: [
              { number: 'a', text: 'What does a cow eat?', prompt: 'Answer:' },
              { number: 'b', text: 'Where does a dog live?', prompt: 'Answer:' }
            ]
          }
        ]
      },
      {
        pageNumber: 2,
        sections: [
          {
            sectionNumber: '2 (Cont.)',
            title: 'Food and Home of Animals (Continued):',
            questions: [
              { number: 'c', text: 'Where does a bird live?', prompt: 'Answer:' },
              { number: 'd', text: 'What does a lion eat?', prompt: 'Answer:' },
              { number: 'e', text: 'Where does a bird make its nest?', prompt: 'Answer:' },
              { number: 'f', text: 'Why do animals need homes?', prompt: 'Answer:' }
            ]
          },
          {
            sectionNumber: '3',
            title: 'Our Body and Sense Organs',
            instructions: 'Read the passage and answer the questions: "Our body has many different parts. We have five sense organs—eyes, ears, nose, tongue and skin. We use our eyes to see, ears to hear and nose to smell. Our tongue helps us taste food. Our skin helps us feel things that are hot, cold, soft or hard."',
            questions: [
              { number: 'a', text: 'How many sense organs do we have?', prompt: 'Answer:' },
              { number: 'b', text: 'Which organ helps us to smell?', prompt: 'Answer:' },
              { number: 'c', text: 'Which organ helps us to hear?', prompt: 'Answer:' },
              { number: 'd', text: 'What does our tongue help us to do?', prompt: 'Answer:' },
              { number: 'e', text: 'Which sense organ helps us to see?', prompt: 'Answer:' },
              { number: 'f', text: 'Which sense organ helps us to taste food?', prompt: 'Answer:' },
              { number: 'g', text: 'Which sense organ helps us to feel hot and cold?', prompt: 'Answer:' }
            ]
          }
        ]
      }
    ]
  },

  // 6. Grade 8 ICSE Mathematics Direct & Inverse Variation (1 page)
  {
    id: 'icse-class-8-math-direct-inverse-variation',
    title: 'Direct & Inverse Variation Worksheet (Class 8 ICSE)',
    grade: 8,
    board: 'ICSE',
    subject: 'Mathematics',
    topic: 'RS Aggarwal Ex 10A & 10B • Direct, Compound & Inverse Variation',
    difficulty: 'Intermediate',
    description: 'Class 8 ICSE Mathematics Practice Worksheet based on RS Aggarwal (Goyal Brothers Prakashan) covering Direct Variation toy costs & petrol mileage, Compound Variation workers wall problem, and Inverse Variation road repair, hostel provisions & water reservoir pipes.',
    isFree: true,
    pages: 1,
    isPublished: true,
    createdAt: '2026-03-05',
    updatedAt: '2026-03-05',
    badge: 'FREE SAMPLE',
    tags: ['Mathematics', 'Grade 8', 'ICSE', 'Direct Variation', 'Inverse Variation', 'RS Aggarwal', 'Proportion'],
    pagesContent: [
      {
        pageNumber: 1,
        sections: [
          {
            sectionNumber: 'SECTION A',
            title: 'EXERCISE 10A (DIRECT & COMPOUND VARIATION)',
            instructions: 'Time: 40 Minutes • Total Marks: 20. Show complete working and step-by-step proportion statements for each question.',
            questions: [
              { number: '1', text: 'If the cost of 40 toys is ₹1,024, find the cost of one dozen such toys.', prompt: 'Working & Answer:' },
              { number: '2', text: 'A car travels 67.5 km on 4.5 litres of petrol. How far will it travel on 26.4 litres of petrol?', prompt: 'Working & Answer:' },
              { number: '3', text: '7 workers working 6 hours a day can build a wall in 12 days. How many days will 3 workers take to build a similar wall, working 8 hours a day?', prompt: 'Working & Answer:' }
            ]
          },
          {
            sectionNumber: 'SECTION B',
            title: 'EXERCISE 10B (INVERSE VARIATION)',
            questions: [
              { number: '4', text: '12 men can repair a road in 25 days. In how many days will 30 men take to complete the same work?', prompt: 'Working & Answer:' },
              { number: '5', text: 'A hostel has food provision for 100 students lasting 20 days. How long will these provisions last if 25 more students join the hostel?', prompt: 'Working & Answer:' },
              { number: '6', text: '6 pipes can fill a water reservoir in 1 hour 20 minutes. How long will it take to fill the reservoir if only 5 pipes of the same type are used?', prompt: 'Working & Answer:' }
            ]
          }
        ]
      }
    ]
  },

  // 7. Premium Sample: Grade 10 ICSE Computer Applications BlueJ
  {
    id: 'grade-10-icse-computer-bluej',
    title: 'Grade 10 ICSE Computer Applications Practice',
    grade: 10,
    board: 'ICSE',
    subject: 'Computer Applications',
    topic: 'Java BlueJ OOP, 1D/2D Arrays & String Manipulations',
    difficulty: 'Exam Intensive',
    description: 'Section A output prediction, loop dry-runs, syntax error debugging, and Section B full-length program writing on sorting and strings.',
    isFree: false,
    pages: 5,
    isPublished: true,
    createdAt: '2026-02-10',
    updatedAt: '2026-02-10',
    badge: 'PREMIUM',
    tags: ['Computer', 'Grade 10', 'ICSE', 'Java', 'BlueJ', 'Arrays', 'Strings']
  },

  // 8. Premium Sample: Grade 11 Mathematics Sets & Functions
  {
    id: 'grade-11-math-sets-functions',
    title: 'Grade 11 Mathematics Practice Worksheet',
    grade: 11,
    board: 'CBSE',
    subject: 'Mathematics',
    topic: 'Sets, Relations, Domain-Range & Trigonometric Equations',
    difficulty: 'Comprehensive Practice',
    description: 'Bridge and high school practice on Venn diagrams, Cartesian products, domain & range determination, and solving general trigonometric equations.',
    isFree: false,
    pages: 4,
    isPublished: true,
    createdAt: '2026-02-15',
    updatedAt: '2026-02-15',
    badge: 'PREMIUM',
    tags: ['Math', 'Grade 11', 'CBSE', 'Sets', 'Functions', 'Trigonometry']
  }
];
