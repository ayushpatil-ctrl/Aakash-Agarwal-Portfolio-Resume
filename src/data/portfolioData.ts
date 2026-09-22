import { ProfileData, EducationItem, ExperienceItem, MUNItem, SkillGroup, ThemeColors } from '../types';

export const profileData: ProfileData = {
  name: "Aakash Agarwal",
  role: "B.Tech Freshman",
  subRole: "Pre-College Researcher · Model UN Secretariat & EB · Mass Media Fellow",
  age: 18,
  gender: "Male",
  email: "aakash180108@gmail.com",
  phone: "(+91) 8700905513",
  location: "Ghaziabad / Delhi NCR, India",
  tagline: "Bridging Analytical Problem-Solving & Engineering Rigor with Diplomatic Leadership & Strategic Communication.",
  summary:
    "Driven B.Tech freshman with a strong foundation in analytical problem-solving and an enthusiasm for continuous learning. Eager to apply theoretical coursework to real-world, hands-on projects. Highly collaborative and adaptable, with a dedication to developing innovative technical solutions and expanding practical engineering knowledge.",
  quickStats: [
    {
      label: "CBSE Class X Board",
      value: "94.8%",
      subtext: "99/100 in CS & Social Studies"
    },
    {
      label: "CBSE Class XII Board",
      value: "93.4%",
      subtext: "96/100 in Chemistry"
    },
    {
      label: "MUN & Summit Roles",
      value: "12+",
      subtext: "Secretariat, EB & Delegations"
    },
    {
      label: "University Fellowships",
      value: "2",
      subtext: "Bennett On-Site Internships"
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
      "Achieved an exceptional score of 96/100 in Chemistry in CBSE Class XII Board Examination.",
      "Rigorous core curriculum in Advanced Mathematics, Chemistry, Physics, and Analytical Sciences.",
      "Consistently demonstrated academic discipline and analytical problem solving across laboratory & theoretical evaluations."
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
      "Achieved top honors with 99/100 in Computer Science and Social Studies in CBSE Class X Board Examination.",
      "Strong foundational aptitude in algorithmic thinking, computational logic, and socio-economic systems.",
      "Elected and appointed to various school co-curricular societies and inter-school academic delegations."
    ],
    keySubjects: ["Computer Science (99/100)", "Social Studies (99/100)", "Science", "Mathematics"]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "bennett-summer-research",
    title: "Summer Research & Academic Intern",
    organization: "Bennett University",
    type: "On-Site Internship",
    location: "Greater Noida, India",
    period: "Pre-College Summer Fellowship",
    impactArea: "Academic Research & Leadership Readiness",
    featuredStat: "Faculty-led Research",
    points: [
      "Selected for a competitive pre-college summer internship, collaborating directly with university faculty and higher-education peers on complex academic projects.",
      "Assisted with quantitative research, data organization, structured documentation, and executive presentation preparation.",
      "Strengthened analytical problem-solving and multidisciplinary teamwork skills in an active university laboratory and lecture ecosystem.",
      "Developed strong organizational and communication abilities in a higher-education environment, demonstrating early readiness for campus leadership."
    ],
    tags: ["Academic Research", "Data Organization", "Faculty Collaboration", "Campus Leadership", "Presentation Design"]
  },
  {
    id: "bennett-mass-media",
    title: "Mass Media & Journalism Intern",
    organization: "Bennett University",
    type: "On-Site Internship",
    location: "Greater Noida, India",
    period: "Winter Intensive Program",
    impactArea: "Journalistic Writing & Strategic Outreach",
    featuredStat: "Investigative & Media Operations",
    points: [
      "Selected for a rigorous winter mass media program, gaining intensive hands-on experience in content creation, interviewing, and journalistic reporting.",
      "Developed strong narrative storytelling and public relations skills directly applicable to student outreach, press communications, and campus engagement initiatives.",
      "Strengthened public speaking and investigative interview skills, actively gathering community feedback and distilling complex information into clear, compelling narratives.",
      "Collaborated with media mentors on editorial review, audio-visual journalism workflows, and audience-first reporting standards."
    ],
    tags: ["Journalistic Writing", "Interviewing", "Public Relations", "Content Creation", "Community Engagement", "Public Speaking"]
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
    description: "Mentored incoming organizing teams, reviewed parliamentary rules, and provided strategic oversight for delegate administration."
  },
  {
    id: "jmunc-25-treasurer",
    title: "Convenor Treasurer",
    conference: "JMUNC '25",
    year: "2025",
    role: "Convenor Treasurer",
    category: "secretariat",
    description: "Managed conference budgeting, vendor financial clearances, registration fee accounts, and fiscal logistics for several hundred delegates."
  },
  {
    id: "jmunc-24-delegate-affairs-head",
    title: "Head of Delegate Affairs",
    conference: "JMUNC '24",
    year: "2024",
    role: "Head of Delegate Affairs",
    category: "secretariat",
    description: "Spearheaded all delegate allocations, committee communication channels, orientation, and resolution logistics."
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
    description: "Adjudicated committee debates, maintained the Speakers List, drafted executive summaries, and audited draft resolutions on international human rights covenants."
  },
  // Team Work & Organizing
  {
    id: "tedx-23-finance",
    title: "Finance Core Team",
    conference: "TEDxSAJSV '23",
    year: "2023",
    role: "Finance Operations",
    category: "teamwork",
    description: "Facilitated sponsor disbursements, institutional accounting, speaker hospitality logistics, and event financial reconciliations."
  },
  {
    id: "jmunc-23-delegate-affairs",
    title: "Delegate Affairs Team",
    conference: "JMUNC '23",
    year: "2023",
    role: "Delegate Affairs Officer",
    category: "teamwork",
    description: "Coordinated on-ground delegate registration, resolution dissemination, and committee operational readiness."
  },
  {
    id: "munc-22-marketing",
    title: "Marketing Core Team",
    conference: "MUNC '22",
    year: "2022",
    role: "Marketing Lead / Officer",
    category: "teamwork",
    description: "Designed promotional outreach campaigns, engaged multi-school networks, and drove record delegate enrollment."
  },
  {
    id: "comic-con-22",
    title: "Event Management",
    conference: "COMIC CON '22",
    year: "2022",
    role: "Event Operations & Logistics",
    category: "teamwork",
    description: "Coordinated stage schedules, attendee crowd flow, exhibitor relations, and emergency event contingency planning."
  },
  // Delegate Experience
  {
    id: "sajsmun-24-lucknow",
    title: "Delegate",
    conference: "SAJSMUN '24 (Lucknow)",
    year: "2024",
    role: "Delegate",
    category: "delegate",
    description: "Engaged in multilateral negotiations, formulated position papers, and sponsored comprehensive policy working papers."
  },
  {
    id: "sajmun-24-kanpur",
    title: "Delegate",
    conference: "SAJMUN '24 (Kanpur)",
    year: "2024",
    role: "Delegate",
    category: "delegate",
    description: "Debated geo-political diplomacy, moderated caucus negotiations, and drafted binding committee directives."
  },
  {
    id: "aismun-22",
    title: "Delegate",
    conference: "AISMUN '22",
    year: "2022",
    role: "Delegate",
    category: "delegate",
    description: "Represented designated state interests with rigor, diplomatic protocol, and persuasive parliamentary argumentation."
  },
  {
    id: "jmunc-21",
    title: "Delegate",
    conference: "JMUNC '21",
    year: "2021",
    role: "Delegate",
    category: "delegate",
    description: "Participated in crisis and regular committee sessions, lobbying unmoderated alliances and writing resolution clauses."
  },
  {
    id: "jmunc-20",
    title: "Delegate",
    conference: "JMUNC '20",
    year: "2020",
    role: "Delegate",
    category: "delegate",
    description: "Early MUN immersion, debating multilateral foreign policy and mastering United Nations rules of procedure."
  },
  {
    id: "jmunc-19",
    title: "Delegate",
    conference: "JMUNC '19",
    year: "2019",
    role: "Delegate",
    category: "delegate",
    description: "Inaugural delegate delegation, developing debate fluency, international relations literacy, and parliamentary decorum."
  }
];

export const skillsData: SkillGroup[] = [
  {
    category: "Diplomacy & Leadership",
    description: "Proven executive leadership across Model UN secretariats, committee executive boards, and institutional teams.",
    skills: [
      { name: "Leadership", level: "Senior", context: "Secretariat Senior Advisor, Convenor Treasurer & Event Ops Lead" },
      { name: "Negotiation Skills", level: "Advanced", context: "Multilateral diplomacy, caucus consensus-building & sponsor deals" },
      { name: "Adaptability", level: "Expert", context: "Thrives across STEM research laboratories, high-pressure conferences & media rooms" },
      { name: "Time Management", level: "Advanced", context: "Balanced rigorous Class XII board prep (93.4%) with leadership & internships" }
    ]
  },
  {
    category: "Media & Strategic Communication",
    description: "Hands-on experience in journalism, public speaking, community feedback gathering, and public relations.",
    skills: [
      { name: "Public Relations", level: "Advanced", context: "Bennett Mass Media fellow; school & inter-collegiate PR outreach" },
      { name: "Communication", level: "Expert", context: "Podium keynote speaking, investigative journalism, academic presentations" },
      { name: "Journalistic Writing", level: "Proficient", context: "Bennett Media program in reporting, editorial synthesis & interviews" },
      { name: "Community Outreach", level: "Advanced", context: "Engaging feedback channels, student cohorts & delegate networks" }
    ]
  },
  {
    category: "Engineering & Analytical Problem-Solving",
    description: "Strong theoretical and practical background in physics, computational thinking, and quantitative analysis.",
    skills: [
      { name: "Applied Sciences & Engineering", level: "Foundational B.Tech", context: "Mechanics, thermodynamics, electrodynamics & theoretical models" },
      { name: "Computer Science", level: "Distinction (99/100)", context: "Top-percentile CBSE score, algorithmic problem solving & logic" },
      { name: "Chemistry & Sciences", level: "Distinction (96/100)", context: "High board score, chemical thermodynamics & analytical chemistry" },
      { name: "Problem-Solving & Data", level: "Advanced", context: "Bennett research data organization & faculty project synthesis" }
    ]
  },
  {
    category: "Operations, Finance & Events",
    description: "End-to-end execution of large-scale conferences, festivals, and budgetary frameworks.",
    skills: [
      { name: "Event Management", level: "Advanced", context: "COMIC CON '22 event management & multiple JMUNC editions" },
      { name: "Finance & Budgeting", level: "Proficient", context: "TEDxSAJSV '23 Finance core team & JMUNC '25 Convenor Treasurer" },
      { name: "Delegate Affairs", level: "Head / Lead", context: "Managed delegate relations, registrations & committee allocations" }
    ]
  }
];

export const themes: Record<string, ThemeColors> = {
  slate: {
    id: 'slate',
    name: 'Oxford Slate',
    description: 'Crisp editorial aesthetic with deep slate and refined navy accents',
    bg: 'bg-slate-50',
    cardBg: 'bg-white',
    textPrimary: 'text-slate-900',
    textSecondary: 'text-slate-600',
    accent: 'bg-slate-900 text-white',
    accentHover: 'hover:bg-slate-800',
    accentLight: 'bg-slate-100 text-slate-800 border-slate-200',
    border: 'border-slate-200',
    badgeBg: 'bg-blue-50 border-blue-200 text-blue-800',
    badgeText: 'text-blue-800'
  },
  emerald: {
    id: 'emerald',
    name: 'Cambridge Stone',
    description: 'Warm academic ivory with deep forest emerald and antique bronze touches',
    bg: 'bg-[#fbf9f5]',
    cardBg: 'bg-white',
    textPrimary: 'text-[#1c241e]',
    textSecondary: 'text-[#47544b]',
    accent: 'bg-[#1b4332] text-[#f8faf7]',
    accentHover: 'hover:bg-[#143427]',
    accentLight: 'bg-[#eef3ee] text-[#1b4332] border-[#cfe0d2]',
    border: 'border-[#e4dfd5]',
    badgeBg: 'bg-[#eaf4ed] border-[#c1e0c8] text-[#1b4332]',
    badgeText: 'text-[#1b4332]'
  },
  obsidian: {
    id: 'obsidian',
    name: 'Midnight Obsidian',
    description: 'Minimalist high-contrast dark palette with crisp platinum typography',
    bg: 'bg-[#0b0f19]',
    cardBg: 'bg-[#111827]',
    textPrimary: 'text-[#f9fafb]',
    textSecondary: 'text-[#9ca3af]',
    accent: 'bg-blue-600 text-white',
    accentHover: 'hover:bg-blue-500',
    accentLight: 'bg-[#1f293d] text-[#93c5fd] border-[#374151]',
    border: 'border-[#1f2937]',
    badgeBg: 'bg-[#1e293b] border-[#334155] text-[#60a5fa]',
    badgeText: 'text-[#60a5fa]'
  }
};
