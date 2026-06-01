"use client";

import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export default function SmoothScroll({ children }) {
  const smootherRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches || smootherRef.current) {
      return;
    }

    smootherRef.current = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 0.65,
      smoothTouch: 0.08,
      normalizeScroll: true,
      ignoreMobileResize: true,
      effects: false,
    });

    ScrollTrigger.refresh();

    return () => smootherRef.current?.kill();
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
