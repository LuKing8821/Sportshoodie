import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vantawear | B2B 定制运动 Hoodie",
  description: "面向品牌、赛事与企业团队的定制运动 Hoodie 方案。",
  openGraph: {
    title: "Vantawear | B2B 定制运动 Hoodie",
    description: "为团队打造的品牌装备。",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vantawear | B2B 定制运动 Hoodie",
    description: "为团队打造的品牌装备。",
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
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
