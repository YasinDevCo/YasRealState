"use client";

import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Toaster } from "react-hot-toast";

function Layout({ children }) {
  const style = { minHeight: "70vh" };
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  return (
    <>
      <Header />
      <div style={style}>{children}</div>
      <Footer />
      <Toaster/>
    </>
  );
}

export default Layout;
