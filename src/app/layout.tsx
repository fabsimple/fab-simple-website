import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FabSimple — Structural Steel Fabrication Management Software",
  description:
    "FabSimple is the operations platform built for structural and miscellaneous steel fabricators. Tekla & SDS/2 BOM intake, AISC 303 heat traceability, offline mobile traveler PWA, 1D cut nesting, and AIA G702 billing.",
  keywords: [
    "structural steel fabrication software",
    "steel fabrication ERP",
    "Tekla Structures BOM import",
    "SDS/2 drawing management",
    "AISC 303 quality checklist",
    "AWS D1.1 weld log",
    "MTR heat number traceability",
    "AIA G702 G703 progress billing",
    "1D linear cut nesting",
    "steel shop floor traveler",
  ],
  authors: [{ name: "FabSimple Technologies" }],
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "FabSimple — Structural Steel Fabrication Management Software",
    description:
      "From Tekla model BOM intake to field erection and AIA G702 draws. The unified operations platform for steel fabricators.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
