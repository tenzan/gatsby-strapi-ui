import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      This text comes from Layout component
      {children}
      <Footer />
    </>
  );
}
