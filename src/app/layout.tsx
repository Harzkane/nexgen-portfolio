import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nexgentech.dev"),
  title: "NEXGEN | Empowering Africa Through Tech",
  description: "Smart Fintech & SaaS Solutions by NEXGEN TECH INNOVATIONS LIMITED.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NEXGEN | Empowering Africa Through Tech",
    description: "Smart Fintech & SaaS Solutions by NEXGEN TECH INNOVATIONS LIMITED.",
    url: "https://www.nexgentech.dev",
    siteName: "NEXGEN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NEXGEN Tech Innovations",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXGEN | Empowering Africa Through Tech",
    description: "Smart Fintech & SaaS Solutions by NEXGEN TECH INNOVATIONS LIMITED.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
