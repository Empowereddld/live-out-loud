/**
 * ALL THE WORDS AND LINKS ON THE PAGE LIVE HERE.
 *
 * To change text, edit the words between the quotes and save.
 * To change a link, paste the new address between the quotes.
 * Each section below matches a section of the page, top to bottom.
 */

export const site = {
  brandName: "Live Out Loud",

  // Top navigation links (they scroll to sections on the page)
  nav: [
    { label: "Free gift", href: "#free-gift" },
    { label: "About", href: "#about" },
    { label: "Coaching", href: "#coaching" },
    { label: "Journals", href: "#journals" },
  ],

  // 1. TOP OF THE PAGE (the free gift)
  hero: {
    headline: "Live Out Loud",
    subheading: "Speak life over yourself. Step into who God made you to be.",
    giftLabel: "A free gift for you",
    giftTitle: "He Is, So I Am",
    giftDescription:
      "A free 7-day guide through the names of God and who you are in Him. Each day, you'll see who God is, say who you are because of Him, and stand on the truth.",
    signupText: "Enter your email and I'll send it straight to your inbox.",
    emailPlaceholder: "Your email address",
    buttonText: "Get my free gift",
    smallPrint:
      "By signing up, you agree to receive emails from Live Out Loud. You can unsubscribe at any time.",
    // Beehiiv sign-up page. The email typed on the site is passed along to it.
    signupLink: "https://kaleneas-newsletter.beehiiv.com/subscribe",
  },

  // 2. ABOUT ME
  about: {
    heading: "Meet the Founder",
    paragraphs: [
      "Hi, I'm Kalenéa—big dreamer, encourager at heart, and the voice behind Live Out Loud.",
      "For years, I cheered others on while quietly wrestling with my own doubts. Deep down, I believed there was more to life—but fear kept telling me what wasn't possible. When the world paused during the pandemic, I finally got still enough to listen to my own heart.",
      "That moment led me on a journey of healing, self-discovery, and powerful conversations with God. I began to reclaim my voice—and with it, my purpose.",
      "Live Out Loud was born from that place. I'm passionate about helping people dust off old dreams, silence fear, and step boldly into the life they were created for.",
    ],
    closing: "Your voice matters. Your purpose is real. And it's not too late to live it out loud.",
  },

  // 3. COACHING
  coaching: {
    heading: "Life Coaching: Coming Soon",
    paragraphs: [
      "I'm preparing to open my coaching practice. If you want to move past fear and self-doubt and go after what God has placed in your heart, I'd love to work with you.",
      "Join the waitlist and you'll be the first to know when spots open.",
    ],
    buttonText: "Join the waitlist",
    // Waitlist sign-up (same Beehiiv list as the free gift)
    buttonLink: "https://kaleneas-newsletter.beehiiv.com/subscribe",
  },

  // 4. JOURNALS
  journals: {
    heading: "The Journals",
    paragraphs: [
      "These journals are a place where you can have an honest conversation with yourself and with God. Bring your thoughts and your feelings exactly as they are, work through them page by page, and arrive at the end with strength and clarity.",
      "That's the heart behind every journal I create. Whether you're a child just learning to put feelings into words, or you have a lifetime of wisdom behind you, there's a journal here for you.",
    ],
    availableIntro: "Available now:",
    // The journal titles shown as covers live in src/data/journals.ts
    moreComing: "More are on the way, so stay tuned!",
    buttonText: "Find them on Amazon",
    buttonLink: "https://www.amazon.com/author/kaleneajohnson",
  },

  // 5. FOOTER
  footer: {
    instagram: { handle: "@liveoutloud.now", link: "https://www.instagram.com/liveoutloud.now" },
    tiktok: { handle: "@liveoutloud.now", link: "https://www.tiktok.com/@liveoutloud.now" },
    copyright: "© 2026 Live Out Loud",
  },
};
