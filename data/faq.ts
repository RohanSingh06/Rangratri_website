export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQItem[] = [
  {
    id: "event-date",
    question: "When is Navratri Mahautsav 2026?",
    answer:
      "Navratri Mahautsav 2026 is scheduled for Tuesday, October 20, 2026.",
    category: "Event",
  },
  {
    id: "event-venue",
    question: "Where is the event happening?",
    answer:
      "The event will be held at Vardan Banquet Hall, Gami Tola, Katihar, Bihar.",
    category: "Event",
  },
  {
    id: "entry-gate",
    question: "Where is the entry?",
    answer:
      "The event has one main entry gate: Gate 1.",
    category: "Entry",
  },
  {
    id: "pass-types",
    question: "What types of passes are available?",
    answer:
      "The available pass categories are Solo, Couple and Group.",
    category: "Passes",
  },
  {
    id: "ticket-pricing",
    question: "How much do the passes cost?",
    answer:
      "Pass pricing will be announced through the official Rangratri channels.",
    category: "Passes",
  },
  {
    id: "instagram",
    question: "Where can I follow Rangratri?",
    answer:
      "Follow Rangratri Events on Instagram at @rangratri.events.",
    category: "Social",
  },
];