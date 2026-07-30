export const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "events", label: "Events" },
  { id: "schedule", label: "Schedule" },
  { id: "jury", label: "Jury" },
  { id: "venue", label: "Venue" },
];

export const OBJECTIVES = [
  {
    title: "National Showcase Platform",
    text: "A national-level stage for students to present innovative AI/ML projects, startup ideas, and research posters.",
  },
  {
    title: "Academia-Industry Interaction",
    text: "Foster dialogue through a special guest lecture featuring international academic and industry experts.",
  },
  {
    title: "International Jury Evaluation",
    text: "Give students the chance to be evaluated by a distinguished jury from leading global universities.",
  },
  {
    title: "Institutional Visibility",
    text: "Strengthen KPRIET's positioning in AI education at both national and international levels.",
  },
  {
    title: "Incubation & Mentoring",
    text: "Identify and mentor promising student innovations for incubation and further funding support.",
  },
  {
    title: "Skill Development",
    text: "Build technical and entrepreneurial skills through competition, feedback, and exposure.",
  },
];

export const EVENTS = [
  {
    kind: "Keynote Dialogue",
    dotColor: "var(--lime)",
    title: "AI Beyond Borders",
    subtitle: "An Academia-Industry Dialogue",
    text: "A fireside-chat style session where an international academic and an industry expert exchange perspectives on the present and future of AI, followed by open Q&A.",
    label: "Speakers",
    people: [
      { n: "Prof. Dr. Ahmed Abdelgewad", a: "Professor of Computer Engineering" },
      { n: "Mr. Joyner Jebasten", a: "Lennox Technology, Chennai" },
    ],
  },
  {
    kind: "Competition",
    dotColor: "var(--cyan)",
    title: "Best AI Project",
    subtitle: "UG & PG · Judged Separately",
    text: "Live working AI/ML project demonstrations evaluated before the jury.",
    label: "Jury",
    people: [{ n: "Mr. Joyner Jebasten", a: "Lennox Technology, Chennai" }],
  },
  {
    kind: "Competition",
    dotColor: "#ff6b6b",
    title: "Startup / AI Idea Pitch",
    subtitle: "5-Min Pitch + Q&A",
    text: "Present the business viability of an AI-based idea or product before the jury panel.",
    label: "Jury",
    people: [{ n: "Prof. Dr. Ahmed Abdelgewad", a: "Professor of Computer Engineering" }],
  },
  {
    kind: "Showcase",
    dotColor: "var(--lime)",
    title: "Poster Presentation",
    subtitle: "Research & Innovation",
    text: "Research and innovation posters on AI/ML themes, evaluated by the international jury panel across three parallel halls.",
    label: "Jury",
    people: [{ n: "Prof. Ir. Dr. Fauziahanim Binti Che Seman", a: "Faculty of Electrical & Electronic Engineering" }],
  },
];

export const SCHEDULE = [
  { t: "9:00 – 9:45 AM", h: "Registration & Poster / Exhibit Setup" },
  { t: "9:45 – 10:30 AM", h: "Inaugural Session", s: "Address by Chief Guest & Jury Panel" },
  { t: "10:30 – 11:30 AM", h: "\u201cAI Beyond Borders\u201d", s: "Academia-Industry Guest Lecture & Dialogue" },
  { t: "11:30 – 1:00 PM", h: "Poster Presentation", s: "Jury Evaluation" },
  { t: "1:00 – 1:45 PM", h: "Lunch Break" },
  { t: "1:45 – 3:15 PM", h: "Best AI Project Award", s: "Jury Evaluation — UG & PG Categories" },
  { t: "3:15 – 4:15 PM", h: "Best Startup / AI Idea Pitch", s: "Finals before the Jury Panel" },
  { t: "4:15 – 5:00 PM", h: "Valedictory Session & Prize Distribution" },
];

export const JURY = [
  {
    n: "Prof. Dr. Ahmed Abdelgewad",
    r: "Professor of Computer Engineering",
    a: "International Academic Expert",
    tag: "Guest Lecture · Startup Pitch Jury",
  },
  {
    n: "Prof. Ir. Dr. Fauziahanim Binti Che Seman",
    r: "Faculty of Electrical & Electronic Engineering",
    a: "International Academic Expert",
    tag: "Poster Presentation Jury",
  },
  {
    n: "Mr. Joyner Jebasten",
    r: "Lennox Technology, Chennai",
    a: "Industry Expert",
    tag: "Guest Lecture · AI Project Jury",
  },
];

export const COMMITTEE = [
  { role: "Convener", n: "Dr. G Pandiyarajan", t: "Head of the Department, CSE (AIML)" },
  { role: "Coordinator", n: "Dr. Karthick Panneerselvam", t: "Associate Professor, CSE (AIML)" },
  { role: "Co-coordinator", n: "Mr. Nandhagopal S", t: "Assistant Professor, CSE (AIML)" },
];

export const STATS = [
  { end: 100, suffix: "+", label: "Delegates" },
  { end: 3, suffix: "", label: "Parallel Halls" },
  { end: 4, suffix: "", label: "Flagship Events" },
  { end: 3, suffix: "", label: "Intl. Jurors" },
];