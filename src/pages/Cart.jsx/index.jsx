import Card from "@/components/Card";
import api from "@/service/api";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLoaderData, json } from "react-router-dom";
const CartPage = () => {
  const loader = useLoaderData();
  const [cartItem, setCartItem] = useState([]);
  const cart = useSelector((state) => state.user.cart);
  console.log("loader cart cartItem", cartItem);
  useEffect(() => {
    let temp = [];
    temp = loader?.data.map((ele, ind) => {
      if (cart.includes(ele["_id"]["$oid"])) {
        return { ...ele, quantity: 1 };
      }
    });
    setCartItem(temp);
  }, [cart]);

  return (
    <>
      <div className="catelogue-list mt-28 ">
        {
          <div className="grid  grid-cols-4 gap-8">
            {cartItem.map((item, ind) => (
              item !== undefined &&
              <Card
                key={ind}
                food_img={item?.image}
                food_name={item?.food_name}
                food_price={item?.price}
                food_desc={item?.description}
                item={item}
              />
            ))}
          </div>
        }
      </div>
    </>
  );
};

// {
//   <Card
//     key={ind}
//     food_img={item?.image}
//     food_name={item?.food_name}
//     food_price={item?.price}
//     food_desc={item?.description}
//     item={item}
//   />;
// }

export default CartPage;

export const loader = async ({ request }) => {
  const fetchData = async () => {
    try {
      const res = await api.getAllProduct({
        location: "global",
      });
      console.log("res", res);
      return json(res);
    } catch (err) {
      return err;
    }
  };
  return fetchData();
};
