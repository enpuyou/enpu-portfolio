"use client";

import Link from "next/link";
import { usePreview } from "./PreviewContext";

interface LinkPreviewProps {
  href: string;
  children: React.ReactNode;
  preview: {
    title: string;
    description: string;
    image?: string;
  };
  external?: boolean;
}

export function LinkPreview({ href, children, preview, external }: LinkPreviewProps) {
  const { setPreview } = usePreview();

  const trigger = (
    <span
      style={{ display: "inline", fontSize: "var(--type-sm)" }}
      onMouseEnter={() => setPreview({ ...preview, url: href })}
      onMouseLeave={() => setPreview(null)}
    >
      {children}
    </span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {trigger}
      </a>
    );
  }

  return <Link href={href}>{trigger}</Link>;
}
