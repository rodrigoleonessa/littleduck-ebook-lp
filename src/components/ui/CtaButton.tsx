import { CHECKOUT_URL } from "@/lib/content";
import type { CSSProperties } from "react";

interface CtaButtonProps {
  text: string;
  href?: string;
  className?: string;
  style?: CSSProperties;
}

export default function CtaButton({ text, href = CHECKOUT_URL, className = "", style }: CtaButtonProps) {
  return (
    <a href={href} className={`cta-btn ${className}`} style={style}>
      {text}
    </a>
  );
}
