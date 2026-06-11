"use client";
import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number; y: number; size: number; speedX: number; speedY: number;
      opacity: number; color: string; type: "star" | "petal";
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const colors = ["#d4a853", "#f0c878", "#e8a0a8", "#f7d0d8", "#ffffff"];

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: Math.random() * 0.5 + 0.1,
      opacity: Math.random() * 0.6 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
      type: (Math.random() > 0.7 ? "petal" : "star") as "star" | "petal",
    });

    for (let i = 0; i < 60; i++) {
      particles.push(createParticle());
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;

        if (p.type === "star") {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
          // glow
          ctx.shadowBlur = 6;
          ctx.shadowColor = p.color;
          ctx.fill();
        } else {
          // petal shape
          ctx.translate(p.x, p.y);
          ctx.rotate(Date.now() * 0.001 + i);
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 1.5, p.size * 0.6, 0, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();

        p.x += p.speedX;
        p.y += p.speedY;
        if (p.y > canvas.height + 10) {
          particles[i] = { ...createParticle(), y: -10 };
        }
        if (p.x < -10 || p.x > canvas.width + 10) {
          particles[i] = createParticle();
        }
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0, opacity: 0.5 }}
    />
  );
}
