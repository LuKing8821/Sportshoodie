import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vantawear | B2B Custom Athletic Hoodies",
  description: "Premium custom athletic hoodies for brands, events, and corporate teams.",
  keywords: [
    "custom hoodies",
    "custom team hoodies",
    "bulk corporate hoodies",
    "private label sportswear",
    "custom athletic apparel",
    "event merchandise hoodies",
  ],
  alternates: {
    canonical: "https://vantawear-custom-hoodie.chinayinshan.chatgpt.site",
    languages: {
      en: "https://vantawear-custom-hoodie.chinayinshan.chatgpt.site",
      es: "https://vantawear-custom-hoodie.chinayinshan.chatgpt.site/?lang=es",
      fr: "https://vantawear-custom-hoodie.chinayinshan.chatgpt.site/?lang=fr",
      de: "https://vantawear-custom-hoodie.chinayinshan.chatgpt.site/?lang=de",
      ja: "https://vantawear-custom-hoodie.chinayinshan.chatgpt.site/?lang=ja",
      ko: "https://vantawear-custom-hoodie.chinayinshan.chatgpt.site/?lang=ko",
      ar: "https://vantawear-custom-hoodie.chinayinshan.chatgpt.site/?lang=ar",
      zh: "https://vantawear-custom-hoodie.chinayinshan.chatgpt.site/?lang=zh",
    },
  },
  openGraph: {
    title: "Vantawear | B2B Custom Athletic Hoodies",
    description: "Brand-ready teamwear for teams that move.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vantawear | B2B Custom Athletic Hoodies",
    description: "Brand-ready teamwear for teams that move.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
