import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://vantawear-custom-hoodie.chinayinshan.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Custom T-Shirts Manufacturer | Yinshan Sportswear",
  description: "Custom T-shirt design and manufacturing for sports teams, events, brands, uniforms, and promotions. Fabric, artwork, print, embroidery, sampling, production, and global delivery from Yinshan Sportswear.",
  keywords: ["custom t-shirts", "custom sports t-shirts", "custom team t-shirts", "custom event shirts", "custom t-shirt manufacturer", "sportswear manufacturer China", "sublimation t-shirts", "private label t-shirts"],
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Custom T-Shirts for Teams, Events & Brands | Yinshan Sportswear",
    description: "One custom sportswear partner for design, fabric, printing, embroidery, manufacturing, and delivery.",
    url: siteUrl,
    siteName: "Yinshan Sportswear",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Yinshan Sportswear custom T-shirts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom T-Shirts for Teams, Events & Brands | Yinshan Sportswear",
    description: "Design, fabric, print, embroidery, manufacture, and delivery for custom T-shirts.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
