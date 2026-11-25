import { motion, type HTMLMotionProps } from "framer-motion";

export const ease = [0.22, 1, 0.36, 1] as const;

type RevealProps = HTMLMotionProps<"div"> & { delay?: number; y?: number };

/** Fades and lifts its content into place the first time it scrolls into view. */
const Reveal = ({ delay = 0, y = 28, children, ...rest }: RevealProps) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.9, ease, delay }}
    {...rest}
  >
    {children}
  </motion.div>
);

export default Reveal;
