import Navbar from "@/components";
import Footer from "@/components/Footer";
import React from "react";
import { Outlet } from "react-router-dom";
const DefaultLayout = () => {
  return (
    <div className="flex flex-col max-w-fit bg-slate-100">
      {/* <Navbar /> */}
      <div>
        <Navbar />
      </div>
      <div className="w-[90%] m-auto ">
        <Outlet />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
