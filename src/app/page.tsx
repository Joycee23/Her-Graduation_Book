"use client";
import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Cover from "@/components/Cover";
import Chapter1 from "@/components/chapters/Chapter1";
import Chapter2 from "@/components/chapters/Chapter2";
import Chapter3 from "@/components/chapters/Chapter3";
import Chapter4 from "@/components/chapters/Chapter4";
import Chapter5 from "@/components/chapters/Chapter5";
import Chapter6 from "@/components/chapters/Chapter6";

const ParticlesBackground = dynamic(() => import("@/components/ParticlesBackground"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <ParticlesBackground />
      <Navigation />

      {/* Cover */}
      <Cover />

      {/* Chapter divider */}
      <ChapterDivider number="I" />
      <Chapter1 />

      <ChapterDivider number="II" />
      <Chapter2 />

      <ChapterDivider number="III" />
      <Chapter3 />

      <ChapterDivider number="IV" />
      <Chapter4 />

      <ChapterDivider number="V" />
      <Chapter5 />

      <ChapterDivider number="VI" />
      <Chapter6 />

      {/* Footer */}
      <footer
        style={{
          background: "#060d14",
          borderTop: "1px solid rgba(212,168,83,0.15)",
          padding: "3rem 2rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Dancing Script', cursive",
            color: "#d4a853",
            fontSize: "1.5rem",
            marginBottom: "0.5rem",
          }}
        >
          Nguyễn Thị Thúy 🎓
        </p>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "rgba(253,246,232,0.3)",
            fontSize: "0.8rem",
            letterSpacing: "0.1em",
          }}
        >
          Sư phạm Ngữ Văn · Đại học Sư phạm Đà Nẵng · 2026
        </p>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "rgba(212,168,83,0.3)",
            fontSize: "0.75rem",
            marginTop: "1rem",
          }}
        >
          Made with 💛 by Quốc Tuấn
        </p>
      </footer>
    </main>
  );
}

function ChapterDivider({ number }: { number: string }) {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, transparent, rgba(212,168,83,0.08), transparent)",
        padding: "2rem 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
      }}
    >
      <div style={{ flex: 1, maxWidth: "200px", height: "1px", background: "linear-gradient(to right, transparent, rgba(212,168,83,0.3))" }} />
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          border: "1px solid rgba(212,168,83,0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#d4a853",
          fontFamily: "'Playfair Display', serif",
          fontSize: "0.9rem",
          background: "rgba(13,27,42,0.8)",
        }}
      >
        {number}
      </div>
      <div style={{ flex: 1, maxWidth: "200px", height: "1px", background: "linear-gradient(to left, transparent, rgba(212,168,83,0.3))" }} />
    </div>
  );
}
