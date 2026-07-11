import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vantawear | B2B Custom Athletic Hoodies",
  description: "Premium custom athletic hoodies for brands, events, and corporate teams.",
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
