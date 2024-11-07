import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "../ui/dropdown-menu";

const LocationDrop = () => {
  const [location, setLocation] = useState("Bangalore");

  return (
    <>
      <div className="">
        <DropdownMenu >
          <DropdownMenuTrigger>location</DropdownMenuTrigger>
          <DropdownMenuContent className="bg-black text-white rounded-xl" >
            <DropdownMenuCheckboxItem
              checked={location == "Bangalore"}
              onCheckedChange={() => setLocation("Bangalore")}
            >
              Bangalore
            </DropdownMenuCheckboxItem>
            <DropdownMenuSeparator className="bg-white" />
            <DropdownMenuCheckboxItem
              checked={location == "Chennai"}
              onCheckedChange={() => setLocation("Chennai")}
            >
              Chennai
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default LocationDrop;
