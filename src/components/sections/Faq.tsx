"use client";
import { useState } from "react";
import { faq } from "@/lib/content";

const GOLD = "#B88A41";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      style={{
        backgroundColor: "var(--color-cream)",
        paddingTop: "3rem",
        paddingBottom: "3.5rem",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "640px",
          margin: "0 auto",
          padding: "0 1.25rem",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.375rem, 4.5vw, 1.875rem)",
            fontWeight: 700,
            color: "#1F1B17",
            textAlign: "center",
            marginBottom: "1.75rem",
            lineHeight: 1.25,
          }}
        >
          Dúvidas frequentes
        </h2>

        <div
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 4px 18px rgba(0,0,0,0.06)",
          }}
        >
          {faq.map((item, i) => (
            <div
              key={i}
              style={{
                borderBottom: i < faq.length - 1 ? "1px solid rgba(184,138,65,0.15)" : "none",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                  padding: "1.125rem 1.25rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    color: "#1F1B17",
                    lineHeight: 1.4,
                  }}
                >
                  {item.q}
                </span>

                {/* Gold circle + button */}
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    border: `1.5px solid ${GOLD}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: GOLD,
                    fontSize: "1.125rem",
                    fontWeight: 300,
                    lineHeight: 1,
                    transition: "transform 0.25s ease",
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                  aria-hidden="true"
                >
                  +
                </div>
              </button>

              {/* Answer */}
              <div
                style={{
                  maxHeight: open === i ? "400px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9rem",
                    color: "var(--color-text-body)",
                    lineHeight: 1.65,
                    padding: "0 1.25rem 1.25rem",
                  }}
                >
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
