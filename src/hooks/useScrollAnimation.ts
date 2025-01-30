"use client";

import { useEffect } from "react";
import { useAnimation, useInView, UseInViewOptions } from "framer-motion";
import { useRef } from "react";

export const useScrollAnimation = (options?: UseInViewOptions) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, ...options });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return { ref, controls, isInView };
};
