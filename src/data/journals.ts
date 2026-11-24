export type Journal = { id: string; title: string; amazonUrl: string; cover: string };

// cover: image URL. Empty = soft-rose placeholder with the title.
export const journals: Journal[] = [
  { id: "speak-life", title: "Speak Life", amazonUrl: "https://www.amazon.ca/dp/B0H6STHNWP", cover: "" },
  { id: "war-room-ready", title: "War Room Ready", amazonUrl: "https://www.amazon.ca/dp/B0H6T5CLQQ", cover: "" },
  { id: "dream-loud", title: "Dream Loud", amazonUrl: "" /* PLACEHOLDER: add Amazon.ca link */, cover: "" },
  { id: "brave-and-beloved", title: "Brave & Beloved", amazonUrl: "" /* PLACEHOLDER: add Amazon.ca link */, cover: "" },
  // Template for a new journal:
  // { id: "new-journal", title: "New Journal", amazonUrl: "https://www.amazon.ca/dp/XXXXXXXXXX", cover: "" },
];
