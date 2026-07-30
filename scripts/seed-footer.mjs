/**
 * Seed footer data into the Global single type.
 * Run with:  node scripts/seed-footer.mjs  (from antifake_cms root)
 * Strapi must NOT be running when you run this.
 */

import { createStrapi } from "@strapi/strapi";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appDir = path.join(__dirname, "..");

const app = await createStrapi({ appDir, serveAdminPanel: false }).load();

try {
  // Find the existing global document
  const globals = await app.db.query("api::global.global").findMany({ limit: 1 });
  const existing = globals[0];

  if (!existing) {
    console.error("No global entry found. Visit Strapi admin once to create it.");
    process.exit(1);
  }

  await app.db.query("api::global.global").update({
    where: { id: existing.id },
    data: {
      FooterSection: {
        newsletterHeadline: "Want more?\nWe got you.",
        newsletterSubtext:
          "All the latest product drops, limited offers, and wellness tips — straight to your inbox.",
        newsletterDisclaimer:
          "By subscribing you consent to receive promotional and personalised updates from Antifake. Message and data rates may apply. You can unsubscribe at any time. View our Privacy Policy.",
        emailPlaceholder: "Email address",
        phonePlaceholder: "Phone number",
        brandMark: "Antifake",
        customerServiceTitle: "Customer Service",
        customerServiceLinks: [
          { label: "Order Status",        url: "/track",          isExternal: false },
          { label: "Shipping Information", url: "/contact",        isExternal: false },
          { label: "Returns & Exchanges", url: "/contact",        isExternal: false },
          { label: "Contact Us",          url: "/contact",        isExternal: false },
          { label: "Help & FAQs",         url: "/faq",            isExternal: false },
          { label: "My Account",          url: "/profile",        isExternal: false },
        ],
        aboutTitle: "About",
        aboutDescription:
          "Antifake was founded to bring nature-backed sun care to every skin tone — clinically tested, everyday essential.",
        aboutLinks: [
          { label: "About Antifake", url: "/about",        isExternal: false },
          { label: "Our Story",      url: "/about",        isExternal: false },
          { label: "Our Products",   url: "/our-product",  isExternal: false },
        ],
        socialLinks: [
          { platform: "tiktok",     url: "#" },
          { platform: "instagram",  url: "#" },
          { platform: "facebook",   url: "#" },
          { platform: "twitter",    url: "#" },
          { platform: "youtube",    url: "#" },
        ],
        localeText: "India | English",
        copyright: "©2025 Antifake",
        legalLinks: [
          { label: "Privacy Policy", url: "/privacy-policy", isExternal: false },
          { label: "Terms of Use",   url: "/terms-of-use",   isExternal: false },
          { label: "Refund Policy",  url: "/refund-policy",  isExternal: false },
        ],
      },
    },
  });

  console.log("✓ Footer data seeded successfully.");
} catch (err) {
  console.error("Seed failed:", err.message);
} finally {
  await app.destroy();
  process.exit(0);
}
