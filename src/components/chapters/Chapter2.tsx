"use client";
import { chapter2 } from "@/content";
import Reveal from "@/components/Reveal";
import Image from "next/image";
import { useState } from "react";

const C = {
  container: { maxWidth: "900px", margin: "0 auto", width: "100%" } as React.CSSProperties,
  section: { padding: "6rem 1.5rem", position: "relative" } as React.CSSProperties,
};

function ConfettiPiece({ style }: { style: React.CSSProperties }) {
  return <div style={{ position: "absolute", width: "8px", height: "8px", borderRadius: "50%", animation: `confettiFall ${Math.random() * 3 + 2}s ease-in forwards`, ...style }} />;
}

export default function Chapter2() {
  const [activeYear, setActiveYear] = useState<number | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState<Array<{ id: number; style: React.CSSProperties }>>([]);

  const handleYearClick = (index: number) => {
    setActiveYear(activeYear === index ? null : index);
    if (index === chapter2.years.length - 1) {
      setShowConfetti(true);
      const pieces = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        style: {
          left: `${Math.random() * 100}%`,
          top: "-10px",
          background: ["#d4a853", "#f0c878", "#e8a0a8", "#a0d4e8", "#f7d0d8"][Math.floor(Math.random() * 5)],
          animationDelay: `${Math.random() * 2}s`,
        },
      }));
      setConfettiPieces(pieces);
      setTimeout(() => setShowConfetti(false), 5000);
    }
  };

  return (
    <section id="chapter2" className="book-page min-h-screen" style={C.section}>
      {showConfetti && (
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 10 }}>
          {confettiPieces.map((p) => <ConfettiPiece key={p.id} style={p.style} />)}
        </div>
      )}

      <div style={C.container}>
        {/* Header */}
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <p style={{ fontFamily: "'Dancing Script', cursive", color: "#d4a853", opacity: 0.8, fontSize: "1.1rem", marginBottom: "0.75rem" }}>
              {chapter2.subtitle}
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, background: "linear-gradient(90deg, #a07830, #f0c878, #d4a853)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "1.5rem", lineHeight: 1.2 }}>
              {chapter2.title}
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", maxWidth: "400px", margin: "0 auto" }}>
              <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #d4a853)" }} />
              <span style={{ color: "#d4a853", fontSize: "1.2rem" }}>✦</span>
              <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, #d4a853)" }} />
            </div>
          </div>
        </Reveal>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: "2px", transform: "translateX(-50%)", background: "linear-gradient(to bottom, transparent, #d4a853 10%, #d4a853 90%, transparent)", zIndex: 0 }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {chapter2.years.map((year, index) => {
              const isLeft = index % 2 === 0;
              const isActive = activeYear === index;
              const isLast = index === chapter2.years.length - 1;

              return (
                <Reveal key={index} delay={index * 150}>
                  <div style={{ position: "relative", display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "2rem", flexWrap: "wrap" }}>
                    {/* Content side */}
                    <div style={{ flex: 1, minWidth: "260px", order: isLeft ? 0 : 2 }}>
                      <div
                        onClick={() => handleYearClick(index)}
                        style={{
                          background: isActive ? (isLast ? "rgba(212,168,83,0.15)" : "rgba(255,255,255,0.08)") : "rgba(255,255,255,0.04)",
                          border: isActive ? `1px solid ${isLast ? "#d4a853" : "rgba(212,168,83,0.5)"}` : "1px solid rgba(212,168,83,0.2)",
                          borderRadius: "1.5rem",
                          padding: "1.5rem",
                          cursor: "pointer",
                          transition: "all 0.4s ease",
                          transform: isActive ? "scale(1.02)" : "scale(1)",
                          boxShadow: isActive ? "0 20px 60px rgba(212,168,83,0.15)" : "none",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                          <span style={{ fontSize: "1.5rem" }}>{year.emoji}</span>
                          <div>
                            <h3 style={{ fontFamily: "'Playfair Display', serif", color: isLast ? "#f0c878" : "#d4a853", fontWeight: 700, fontSize: "1.1rem" }}>
                              {year.year}
                            </h3>
                            <p style={{ color: "rgba(253,246,232,0.5)", fontSize: "0.8rem", fontFamily: "'Inter', sans-serif" }}>{year.period}</p>
                          </div>
                        </div>
                        <p style={{ color: "rgba(253,246,232,0.8)", fontFamily: "'Inter', sans-serif", lineHeight: 1.7, marginBottom: "0.75rem", fontSize: "0.9rem" }}>
                          {year.description}
                        </p>
                        <div style={{ maxHeight: isActive ? "200px" : "0", overflow: "hidden", transition: "max-height 0.5s ease" }}>
                          <div style={{ borderTop: "1px solid rgba(212,168,83,0.2)", paddingTop: "0.75rem", marginTop: "0.75rem", color: "#f0c878", fontFamily: "'Playfair Display', serif", fontStyle: "italic", lineHeight: 1.8, fontSize: "0.9rem" }}>
                            💛 &ldquo;{year.message}&rdquo;
                          </div>
                        </div>
                        <div style={{ textAlign: "right", marginTop: "0.5rem" }}>
                          <span style={{ color: "rgba(212,168,83,0.5)", fontSize: "0.75rem", fontFamily: "'Inter', sans-serif" }}>
                            {isActive ? "Thu gọn ↑" : "Xem thêm ↓"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, order: 1, width: "48px", height: "48px", borderRadius: "50%", background: isLast ? "#d4a853" : "rgba(13,27,42,1)", border: `2px solid ${isLast ? "#f0c878" : "#d4a853"}`, boxShadow: isLast ? "0 0 20px rgba(212,168,83,0.5)" : "0 0 10px rgba(212,168,83,0.2)", fontSize: "1.2rem", zIndex: 1, alignSelf: "center" }}>
                      {year.emoji}
                    </div>

                    {/* Photo side */}
                    <div style={{ flex: 1, minWidth: "260px", order: isLeft ? 2 : 0 }}>
                      <div className="photo-frame" style={{ height: "200px", position: "relative" }}>
                        <Image src={year.photo} alt={year.year} fill className="object-cover" />
                        <div style={{ position: "absolute", bottom: "0.75rem", left: "0.75rem", zIndex: 2, fontFamily: "'Dancing Script', cursive", color: "white", fontSize: "1.1rem", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
                          {year.year}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={800}>
          <p style={{ textAlign: "center", marginTop: "3rem", color: "rgba(212,168,83,0.5)", fontFamily: "'Inter', sans-serif", fontSize: "0.85rem" }}>
            ✦ Nhấn vào từng mốc thời gian để đọc lời nhắn ✦
          </p>
        </Reveal>
      </div>
    </section>
  );
}
