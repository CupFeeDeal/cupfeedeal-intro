import { motion } from "framer-motion";
import { useScrollAnimation } from "src/hooks/useScrollAnimation";
import { AnimationProps } from "src/types/animation";

export const defaultAnimationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const AnimatedElement = ({
  delay = 0,
  duration = 0.5,
  children,
  className,
}: AnimationProps) => {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={defaultAnimationVariants}
      transition={{ delay, duration }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
