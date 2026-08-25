export const passes = [
  {
    id: "solo",
    name: "Solo",
    description: "Valid for entry of one girl.",
    eligibility: "One girl",
    price: null,
    priceVisible: true,
    status: "active",
  },

  {
    id: "couple",
    name: "Couple",
    description: "Valid for one male + one female.",
    eligibility: "One male + one female",
    price: null,
    priceVisible: true,
    status: "active",
  },

  {
    id: "group",
    name: "Group",
    description: "Valid for 4 people. A group cannot consist of 4 males.",
    eligibility: "4 people, not 4 males",
    price: null,
    priceVisible: true,
    status: "active",
  },
];

export const ticketSales = {
  status: "coming-soon",
  label: "Ticket Sales Launching Soon",
};