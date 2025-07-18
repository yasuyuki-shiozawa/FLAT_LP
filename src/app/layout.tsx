import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "労務費調査の負担から解放｜行政書士法人ふらっと法務事務所",
  description: "労務費調査でお困りの建設会社様へ。調査会社として2,500件の実績を持つ行政書士法人が完全代行。もう調査票で悩む必要はありません。",
  keywords: ["労務費調査", "代行", "行政書士", "建設業", "調査票作成"],
  openGraph: {
    title: "労務費調査の負担から解放｜行政書士法人ふらっと法務事務所",
    description: "労務費調査でお困りの建設会社様へ。調査会社として2,500件の実績を持つ行政書士法人が完全代行。",
    url: "https://labor-survey.flatto-legal.jp",
    siteName: "行政書士法人ふらっと法務事務所",
    locale: "ja_JP",
    type: "website",
    images: [{
      url: "https://labor-survey.flatto-legal.jp/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "労務費調査代行サービス",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "労務費調査の負担から解放｜行政書士法人ふらっと法務事務所",
    description: "労務費調査でお困りの建設会社様へ。調査会社として2,500件の実績を持つ行政書士法人が完全代行。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href={`${process.env.NODE_ENV === 'production' ? '/FLAT_LP' : ''}/styles.css`} />
      </head>
      <body className={`${notoSansJP.variable} antialiased font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
