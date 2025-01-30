import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

import Image from "next/image";
import section1 from "@assets/images/Section1.png";
import section3_1 from "@assets/images/Section3_1.png";
import section3_2 from "@assets/images/Section3_2.png";
import section3_3 from "@assets/images/Section3_3.png";
import section3_4 from "@assets/images/Section3_4.png";
import section3_5 from "@assets/images/Section3_5.png";
import section3_6 from "@assets/images/Section3_6.png";
import section4 from "@assets/images/Section4.png";

import { AnimatedElement } from "@components/animations/AnimatedElement";
import { StaggeredContainer } from "@components/animations/StaggeredContainer";
import { SpeechBubble } from "./SpeechBubble";

// 첫번째 section
export const Section1 = () => {
  const speechBubbles = [
    "학교 앞에 자주 가는 최애 카페가 있는데",
    "요즘 커피값이 너무 비싸다...ㅜㅜ",
    "원하는 커피를 더 저렴하게 마실 방법은 없을까?",
  ];

  return (
    <div className="relative max-w-[440px]">
      <Image src={section1} alt={"section1"} />

      <StaggeredContainer className="absolute bottom-64 right-6 flex flex-col items-end gap-2">
        {speechBubbles.map((text, index) => (
          <SpeechBubble key={index} text={text} />
        ))}
      </StaggeredContainer>

      <AnimatedElement
        delay={0.8}
        className="absolute bottom-44 left-6 Body_1_bold text-white py-2 px-5 rounded-full w-fit bg-gradient-to-r from-[#5DA9FF] to-[#1B7BE8]"
      >
        너 &apos;커피딜&apos; 써봤어?
      </AnimatedElement>

      <div className="Subhead_2_bold text-center absolute bottom-16 left-[50%] -translate-x-[50%] whitespace-nowrap">
        <p>
          자주 가는 카페를 매일 <span className="text-Main_Blue">반값으로</span>
        </p>
        <p>
          숨어 있던 좋은 카페들{" "}
          <span className="text-Main_Blue">맞춤형 추천</span>
        </p>
      </div>
    </div>
  );
};

// 두번째 section
export const Section2 = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: false,
    margin: "-45% 0px -45% 0px",
  });
  const [isPlaying, setIsPlaying] = useState(true);

  // 스크롤에 따라서 비디오 제어시킴
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView && isPlaying) {
      video.muted = true;
      video.play().catch(() => {
        console.log("Video autoplay failed");
      });
    } else {
      video.pause();
    }
  }, [isInView, isPlaying]);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col w-full px-5 py-16 bg-white justify-center items-center gap-4"
    >
      <h2 className="Headline_3 text-Grey-900">커피딜은 이런 서비스예요!</h2>
      <video
        ref={videoRef}
        className="rounded-md cursor-pointer w-full"
        muted
        loop
        playsInline
        onClick={handleVideoClick}
      >
        <source src="/video/cupfeedeal_video.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
};

// 세번째 section
export const Section3 = () => {
  const images = [
    { src: section3_1, alt: "section3_1", animate: true },
    { src: section3_2, alt: "section3_2", animate: false },
    { src: section3_3, alt: "section3_3", animate: true },
    { src: section3_4, alt: "section3_4", animate: true },
    { src: section3_5, alt: "section3_5", animate: false },
    { src: section3_6, alt: "section3_6", animate: false },
  ];

  return (
    <div className="w-full bg-white mt-6">
      <AnimatedElement className="Headline_3 text-Grey-900 mb-3 text-center">
        커피딜은 이렇게 사용해요
      </AnimatedElement>

      {images.map((img) =>
        img.animate ? (
          <AnimatedElement key={img.alt}>
            <Image src={img.src} alt={img.alt} />
          </AnimatedElement>
        ) : (
          <Image key={img.alt} src={img.src} alt={img.alt} />
        )
      )}
    </div>
  );
};

// 네번째 section
export const Section4 = () => <Image src={section4} alt={"Section4"} />;
