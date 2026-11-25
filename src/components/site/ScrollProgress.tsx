import { motion, useScroll, useSpring } from "framer-motion";

/** Thin gold line along the top that fills as you scroll. */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-gold"
    />
  );
};

export default ScrollProgress;
