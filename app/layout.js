"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import Footer from "./components/Footer";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

config.autoAddCss = false
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children } ) {

  const pathname = usePathname();
  return (
    
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
       <Header />
        {children}
        {pathname !== "/contact" && <Footer />}
      </body>
    </html>
   
  );
}
