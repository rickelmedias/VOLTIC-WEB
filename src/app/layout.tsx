import type { Metadata } from "next";
import { poppinsFont } from "@/fonts/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Voltic",
  description: "Voltic - Web Dashboard is an online app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsFont.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
