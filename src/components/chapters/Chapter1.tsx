"use client";
import { chapter1, siteConfig } from "@/content";
import Reveal from "@/components/Reveal";
import Image from "next/image";

const containerStyle: React.CSSProperties = {
  maxWidth: "1024px",
  margin: "0 auto",
  width: "100%",
};

export default function Chapter1() {
  return (
    <section
      id="chapter1"
      className="book-page min-h-screen relative"
      style={{ padding: "6rem 1.5rem" }}
    >
      <div style={containerStyle}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontFamily: "'Dancing Script', cursive", color: "#d4a853", opacity: 0.8, fontSize: "1.1rem", marginBottom: "0.75rem" }}>
              {chapter1.subtitle}
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 900,
                background: "linear-gradient(90deg, #a07830, #f0c878, #d4a853)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "2rem",
                lineHeight: 1.2,
              }}
            >
              {chapter1.title}
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", maxWidth: "400px", margin: "0 auto" }}>
              <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #d4a853)" }} />
              <span style={{ color: "#d4a853", fontSize: "1.2rem" }}>✦</span>
              <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, #d4a853)" }} />
            </div>
          </div>
        </Reveal>

        {/* Hero quote */}
        <Reveal delay={200}>
          <blockquote
            style={{
              maxWidth: "700px",
              margin: "0 auto 5rem",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(212,168,83,0.2)",
              borderLeft: "4px solid #d4a853",
              borderRadius: "0 1rem 1rem 0",
              padding: "2rem 2.5rem",
            }}
          >
            <p style={{ fontFamily: "'Playfair Display', serif", color: "#f0c878", fontStyle: "italic", fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: 1.8, textAlign: "center" }}>
              &ldquo;{chapter1.heroQuote}&rdquo;
            </p>
          </blockquote>
        </Reveal>

        {/* Two-column: story + photos */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem", alignItems: "start" }}>
          {/* Story */}
          <Reveal delay={300}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#d4a853", fontSize: "1.5rem", fontWeight: 600 }}>
                Câu Chuyện Bắt Đầu
              </h3>
              {chapter1.story.split("\n\n").map((paragraph, i) => (
                <p key={i} style={{ color: "rgba(253, 246, 232, 0.8)", fontFamily: "'Inter', sans-serif", fontWeight: 300, lineHeight: 2, fontSize: "0.95rem" }}>
                  {paragraph.trim()}
                </p>
              ))}
              <div style={{ background: "rgba(212, 168, 83, 0.1)", border: "1px solid rgba(212, 168, 83, 0.3)", borderRadius: "1rem", padding: "1.5rem", marginTop: "0.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <span style={{ fontSize: "1.5rem" }}>🎓</span>
                  <span style={{ color: "#d4a853", fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>
                    Thông tin
                  </span>
                </div>
                <p style={{ color: "rgba(253,246,232,0.9)", fontFamily: "'Inter', sans-serif", lineHeight: 1.9, fontSize: "0.9rem" }}>
                  <strong style={{ color: "#f0c878" }}>Tên:</strong> {siteConfig.herName}<br />
                  <strong style={{ color: "#f0c878" }}>Ngành:</strong> {siteConfig.major}<br />
                  <strong style={{ color: "#f0c878" }}>Trường:</strong> {siteConfig.university}<br />
                  <strong style={{ color: "#f0c878" }}>Tốt nghiệp:</strong> {siteConfig.graduationYear}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Photo gallery */}
          <Reveal delay={400}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {chapter1.photos.map((photo, i) => (
                <div key={i} className="photo-frame" style={{ height: i === 0 ? "280px" : "180px", position: "relative" }}>
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    className="object-cover"
                    style={{ transition: "transform 0.6s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                  <div style={{ position: "absolute", bottom: "1rem", left: "1rem", right: "1rem", zIndex: 2, color: "white", fontFamily: "'Dancing Script', cursive", fontSize: "1rem" }}>
                    {photo.caption}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
