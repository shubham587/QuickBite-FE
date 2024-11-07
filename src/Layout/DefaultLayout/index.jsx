import Navbar from "@/components";
import React from "react";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div className="flex flex-col max-w-fit bg-slate-100">
      {/* <Navbar /> */}
      <div >
        <Navbar />
      </div>
      <div className="w-[90%] m-auto " >
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default DefaultLayout;
