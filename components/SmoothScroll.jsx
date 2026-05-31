"use client";

import { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";

export default function SmoothScroll({ children }) {
  const contentRef = useRef(null);

  const refreshHeight = useCallback(() => {
    const content = contentRef.current;

    if (!content) {
      return;
    }

    document.body.style.height = `${content.getBoundingClientRect().height}px`;
  }, []);

  useEffect(() => {
    if (!contentRef.current) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches) {
      document.body.style.height = "";
      return;
    }

    const content = contentRef.current;
    let current = window.scrollY;

    refreshHeight();
    gsap.set(content, {
      position: "fixed",
      inset: "0 auto auto 0",
      width: "100%",
      willChange: "transform",
    });

    const update = () => {
      current += (window.scrollY - current) * 0.09;
      gsap.set(content, { y: -current });
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    const resizeObserver = new ResizeObserver(refreshHeight);
    resizeObserver.observe(content);
    window.addEventListener("resize", refreshHeight);

    return () => {
      gsap.ticker.remove(update);
      resizeObserver.disconnect();
      window.removeEventListener("resize", refreshHeight);
      document.body.style.height = "";
      gsap.set(content, { clearProps: "position,inset,width,willChange,transform" });
    };
  }, [refreshHeight]);

  return <div ref={contentRef}>{children}</div>;
}
