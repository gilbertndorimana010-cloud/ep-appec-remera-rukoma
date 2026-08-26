import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EP APPEC Remera Rukoma",
  description: "EP APPEC Remera Rukoma E-Learning Platform",
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