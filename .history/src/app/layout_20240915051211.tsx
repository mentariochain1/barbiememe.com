import type { Metadata } from "next";
import "./globals.css";
import Head from 'next/head'

export const metadata: Metadata = {
  title: "$Barbie",
  description: "just run and run...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="/" crossOrigin="anonymous" />
        <link
          rel="preload"
          href="/fonts/pixel-font.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
