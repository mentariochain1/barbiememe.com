import type { Metadata } from "next";
import "./globals.css";
import { Inter, Press_Start_2P } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })
const pressStart2P = Press_Start_2P({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start-2p',
})

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
    <html lang="en" className={`${inter.className} ${pressStart2P.variable}`}>
      <Head>
        <link
          rel="preload"
          href="/fonts/sega-barbie.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
