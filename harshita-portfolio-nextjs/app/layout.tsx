import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import { portfolio } from "../content/portfolio";
import "./globals.css";

const dmSans = localFont({
  src: [
    { path: "../public/fonts/dm-sans-regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/dm-sans-medium.ttf", weight: "500", style: "normal" },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

const instrumentSerif = localFont({
  src: [
    { path: "../public/fonts/instrument-serif-regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/instrument-serif-italic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(portfolio.profile.siteUrl),
  title: `${portfolio.profile.name} | Software Engineer`,
  description:
    "Harshita Ramesh’s software engineering portfolio: full-stack applications, .NET, cloud systems, computer vision, and applied AI.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: portfolio.profile.siteUrl,
    title: `${portfolio.profile.name} | Software Engineer`,
    description: "I build software that makes things easier.",
    siteName: "Harshita Ramesh",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#f7f8f8" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${instrumentSerif.variable}`}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
