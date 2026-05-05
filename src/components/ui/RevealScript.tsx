"use client";
import { useEffect } from "react";

export default function RevealScript() {
  useEffect(() => {
    const selectors = [
      ".reveal",
      ".reveal-heading",
      ".reveal-left",
      ".reveal-right",
      ".reveal-badge",
      ".reveal-scale",
      ".reveal-stagger",
    ];

    const all = document.querySelectorAll<HTMLElement>(selectors.join(", "));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px" }
    );

    all.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
