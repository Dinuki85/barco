import React from "react";
import Header from "@/components/Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-16">{children}</main>
    </>
  );
};

export default MainLayout;
