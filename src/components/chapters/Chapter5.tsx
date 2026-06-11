"use client";
import { chapter5, siteConfig } from "@/content";
import Reveal from "@/components/Reveal";
import { useEffect, useRef, useState } from "react";

export default function Chapter5() {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const typingRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const indexRef = useRef(0);

  const fullText = chapter5.letter;

  const startTyping = () => {
    if (hasStarted) return;
    setHasStarted(true);
    setIsTyping(true);
    indexRef.current = 0;

    const typeChar = () => {
      if (indexRef.current < fullText.length) {
        setDisplayedText(fullText.slice(0, indexRef.current + 1));
        indexRef.current++;
        // Variable speed: faster for spaces/newlines, slower for punctuation
        const char = fullText[indexRef.current - 1];
        const delay = char === "\n" ? 80 : char === "," || char === "." ? 100 : 30;
        typingRef.current = setTimeout(typeChar, delay);
      } else {
        setIsTyping(false);
        setIsComplete(true);
      }
    };
    typeChar();
  };

  const skipTyping = () => {
    if (typingRef.current) clearTimeout(typingRef.current);
    setDisplayedText(fullText);
    setIsTyping(false);
    setIsComplete(true);
    setHasStarted(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setTimeout(startTyping, 800);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
      if (typingRef.current) clearTimeout(typingRef.current);
    };
  }, [hasStarted]);

  return (
    <section
      id="chapter5"
      ref={sectionRef}
      className="book-page min-h-screen py-24 px-6 relative"
      style={{
        background: "linear-gradient(180deg, #0d1b2a 0%, #0a1520 50%, #0d1b2a 100%)",
      }}
    >
      {/* Candlelight ambiance */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 30%, rgba(212,168,83,0.06) 0%, transparent 70%)",
          animation: "candleFlicker 4s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-16">
            <p
              className="font-dancing text-lg mb-3"
              style={{ fontFamily: "'Dancing Script', cursive", color: "#d4a853", opacity: 0.8 }}
            >
              {chapter5.subtitle}
            </p>
            <h2
              className="font-playfair text-4xl md:text-6xl font-bold mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                background: "linear-gradient(90deg, #a07830, #f0c878, #d4a853)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {chapter5.title}
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", maxWidth: "400px", margin: "0 auto" }}>
              <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #d4a853)" }} />
              <span style={{ color: "#d4a853", fontSize: "1.2rem" }}>✦</span>
              <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, #d4a853)" }} />
            </div>
          </div>
        </Reveal>

        {/* Letter paper */}
        <Reveal delay={200}>
          <div
            style={{
              background: "rgba(253,246,232,0.03)",
              border: "1px solid rgba(212,168,83,0.25)",
              borderRadius: "4px",
              padding: "3rem 3rem 3rem 4rem",
              position: "relative",
              boxShadow: "0 40px 100px rgba(0,0,0,0.5), inset 0 1px 0 rgba(212,168,83,0.1)",
              minHeight: "500px",
            }}
          >
            {/* Left margin line */}
            <div
              style={{
                position: "absolute",
                left: "3rem",
                top: 0,
                bottom: 0,
                width: "1px",
                background: "rgba(212,168,83,0.1)",
              }}
            />

            {/* Horizontal lines */}
            {Array.from({ length: 30 }, (_, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: "3rem",
                  right: "2rem",
                  top: `${4 + i * 1.85}rem`,
                  height: "1px",
                  background: "rgba(212,168,83,0.04)",
                  pointerEvents: "none",
                }}
              />
            ))}

            {/* Envelope wax stamp decoration */}
            <div
              style={{
                position: "absolute",
                top: "-20px",
                right: "2rem",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #d4a853, #a07830)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1rem",
                boxShadow: "0 4px 12px rgba(212,168,83,0.3)",
              }}
            >
              💛
            </div>

            {/* Letter text */}
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1rem",
                lineHeight: 2,
                color: "rgba(253,246,232,0.88)",
                whiteSpace: "pre-wrap",
                minHeight: "300px",
              }}
            >
              {displayedText}
              {isTyping && (
                <span
                  style={{
                    display: "inline-block",
                    width: "2px",
                    height: "1.2em",
                    background: "#d4a853",
                    marginLeft: "2px",
                    verticalAlign: "text-bottom",
                    animation: "blink 0.8s step-end infinite",
                  }}
                />
              )}
              {!hasStarted && (
                <span style={{ color: "rgba(212,168,83,0.4)", fontStyle: "italic" }}>
                  Thư đang được viết...
                </span>
              )}
            </div>

            {/* Signature area */}
            {isComplete && (
              <div
                style={{
                  borderTop: "1px solid rgba(212,168,83,0.2)",
                  marginTop: "2rem",
                  paddingTop: "1.5rem",
                  textAlign: "right",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Dancing Script', cursive",
                    color: "#d4a853",
                    fontSize: "1.8rem",
                  }}
                >
                  {siteConfig.hisName}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "rgba(212,168,83,0.5)",
                    fontSize: "0.8rem",
                    marginTop: "0.25rem",
                  }}
                >
                  Tháng 6, 2026
                </div>
              </div>
            )}
          </div>
        </Reveal>

        {/* Skip button */}
        {isTyping && (
          <div className="text-center mt-6">
            <button
              onClick={skipTyping}
              style={{
                background: "rgba(212,168,83,0.1)",
                border: "1px solid rgba(212,168,83,0.3)",
                borderRadius: "2rem",
                padding: "0.5rem 1.5rem",
                color: "rgba(212,168,83,0.7)",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              Đọc ngay ↓
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
