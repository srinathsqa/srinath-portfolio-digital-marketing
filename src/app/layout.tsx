import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://srinath.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Srinath S — Digital Marketing Specialist",
  description:
    "Srinath S is a Digital Marketing Specialist helping businesses grow through SEO, Google Ads, Meta Ads, Social Media Marketing and data-driven strategy.",
  keywords: [
    "Srinath S",
    "Digital Marketing Specialist",
    "SEO",
    "Google Ads",
    "Meta Ads",
    "Social Media Marketing",
    "Google Analytics 4",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Srinath S — Digital Marketing Specialist",
    description:
      "Helping businesses grow through SEO, Paid Ads & Social Media Marketing.",
    url: siteUrl,
    siteName: "Srinath S",
    images: ["/images/profile/og-cover.jpg"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Srinath S — Digital Marketing Specialist",
    description:
      "Helping businesses grow through SEO, Paid Ads & Social Media Marketing.",
    images: ["/images/profile/og-cover.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-ink text-paper">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
