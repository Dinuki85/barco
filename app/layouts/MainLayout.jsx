import React from "react";
import Header from "@/components/Header";

export const metadata = {
  title: "Barco Global Logistics(PVT) LTD",
  description: "",
};

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-16">{children}</main>
    </>
  );
};

export default MainLayout;
