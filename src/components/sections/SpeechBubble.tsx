import { AnimatedElement } from "@components/animations/AnimatedElement";

interface SpeechBubbleProps {
  text: string;
  delay?: number;
  className?: string;
}

export const SpeechBubble = ({
  text,
  delay = 0,
  className = "",
}: SpeechBubbleProps) => (
  <AnimatedElement
    delay={delay}
    className={`Body_2_med text-Grey-800 bg-[#BEDCFF] py-2 px-5 rounded-full w-fit ${className}`}
  >
    {text}
  </AnimatedElement>
);
