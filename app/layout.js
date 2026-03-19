import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import MainLayout from "./MainLayout";


config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Nexa Global | Intelligent Logistics & Supply Chain Solutions",
  description: "Empowering global trade with cutting-edge logistics, real-time tracking, and seamless supply chain management.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
