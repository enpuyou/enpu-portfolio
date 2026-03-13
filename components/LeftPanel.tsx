"use client";

import { usePreview } from "./PreviewContext";

export function LeftPanel() {
  const { preview } = usePreview();

  return (
    <div
      style={{
        position: "fixed",
        left: "5rem",
        top: "50%",
        transform: "translateY(-50%)",
        width: 240,
        pointerEvents: "none",
        zIndex: 10,
      }}
    >
      {preview ? (
        <div
          style={{
            background: "var(--color-bg-subtle)",
            border: "1px solid var(--color-border)",
            padding: "0.75rem 0.85rem",
            fontSize: "var(--type-sm)",
            color: "var(--color-text-secondary)",
            lineHeight: 1.45,
          }}
        >
          <span
            style={{
              display: "block",
              color: "var(--color-text)",
              fontWeight: 500,
              marginBottom: "0.35rem",
            }}
          >
            {preview.title}
          </span>
          {preview.description}
        </div>
      ) : null}
    </div>
  );
}
