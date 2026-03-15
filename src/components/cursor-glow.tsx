"use client";

import { useEffect, useState } from "react";

export function CursorGlow() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hide on touch devices
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="cursor-glow pointer-events-none fixed inset-0 z-[9999] hidden md:block"
      style={{
        background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(255, 107, 0, 0.12), transparent 60%)`,
      }}
    />
  );
}
