import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import PageLoader from "@/components/ui/PageLoader";

import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joshua Corda – Front-End Developer & UI/UX Designer",
  description:
    "Front-End Developer and UI/UX Designer crafting high-performance web interfaces and visually driven digital experiences — from WordPress to Angular.",
  keywords: ["front-end developer", "ui/ux designer", "wordpress", "angular", "typescript", "portfolio", "philippines"],
  authors: [{ name: "Joshua Corda" }],
  openGraph: {
    title: "Joshua Corda – Front-End Developer & UI/UX Designer",
    description: "Front-End Developer & UI/UX Designer based in the Philippines",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9NKEHNLNM4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9NKEHNLNM4');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-white min-h-screen`}
      >
        <PageLoader />
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
