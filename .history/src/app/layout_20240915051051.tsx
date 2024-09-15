import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en" className={inter.className}>
      <Head>
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
