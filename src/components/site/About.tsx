import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { site } from "@/data/site";
import aboutImage from "@/assets/kalenea-about.jpg";
import GoldRule from "./GoldRule";
import Reveal from "./Reveal";

const About = () => {
  const { about } = site;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const blockY = useTransform(scrollYProgress, [0, 1], [24, -24]);
  const [lead, ...paragraphs] = about.paragraphs;

  return (
    <section
      ref={ref}
      id="about"
      className="relative scroll-mt-16 overflow-hidden bg-soft-rose/55 py-24 md:py-36"
    >
      <div className="container grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <Reveal className="relative mx-auto mb-10 w-full max-w-[300px] sm:max-w-sm lg:mb-0 lg:max-w-none">
          <motion.div
            aria-hidden
            style={{ y: blockY }}
            className="absolute -bottom-6 -right-4 h-[72%] w-[72%] rounded-[2rem] bg-moss/90 sm:-bottom-8 sm:-right-10"
          />
          <div
            aria-hidden
            className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border border-gold/70"
          />
          <div className="relative overflow-hidden rounded-[2rem] bg-linear-to-b from-cream to-soft-rose shadow-[0_40px_80px_-40px_rgba(43,58,87,0.55)]">
            <motion.img
              src={aboutImage}
              alt="Kalenéa Johnson laughing"
              loading="lazy"
              style={{ y: imgY, scale: 1.12 }}
              className="aspect-[10/13] w-full object-cover mix-blend-multiply"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <h2 className="text-balance text-[2.75rem] font-medium leading-[1.05] tracking-[-0.01em] text-navy sm:text-6xl">
              {about.heading}
            </h2>
            <GoldRule className="my-7" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display text-xl leading-relaxed text-navy sm:text-2xl">{lead}</p>
          </Reveal>
          <div className="mt-6 space-y-5 leading-[1.85] text-navy/80">
            {paragraphs.map((p, i) => (
              <Reveal key={p} delay={0.08 * (i + 1)} y={18}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <blockquote className="relative mt-14 pl-7">
              <span
                aria-hidden
                className="absolute -left-2 -top-14 font-display text-[7rem] leading-none text-gold/40"
              >
                “
              </span>
              <p className="relative text-balance font-display text-2xl italic leading-snug text-rose sm:text-[1.9rem]">
                {about.closing}
              </p>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
