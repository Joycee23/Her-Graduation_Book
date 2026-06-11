"use client";
import { chapter3 } from "@/content";
import Reveal from "@/components/Reveal";

export default function Chapter3() {
  return (
    <section
      id="chapter3"
      className="book-page min-h-screen"
      style={{ padding: "6rem 1.5rem", background: "linear-gradient(180deg, var(--navy) 0%, #1a0d25 50%, var(--navy) 100%)" }}
    >
      <div style={{ maxWidth: "1024px", margin: "0 auto", width: "100%" }}>
        {/* Header */}
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <p style={{ fontFamily: "'Dancing Script', cursive", color: "#d4a853", opacity: 0.8, fontSize: "1.1rem", marginBottom: "0.75rem" }}>
              {chapter3.subtitle}
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, background: "linear-gradient(90deg, #a07830, #f0c878, #d4a853)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "1.5rem", lineHeight: 1.2 }}>
              {chapter3.title}
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", maxWidth: "400px", margin: "0 auto" }}>
              <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #d4a853)" }} />
              <span style={{ color: "#d4a853", fontSize: "1.2rem" }}>✦</span>
              <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, #d4a853)" }} />
            </div>
          </div>
        </Reveal>

        {/* Pride cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {chapter3.prides.map((pride, index) => (
            <Reveal key={index} delay={index * 100}>
              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(212,168,83,0.2)",
                  borderRadius: "1.5rem",
                  padding: "1.5rem",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.4s ease",
                  cursor: "default",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = "rgba(212,168,83,0.08)";
                  el.style.borderColor = "rgba(212,168,83,0.5)";
                  el.style.transform = "translateY(-6px)";
                  el.style.boxShadow = "0 20px 60px rgba(212,168,83,0.15)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = "rgba(255,255,255,0.03)";
                  el.style.borderColor = "rgba(212,168,83,0.2)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Decorative glow */}
                <div style={{ position: "absolute", top: "-50%", right: "-50%", width: "150px", height: "150px", borderRadius: "50%", background: "radial-gradient(circle, rgba(212,168,83,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

                {/* Icon */}
                <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "rgba(212,168,83,0.15)", border: "1px solid rgba(212,168,83,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", marginBottom: "1rem" }}>
                  {pride.icon}
                </div>

                {/* Quote mark */}
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5rem", color: "rgba(212,168,83,0.2)", lineHeight: 0.8, marginBottom: "0.5rem" }}>&ldquo;</div>

                {/* Text */}
                <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "rgba(253,246,232,0.9)", lineHeight: 1.8, fontSize: "0.95rem" }}>
                  {pride.text}
                </p>

                {/* Bottom accent */}
                <div style={{ position: "absolute", bottom: 0, left: "1.5rem", right: "1.5rem", height: "2px", background: "linear-gradient(to right, transparent, #d4a853, transparent)" }} />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Closing line */}
        <Reveal delay={700}>
          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <p style={{ fontFamily: "'Dancing Script', cursive", color: "#f0c878", fontSize: "1.5rem" }}>
              — Và còn rất nhiều điều nữa mà anh chưa kể hết 💛
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
