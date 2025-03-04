import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

export const IbmSans = IBM_Plex_Sans({
  variable: "--font-ibm-sans",
  subsets: ["latin"],
  weight: ["100"]
});

export const IbmMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  subsets: ["latin"],
  weight: ["200"]
});
