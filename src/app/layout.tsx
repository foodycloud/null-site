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
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://null.wtf"),
  title: "NULL — NOTHING. UNTIL EVERYTHING.",
  description:
    "A memecoin built around a simple idea: nothing becomes something when enough people participate.",
  keywords: ["NULL", "memecoin", "crypto", "internet culture"],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    url: "https://null.wtf",
    title: "NULL — NOTHING. UNTIL EVERYTHING.",
    description:
      "A memecoin built around a simple idea: nothing becomes something when enough people participate.",
    siteName: "NULL",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "NULL — NOTHING. UNTIL EVERYTHING.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NULL — NOTHING. UNTIL EVERYTHING.",
    description:
      "A memecoin built around a simple idea: nothing becomes something when enough people participate.",
    images: ["/og-image.svg"],
    creator: "@null_culture",
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
      <body style={{ fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
