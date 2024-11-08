import Card from "@/components/Card";
import Dropdown from "@/components/Dropdown";
import { Button } from "@/components/ui/button";
import api from "@/service/api";
import { store } from "@/store";
import React, { useEffect, useState } from "react";
import { json, Link, useLoaderData } from "react-router-dom";

const FOOD_TAGS = [
  { name: "Breakfast", path: "A2B" },
  { name: "Biryani", path: "Meghana Foods" },
  { name: "Tea", path: "Chai Point" },
  { name: "Momo", path: "Wow Momo" },
  { name: "KFC", path: "KFC" },
  { name: "Pizza", path: "Pizza Hut" },
];

const CatelougePage = () => {
  let loader = useLoaderData();
  const [catData, setCatData] = useState(loader?.data || []);
  const [orgData, setOrgData] = useState(loader?.data || []);
  const [foodPref, setFoodPref] = useState("Veg/Non-veg");
  const [sortPref, setSortPref] = useState("Sort Price");
  const [tag, setTag] = useState("");
  console.log("loader", catData);
  const FOOD_PREF = [
    {
      name: "veg",
      onChange: (val) => setFoodPref(val),
    },
    {
      name: "non-veg",
      onChange: (val) => setFoodPref(val),
    },
    {
      name: "Veg/Non-veg",
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

  useEffect(() => {
    const filterByVegNon = () => {
      if(foodPref == "Veg/Non-veg"){
        setCatData(orgData);
      }else{
        const filteredData = catData.filter((item) => item.type === foodPref);
        setCatData(filteredData);
      }
    };
    filterByVegNon();
  }, [foodPref]);

  useEffect(() => {
    const sortByPrice = () => {
      if (sortPref == "No Preference") {
        setCatData(orgData);
      } else if(sortPref == "high to low") {
        const sortedData = catData.sort((a, b) => a.price - b.price);
        setCatData(sortedData);
      }else {
        const sortedData = catData.sort((a, b) => b.price - a.price);
        setCatData(sortedData);
      }
    };
    sortByPrice();
  }, [sortPref]);

  const tagHandler = (val) => {
    setTag(val);
  };

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
            <Link key={ind} to={`/catelogue/${ele.path}`}>
              <Button
                className={`text-black  bg-white rounded-2xl hover:bg-orange-500 ${
                  tag == ele.name && "bg-orange-500 text-white"
                } hover:text-white`}
                key={ind}
                onClick={() => tagHandler(ele.name)}
              >
                {ele.name}
              </Button>
            </Link>
          ))}
        </div>
        <div className="filter-bar m-auto flex flex-row gap-8">
          <div className="veg-non text-center">
            {
              <div className="bg-white rounded-2xl p-2 w-40">
                <Dropdown
                  className="text-black bg-white border-none"
                  // triggerName="Veg/Non-veg"
                  items={FOOD_PREF}
                  onChangeFunction={foodPrefHandler}
                  checkItem={foodPref}
                />
              </div>
            }
          </div>
          <div className="sortby  text-center">
            {
              <div className="bg-white rounded-2xl p-2 w-40">
                <Dropdown
                  className="text-black bg-white border-none"
                  // triggerName="Sort Price"
                  items={SORT_DATA}
                  onChangeFunction={sortHandler}
                  checkItem={sortPref}
                />
              </div>
            }
          </div>
        </div>
      </div>
      {loader == [] ? (
        <h1>This item is not available in your location</h1>
      ) : (
        <div className="catelogue-list">
          {loader?.seller_list?.map((head, index) => (
            <div key={index} className=" mt-16">
              <h1 className="text-5xl font-semibold  text-black underline underline-offset-8 w-30 ml-5">
                {head}
              </h1>
              <div className="grid  grid-cols-4 gap-4">
                {catData == [] ? (
                  <h1>This item is not available in your location</h1>
                ) : (
                  catData
                    ?.filter((ele) => ele.seller_name == head)
                    .map((item, ind) => {
                      return (
                        <Card
                          key={ind}
                          food_img={item.image}
                          food_name={item.food_name}
                          food_price={item.price}
                          food_desc={item.description}
                          item={item}
                        />
                      );
                    })
                )}
              </div>
            </div>
          ))}
          {}
        </div>
      )}
    </div>
  );
};

export default CatelougePage;

export const loader = async ({ request, params }) => {
  const { seller_name } = params;
  console.log("seller_name", seller_name);
  const location = store.getState().user.location;

  const fetchData = async () => {
    let param = {};
    try {
      if (seller_name) {
        param = {
          location: location !== "location" ? location : "Bangalore",
          seller_name: seller_name,
        };
      } else {
        param = {
          location: location !== "location" ? location : "Bangalore",
        };
      }
      let res = await api.getAllProduct(param);
      console.log(res);
      return json(res);
    } catch (err) {
      return err;
    }
  };
  return fetchData();
  // return null
};
