import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "../ui/dropdown-menu";
import classNames from "classnames";

const Dropdown = ({ className, checkItem, items, onChangeFunction, triggerName }) => {
  const [location, setLocation] = useState("Bangalore");
  let dropdownClass = classNames("", className)
  return (
    <>
      <div className={dropdownClass}>
        <DropdownMenu>
          <DropdownMenuTrigger className="bg-white">{triggerName}</DropdownMenuTrigger>
          <DropdownMenuContent className="bg-black text-white rounded-xl">
            {items.map((ele, ind) => (
              <DropdownMenuCheckboxItem
                key={ind}
                checked={checkItem == ele.name}
                onCheckedChange={() => onChangeFunction(ele.name)}
              >
                {ele.name}
              </DropdownMenuCheckboxItem>
            ))}
            {/* <DropdownMenuSeparator className="bg-white" /> */}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default Dropdown;
