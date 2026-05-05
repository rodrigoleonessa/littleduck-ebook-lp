"use client";
import { useState } from "react";
import { faq } from "@/lib/content";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section section-alt">
      <div className="container content">
        <h2
          className="reveal-heading"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.5rem, 3vw, 2.125rem)",
            fontWeight: 700,
            color: "var(--color-text)",
            textAlign: "center",
            marginBottom: "2.5rem",
          }}
        >
          Dúvidas frequentes
        </h2>

        <div>
          {faq.map((item, i) => (
            <div
              key={i}
              className="faq-item"
              data-open={open === i ? "true" : "false"}
            >
              <button
                className="faq-question"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                {item.q}
                <span className="faq-icon" aria-hidden="true">+</span>
              </button>
              <div className="faq-answer" aria-hidden={open !== i}>
                <div className="faq-answer-inner">
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
