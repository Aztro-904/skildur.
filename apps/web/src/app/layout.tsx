import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "./globals.css";
import DarkVeil from "@/components/ui/DarkVeil.jsx";

export const metadata: Metadata = {
  title: "Skildur — The Intelligent Workspace",
  description:
    "Connect projects, documents, dashboards, reports, and AI into one intelligent workspace.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.className} antialiased`}>
        {/* Background */}
        <div className="fixed inset-0 pointer-events-none">
          <DarkVeil
  speed={1.0}
  hueShift={0}
  noiseIntensity={0.004}
  scanlineIntensity={0}
  scanlineFrequency={0}
  warpAmount={0.128}
  resolutionScale={0.8}
/>

          <div
            className="
              absolute inset-0
              bg-[radial-gradient(circle_at_top,rgba(99,102,241,.12),transparent_45%),
              linear-gradient(to_bottom,#040404,#050505,#030303)]
            "
          />
        </div>

        {/* App */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
