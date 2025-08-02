"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";

export default function MainLayout({ children }) {
  const pathname = usePathname();

  return (
    <>
      <Header />
      {children}
      {pathname !== "/contact" && <Footer />}
    </>
  );
}
