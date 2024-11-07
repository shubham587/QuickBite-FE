import { useState } from "react";
import logo from "../images/logo.webp";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex bg-gray-800 p-[2px_20px] w-screen h-[13%] absolute top-0 ">
      <img src={logo} alt="" className="relative max-w-full h-auto left-[8%]" />
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
      <div style={{ width: "49%" }}></div>
      <ul className="flex justify-center items-center m-0 p-0 flex h-[100%] gap-[20%]">
        <li
          className="w-[8vw] text-white p-2 justify-center items-center"
          onClick={() => navigate("/quick-bite-application/home")}
        >
          Home
        </li>
        <li
          className="w-[8vw] text-white p-2 justify-center items-center"
        >
          Catalouge
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
          className="w-[8vw] text-white p-2 justify-center items-center"
          onClick={() => navigate("/quick-bite-application/cart")}
        >
          Cart
        </li>
        <li className="w-[8vw] text-white p-2 justify-center items-center">
          Account
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
