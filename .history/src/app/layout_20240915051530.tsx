import type { Metadata } from "next";
import "./globals.css";
import { Press_Start_2P } from 'next/font/google'

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
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
    <html lang="en" className={`${pressStart2P.variable} font-pixel`}>
      <body>{children}</body>
    </html>
  );
}
