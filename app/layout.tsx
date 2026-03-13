import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { PreviewProvider } from "@/components/PreviewContext";
import { LeftPanel } from "@/components/LeftPanel";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Enpu You",
  description: "Software engineer, Seattle.",
  icons: {
    icon: "/icon?v=1",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Inline script: apply saved theme before first paint to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t);}catch(e){}})()`,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <PreviewProvider>
            <LeftPanel />
            {children}
            <Analytics />
          </PreviewProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
