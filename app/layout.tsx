import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["italic", "normal"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://codeframe.studio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CODEFRAME — Digital Systems That Turn Ideas Into Businesses",
    template: "%s — CODEFRAME",
  },
  description:
    "CODEFRAME is a digital systems company building websites, AI automation, lead-generation systems, and custom software for businesses ready to scale.",
  keywords: [
    "digital systems company",
    "web development studio",
    "AI automation agency",
    "lead generation systems",
    "custom software development",
  ],
  openGraph: {
    title: "CODEFRAME — Digital Systems That Turn Ideas Into Businesses",
    description:
      "Websites, AI automation, lead generation, and custom software — engineered as one connected system.",
    url: siteUrl,
    siteName: "CODEFRAME",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CODEFRAME — Digital Systems That Turn Ideas Into Businesses",
    description:
      "Websites, AI automation, lead generation, and custom software — engineered as one connected system.",
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body class="font-sans antialiased">{children}</body>
    </html>
  );
}
