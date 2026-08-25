// Central site configuration.
// Update WHATSAPP_NUMBER once the real business number is available —
// every WhatsApp link in the app reads from this single value.

export const WHATSAPP_NUMBER = "60000000000"; // TODO: replace with Maddy Cooks' real WhatsApp number (E.164, no + or spaces)

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
  { label: "Home", href: "/#home" },
  { label: "The Chef", href: "/#chef" },
  { label: "Private Dining", href: "/#private-dining" },
  { label: "Menus", href: "/#menus" },
  { label: "Gallery", href: "/#gallery" },
] as const;
