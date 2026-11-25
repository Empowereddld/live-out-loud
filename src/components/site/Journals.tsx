import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { journals as journalList } from "@/data/journals";
import { Button } from "./SiteButton";
import GoldRule from "./GoldRule";
import Reveal, { ease } from "./Reveal";

// Cover colours cycle through the brand palette.
const covers = [
  "bg-rose text-soft-rose",
  "bg-moss text-cream",
  "bg-navy text-cream",
  "bg-gold-deep text-cream",
];

const Journals = () => {
  const { journals } = site;
  return (
    <section id="journals" className="relative scroll-mt-16 overflow-hidden py-24 md:py-36">
      <div className="container max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-[2.75rem] font-medium leading-[1.05] text-navy sm:text-6xl">
              {journals.heading}
            </h2>
            <GoldRule className="mx-auto my-7" />
          </Reveal>
          <div className="space-y-5 text-[1.0625rem] leading-[1.8] text-navy/80 sm:text-lg">
            {journals.paragraphs.map((p, i) => (
              <Reveal key={p} delay={0.1 * (i + 1)} y={18}>
                <p className="text-pretty">{p}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="eyebrow mt-14 text-moss">{journals.availableIntro}</p>
          </Reveal>
        </div>

        <ul className="mx-auto mt-8 grid max-w-[22rem] grid-cols-2 gap-4 sm:max-w-none sm:gap-7 md:grid-cols-4">
          {journalList.map((book, i) => {
            const inner = book.cover ? (
              <img
                src={book.cover}
                alt={book.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <>
                <span aria-hidden className="absolute inset-y-0 left-0 w-3 bg-black/15" />
                <span aria-hidden className="absolute inset-y-0 left-3 w-px bg-white/20" />
                <span aria-hidden className="ml-3 h-px w-8 bg-gold" />
                <span className="ml-3 text-balance font-display text-lg italic leading-tight sm:text-2xl">
                  {book.title}
                </span>
                <span
                  aria-hidden
                  className="ml-3 font-sans text-[8px] font-semibold uppercase tracking-[0.25em] opacity-70 sm:text-[9px]"
                >
                  {site.brandName}
                </span>
              </>
            );
            const cls = `journal-cover relative flex aspect-[3/4] flex-col justify-between overflow-hidden rounded-l-sm rounded-r-xl p-4 shadow-[0_30px_50px_-30px_rgba(43,58,87,0.6)] sm:p-6 ${covers[i % covers.length]}`;
            return (
              <motion.li
                key={book.id}
                initial={{ opacity: 0, y: 40, rotate: i % 2 ? 3 : -3 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.9, ease, delay: 0.1 * i }}
                whileHover={{ y: -10, rotate: i % 2 ? 1.5 : -1.5 }}
                whileTap={{ y: -6, scale: 0.98, rotate: i % 2 ? 1 : -1 }}
              >
                {book.amazonUrl ? (
                  <a
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${book.title} on Amazon`}
                    className={cls}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={cls}>{inner}</div>
                )}
              </motion.li>
            );
          })}
        </ul>

        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="mt-10 text-navy/75">{journals.moreComing}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <Button asChild size="lg" className="btn-sheen group mt-9">
              <a href={journals.buttonLink} target="_blank" rel="noopener noreferrer">
                {journals.buttonText}
                <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Journals;
