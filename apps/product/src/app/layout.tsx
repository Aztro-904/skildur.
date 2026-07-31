import type { Metadata } from "next";
import "./globals.css";
import { AppShell } from "@/components/layout/AppShell";
import { CommandProvider } from "@/components/command/CommandProvider";


export const metadata: Metadata = {
  title: "Skildur",
  description: "The intelligent workspace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CommandProvider />
        <AppShell>
          {children}
        </AppShell>
      </body>
    </html>
  );
}