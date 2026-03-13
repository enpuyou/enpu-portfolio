"use client";

import { useEffect, useState } from "react";

export function FocusBlock({
  children,
  initiallyVisible = false,
  revealAfter = 100,
}: {
  children: React.ReactNode;
  initiallyVisible?: boolean;
  revealAfter?: number; // px of scroll before this block appears
}) {
  const [revealed, setRevealed] = useState(initiallyVisible);

  useEffect(() => {
    if (initiallyVisible) return;

    const check = () => {
      setRevealed(window.scrollY >= revealAfter);
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, [initiallyVisible, revealAfter]);

  return (
    <div style={{ opacity: revealed ? 1 : 0, transition: "opacity 80ms linear" }}>
      {children}
    </div>
  );
}
