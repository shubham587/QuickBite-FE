import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../images/logo.webp";
import { Input } from "../ui/input";
import Dropdown from "../Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/authSlice";
import { toast } from "react-toastify";
import api from "@/service/api";
import { locationChange } from "@/store/userSlice";

const AccountDropdownNotSign = [
  {
    name: "Login",
    onChange: (val) => console.log(val),
  },
  {
    name: "Sign up",
    onChange: (val) => console.log(val),
  },
];

const AccountDropdownSign = [
  {
    name: "Profile",
    onChange: (val) => console.log(val),
  },
  {
    name: "Logout",
    onChange: (val) => console.log(val),
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState("Bangalore");
  const [account, setAccount] = useState("AccountDropdownNotSign");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuthenticated);
  let first = 0;
  useEffect(() => {
    if (auth) {
      setAccount("AccountDropdownSign");
    } else {
      setAccount((prev) =>
        prev == "AccountDropdownNotSign"
          ? "AccountDropdownSign"
          : "AccountDropdownNotSign"
      );
    }
  }, [auth]);

  // useEffect should not run function for the first time
  // useEffect(() => {
  //   if (auth) {
  //     api
  //       .get("/user/location")
  //       .then((res) => {
  //         setLocation(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }, [auth]);

  useEffect(() => {
      dispatch(locationChange({ location }));
    
  }, [location]);

  const LocationDropdown = [
    {
      name: "Bangalore",
      onChange: (val) => setLocation(val),
    },
    {
      name: "Chennai",
      onChange: (val) => setLocation(val),
    },
  ];

  const logoutHandler = async () => {
    const res = await api.logoutUser();
    if (res.status == 200) {
      let resp = dispatch(logout());
      toast.success("Successfully ");
      navigate("/");
    } else {
      toast.error("Failed to logout");
    }
  };

  const accountHandler = (val) => {
    if (val == "Login") {
      navigate("/auth/login");
    } else if (val == "Sign up") {
      navigate("/auth/signup");
    } else if (val == "Profile") {
      navigate("/profile");
    } else {
      logoutHandler();
    }
  };

  const locationHandler = (val) => {
    setLocation((prev) => val);
  };

  return (
    <div className="flex justify-between m-auto z-20 mb-36 border left-0 fixed place-items-center align-middle text-lg bg-white text-black p-[2px_20px] w-full  h-[11%]  top-0 ">
      <div className="w-24 h-24 flex-none ml-64 ">
        <img src={logo} alt="" className=" max-w-full h-auto left-[8%]" />
      </div>

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
            // onClick={() => navigate("/quick-bite-application/home")}
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
            // onClick={() => navigate("/quick-bite-application/cart")}
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
              className="text-black hover:text-orange-500
             hover:decoration-2 hover:decoration-orange-500"
            >
              <Dropdown
                checkItem={account}
                triggerName="Account"
                items={
                  account == "AccountDropdownNotSign"
                    ? AccountDropdownNotSign
                    : AccountDropdownSign
                }
                onChangeFunction={accountHandler}
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="text-black hover:text-orange-500
             hover:decoration-2 hover:decoration-orange-500"
            >
              <Dropdown
                checkItem={location}
                // triggerName="location"
                items={LocationDropdown}
                onChangeFunction={locationHandler}
              />
            </NavLink>
          </li>
        </ul>
      </div>
      <hr className="h-8" />
    </div>
  );
};
export default Navbar;
