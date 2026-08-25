// Option lists for the multi-step "Build Your Dining Experience" enquiry form.

export const OCCASION_OPTIONS = [
  "Birthday",
  "Anniversary",
  "Romantic Dinner",
  "Family Gathering",
  "Friends Gathering",
  "Corporate Dinner",
  "Celebration",
  "Other",
] as const;

export const PROTEIN_OPTIONS = ["Beef", "Chicken", "Lamb", "Fish", "Seafood", "Vegetarian", "Chef's Choice"] as const;

export const CUISINE_OPTIONS = [
  "Modern Asian",
  "Malaysian",
  "European",
  "French-inspired",
  "Italian-inspired",
  "Contemporary",
  "Fusion",
  "Comfort Food",
  "Chef's Choice",
  "Other",
] as const;

export const SPICE_OPTIONS = ["No Spice", "Mild", "Medium", "Spicy", "Chef's Choice"] as const;

export const DIETARY_OPTIONS = ["None", "Vegetarian", "Vegan", "Halal", "Gluten-Free", "Dairy-Free", "Other"] as const;

export const DINING_STYLE_OPTIONS = [
  "Relaxed",
  "Elegant",
  "Romantic",
  "Family-style",
  "Tasting menu",
  "Chef's choice",
] as const;

export const COURSE_OPTIONS = ["3 Courses", "4 Courses", "5 Courses", "Chef's Tasting", "Not Sure"] as const;

export const BUDGET_OPTIONS = [
  "RM150–RM250",
  "RM250–RM350",
  "RM350–RM500",
  "RM500+",
  "I'd like Chef Maddy to recommend",
] as const;
