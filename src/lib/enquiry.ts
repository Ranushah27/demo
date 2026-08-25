export type EnquiryData = {
  // Step 1 — Your Event
  fullName: string;
  email: string;
  whatsapp: string;
  date: string;
  time: string;
  location: string;
  guests: string;
  occasion: string;
  occasionOther: string;

  // Step 2 — What Do You Love
  proteins: string[];
  avoidProteins: string;

  // Step 3 — Your Flavour
  cuisine: string;
  cuisineOther: string;
  spiceLevel: string;

  // Step 4 — Dietary Requirements
  dietary: string[];
  dietaryOther: string;
  allergies: string;
  dislikedIngredients: string;

  // Step 5 — Dining Style
  diningStyle: string;
  courses: string;
  budget: string;

  // Step 6 — Final Message
  notes: string;
  inspirationImageName: string;
};

export const EMPTY_ENQUIRY: EnquiryData = {
  fullName: "",
  email: "",
  whatsapp: "",
  date: "",
  time: "",
  location: "",
  guests: "",
  occasion: "",
  occasionOther: "",

  proteins: [],
  avoidProteins: "",

  cuisine: "",
  cuisineOther: "",
  spiceLevel: "",

  dietary: [],
  dietaryOther: "",
  allergies: "",
  dislikedIngredients: "",

  diningStyle: "",
  courses: "",
  budget: "",

  notes: "",
  inspirationImageName: "",
};

function line(label: string, value: string) {
  return `${label}: ${value || "Not provided"}`;
}

// Resolves a single-select "Other" answer to the free text the guest typed,
// falling back to the raw value for every other option.
function resolveOther(value: string, otherText: string) {
  return value === "Other" && otherText ? otherText : value;
}

// Same idea for a multi-select list — swaps the literal "Other" entry for
// what the guest typed, if anything.
function resolveOtherList(values: string[], otherText: string) {
  if (!otherText || !values.includes("Other")) return values;
  return values.map((v) => (v === "Other" ? otherText : v));
}

export function buildEnquiryMessage(data: EnquiryData): string {
  return [
    "MADDY COOKS · PRIVATE DINING ENQUIRY",
    "",
    line("Name", data.fullName),
    line("Email", data.email),
    line("WhatsApp", data.whatsapp),
    line("Date", data.date),
    line("Time", data.time),
    line("Location", data.location),
    line("Guests", data.guests),
    line("Occasion", resolveOther(data.occasion, data.occasionOther)),
    "",
    line("Preferred Proteins", data.proteins.join(", ")),
    line("Avoided Proteins", data.avoidProteins),
    "",
    line("Cuisine", resolveOther(data.cuisine, data.cuisineOther)),
    line("Spice Level", data.spiceLevel),
    "",
    line("Dietary Requirements", resolveOtherList(data.dietary, data.dietaryOther).join(", ")),
    line("Allergies", data.allergies),
    line("Ingredients to Avoid", data.dislikedIngredients),
    "",
    line("Dining Style", data.diningStyle),
    line("Courses", data.courses),
    line("Budget", data.budget),
    "",
    line("Additional Notes", data.notes),
    ...(data.inspirationImageName ? [line("Inspiration Image", data.inspirationImageName)] : []),
  ].join("\n");
}
