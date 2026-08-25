export type OccasionCard = {
  title: string;
  description: string;
};

export const OCCASIONS: OccasionCard[] = [
  { title: "Intimate Dinners", description: "For couples and small gatherings." },
  { title: "Celebrations", description: "Birthdays, anniversaries and milestones." },
  { title: "Family & Friends", description: "A memorable meal shared around one table." },
  { title: "Corporate Dining", description: "Private dining for executive or small corporate gatherings." },
  { title: "Bespoke Experiences", description: "A menu created specifically around your preferences." },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Tell us about your evening",
    description: "Date, location, number of guests and occasion.",
  },
  {
    number: "02",
    title: "Tell us what you love",
    description: "Choose your preferred proteins, flavours and dietary requirements.",
  },
  {
    number: "03",
    title: "Chef Maddy creates the menu",
    description: "Your preferences become the foundation for a personalised menu.",
  },
  {
    number: "04",
    title: "We bring dinner to your table",
    description: "Chef Maddy prepares the experience at your chosen location.",
  },
];
