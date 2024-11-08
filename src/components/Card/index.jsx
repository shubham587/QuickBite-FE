import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import userSlice, { addItem, removeItem } from "@/store/userSlice";

const Card = ({ food_img, food_name, food_price, food_desc, item }) => {
  const [counter, setCounter] = useState(0);
  const cart = useSelector((state) => state.user.cart) || [];
  const dispatch = useDispatch();

  console.log("cart", cart);
  // useEffect(() => {
  //   if (counter == 0) {
  //     dispatch(removeItem(item));
  //   }
  // }, [counter]);
  const removeFromCart = (item) => {
    dispatch(removeItem(item["_id"]["$oid"]));
  }

  const addToCart = (item) => {
    console.log(item);
    dispatch(addItem(item["_id"]["$oid"]));
  };

  return (
    // I need to create a cards for food item which include food image, food name, food description
    <div className="card text-black  m-auto max-h-[400px] max-w-[400px] bg-white rounded-xl text-center">
      <div className="card-img ">
        <img
          src={food_img}
          alt="food image"
          className="card-image rounded-xl p-2 h-[280px] w-[400px]"
        />
      </div>
      <div className="card-content p-4 relative">
        <div>
          <h2 className="card-title text-left">{food_name}</h2>
          <h2 className="text-left">{food_price}</h2>
        </div>
        <div className="flex flex-row gap-2">
          <div className="add-cart w-full  bg-orange-500 rounded-2xl  border">
            {cart.includes(item["_id"]["$oid"]) ? (
              <Button
                onClick={() => removeFromCart(item)}
                className="btn text-center btn-sm"
              >
                Remove Cart
              </Button>
            ) : (
              <Button
                onClick={() => addToCart(item)}
                className="btn text-center btn-sm"
              >
                Add to Cart
              </Button>
            )}
          </div>
          <div className="counter bg-slate-300 p-2 rounded-xl flex flex-row  w-28 justify-evenly border">
            <button
              className="btn btn-sm"
              onClick={() =>
                setCounter((prev) => {
                  return prev != 0 ? prev - 1 : prev;
                })
              }
            >
              -
            </button>
            <h2>{counter}</h2>
            <button
              className="btn btn-sm"
              onClick={() => setCounter((prev) => prev + 1)}
            >
              +
            </button>
          </div>
        </div>
        {/* <p className="card-text truncate">{food_desc}</p> */}
      </div>
    </div>
  );
};

export default Card;
