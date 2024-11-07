import Dropdown from "@/components/Dropdown";
import { Button } from "@/components/ui/button";
import api from "@/service/api";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const FOOD_TAGS = ["Breakfast", "Biryani", "Tea", "Momo", "KFC", "Pizza"];

const CatelougePage = () => {
  const [foodPref, setFoodPref] = useState(null);
  const [sortPref, setSortPref] = useState(null);
  const loader = useLoaderData()
  console.log("loader", loader)
  const FOOD_PREF = [
    {
      name: "Veg",
      onChange: (val) => setFoodPref(val),
    },
    {
      name: "Non-Veg",
      onChange: (val) => setFoodPref(val),
    },
    {
      name: "both",
      onChange: (val) => setFoodPref(val),
    },
  ];

  const SORT_DATA = [
    {
      name: "low to high",
      onChange: (val) => console.log(val),
    },
    {
      name: "high to low",
      onChange: (val) => console.log(val),
    },
    {
      name: "No Preference",
      onChange: (val) => console.log(val),
    },
  ];

  const sortHandler = (val) => {
    setSortPref(val);
    console.log(val);
  };

  const foodPrefHandler = (val) => {
    setFoodPref(val);
  };
  return (
    <div>
      <div className="  mt-28 flex w-dvw flex-row ">
        <div className="tags text-black flex flex-row gap-8">
          {FOOD_TAGS.map((ele, ind) => (
            <Button
              className="text-black bg-white rounded-2xl hover:bg-orange-500 hover:text-white"
              key={ind}
            >
              {ele}
            </Button>
          ))}
        </div>
        <div className="filter-bar m-auto flex flex-row gap-8">
          <div className="veg-non">
            {
              <div className="bg-white rounded-2xl">
                <Dropdown
                  className="text-black bg-white border-none"
                  triggerName="Veg/Non-veg"
                  items={FOOD_PREF}
                  onChangeFunction={foodPrefHandler}
                  checkItem={foodPref}
                />
              </div>
            }
          </div>
          <div className="sortby">
            {
              <div className="bg-white rounded-2xl">
                <Dropdown
                  className="text-black bg-white border-none"
                  triggerName="Sort Price"
                  items={SORT_DATA}
                  onChangeFunction={sortHandler}
                  checkItem={sortPref}
                />
              </div>
            }
          </div>
        </div>
      </div>
      <div className="catelogue-list">

      </div>
    </div>
  );
};

export default CatelougePage;

export const loader = async({request, params}) => {
  const fetchData = async() => {
    try{
      const res = await api.getAllProduct({"location": "Chennai", "seller_name": "A2B"})
      console.log(res)
      return res
    }catch(err){
      return err
    }
  }
  fetchData()
  return null
}
