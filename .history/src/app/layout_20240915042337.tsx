import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter, Press_Start_2P } from 'next/font/google'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className} ${pressStart2P.variable}`}>
      <body>{children}</body>
    </html>
  )
}
