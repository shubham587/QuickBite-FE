import { useState } from "react";
import logo from "../images/logo.webp";
import { Input } from "./ui/input";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState("Bangalore")

  const LocationDropdown = [
    {
      name: "Bangalore",
      onChange: (val) => setLocation(val) 
    }, 
    {
      name: "Chennai",
      onChange: (val) => setLocation(val)
    },
  ]

  const locationHandler = (val) => {
    setLocation(val)
  }

  return (
    <div className="flex justify-between m-auto z-20 mb-36 border left-0 fixed place-items-center align-middle text-xl bg-white text-black p-[2px_20px] w-full  h-[11%]  top-0 ">
      <div className="w-24 h-24 flex-none ml-64 ">
        <img src={logo} alt="" className=" max-w-full h-auto left-[8%]" />
      </div>
      {/* <div className="spacer"></div>
      <div className="searchBar">
      <input
        type="text"
        // value={query}
        // onChange={handleInputChange}
        placeholder="Search..."
        className="searchInput"
      />
    </div> */}
      <div className="input-container">
        <Input
          className="w-80  text-black rounded-full"
          placeholder="Search Biryani ?"
        />
      </div>
      <div className=" font-medium ">
        <ul className="flex justify-between  gap-8 h-[100%] ">
          <li
            className=""
            onClick={() => navigate("/quick-bite-application/home")}
          >
            <NavLink
              to="/"
              className="text-black hover:text-orange-500
             hover:decoration-2 hover:decoration-orange-500"
            >
              Home
            </NavLink>
          </li>
          <li className=" ">
            <NavLink
              to="/catelogue"
              className="text-black hover:text-orange-500
             hover:decoration-2 hover:decoration-orange-500"
            >
              Catalouge
            </NavLink>

            {/* <div className="absolute top-[93%] bg-gray-800 w-[10%]">
            {open && (
              <div className="h-[20%] block">
                <p className="relative dropdownItem p-[10%]">Snack</p>
                <p className="relative dropdownItem p-[10%]">Lunch</p>
                <p className="relative dropdownItem p-[10%]">BreakFast</p>
                <p className="relative dropdownItem p-[10%]">Juice</p>
                <p className="relative dropdownItem p-[10%]">Dinner</p>
                <p className="relative dropdownItem p-[10%]">Sandwich</p>
              </div>
            )}
          </div> */}
          </li>
          <li
            className=""
            onClick={() => navigate("/quick-bite-application/cart")}
          >
            <NavLink
              to="/cart"
              className="text-black hover:text-orange-500
             hover:decoration-2 hover:decoration-orange-500"
            >
              Cart
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/account"
              className="text-black hover:text-orange-500
             hover:decoration-2 hover:decoration-orange-500"
            >
              Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="text-black hover:text-orange-500
             hover:decoration-2 hover:decoration-orange-500"
            >
              <Dropdown checkItem={location} triggerName="location" items={LocationDropdown} onChangeFunction={locationHandler} />
            </NavLink>
          </li>
        </ul>
      </div>
      <hr className="h-8" />
    </div>
  );
};
export default Navbar;
