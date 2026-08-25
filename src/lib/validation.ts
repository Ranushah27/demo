import type { EnquiryData } from "./enquiry";

export type StepErrors = Partial<Record<keyof EnquiryData, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d][\d\s-]{7,}$/;

export function validateStep(step: number, data: EnquiryData): StepErrors {
  const errors: StepErrors = {};

  if (step === 0) {
    if (!data.fullName.trim()) errors.fullName = "Please tell us your name.";
    if (!data.email.trim()) errors.email = "Please enter your email.";
    else if (!EMAIL_RE.test(data.email)) errors.email = "That email doesn't look right.";
    if (!data.whatsapp.trim()) errors.whatsapp = "Please add a WhatsApp number.";
    else if (!PHONE_RE.test(data.whatsapp.trim())) errors.whatsapp = "Please enter a valid phone number.";
    if (!data.date) errors.date = "Please choose a date.";
    if (!data.time) errors.time = "Please choose a time.";
    if (!data.location.trim()) errors.location = "Please tell us the location.";
    if (!data.guests.trim()) errors.guests = "Please tell us how many guests.";
    else if (!/^\d+$/.test(data.guests.trim()) || Number(data.guests) < 1) {
      errors.guests = "Please enter a valid number of guests.";
    }
    if (!data.occasion) errors.occasion = "Please choose an occasion.";
    else if (data.occasion === "Other" && !data.occasionOther.trim()) {
      errors.occasionOther = "Please tell us the occasion.";
    }
  }

  if (step === 1) {
    if (data.proteins.length === 0) errors.proteins = "Choose at least one option.";
  }

  if (step === 2) {
    if (!data.cuisine) errors.cuisine = "Please choose a flavour direction.";
    else if (data.cuisine === "Other" && !data.cuisineOther.trim()) {
      errors.cuisineOther = "Please tell us what you have in mind.";
    }
    if (!data.spiceLevel) errors.spiceLevel = "Please choose a spice preference.";
  }

  if (step === 3) {
    if (data.dietary.length === 0) errors.dietary = "Choose at least one option (select 'None' if not applicable).";
    else if (data.dietary.includes("Other") && !data.dietaryOther.trim()) {
      errors.dietaryOther = "Please tell us the dietary requirement.";
    }
  }

  if (step === 4) {
    if (!data.diningStyle) errors.diningStyle = "Please choose how you'd like the experience to feel.";
    if (!data.courses) errors.courses = "Please choose a course preference.";
    if (!data.budget) errors.budget = "Please choose an approximate budget.";
  }

  return errors;
}
