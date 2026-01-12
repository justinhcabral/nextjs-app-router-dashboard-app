import { Inter } from "next/font/google";
import { Anonymous_Pro } from "next/font/google";
import { Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const anonymousPro = Anonymous_Pro({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});
