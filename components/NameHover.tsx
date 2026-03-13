"use client";

import { useState } from "react";

export function NameHover() {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: "default",
        transition: "opacity 120ms ease",
        fontFamily: hovered ? '"Helvetica Neue", sans-serif' : "inherit",
      }}
    >
      {hovered ? "恩溥" : "Enpu"}
    </span>
  );
}
