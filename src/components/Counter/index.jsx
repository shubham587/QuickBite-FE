import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0)

  const increaseCounter = () =>{
    setCount(count + 1)
  }

  const decreaseCounter = () =>{
    if (count > 0) {
      setCount(count - 1)
    }
  }
  return (
    <div className="flex items-center absolute top-[88%] left-[62%] top-[3%]">
      <button
        id="minus"
        className="px-2 py-1 text-2xl font-bold   rounded-md hover:bg-gray-300"
        onClick={decreaseCounter}
      >
        -
      </button>
      <span id="counterValue" className="text-2xl font-bold ml-2 mr-2">
        {count}
      </span>
      <button
        id="plus"
        className="px-2 py-1 text-2xl font-bold   rounded-md hover:bg-gray-300"
        onClick={increaseCounter}
      >
        +
      </button>
    </div>
  );
};
export default Counter;
