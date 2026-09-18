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
  title: "FabSimple — Steel Fabrication Management Software",
  description:
    "FabSimple is the all-in-one management platform built for structural steel fabricators. Streamline estimating, job costing, production control, and shop floor operations.",
  keywords: [
    "steel fabrication software",
    "structural steel ERP",
    "fabrication management",
    "job costing",
    "production control",
    "shop floor management",
    "steel estimating software",
  ],
  authors: [{ name: "FabSimple" }],
  openGraph: {
    title: "FabSimple — Steel Fabrication Management Software",
    description:
      "The all-in-one platform for structural steel fabricators. From estimating to delivery.",
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
