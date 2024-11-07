import Navbar from "@/components";
import Footer from "@/components/Footer";
import React from "react";
import { Outlet } from "react-router-dom";
const DefaultLayout = () => {
  return (
    <div className="flex flex-col  max-w-fit bg-slate-100">
      {/* <Navbar /> */}
      <div className="">
        <Navbar />
      </div>
      <div className="w-[90%] m-auto ">
        <Outlet />
      </div>
      <div className="w-100">
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default DefaultLayout;
