"use client";
import { useState, useRef } from "react";

interface PasswordGateProps {
  password: string;
  title: string;
  subtitle: string;
  icon: string;
  hint?: string;
  children: React.ReactNode;
}

export default function PasswordGate({ password, title, subtitle, icon, hint, children }: PasswordGateProps) {
  const [unlocked, setUnlocked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);
  const [unlocking, setUnlocking] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue === password) {
      setError(false);
      setUnlocking(true);
      setTimeout(() => {
        setUnlocked(true);
      }, 800);
    } else {
      setError(true);
      setShaking(true);
      setTimeout(() => setShaking(false), 600);
      setInputValue("");
      inputRef.current?.focus();
    }
  };

  if (unlocked) {
    return <>{children}</>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        padding: "2rem",
        animation: unlocking ? "fadeOut 0.8s ease forwards" : undefined,
      }}
    >
      {/* Lock icon with glow */}
      <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background: "rgba(212,168,83,0.08)",
          border: "2px solid rgba(212,168,83,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2.5rem",
          marginBottom: "2rem",
          boxShadow: "0 0 40px rgba(212,168,83,0.15), inset 0 0 20px rgba(212,168,83,0.05)",
          animation: "pulse-glow 3s ease-in-out infinite",
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <p
        style={{
          fontFamily: "'Dancing Script', cursive",
          color: "#d4a853",
          opacity: 0.8,
          fontSize: "1.1rem",
          marginBottom: "0.5rem",
        }}
      >
        {subtitle}
      </p>
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
          fontWeight: 700,
          background: "linear-gradient(90deg, #a07830, #f0c878, #d4a853)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        {title}
      </h2>

      {/* Divider */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", maxWidth: "200px", width: "100%", margin: "0 auto 2rem" }}>
        <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #d4a853)" }} />
        <span style={{ color: "#d4a853", fontSize: "0.8rem" }}>🔒</span>
        <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, #d4a853)" }} />
      </div>

      {/* Description */}
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          color: "rgba(253,246,232,0.5)",
          fontSize: "0.9rem",
          textAlign: "center",
          marginBottom: "2rem",
          maxWidth: "400px",
          lineHeight: 1.7,
        }}
      >
        Nội dung này được bảo vệ bằng mật khẩu.
        <br />
        Hãy nhập mật khẩu để mở khóa.
      </p>

      {/* Password form */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          width: "100%",
          maxWidth: "320px",
          animation: shaking ? "shake 0.5s ease" : undefined,
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
          }}
        >
          <input
            ref={inputRef}
            type="password"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setError(false);
            }}
            placeholder="Nhập mật khẩu..."
            autoComplete="off"
            style={{
              width: "100%",
              padding: "1rem 1.5rem",
              borderRadius: "1rem",
              border: error
                ? "1px solid rgba(232,100,100,0.6)"
                : "1px solid rgba(212,168,83,0.3)",
              background: error
                ? "rgba(232,100,100,0.05)"
                : "rgba(255,255,255,0.04)",
              color: "var(--cream)",
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.1rem",
              textAlign: "center",
              letterSpacing: "0.3em",
              outline: "none",
              transition: "all 0.3s ease",
              boxShadow: error
                ? "0 0 20px rgba(232,100,100,0.1)"
                : "0 0 20px rgba(212,168,83,0.05)",
            }}
            onFocus={(e) => {
              if (!error) {
                e.currentTarget.style.borderColor = "rgba(212,168,83,0.6)";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(212,168,83,0.15)";
              }
            }}
            onBlur={(e) => {
              if (!error) {
                e.currentTarget.style.borderColor = "rgba(212,168,83,0.3)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(212,168,83,0.05)";
              }
            }}
          />
        </div>

        {/* Error message */}
        {error && (
          <p
            style={{
              color: "rgba(232,100,100,0.8)",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              animation: "fadeIn 0.3s ease",
            }}
          >
            Mật khẩu không đúng. Thử lại nhé! 💛
          </p>
        )}

        <button
          type="submit"
          style={{
            padding: "0.85rem 2.5rem",
            borderRadius: "2rem",
            border: "1px solid rgba(212,168,83,0.5)",
            background: "linear-gradient(135deg, rgba(212,168,83,0.2), rgba(160,120,48,0.2))",
            color: "#f0c878",
            fontFamily: "'Playfair Display', serif",
            fontSize: "1rem",
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.3s ease",
            letterSpacing: "0.05em",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "linear-gradient(135deg, rgba(212,168,83,0.35), rgba(160,120,48,0.35))";
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(212,168,83,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "linear-gradient(135deg, rgba(212,168,83,0.2), rgba(160,120,48,0.2))";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Mở khóa ✦
        </button>
      </form>

      {/* Hint */}
      {hint && (
        <p
          style={{
            marginTop: "2rem",
            fontFamily: "'Inter', sans-serif",
            color: "rgba(253,246,232,0.25)",
            fontSize: "0.75rem",
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          💡 Gợi ý: {hint}
        </p>
      )}
    </div>
  );
}
