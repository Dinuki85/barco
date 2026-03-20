import { Outfit, Quicksand } from "next/font/google";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import MainLayout from "./MainLayout";


config.autoAddCss = false;

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});


const quicksand = Quicksand({
    variable: "--font-quicksand",
    subsets: ["latin"],
    weight: ["500", "700"],
});




export const metadata = {
  title: "Nexa Global | Intelligent Logistics & Supply Chain Solutions",
  description: "Empowering global trade with cutting-edge logistics, real-time tracking, and seamless supply chain management.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${quicksand.variable} font-sans`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
