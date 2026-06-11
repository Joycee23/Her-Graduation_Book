"use client";
import { useEffect, useRef, useState } from "react";

const chapters = [
  { id: "cover", label: "Bìa" },
  { id: "chapter1", label: "I" },
  { id: "chapter2", label: "II" },
  { id: "chapter3", label: "III" },
  { id: "chapter4", label: "IV" },
  { id: "chapter5", label: "V" },
  { id: "chapter6", label: "VI" },
];

export default function Navigation() {
  const [activeChapter, setActiveChapter] = useState("cover");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sectionIds = chapters.map((c) => c.id);
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            setActiveChapter(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Top nav bar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(13, 27, 42, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(212, 168, 83, 0.2)" : "none",
          padding: scrolled ? "0.75rem 2rem" : "1.5rem 2rem",
        }}
      >
        <div style={{ maxWidth: '1152px', margin: '0 auto', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span
            className="font-dancing text-gold-shimmer cursor-pointer text-xl"
            style={{ fontFamily: "'Dancing Script', cursive", color: "#d4a853" }}
            onClick={() => scrollTo("cover")}
          >
            Nguyễn Thị Thúy 🎓
          </span>

          <div className="hidden md:flex items-center gap-1">
            {chapters.slice(1).map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => scrollTo(chapter.id)}
                className="px-3 py-1.5 rounded-full text-sm transition-all duration-300 font-inter"
                style={{
                  background: activeChapter === chapter.id ? "rgba(212, 168, 83, 0.2)" : "transparent",
                  color: activeChapter === chapter.id ? "#d4a853" : "rgba(253, 246, 232, 0.6)",
                  border: activeChapter === chapter.id ? "1px solid rgba(212, 168, 83, 0.4)" : "1px solid transparent",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Chương {chapter.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Side dots */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 hidden lg:flex">
        {chapters.map((chapter) => (
          <button
            key={chapter.id}
            onClick={() => scrollTo(chapter.id)}
            title={chapter.label}
            className="nav-dot"
            style={{
              width: "8px",
              height: activeChapter === chapter.id ? "24px" : "8px",
              borderRadius: activeChapter === chapter.id ? "4px" : "50%",
              background: activeChapter === chapter.id ? "#d4a853" : "rgba(212, 168, 83, 0.3)",
              border: "1px solid rgba(212, 168, 83, 0.5)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </>
  );
}
