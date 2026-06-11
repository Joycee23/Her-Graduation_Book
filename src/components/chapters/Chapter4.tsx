"use client";
import { chapter4 } from "@/content";
import Reveal from "@/components/Reveal";

export default function Chapter4() {
  return (
    <section id="chapter4" className="book-page min-h-screen" style={{ padding: "6rem 1.5rem" }}>
      <div style={{ maxWidth: "1024px", margin: "0 auto", width: "100%" }}>
        {/* Header */}
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <p style={{ fontFamily: "'Dancing Script', cursive", color: "#d4a853", opacity: 0.8, fontSize: "1.1rem", marginBottom: "0.75rem" }}>
              {chapter4.subtitle}
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, background: "linear-gradient(90deg, #a07830, #f0c878, #d4a853)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "1.5rem", lineHeight: 1.2 }}>
              {chapter4.title}
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", maxWidth: "400px", margin: "0 auto" }}>
              <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #d4a853)" }} />
              <span style={{ color: "#d4a853", fontSize: "1.2rem" }}>✦</span>
              <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, #d4a853)" }} />
            </div>
          </div>
        </Reveal>

        {/* Message cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {chapter4.messages.map((msg, index) => (
            <Reveal key={index} delay={index * 150}>
              <div
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(212,168,83,0.2)", borderRadius: "1.5rem", overflow: "hidden", transition: "all 0.4s ease" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = "0 20px 60px rgba(212,168,83,0.15)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Gradient header */}
                <div className={`bg-gradient-to-r ${msg.color}`} style={{ padding: "1.25rem 1.5rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem", flexShrink: 0 }}>
                    {msg.avatar}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", color: "white", fontWeight: 700, fontSize: "1.1rem" }}>{msg.sender}</h3>
                    <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.8rem", fontFamily: "'Inter', sans-serif" }}>{msg.role}</p>
                  </div>
                  <div style={{ fontSize: "3rem", color: "rgba(255,255,255,0.2)", fontFamily: "'Playfair Display', serif", lineHeight: 1 }}>&ldquo;</div>
                </div>

                {/* Message body */}
                <div style={{ padding: "1.5rem" }}>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "rgba(253,246,232,0.85)", lineHeight: 1.9, fontSize: "0.93rem" }}>
                    {msg.message}
                  </p>
                  <div style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid rgba(212,168,83,0.15)", display: "flex", justifyContent: "flex-end" }}>
                    <span style={{ fontFamily: "'Dancing Script', cursive", color: "#d4a853", fontSize: "1.1rem" }}>
                      — {msg.sender} 💛
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Closing note */}
        <Reveal delay={700}>
          <div style={{ textAlign: "center", marginTop: "4rem", background: "rgba(212,168,83,0.05)", border: "1px solid rgba(212,168,83,0.2)", borderRadius: "1rem", padding: "1.5rem" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", color: "rgba(253,246,232,0.6)", fontSize: "0.9rem" }}>
              ✦ Những lời chúc này được gửi đến em từ những người yêu thương em nhất ✦
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
