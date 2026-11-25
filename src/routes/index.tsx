import { createFileRoute } from "@tanstack/react-router";
import { MotionConfig } from "framer-motion";
import { site } from "@/data/site";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Ribbon from "@/components/site/Ribbon";
import About from "@/components/site/About";
import Coaching from "@/components/site/Coaching";
import Journals from "@/components/site/Journals";
import Footer from "@/components/site/Footer";
import ScrollProgress from "@/components/site/ScrollProgress";

const title = "Live Out Loud | Kalenéa Johnson";
const description =
  "Speak life over yourself. Step into who God made you to be. Get He Is, So I Am, a free 7-day guide through the names of God.";

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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: site.brandName,
          founder: { "@type": "Person", name: "Kalenéa Johnson" },
          sameAs: [site.footer.instagram.link, site.footer.tiktok.link, site.journals.buttonLink],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    // reducedMotion="user" turns animations off for visitors who ask their device for less motion
    <MotionConfig reducedMotion="user">
      <div className="grain relative min-h-screen bg-background">
        <ScrollProgress />
        <Header />
        <main>
          <Hero />
          <Ribbon />
          <About />
          <Coaching />
          <Journals />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
