import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL('https://shaadibio.com'),
  title: {
    default: "ShaadiBio - Create Marriage Biodata Online",
    template: "%s | ShaadiBio"
  },
  description: "Create premium marriage biodata in 5 minutes. Download watermark-free PDF. Beautiful templates for Indian arranged marriages.",
  openGraph: {
    title: "ShaadiBio - Free Marriage Biodata Maker",
    description: "Create premium marriage biodata in minutes. Download high-quality PDF. No login required.",
    url: 'https://shaadibio.com',
    siteName: 'ShaadiBio',
    locale: 'en_IN',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
