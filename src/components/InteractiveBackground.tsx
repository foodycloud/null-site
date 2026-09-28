"use client";

import { useEffect, useRef } from "react";

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 220,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.targetX = e.touches[0].clientX;
        mouse.targetY = e.touches[0].clientY;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchstart", handleTouchMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    // Interactive Particles
    const particleCount = Math.min(width < 768 ? 35 : 70, 80);
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseAlpha: number;
      alpha: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.8 + 0.8,
        baseAlpha: Math.random() * 0.3 + 0.1,
        alpha: 0.2,
      });
    }

    const render = () => {
      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // 1. Mouse Radial Spotlight Glow
      const spotlight = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        mouse.radius
      );
      spotlight.addColorStop(0, "rgba(212, 255, 0, 0.07)");
      spotlight.addColorStop(0.5, "rgba(212, 255, 0, 0.02)");
      spotlight.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = spotlight;
      ctx.fillRect(0, 0, width, height);

      // 2. Subtle ambient top-center glow
      const topAmbient = ctx.createRadialGradient(
        width / 2,
        0,
        0,
        width / 2,
        0,
        width * 0.6
      );
      topAmbient.addColorStop(0, "rgba(212, 255, 0, 0.04)");
      topAmbient.addColorStop(0.8, "rgba(13, 14, 20, 0.01)");
      topAmbient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = topAmbient;
      ctx.fillRect(0, 0, width, height);

      // 3. Render and connect interactive particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Proximity to mouse
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          p.alpha = p.baseAlpha + (1 - dist / mouse.radius) * 0.6;
          // Subtle magnetic pull
          p.x += (dx / dist) * 0.3;
          p.y += (dy / dist) * 0.3;
        } else {
          p.alpha += (p.baseAlpha - p.alpha) * 0.05;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 255, 0, ${p.alpha})`;
        ctx.fill();

        // Connect nearby particles with fine constellation lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distBetween = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (distBetween < 110) {
            const lineAlpha = (1 - distBetween / 110) * 0.12 * (p.alpha + p2.alpha);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(212, 255, 0, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouchMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.9 }}
      aria-hidden="true"
    />
  );
}
