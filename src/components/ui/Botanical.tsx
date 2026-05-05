import type { CSSProperties } from "react";

interface BotanicalProps {
  className?: string;
  style?: CSSProperties;
}

export function LeafLeft({ className = "", style }: BotanicalProps) {
  return (
    <svg
      viewBox="0 0 120 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path
        d="M60 180 C60 180 10 130 10 80 C10 40 35 10 60 5 C85 10 110 40 110 80 C110 130 60 180 60 180Z"
        stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.6"
      />
      <path d="M60 180 L60 5" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <path d="M60 60 C60 60 30 50 20 35" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <path d="M60 90 C60 90 85 78 95 62" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <path d="M60 120 C60 120 35 110 25 95" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
    </svg>
  );
}

export function LeafRight({ className = "", style }: BotanicalProps) {
  const merged: CSSProperties = { transform: "scaleX(-1)", ...style };
  return (
    <svg
      viewBox="0 0 120 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={merged}
      aria-hidden="true"
    >
      <path
        d="M60 180 C60 180 10 130 10 80 C10 40 35 10 60 5 C85 10 110 40 110 80 C110 130 60 180 60 180Z"
        stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.6"
      />
      <path d="M60 180 L60 5" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <path d="M60 60 C60 60 30 50 20 35" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <path d="M60 90 C60 90 85 78 95 62" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <path d="M60 120 C60 120 35 110 25 95" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
    </svg>
  );
}

export function BranchSmall({ className = "", style }: BotanicalProps) {
  return (
    <svg
      viewBox="0 0 80 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path d="M40 110 C40 110 40 60 40 10" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <path d="M40 30 C40 30 20 22 12 10" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <path d="M40 55 C40 55 58 46 65 32" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <path d="M40 80 C40 80 22 72 16 58" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <ellipse cx="40" cy="10" rx="6" ry="9" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <ellipse cx="12" cy="10" rx="5" ry="7" stroke="currentColor" strokeWidth="0.8" opacity="0.5" transform="rotate(-20 12 10)" />
      <ellipse cx="65" cy="32" rx="5" ry="7" stroke="currentColor" strokeWidth="0.8" opacity="0.5" transform="rotate(25 65 32)" />
    </svg>
  );
}
