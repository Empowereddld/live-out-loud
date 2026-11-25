export type Journal = { id: string; title: string; amazonUrl: string; cover: string };

// The journals shown as book covers in "The Journals" section, in order.
// amazonUrl: optional link for that cover (leave "" for no link).
// cover: optional image URL of the real cover. Empty = styled cover with the title.
export const journals: Journal[] = [
  {
    id: "speak-life",
    title: "Speak Life",
    amazonUrl: "https://www.amazon.ca/dp/B0H6STHNWP",
    cover: "",
  },
  {
    id: "war-room-ready",
    title: "War Room Ready",
    amazonUrl: "https://www.amazon.ca/dp/B0H6T5CLQQ",
    cover: "",
  },
  {
    id: "dream-loud",
    title: "Dream Loud",
    amazonUrl: "" /* PLACEHOLDER: add Amazon link */,
    cover: "",
  },
  {
    id: "brave-and-beloved",
    title: "Brave & Beloved",
    amazonUrl: "" /* PLACEHOLDER: add Amazon link */,
    cover: "",
  },
  // Template for a new journal:
  // { id: "new-journal", title: "New Journal", amazonUrl: "https://www.amazon.ca/dp/XXXXXXXXXX", cover: "" },
];
