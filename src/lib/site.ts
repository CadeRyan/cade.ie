export const site = {
  name: "Cade Ryan",
  role: "Software Engineer & Maker",
  url: "https://cade.ie",
  description:
    "Cade Ryan — Dublin-born software engineer based in Vancouver, BC. Engineering Manager at Aritzia, and builder of products and platforms end-to-end — from VoxMail to The Fools' Guild.",
  email: "caderyan07@gmail.com",
  calendly: "https://calendly.com/cade-vox-mail",
  job: {
    title: "Engineering Manager",
    team: "Concierge Technology",
    company: "Aritzia",
  },
  location: {
    city: "Vancouver, BC",
    coords: "49.2827° N — 123.1207° W",
    origin: "Dublin, IE",
    timezone: "America/Vancouver",
    originTimezone: "Europe/Dublin",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
