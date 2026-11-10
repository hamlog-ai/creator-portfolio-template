import type { Metadata } from "next";
import { site } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: site.meta.title,
    template: `%s | ${site.meta.siteName}`,
  },
  description: site.meta.description,
  metadataBase: new URL(site.meta.url),
  openGraph: {
    type: "website",
    siteName: site.meta.siteName,
    title: site.meta.title,
    description: site.meta.description,
    images: [site.meta.ogImage],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={site.meta.locale} data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
      </head>
      <body>{children}</body>
    </html>
  );
}
