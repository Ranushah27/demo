// Placeholder answers are used wherever the response depends on business
// policy that hasn't been provided (pricing, coverage area, lead times, etc.).

export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is private dining?",
    answer:
      "Private dining with Maddy Cooks means Chef Maddy prepares a personalised, restaurant-style meal at your chosen location, designed specifically for your group rather than a fixed menu served to the public.",
  },
  {
    question: "Where can Chef Maddy provide private dining?",
    answer: "[SERVICE AREA: locations and travel radius Chef Maddy currently covers.]",
  },
  {
    question: "How many guests can you accommodate?",
    answer: "[GUEST CAPACITY: minimum and maximum group sizes Chef Maddy can cater for.]",
  },
  {
    question: "Can I customise the menu?",
    answer:
      "Yes. You share your preferences (proteins, flavours, occasion and dietary needs) and Chef Maddy curates a menu around them. Menus are not fixed or ordered à la carte.",
  },
  {
    question: "Can I choose the protein?",
    answer:
      "Yes, you can let us know which proteins you'd like at the centre of your meal, and any you'd prefer to avoid, through the enquiry form.",
  },
  {
    question: "Can dietary requirements be accommodated?",
    answer:
      "Dietary requirements are collected as part of every enquiry and considered when the menu is created. [Confirm specific dietary accommodations Chef Maddy is able to guarantee.]",
  },
  {
    question: "Can you accommodate allergies?",
    answer: "[ALLERGY POLICY: how allergies are handled and any limitations, to be confirmed by the business.]",
  },
  {
    question: "How far in advance should I book?",
    answer: "[LEAD TIME: recommended notice period for booking a private dining experience.]",
  },
  {
    question: "How does pricing work?",
    answer:
      "Your enquiry includes an approximate budget per person as a guide only. Chef Maddy will follow up with a tailored quote based on your menu, guest count and occasion. [Add further pricing policy detail here.]",
  },
  {
    question: "How does payment work?",
    answer: "[PAYMENT POLICY: deposits, accepted payment methods and timing, to be confirmed by the business.]",
  },
  {
    question: "What happens after I submit an enquiry?",
    answer:
      "Chef Maddy will review your dining request and follow up with you directly, by WhatsApp or email, with availability, menu recommendations and next steps. Submitting an enquiry does not confirm a booking.",
  },
  {
    question: "What happens if my preferred date is unavailable?",
    answer: "[AVAILABILITY POLICY: how alternative dates or a waitlist are handled.]",
  },
];
