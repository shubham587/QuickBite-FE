import Dropdown from "@/components/Dropdown";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const FOOD_TAGS = ["Breakfast", "Biryani", "Tea", "Momo", "KFC", "Pizza"];

const CatelougePage = () => {
  const [foodPref, setFoodPref] = useState("any");
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
      name: "Both",
      onChange: (val) => setFoodPref(val),
    },
  ];

  const foodPrefHandler = (val) => {
    setFoodPref(val);
  };
  return (
    <div className=" border mt-28 flex flex-row justify-between">
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
      <div className="filter-bar h-[1028px] m-auto">
        <div className="veg-non">
          {
            <Button className="bg-white rounded-2xl">
              <Dropdown
                className="text-black bg-white"
                triggerName="Veg/Non-veg"
                items={FOOD_PREF}
                onChangeFunction={foodPrefHandler}
                checkItem={foodPref}
              />
            </Button>
          }
        </div>
      </div>
    </div>
  );
};

export default CatelougePage;
