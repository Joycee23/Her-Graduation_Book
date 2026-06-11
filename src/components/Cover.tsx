"use client";
import { siteConfig } from "@/content";
import { useEffect, useState } from "react";

export default function Cover() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  const scrollToChapter1 = () => {
    document.getElementById("chapter1")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="cover"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #06101a 0%, #0d1b2a 30%, #1a2d42 60%, #0d1b2a 100%)",
      }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 40%, rgba(212,168,83,0.12) 0%, rgba(212,168,83,0.05) 30%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Top decorative line */}
      <div
        style={{
          position: "absolute",
          top: "3rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          width: "min(500px, 80%)",
        }}
      >
        <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, rgba(212,168,83,0.4))" }} />
        <span style={{ color: "rgba(212,168,83,0.6)", fontSize: "0.7rem", letterSpacing: "0.3em", fontFamily: "'Inter', sans-serif", textTransform: "uppercase" }}>
          ✦ Tặng em ✦
        </span>
        <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, rgba(212,168,83,0.4))" }} />
      </div>

      {/* Main content */}
      <div
        className="text-center px-6 relative z-10"
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          width: '100%',
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 1.2s ease, transform 1.2s ease",
        }}
      >
        {/* Graduation cap */}
        <div
          style={{
            fontSize: "4rem",
            marginBottom: "1.5rem",
            filter: "drop-shadow(0 0 20px rgba(212,168,83,0.4))",
            animation: loaded ? "fadeInUp 1s ease 0.3s both" : "none",
          }}
        >
          🎓
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'Dancing Script', cursive",
            color: "rgba(212,168,83,0.7)",
            fontSize: "1.2rem",
            marginBottom: "1rem",
            opacity: loaded ? 1 : 0,
            transition: "opacity 1s ease 0.5s",
            letterSpacing: "0.05em",
          }}
        >
          Cuốn sách tốt nghiệp của
        </p>

        {/* Her name — main title */}
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            background: "linear-gradient(135deg, #a07830 0%, #f0c878 30%, #d4a853 60%, #f0c878 80%, #a07830 100%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "shimmer 4s linear infinite",
            marginBottom: "0.5rem",
          }}
        >
          {siteConfig.herName}
        </h1>

        {/* Decorative divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            margin: "1.5rem auto",
            maxWidth: "400px",
          }}
        >
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, rgba(212,168,83,0.6))" }} />
          <span style={{ color: "#d4a853", fontSize: "1rem" }}>❋</span>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, rgba(212,168,83,0.6))" }} />
        </div>

        {/* Major & University */}
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            color: "rgba(253,246,232,0.65)",
            fontSize: "1.1rem",
            marginBottom: "0.5rem",
          }}
        >
          {siteConfig.major}
        </p>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "rgba(212,168,83,0.5)",
            fontSize: "0.9rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "3rem",
          }}
        >
          {siteConfig.university} · {siteConfig.graduationYear}
        </p>

        {/* Chapter list preview */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.5rem",
            marginBottom: "3rem",
            maxWidth: "600px",
            margin: "0 auto 3rem",
          }}
        >
          {[
            "Cô Gái Chọn Nghề",
            "Bốn Năm Tuổi Trẻ",
            "Điều Anh Tự Hào",
            "Lời Chúc Mọi Người",
            "Thư Từ Anh",
            "Hộp Thời Gian",
          ].map((ch, i) => (
            <span
              key={i}
              style={{
                padding: "0.3rem 0.9rem",
                border: "1px solid rgba(212,168,83,0.2)",
                borderRadius: "2rem",
                color: "rgba(212,168,83,0.6)",
                fontSize: "0.78rem",
                fontFamily: "'Inter', sans-serif",
                background: "rgba(212,168,83,0.05)",
              }}
            >
              {i + 1}. {ch}
            </span>
          ))}
        </div>

        {/* CTA button */}
        <button
          onClick={scrollToChapter1}
          style={{
            background: "linear-gradient(135deg, rgba(212,168,83,0.15), rgba(212,168,83,0.05))",
            border: "1px solid rgba(212,168,83,0.5)",
            borderRadius: "3rem",
            padding: "0.9rem 2.5rem",
            color: "#d4a853",
            fontFamily: "'Playfair Display', serif",
            fontSize: "1rem",
            cursor: "pointer",
            letterSpacing: "0.05em",
            transition: "all 0.3s ease",
            boxShadow: "0 0 20px rgba(212,168,83,0.1)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(212,168,83,0.2)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 40px rgba(212,168,83,0.25)";
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "linear-gradient(135deg, rgba(212,168,83,0.15), rgba(212,168,83,0.05))";
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 20px rgba(212,168,83,0.1)";
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
          }}
        >
          ✦ Lật Trang Đầu ✦
        </button>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          opacity: 0.4,
          animation: "fadeInUp 1s ease 2s both",
        }}
      >
        <span style={{ color: "#d4a853", fontSize: "0.75rem", fontFamily: "'Inter', sans-serif", letterSpacing: "0.2em" }}>
          CUỘN XUỐNG
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, #d4a853, transparent)",
            animation: "pulse-glow 2s infinite",
          }}
        />
      </div>

      {/* Bottom decorative line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(to right, transparent, rgba(212,168,83,0.3), transparent)",
        }}
      />
    </section>
  );
}
