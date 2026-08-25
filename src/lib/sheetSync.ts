import { ENQUIRY_SHEET_WEBHOOK_URL } from "../config/site";
import type { EnquiryData } from "./enquiry";

// Best-effort log to a Google Sheet — never blocks or fails the enquiry
// flow. Apps Script Web Apps don't return CORS headers, so this fires the
// request without reading the response (the standard no-cors pattern).
export function logEnquiryToSheet(data: EnquiryData): void {
  if (!ENQUIRY_SHEET_WEBHOOK_URL) return;

  fetch(ENQUIRY_SHEET_WEBHOOK_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(data),
  }).catch((error) => {
    console.error("Failed to log enquiry to sheet", error);
  });
}
