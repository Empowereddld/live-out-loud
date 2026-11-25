import { describe, expect, it } from "vitest";

import { journals } from "@/data/journals";

// Content rules the site must keep: covers, alt text and store links per card.
describe("Journal cards", () => {
  it("shows the Brave & Beloved cover whole, with its own alt text and store link", () => {
    const book = journals.find((j) => j.id === "brave-and-beloved");

    expect(book?.cover).toMatch(/brave-and-beloved-journal-cover\.png$/);
    expect(book?.alt).toBe("Brave & Beloved faith journal for teen girls cover.");
    expect(book?.fit).toBe("contain");
    expect(book?.amazonUrl).toBe(
      "https://www.amazon.ca/Brave-Beloved-Confidence-Emotional-Scripture/dp/B0H78C69DN",
    );
  });

  it("keeps the Amazon links already published", () => {
    const links = Object.fromEntries(
      journals.map((j) => [j.id, j.amazonUrl]),
    );

    expect(links["speak-life"]).toBe("https://www.amazon.ca/dp/B0H6STHNWP");
    expect(links["war-room-ready"]).toBe("https://www.amazon.ca/dp/B0H6T5CLQQ");
  });
});
