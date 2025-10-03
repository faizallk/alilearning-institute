// Layout.jsx
import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import SocialBar from "./SocialBar";
import AdmissionPopup from "./AdmissionPopup";
const Layout = () => {
  return (
     <div className=" min-h-screen overflow-x-hidden relative">
      {/* Navbar */}
      <Nav />
      <AdmissionPopup />
      <SocialBar />
<main className="min-h-screen">
 <Outlet />
</main>
    
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
