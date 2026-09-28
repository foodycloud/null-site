import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://null.wtf"),
  title: "NULL — Nothing. Until Everything.",
  description:
    "NULL is an internet-native memecoin built around one simple idea: nothing becomes something when enough people participate.",
  keywords: ["NULL", "memecoin", "crypto", "internet", "community"],
  authors: [{ name: "NULL" }],
  creator: "NULL",
  openGraph: {
    type: "website",
    url: "https://null.wtf",
    title: "NULL — Nothing. Until Everything.",
    description:
      "NULL is an internet-native memecoin built around one simple idea: nothing becomes something when enough people participate.",
    siteName: "NULL",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NULL — Nothing. Until Everything.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NULL — Nothing. Until Everything.",
    description:
      "NULL is an internet-native memecoin built around one simple idea: nothing becomes something when enough people participate.",
    images: ["/og-image.png"],
    creator: "@nullcoin",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexMono.variable}`}>
      <body style={{ fontFamily: "var(--font-inter), 'Helvetica Neue', Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
