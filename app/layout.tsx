import type { Metadata, Viewport } from "next";
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
  authors: [{ name: "Think & Write Media & Publishing Pvt. Ltd." }],
  creator: "Think & Write Media & Publishing Pvt. Ltd.",
  publisher: "Think & Write Media & Publishing Pvt. Ltd.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#0F172A",
  colorScheme: "light",
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
