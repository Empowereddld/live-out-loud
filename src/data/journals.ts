import speakLifeCover from "@/assets/speak-life-journal-cover.png.asset.json";
import warRoomCover from "@/assets/war-room-ready-journal-cover.png.asset.json";
import dreamLoudCover from "@/assets/dream-loud-journal-cover.webp.asset.json";
import braveAndBelovedCover from "@/assets/brave-and-beloved-journal-cover.png.asset.json";

export type Journal = {
  id: string;
  title: string;
  amazonUrl: string;
  cover: string;
  // Alt text for the cover image; falls back to the title when empty.
  alt?: string;
  // How the cover fills the card: "cover" crops to fill (default),
  // "contain" shows the whole cover without cropping.
  fit?: "cover" | "contain";
};

// The journals shown as book covers in "The Journals" section, in order.
// amazonUrl: optional link for that cover (leave "" for no link).
// cover: optional image URL of the real cover. Empty = styled cover with the title.
export const journals: Journal[] = [
  {
    id: "speak-life",
    title: "Speak Life",
    amazonUrl: "https://www.amazon.ca/dp/B0H6STHNWP",
    cover: speakLifeCover.url,
    alt: "Speak Life daily affirmation journal cover.",
  },
  {
    id: "war-room-ready",
    title: "War Room Ready",
    amazonUrl: "https://www.amazon.ca/dp/B0H6T5CLQQ",
    cover: warRoomCover.url,
    alt: "War Room Ready 52-week guided prayer journal cover.",
  },
  {
    id: "dream-loud",
    title: "Dream Loud",
    amazonUrl: "https://www.amazon.ca/Dream-Loud-Vision-Planner-Dreams/dp/B0H8MYJ8ZV",
    cover: dreamLoudCover.url,
    alt: "Dream Loud vision and goal planner journal cover.",
  },
  {
    id: "brave-and-beloved",
    title: "Brave & Beloved",
    amazonUrl:
      "https://www.amazon.ca/Brave-Beloved-Confidence-Emotional-Scripture/dp/B0H78C69DN",
    cover: braveAndBelovedCover.url,
    alt: "Brave & Beloved faith journal for teen girls cover.",
    fit: "contain",
  },
  // Template for a new journal:
  // { id: "new-journal", title: "New Journal", amazonUrl: "https://www.amazon.ca/dp/XXXXXXXXXX", cover: "" },
];
