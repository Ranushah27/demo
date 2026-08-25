// Central site configuration.
// Update WHATSAPP_NUMBER once the real business number is available —
// every WhatsApp link in the app reads from this single value.

export const WHATSAPP_NUMBER = "601131094924"; // Chef Maddy's WhatsApp (+60 11-3109 4924)

// Google Apps Script Web App URL that logs every enquiry to a Google Sheet.
// See google-apps-script/README.md for the one-time setup — until this is
// filled in, enquiries simply aren't logged anywhere (the form still works).
export const ENQUIRY_SHEET_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbxvGrwvhycA4grhjvuJ1vlaQnX9ukmpHSNoxLCGdwb8FoMfIb1AkjLvGmkvqfnMvXqi/exec";

export const SITE = {
  name: "Maddy Cooks",
  tagline: "Private dining, made personal.",
  supportingLine: "Chef-crafted dining experiences, created around your table.",
  email: "hello@maddycooks.com", // TODO: replace with real business email
  instagramHandle: "_maddy_cooks",
  instagramUrl: "https://www.instagram.com/_maddy_cooks/",
  serviceArea: "Malaysia", // TODO: confirm exact service area / cities covered
} as const;

export function buildWhatsAppLink(message: string, number: string = WHATSAPP_NUMBER) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}

export const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "The Chef", id: "chef" },
  { label: "Private Dining", id: "private-dining" },
  { label: "Menus", id: "menus" },
  { label: "Gallery", id: "gallery" },
] as const;
