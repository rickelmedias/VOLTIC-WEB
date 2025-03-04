import { Poppins } from "next/font/google";

export const poppinsFont = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "400", "700"]
});