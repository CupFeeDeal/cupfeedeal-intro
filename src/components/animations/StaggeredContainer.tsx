import { motion } from "framer-motion";
import { useScrollAnimation } from "src/hooks/useScrollAnimation";
import { AnimationProps } from "src/types/animation";

interface StaggeredContainerProps extends Omit<AnimationProps, "duration"> {
  staggerDelay?: number;
}

export const StaggeredContainer = ({
  children,
  delay = 0,
  staggerDelay = 0.2,
  className,
}: StaggeredContainerProps) => {
  const { ref, controls } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
