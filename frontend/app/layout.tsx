import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IC Fleek SSR Demo",
  description:
    "Fully on-chain edge SSR demo with Fleek for frontend and Internet Computer for backend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
