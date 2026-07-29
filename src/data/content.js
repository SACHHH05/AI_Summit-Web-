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
    kind: "Guest Lecture",
    title: "\u201cAI Beyond Borders\u201d \u2014 An Academia-Industry Dialogue",
    text: "A fireside-chat style session where an international academic and an industry expert exchange perspectives on the present and future of AI, followed by open Q&A.",
    label: "Speakers",
    people: [
      { n: "Prof. Dr. Ahmed Abdelgewad", a: "Professor of Computer Engineering" },
      { n: "Mr. Joyner Jebasten", a: "Lennox Technology, Chennai" },
    ],
  },
  {
    kind: "Competition",
    title: "Best AI / ML Project",
    text: "Working AI/ML project demonstrations, with UG and PG categories judged separately.",
    label: "Jury",
    people: [{ n: "Mr. Joyner Jebasten", a: "Lennox Technology, Chennai" }],
  },
  {
    kind: "Competition",
    title: "Best Startup / AI Idea Pitch",
    text: "A 5-minute pitch and Q&A before the jury panel, judged on the business viability of an AI-based idea or product.",
    label: "Jury",
    people: [{ n: "Prof. Dr. Ahmed Abdelgewad", a: "Professor of Computer Engineering" }],
  },
  {
    kind: "Competition",
    title: "Poster Presentation",
    text: "Research and innovation posters on AI/ML themes, evaluated by the international jury panel.",
    label: "Jury",
    people: [{ n: "Prof. Ir. Dr. Fauziahanim Binti Che Seman", a: "Faculty of Electrical & Electronic Engineering" }],
  },
];

export const SCHEDULE = [
  { t: "9:00 \u2013 9:45 AM", h: "Registration & Poster / Exhibit Setup" },
  { t: "9:45 \u2013 10:30 AM", h: "Inaugural Session", s: "Address by Chief Guest & Jury Panel" },
  { t: "10:30 \u2013 11:30 AM", h: "\u201cAI Beyond Borders\u201d", s: "Academia-Industry Guest Lecture & Dialogue" },
  { t: "11:30 \u2013 1:00 PM", h: "Poster Presentation", s: "Jury Evaluation" },
  { t: "1:00 \u2013 1:45 PM", h: "Lunch Break" },
  { t: "1:45 \u2013 3:15 PM", h: "Best AI Project Award", s: "Jury Evaluation \u2014 UG & PG Categories" },
  { t: "3:15 \u2013 4:15 PM", h: "Best Startup / AI Idea Pitch", s: "Finals before the Jury Panel" },
  { t: "4:15 \u2013 5:00 PM", h: "Valedictory Session & Prize Distribution" },
];

export const JURY = [
  {
    n: "Prof. Dr. Ahmed Abdelgewad",
    r: "Professor of Computer Engineering",
    a: "International Academic Expert",
    tag: "Guest Lecture \u00b7 Startup Pitch Jury",
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
    tag: "Guest Lecture \u00b7 AI Project Jury",
  },
];

export const COMMITTEE = [
  { role: "Convener", n: "Dr. G Pandiyarajan", t: "Head of the Department, CSE (AIML)" },
  { role: "Coordinator", n: "Dr. Karthick Panneerselvam", t: "Associate Professor, CSE (AIML)" },
  { role: "Co-coordinator", n: "Mr. Nandhagopal S", t: "Assistant Professor, CSE (AIML)" },
];

export const STATS = [
  { end: 100, suffix: "+", label: "Delegates Expected" },
  { end: 4, suffix: "", label: "Flagship Events" },
  { end: 3, suffix: "", label: "Parallel Halls" },
  { end: 3, suffix: "", label: "International Jury" },
];
