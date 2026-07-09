import type { Metadata, Viewport } from "next";
import { brand } from "@/lib/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thinkandwrite.in"),
  title: {
    default: "Think & Write Media & Publishing",
    template: "%s | Think & Write Media & Publishing",
  },
  description:
    "Premium book writing, ghostwriting, editing, publishing, author branding, PR, Instagram growth, and launch support.",
  applicationName: "Think & Write Media & Publishing",
  authors: [{ name: brand.name }],
  creator: brand.name,
  publisher: brand.name,
  icons: {
    icon: brand.logoPath,
    shortcut: brand.logoPath,
    apple: brand.logoPath,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
