import { describe, expect, it } from "vitest";

import { journals } from "@/data/journals";

// Content rules the site must keep: covers, alt text and store links per card.
describe("Journal cards", () => {
  it("shows the Brave & Beloved cover whole, with its own alt text and store link", () => {
    const book = journals.find((j) => j.id === "brave-and-beloved");

    expect(book?.cover).toMatch(/brave-and-beloved-journal-cover\.png$/);
    expect(book?.alt).toBe("Brave & Beloved faith journal for teen girls cover.");
    expect(book?.fit).toBe("contain");
    expect(book?.ratio).toBe("1024/1536");
    expect(book?.amazonUrl).toBe(
      "https://www.amazon.ca/Brave-Beloved-Confidence-Emotional-Scripture/dp/B0H78C69DN",
    );
  });

  it("shows the Dream Loud cover whole, with its own alt text and store link", () => {
    const book = journals.find((j) => j.id === "dream-loud");

    expect(book?.cover).toMatch(/dream-loud-journal-cover\.webp$/);
    expect(book?.alt).toBe("Dream Loud vision and goal planner journal cover.");
    expect(book?.fit).toBe("contain");
    expect(book?.ratio).toBe("1356/1920");
    expect(book?.amazonUrl).toBe(
      "https://www.amazon.ca/Dream-Loud-Vision-Planner-Dreams/dp/B0H8MYJ8ZV",
    );
  });

  it("shows the War Room Ready cover whole, with its own alt text and store link", () => {
    const book = journals.find((j) => j.id === "war-room-ready");

    expect(book?.cover).toMatch(/war-room-ready-journal-cover\.png$/);
    expect(book?.alt).toBe("War Room Ready 52-week guided prayer journal cover.");
    expect(book?.fit).toBe("contain");
    expect(book?.ratio).toBe("1023/1537");
    expect(book?.amazonUrl).toBe("https://www.amazon.ca/dp/B0H6T5CLQQ");
  });

  it("keeps the Amazon links already published", () => {
    const links = Object.fromEntries(
      journals.map((j) => [j.id, j.amazonUrl]),
    );

    expect(links["speak-life"]).toBe("https://www.amazon.ca/dp/B0H6STHNWP");
    expect(links["war-room-ready"]).toBe("https://www.amazon.ca/dp/B0H6T5CLQQ");
    expect(links["dream-loud"]).toBe(
      "https://www.amazon.ca/Dream-Loud-Vision-Planner-Dreams/dp/B0H8MYJ8ZV",
    );
  });
});
