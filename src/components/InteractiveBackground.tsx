"use client";

import { useEffect, useRef } from "react";

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isRunning = true;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 200,
      radiusSq: 40000,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.targetX = e.touches[0].clientX;
        mouse.targetY = e.touches[0].clientY;
      }
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isRunning = false;
        cancelAnimationFrame(animationFrameId);
      } else {
        isRunning = true;
        animationFrameId = requestAnimationFrame(render);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchstart", handleTouchMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Optimized Particle Mesh
    const isMobile = width < 768;
    const particleCount = isMobile ? 24 : 48;
    const connectionDistSq = isMobile ? 8100 : 12100; // 90px / 110px squared

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
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 1.5 + 0.8,
        baseAlpha: Math.random() * 0.25 + 0.1,
        alpha: 0.15,
      });
    }

    const render = () => {
      if (!isRunning) return;

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
      spotlight.addColorStop(0, "rgba(212, 255, 0, 0.06)");
      spotlight.addColorStop(0.6, "rgba(212, 255, 0, 0.015)");
      spotlight.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = spotlight;
      ctx.fillRect(0, 0, width, height);

      // 2. High-performance Particle Loop
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;

        // Fast squared distance proximity
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < mouse.radiusSq) {
          const ratio = 1 - Math.sqrt(distSq) / mouse.radius;
          p.alpha = p.baseAlpha + ratio * 0.5;
          p.x += dx * 0.002;
          p.y += dy * 0.002;
        } else {
          p.alpha += (p.baseAlpha - p.alpha) * 0.05;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, 6.2831853);
        ctx.fillStyle = `rgba(212, 255, 0, ${p.alpha})`;
        ctx.fill();

        // Constellation lines
        for (let j = i + 1; j < particleCount; j++) {
          const p2 = particles[j];
          const ldx = p.x - p2.x;
          const ldy = p.y - p2.y;
          const lDistSq = ldx * ldx + ldy * ldy;

          if (lDistSq < connectionDistSq) {
            const lineAlpha = (1 - lDistSq / connectionDistSq) * 0.1 * (p.alpha + p2.alpha);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(212, 255, 0, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      isRunning = false;
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouchMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.85, willChange: "transform" }}
      aria-hidden="true"
    />
  );
}
