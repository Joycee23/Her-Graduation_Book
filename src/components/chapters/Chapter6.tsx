"use client";
import { chapter6 } from "@/content";
import Reveal from "@/components/Reveal";
import PasswordGate from "@/components/PasswordGate";
import { useState } from "react";

type LetterType = (typeof chapter6.letters)[number];

function LetterModal({ letter, onClose }: { letter: LetterType; onClose: () => void }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(13,27,42,0.92)",
        backdropFilter: "blur(20px)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        animation: "fadeIn 0.3s ease",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "rgba(253,246,232,0.05)",
          border: "1px solid rgba(212,168,83,0.35)",
          borderRadius: "1.5rem",
          padding: "3rem",
          maxWidth: "600px",
          width: "100%",
          maxHeight: "80vh",
          overflowY: "auto",
          position: "relative",
          boxShadow: "0 40px 100px rgba(0,0,0,0.7), 0 0 60px rgba(212,168,83,0.1)",
          animation: "envelopeOpen 0.5s ease",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "rgba(212,168,83,0.15)",
            border: "1px solid rgba(212,168,83,0.3)",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            color: "#d4a853",
            cursor: "pointer",
            fontSize: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ✕
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>{letter.icon}</div>
          <h3
            className="font-playfair"
            style={{ fontFamily: "'Playfair Display', serif", color: "#f0c878", fontSize: "1.3rem", fontWeight: 600 }}
          >
            {letter.title}
          </h3>
          <div
            style={{
              width: "60px",
              height: "2px",
              background: "linear-gradient(to right, transparent, #d4a853, transparent)",
              margin: "0.75rem auto",
            }}
          />
        </div>

        {/* Letter content */}
        <div
          style={{
            background: "rgba(212,168,83,0.04)",
            border: "1px solid rgba(212,168,83,0.15)",
            borderRadius: "1rem",
            padding: "2rem",
            position: "relative",
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
              background: "rgba(212,168,83,0.08)",
            }}
          />
          <p
            className="font-playfair"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "rgba(253,246,232,0.88)",
              lineHeight: 2,
              whiteSpace: "pre-wrap",
              fontSize: "0.95rem",
              paddingLeft: "1rem",
            }}
          >
            {letter.content}
          </p>
        </div>

        {/* Seal decorative */}
        <div className="text-center mt-6">
          <span style={{ fontFamily: "'Dancing Script', cursive", color: "#d4a853", fontSize: "1.3rem" }}>
            — Quốc Tuấn 💛
          </span>
        </div>
      </div>
    </div>
  );
}

function TimeBoxContent() {
  const [openedLetters, setOpenedLetters] = useState<Set<string>>(new Set());
  const [activeLetter, setActiveLetter] = useState<LetterType | null>(null);
  const [breakingSeals, setBreakingSeals] = useState<Set<string>>(new Set());

  const handleOpenLetter = (letter: LetterType) => {
    if (breakingSeals.has(letter.id)) return;

    // Seal breaking animation
    setBreakingSeals((prev) => new Set([...prev, letter.id]));
    setTimeout(() => {
      setOpenedLetters((prev) => new Set([...prev, letter.id]));
      setBreakingSeals((prev) => {
        const next = new Set(prev);
        next.delete(letter.id);
        return next;
      });
      setActiveLetter(letter);
    }, 600);
  };

  return (
    <>
      {/* Modal */}
      {activeLetter && (
        <LetterModal letter={activeLetter} onClose={() => setActiveLetter(null)} />
      )}

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-6">
            <p
              className="font-dancing text-lg mb-3"
              style={{ fontFamily: "'Dancing Script', cursive", color: "#d4a853", opacity: 0.8 }}
            >
              {chapter6.subtitle}
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
              {chapter6.title}
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", maxWidth: "400px", margin: "0 auto 1rem" }}>
              <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #d4a853)" }} />
              <span style={{ color: "#d4a853", fontSize: "1.2rem" }}>✦</span>
              <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, #d4a853)" }} />
            </div>
            <p style={{ color: "rgba(253,246,232,0.5)", fontFamily: "'Inter', sans-serif", fontSize: "0.95rem" }}>
              {chapter6.intro}
            </p>
          </div>
        </Reveal>

        {/* Envelope grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {chapter6.letters.map((letter, index) => {
            const isOpened = openedLetters.has(letter.id);
            const isBreaking = breakingSeals.has(letter.id);

            return (
              <Reveal key={letter.id} delay={index * 120}>
                <div
                  className="envelope"
                  onClick={() => handleOpenLetter(letter)}
                  style={{
                    cursor: "pointer",
                    position: "relative",
                    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-8px) scale(1.02)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0) scale(1)";
                  }}
                >
                  {/* Envelope body */}
                  <div
                    style={{
                      background: isOpened
                        ? "rgba(212,168,83,0.1)"
                        : "rgba(255,255,255,0.04)",
                      border: isOpened
                        ? "1px solid rgba(212,168,83,0.5)"
                        : "1px solid rgba(212,168,83,0.2)",
                      borderRadius: "1.5rem",
                      padding: "2rem 1.5rem",
                      textAlign: "center",
                      minHeight: "220px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "1rem",
                      position: "relative",
                      overflow: "hidden",
                      boxShadow: isOpened ? "0 10px 40px rgba(212,168,83,0.1)" : "none",
                    }}
                  >
                    {/* Background gradient */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: `radial-gradient(circle at 50% 50%, rgba(212,168,83,${isOpened ? "0.08" : "0.04"}) 0%, transparent 70%)`,
                        pointerEvents: "none",
                      }}
                    />

                    {/* Envelope flap decoration */}
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "40px",
                        background: isOpened
                          ? "rgba(212,168,83,0.08)"
                          : "rgba(212,168,83,0.05)",
                        borderBottom: "1px solid rgba(212,168,83,0.15)",
                        clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                      }}
                    />

                    {/* Icon / Seal */}
                    <div
                      style={{
                        width: "64px",
                        height: "64px",
                        borderRadius: "50%",
                        background: isOpened
                          ? `linear-gradient(135deg, var(--from), var(--to))`
                          : "rgba(212,168,83,0.15)",
                        border: "2px solid rgba(212,168,83,0.4)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.8rem",
                        transition: "all 0.4s ease",
                        animation: isBreaking ? "sealBreak 0.6s ease forwards" : "none",
                        boxShadow: isOpened ? "0 0 20px rgba(212,168,83,0.3)" : "none",
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      {isOpened ? letter.icon : "🔒"}
                    </div>

                    {/* Title */}
                    <h3
                      className="font-playfair font-semibold"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: isOpened ? "#f0c878" : "rgba(253,246,232,0.8)",
                        fontSize: "0.95rem",
                        lineHeight: 1.5,
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      {letter.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: "rgba(253,246,232,0.4)",
                        fontSize: "0.8rem",
                        lineHeight: 1.6,
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      {letter.lockDescription}
                    </p>

                    {/* CTA */}
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.4rem 1.2rem",
                        borderRadius: "2rem",
                        background: isOpened ? "rgba(212,168,83,0.2)" : "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(212,168,83,0.3)",
                        color: "#d4a853",
                        fontSize: "0.8rem",
                        fontFamily: "'Inter', sans-serif",
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      {isOpened ? "📖 Đọc lại" : "✉️ Mở thư"}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Footer note */}
        <Reveal delay={800}>
          <div className="text-center mt-16">
            <p
              style={{
                fontFamily: "'Dancing Script', cursive",
                color: "rgba(212,168,83,0.5)",
                fontSize: "1.1rem",
              }}
            >
              Những lá thư này, anh viết cho em — để em biết rằng dù ở thời điểm nào, anh cũng đang nghĩ đến em 💛
            </p>
          </div>
        </Reveal>
      </div>
    </>
  );
}

export default function Chapter6() {
  return (
    <section
      id="chapter6"
      className="book-page min-h-screen py-24 px-6"
      style={{
        background: "linear-gradient(180deg, var(--navy) 0%, #0d1520 100%)",
      }}
    >
      <PasswordGate
        password="17052004"
        title="Hộp Thời Gian"
        subtitle="Chương VI"
        icon="📦"
        hint="Một ngày đặc biệt của em..."
      >
        <TimeBoxContent />
      </PasswordGate>
    </section>
  );
}

