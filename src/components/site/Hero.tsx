import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { site } from "@/data/site";
import heroImage from "@/assets/kalenea-hero.jpg";
import SignupForm from "./SignupForm";
import GoldRule from "./GoldRule";
import RotatingBadge from "./RotatingBadge";
import { ease } from "./Reveal";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease, delay },
});

const Hero = () => {
  const { hero } = site;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  // First word upright, the rest in rose italic ("Live" / "Out Loud").
  const [first, ...rest] = hero.headline.split(" ");

  return (
    <section ref={ref} id="top" className="relative overflow-hidden">
      {/* soft drifting colour washes */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 size-[300px] rounded-full bg-soft-rose blur-3xl animate-drift sm:size-[520px]" />
        <div className="absolute -right-32 bottom-0 size-[280px] rounded-full bg-sage blur-3xl animate-drift-slow sm:size-[480px]" />
      </div>

      <div className="container relative grid items-center gap-14 pb-20 pt-8 md:pb-28 md:pt-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
        <div className="order-2 lg:order-1">
          <motion.h1
            {...fadeUp(0.15)}
            className="text-balance text-[3.4rem] font-medium leading-[0.98] tracking-[-0.02em] text-navy sm:text-7xl lg:text-[5.6rem]"
          >
            {first} <em className="font-normal text-rose">{rest.join(" ")}</em>
          </motion.h1>
          <motion.p
            {...fadeUp(0.3)}
            className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-navy/75 sm:text-xl"
          >
            {hero.subheading}
          </motion.p>

          <motion.div
            {...fadeUp(0.45)}
            id="free-gift"
            className="group relative mt-11 scroll-mt-28 rounded-[1.75rem] bg-white/85 p-7 shadow-[0_40px_80px_-45px_rgba(43,58,87,0.45)] ring-1 ring-gold/30 backdrop-blur-sm sm:p-9"
          >
            <span
              aria-hidden
              className="absolute inset-x-10 -top-px h-px bg-linear-to-r from-transparent via-gold to-transparent"
            />
            <p className="eyebrow text-moss">{hero.giftLabel}</p>
            <h2 className="mt-3 text-[2rem] font-medium leading-tight text-navy sm:text-[2.6rem]">
              {hero.giftTitle}
            </h2>
            <GoldRule className="my-5" />
            <p className="leading-relaxed text-navy/80">{hero.giftDescription}</p>
            <p className="mt-7 text-sm font-semibold text-navy">{hero.signupText}</p>
            <div className="mt-3">
              <SignupForm />
            </div>
            <p className="mt-4 text-xs leading-relaxed text-navy/70">{hero.smallPrint}</p>
          </motion.div>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-[280px] sm:max-w-sm lg:order-2 lg:max-w-[460px]">
          <motion.div style={{ y: photoY }} className="relative">
            {/* offset gold arch outline */}
            <motion.div
              aria-hidden
              initial={{ opacity: 0, x: 0, y: 0 }}
              animate={{ opacity: 1, x: 16, y: 16 }}
              transition={{ duration: 1.4, ease, delay: 0.6 }}
              className="absolute inset-0 rounded-t-full border border-gold"
            />
            {/* photo with curtain reveal */}
            <motion.div
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 1.5, ease, delay: 0.1 }}
              className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-linear-to-b from-soft-rose via-[#F6EDEC] to-sage"
            >
              <motion.img
                src={heroImage}
                alt="Kalenéa Johnson, founder of Live Out Loud, smiling"
                initial={{ scale: 1.18 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2.2, ease, delay: 0.1 }}
                className="h-full w-full object-cover object-top mix-blend-multiply"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-linear-to-t from-navy/15 via-transparent to-transparent"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.1, ease, delay: 1.1 }}
              className="absolute -bottom-8 -left-6 sm:-left-12"
            >
              <RotatingBadge />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
