import { Button } from "@/components/ui/button";
import React from "react";
// import landImage from "../../../assets/bg-images/pexels-janetrangdoan-1092730.jpg"
import landImg from "../../images/landImg.jpg";
import CategoryComp from "@/components/CatagoryLanding";
import { Link } from "react-router-dom";
const HomeComp = () => {
  return (
    <div className="w-full h-[11%] mt-4">
      <div className="relative m-auto max-h-dvh max-w-dvw">
        <div className="relative max-w-full max-h-dvh  border">
          <img src={landImg} alt="Example Image" className="w-dvw h-dvh" />
          <div className="absolute z-10 inset-0 bg-black opacity-40"></div>
          <div
            className="absolute top-1/2 left-1/3  z-10 -translate-x-
          1/2 -translate-y-1/2 text-white text-3xl font-bold flex flex-col align-middle items-center gap-4
          text-center p-4"
          >
            <h1 className="text-5xl">QuickBite;</h1>
            <p className="text-3xl font-bold text-white">
              Savour every moments,
              <span className="text-orange-500 ml-2">one bite at a time</span>
            </p>
            <Link to="/catelogue">
              <Button
                className="mt-2 w-64 b p-6 bg-orange-500 rounded-full text-white text-3xl hover:text-orange-500 hover:bg-white"
                onClick={() => console.log("first")}
              >
                Order food
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="category">
        <CategoryComp />
      </div>
    </div>
  );
};

export default HomeComp;
