import { createFileRoute } from "@tanstack/react-router";
import { siteConfig } from "@/data/site";
import { journals } from "@/data/journals";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Accent, ComingSoon, CTAButton, EmailSignup, FadeUp, ImageSlot, JournalCard, Label, PageDivider, SectionHeading, ServiceCard } from "@/components/site/ui";

const title = "Live Out Loud | Journals, Speaking & Life Coaching by Kalenéa Johnson";
const description = "Faith-driven journals, speaking and life coaching to help you dust off old dreams, silence fear and live out loud. Get your free 7-day gift.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteConfig.businessName,
        slogan: siteConfig.tagline,
        founder: { "@type": "Person", name: siteConfig.founder },
        areaServed: siteConfig.location,
        sameAs: [siteConfig.instagram, siteConfig.tiktok, siteConfig.amazonAuthorUrl],
      }),
    }],
  }),
  component: Index,
});

const about = [
  "Hi, I'm Kalenéa—big dreamer, encourager at heart, and the voice behind Live Out Loud.",
  "For years, I cheered others on while quietly wrestling with my own doubts. Deep down, I believed there was more to life—but fear kept telling me what wasn't possible. When the world paused during the pandemic, I finally got still enough to listen to my own heart.",
  "That moment led me on a journey of healing, self-discovery, and powerful conversations with God. I began to reclaim my voice—and with it, my purpose.",
  "Live Out Loud was born from that place. I'm passionate about helping people dust off old dreams, silence fear, and step boldly into the life they were created for.",
];

function Index() {
  const email = siteConfig.contactEmail;
  return (
    <>
      <Header />
      <main className="font-sans text-navy">
        <section id="gift" className="scroll-mt-20 bg-cream px-5 py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
            <FadeUp>
              <Label>Live Out Loud</Label>
              <h1 className="mt-4 font-display text-5xl leading-[1.05] md:text-7xl">Speak <Accent>life</Accent> over yourself.</h1>
              <p className="mt-6 text-xl">Step into who God made you to be.</p>
            </FadeUp>
            <FadeUp>
              <ServiceCard className="bg-background">
                {/* PLACEHOLDER: e-book cover — set siteConfig.giftCoverUrl */}
                <ImageSlot src={siteConfig.giftCoverUrl} alt="He Is, So I Am e-book cover" label="He Is, So I Am" width={480} height={300} className="mb-6 aspect-[8/5] w-full" />
                <h2 className="font-display text-3xl">He Is, So I Am</h2>
                <p className="mt-1 text-sm font-semibold text-rose">7 days of names of God and who you are in Him</p>
                <p className="mt-4 leading-relaxed">A free 7-day guide through the names of God and who you are in Him. Each day, you'll see who God is, say who you are because of Him, and stand on the truth.</p>
                <p className="mt-4 font-medium">Join the Live Out Loud list and I'll send it straight to your inbox.</p>
                <div className="mt-5"><EmailSignup /></div>
                <p className="mt-4 text-xs text-muted-foreground">By signing up, you agree to receive emails from Live Out Loud. You can unsubscribe at any time.</p>
              </ServiceCard>
            </FadeUp>
          </div>
        </section>

        <div className="bg-background py-10"><PageDivider /></div>

        <section id="about" className="scroll-mt-20 bg-background px-5 pb-20">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[2fr_3fr] md:items-start">
            <FadeUp>
              {/* PLACEHOLDER: photo of Kalenéa — set siteConfig.founderPhotoUrl */}
              <ImageSlot src={siteConfig.founderPhotoUrl} alt="Kalenéa Johnson, founder of Live Out Loud" label="Photo of Kalenéa" width={480} height={600} className="aspect-[4/5] w-full rounded-[2rem]" />
            </FadeUp>
            <FadeUp>
              <SectionHeading>Meet the <Accent>Founder</Accent></SectionHeading>
              <div className="mt-6 space-y-4 text-lg leading-relaxed">
                {about.map((p) => <p key={p}>{p}</p>)}
              </div>
              <blockquote className="mt-8 border-l-2 border-gold pl-6 font-display text-2xl leading-snug md:text-3xl">
                Your voice matters. Your purpose is real. And it's not too late to live it out <Accent>loud.</Accent>
              </blockquote>
            </FadeUp>
          </div>
        </section>

        <section id="coaching" className="scroll-mt-20 bg-peach px-5 py-20">
          <FadeUp className="mx-auto max-w-2xl text-center">
            <ComingSoon />
            <SectionHeading className="mt-5">Life Coaching</SectionHeading>
            {siteConfig.certification && <Label className="mt-3">{siteConfig.certification}</Label>}
            <p className="mt-6 text-lg leading-relaxed">I'm preparing to open my coaching practice. If you want to move past fear and self-doubt and go after what God has placed in your heart, I'd love to work with you.</p>
            <p className="mt-4 font-medium">Join the Live Out Loud list and you'll be the first to know when spots open.</p>
            <div className="mt-6"><CTAButton href={siteConfig.signupUrl} external>Join the list</CTAButton></div>
          </FadeUp>
        </section>

        <section id="journals" className="scroll-mt-20 bg-background px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <FadeUp className="mx-auto max-w-2xl text-center">
              <SectionHeading>The <Accent>Journals</Accent></SectionHeading>
              <p className="mt-6 text-lg leading-relaxed">A journal is a place to have an honest conversation with yourself and with God. Bring your thoughts and your feelings exactly as they are, work through them page by page, and arrive at the end with strength and clarity.</p>
              <p className="mt-4 text-lg leading-relaxed">That's the heart behind every journal I create. Whether you're a child just learning to put feelings into words, or you have a lifetime of wisdom behind you, there's a journal here for you.</p>
            </FadeUp>
            <FadeUp className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {journals.map((j) => <JournalCard key={j.id} journal={j} />)}
            </FadeUp>
            <div className="mt-10 text-center">
              <p className="font-display text-xl italic">More are on the way, so stay tuned!</p>
              <div className="mt-6"><CTAButton href={siteConfig.amazonAuthorUrl} external>Find them on Amazon.ca</CTAButton></div>
            </div>
          </div>
        </section>

        <div className="bg-background pb-10"><PageDivider /></div>

        <section id="speaking" className="scroll-mt-20 bg-soft-rose px-5 py-20">
          <FadeUp className="mx-auto max-w-2xl text-center">
            <SectionHeading>Speaking, Seminars & <Accent>Workshops</Accent></SectionHeading>
            <p className="mt-6 text-lg">Encouraging messages for your church, group or event.</p>
            <p className="mt-2">To invite Kalenéa to speak or lead a workshop, send a note.</p>
            <div className="mt-6">
              {email ? <CTAButton href={`mailto:${email}`}>Email Kalenéa</CTAButton> : <CTAButton disabled>[PLACEHOLDER: add contact email]</CTAButton>}
            </div>
          </FadeUp>
        </section>
      </main>
      <Footer />
    </>
  );
}
