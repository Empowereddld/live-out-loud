import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "./SiteButton";
import GoldRule from "./GoldRule";
import Reveal from "./Reveal";

const Coaching = () => {
  const { coaching } = site;
  return (
    <section
      id="coaching"
      className="relative scroll-mt-16 overflow-hidden bg-moss py-24 text-white md:py-36"
    >
      {/* light wash and a large faint arch, echoing the hero */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 size-[420px] -translate-x-1/2 sm:size-[700px] -translate-y-1/3 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute left-1/2 top-16 h-[440px] w-[300px] -translate-x-1/2 rounded-t-full border border-gold/30 sm:h-[560px] sm:w-[440px] md:h-[640px] md:w-[520px]" />
      </div>
      <div className="container relative max-w-3xl text-center">
        <Reveal>
          <h2 className="text-balance text-[2.75rem] font-medium leading-[1.05] sm:text-6xl">
            {coaching.heading}
          </h2>
          <GoldRule className="mx-auto my-7" />
        </Reveal>
        <div className="space-y-5 text-[1.0625rem] leading-[1.8] text-white/90 sm:text-lg">
          {coaching.paragraphs.map((p, i) => (
            <Reveal key={p} delay={0.1 * (i + 1)} y={18}>
              <p className="text-pretty">{p}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <Button asChild variant="light" size="lg" className="btn-sheen group mt-11">
            <a href={coaching.buttonLink} target="_blank" rel="noopener noreferrer">
              {coaching.buttonText}
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
};

export default Coaching;
