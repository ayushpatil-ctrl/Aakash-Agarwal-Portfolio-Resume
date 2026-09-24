import { ProfileData, EducationItem, ExperienceItem, MUNItem, SkillGroup, ThemeColors } from '../types';

export const profileData: ProfileData = {
  name: "Aakash Agarwal",
  role: "B.Tech Freshman",
  subRole: "Engineering Student · Model UN Leader · Student Researcher",
  age: 18,
  gender: "Male",
  email: "aakash180108@gmail.com",
  phone: "(+91) 8700905513",
  location: "Ghaziabad / Delhi NCR, India",
  tagline: "First-year engineering student passionate about technology, practical problem-solving, and public speaking.",
  summary:
    "I am a first-year B.Tech student who enjoys coding, science, and learning how things work. I like turning classroom knowledge into practical, real-world projects. Whether working in a tech team, organizing large student events, or speaking on stage, I focus on clear communication, hard work, and getting things done.",
  quickStats: [
    {
      label: "Class 10 Board",
      value: "94.8%",
      subtext: "99/100 in Computer Science & Social Studies"
    },
    {
      label: "Class 12 Board",
      value: "93.4%",
      subtext: "96/100 in Chemistry"
    },
    {
      label: "Model UN Events",
      value: "12+",
      subtext: "12+ events as leader & delegate"
    },
    {
      label: "University Programs",
      value: "2",
      subtext: "2 on-site internships at Bennett"
    }
  ]
};

export const educationData: EducationItem[] = [
  {
    id: "class-xii",
    course: "CBSE Class XII",
    year: "2026",
    institute: "Seth Anandram Jaipuria School, Ghaziabad",
    percentage: 93.4,
    highlights: [
      "Scored 96 out of 100 in Chemistry in the CBSE Class 12 Board Exams.",
      "Studied the Science stream with Advanced Physics, Chemistry, and Mathematics (PCM).",
      "Maintained strong grades across theoretical written tests and practical laboratory experiments."
    ],
    keySubjects: ["Physics", "Chemistry (96/100)", "Mathematics", "English"]
  },
  {
    id: "class-x",
    course: "CBSE Class X",
    year: "2024",
    institute: "Seth Anandram Jaipuria School, Ghaziabad",
    percentage: 94.8,
    highlights: [
      "Scored 99 out of 100 in both Computer Science and Social Studies.",
      "Built a solid foundation in computer programming logic and social sciences.",
      "Actively took part in school academic clubs and represented the school in inter-school events."
    ],
    keySubjects: ["Computer Science (99/100)", "Social Studies (99/100)", "Science", "Mathematics"]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "bennett-summer-research",
    title: "Summer Research Intern",
    organization: "Bennett University",
    type: "On-Site Internship",
    location: "Greater Noida, India",
    period: "Summer Fellowship",
    impactArea: "Academic Research & Teamwork",
    featuredStat: "Faculty-led Research",
    points: [
      "Selected for a summer research program at Bennett University, collaborating with professors and senior students.",
      "Helped organize research data, write project notes, and create clear presentation slides.",
      "Learned how university research works and solved problems as part of a friendly, collaborative team.",
      "Built strong habits in time management, technical documentation, and campus teamwork."
    ],
    tags: ["Research", "Data Organization", "Presentations", "Teamwork", "Problem Solving"]
  },
  {
    id: "bennett-mass-media",
    title: "Mass Media & Journalism Intern",
    organization: "Bennett University",
    type: "On-Site Internship",
    location: "Greater Noida, India",
    period: "Winter Intensive Program",
    impactArea: "News Writing & Public Speaking",
    featuredStat: "Hands-on Journalism",
    points: [
      "Completed an intensive winter media program, learning how to report stories, write articles, and interview people.",
      "Practiced writing clear news updates, press releases, and student announcements.",
      "Spoke with students and campus visitors to collect feedback and turned key points into easy-to-read stories.",
      "Worked with media mentors on article editing, video basics, and speaking clearly on camera."
    ],
    tags: ["Article Writing", "Interviewing", "Public Speaking", "Media & News", "Content Creation"]
  }
];

export const munData: MUNItem[] = [
  // Secretariat
  {
    id: "jmunc-25-advisor",
    title: "Senior Advisor",
    conference: "JMUNC '25",
    year: "2025",
    role: "Senior Advisor",
    category: "secretariat",
    description: "Guided the junior organizing team and helped make sure all conference debate rules ran smoothly."
  },
  {
    id: "jmunc-25-treasurer",
    title: "Convenor Treasurer",
    conference: "JMUNC '25",
    year: "2025",
    role: "Convenor Treasurer",
    category: "secretariat",
    description: "Handled the conference budget, tracked delegate registrations, and managed vendor payments for hundreds of students."
  },
  {
    id: "jmunc-24-delegate-affairs-head",
    title: "Head of Delegate Affairs",
    conference: "JMUNC '24",
    year: "2024",
    role: "Head of Delegate Affairs",
    category: "secretariat",
    description: "Assigned countries to delegates, answered queries, and organized the delegate orientation sessions."
  },
  // Executive Board
  {
    id: "prumun-24-rapporteur",
    title: "Rapporteur",
    conference: "PRUMUN '24",
    year: "2024",
    role: "Rapporteur (UNHRC)",
    category: "executive-board",
    committee: "United Nations Human Rights Council (UNHRC)",
    description: "Helped manage debate in the UN Human Rights Council, timed speeches, and reviewed student-drafted resolutions."
  },
  // Team Work & Organizing
  {
    id: "tedx-23-finance",
    title: "Finance Core Team",
    conference: "TEDxSAJSV '23",
    year: "2023",
    role: "Finance Operations",
    category: "teamwork",
    description: "Helped manage event expenses, handled speaker arrangements, and tracked the event budget."
  },
  {
    id: "jmunc-23-delegate-affairs",
    title: "Delegate Affairs Team",
    conference: "JMUNC '23",
    year: "2023",
    role: "Delegate Affairs Officer",
    category: "teamwork",
    description: "Helped check-in delegates at the venue, handed out resolution papers, and assisted committee rooms."
  },
  {
    id: "munc-22-marketing",
    title: "Marketing Core Team",
    conference: "MUNC '22",
    year: "2022",
    role: "Marketing Lead / Officer",
    category: "teamwork",
    description: "Designed posters and reached out to multiple schools to bring in delegate registrations."
  },
  {
    id: "comic-con-22",
    title: "Event Management",
    conference: "COMIC CON '22",
    year: "2022",
    role: "Event Operations & Logistics",
    category: "teamwork",
    description: "Managed crowd flow, coordinated stage timings, and assisted exhibitors during the event."
  },
  // Delegate Experience
  {
    id: "sajsmun-24-lucknow",
    title: "Delegate",
    conference: "SAJSMUN '24 (Lucknow)",
    year: "2024",
    role: "Delegate",
    category: "delegate",
    description: "Represented a country, spoke in debates, and worked with other delegates to write solution proposals."
  },
  {
    id: "sajmun-24-kanpur",
    title: "Delegate",
    conference: "SAJMUN '24 (Kanpur)",
    year: "2024",
    role: "Delegate",
    category: "delegate",
    description: "Debated international politics, negotiated with committee blocs, and voted on resolutions."
  },
  {
    id: "aismun-22",
    title: "Delegate",
    conference: "AISMUN '22",
    year: "2022",
    role: "Delegate",
    category: "delegate",
    description: "Represented designated country policies, followed UN debate procedures, and gave speeches."
  },
  {
    id: "jmunc-21",
    title: "Delegate",
    conference: "JMUNC '21",
    year: "2021",
    role: "Delegate",
    category: "delegate",
    description: "Took part in committee debate sessions, formed alliances, and contributed clauses to draft resolutions."
  },
  {
    id: "jmunc-20",
    title: "Delegate",
    conference: "JMUNC '20",
    year: "2020",
    role: "Delegate",
    category: "delegate",
    description: "Practiced Model UN debate rules, learned foreign policy basics, and gave speeches in committee."
  },
  {
    id: "jmunc-19",
    title: "Delegate",
    conference: "JMUNC '19",
    year: "2019",
    role: "Delegate",
    category: "delegate",
    description: "My first Model UN conference, where I learned how UN debates work and built confidence speaking on stage."
  }
];

export const skillsData: SkillGroup[] = [
  {
    category: "Public Speaking & Leadership",
    description: "Real experience leading teams, running student conferences, and speaking to audiences.",
    skills: [
      { name: "Leadership", level: "Senior", context: "Senior Advisor, Conference Treasurer, and Event Team Lead" },
      { name: "Team Negotiation", level: "Advanced", context: "Finding common ground and building consensus in group meetings" },
      { name: "Adaptability", level: "Expert", context: "Comfortable switching between engineering labs, stage speaking, and event teams" },
      { name: "Time Management", level: "Advanced", context: "Balanced board exams (93.4%) with leadership roles and internships" }
    ]
  },
  {
    category: "Media & Communication",
    description: "Comfortable with writing, interviewing, public speaking, and team outreach.",
    skills: [
      { name: "Public Speaking", level: "Expert", context: "Speaking on stage, giving presentations, and addressing student groups" },
      { name: "Writing & Storytelling", level: "Proficient", context: "Bennett Media program in article writing, reporting, and interviews" },
      { name: "Community Outreach", level: "Advanced", context: "Connecting with student groups, listening to feedback, and sharing updates" },
      { name: "Public Relations", level: "Advanced", context: "Promoting events and sharing news across schools and student networks" }
    ]
  },
  {
    category: "Engineering & Technical Skills",
    description: "Strong foundation in math, coding, physics, and practical analysis.",
    skills: [
      { name: "Coding & Logic", level: "Top Score (99/100)", context: "Scored 99/100 in Computer Science in Class 10; algorithmic thinking" },
      { name: "Chemistry & Sciences", level: "Distinction (96/100)", context: "Scored 96/100 in Chemistry in Class 12; laboratory work" },
      { name: "Engineering Basics", level: "B.Tech Freshman", context: "Studying physics, math, and core engineering subjects" },
      { name: "Data Organization", level: "Advanced", context: "Sorting and organizing project data during the Bennett summer internship" }
    ]
  },
  {
    category: "Operations & Event Management",
    description: "Hands-on experience organizing student events, summits, and handling budgets.",
    skills: [
      { name: "Event Planning", level: "Advanced", context: "Managed operations at COMIC CON '22 and multiple JMUNC conferences" },
      { name: "Budgeting & Accounts", level: "Proficient", context: "Treasurer for JMUNC '25 and finance team member for TEDxSAJSV '23" },
      { name: "Delegate Coordination", level: "Head / Lead", context: "Handled registrations and communication for hundreds of students" }
    ]
  }
];

export const themes: Record<string, ThemeColors> = {
  burgundy: {
    id: 'burgundy',
    name: 'Orbit Burgundy',
    description: 'Warm cream paper canvas with deep wine burgundy accents and soft ivory borders',
    bg: 'bg-[#FAF7F2]',
    cardBg: 'bg-white',
    textPrimary: 'text-[#231E1C]',
    textSecondary: 'text-[#6F665E]',
    accent: 'bg-[#6B1D2F] text-white',
    accentHover: 'hover:bg-[#561423]',
    accentLight: 'bg-[#F7EFEA] text-[#6B1D2F] border-[#EADCD4]',
    border: 'border-[#E7E0D6]',
    badgeBg: 'bg-[#F7EFEA] border-[#EADCD4] text-[#6B1D2F]',
    badgeText: 'text-[#6B1D2F]'
  }
};
