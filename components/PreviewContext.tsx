"use client";

import { createContext, useContext, useState } from "react";

interface PreviewContent {
  title: string;
  description: string;
}

const PreviewContext = createContext<{
  preview: PreviewContent | null;
  setPreview: (p: PreviewContent | null) => void;
}>({ preview: null, setPreview: () => {} });

export function PreviewProvider({ children }: { children: React.ReactNode }) {
  const [preview, setPreview] = useState<PreviewContent | null>(null);
  return (
    <PreviewContext.Provider value={{ preview, setPreview }}>
      {children}
    </PreviewContext.Provider>
  );
}

export function usePreview() {
  return useContext(PreviewContext);
}
