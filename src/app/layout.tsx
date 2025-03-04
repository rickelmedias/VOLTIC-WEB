import type { Metadata } from "next";
import "./globals.css";
import { IbmMono,IbmSans } from "@/fonts/font";

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
      <body
        className={` ${IbmSans.variable} ${IbmMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
